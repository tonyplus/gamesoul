/**   
 * Project Name:gsa
 * File Name:AuthenFilter.java
 * Package Name:com.zwsafety.webapps.gsa.filter
 * Date:2015年7月6日上午14:45:04 
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */
package com.fastwork.platform.web.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.MDC;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fastwork.module.system.entity.SysUser;
import com.fastwork.module.system.service.SysUserService;
import com.fastwork.platform.entity.Mirsation;
import com.fastwork.platform.entity.Platform;
import com.fastwork.platform.framework.SpringContextUtil;
import com.fastwork.platform.utils.IPUtil;
import com.fastwork.platform.utils.JSONUtil;
import com.fastwork.platform.utils.MirsUtil;
import com.fastwork.platform.utils.ResourceUtil;
import com.fastwork.platform.utils.UUIDGenerator;

/**
 * @ClassName:AuthenFilter
 * @Description:TODO(验证session用户是否登陆)
 * @date:2015年7月6日 下午2:45:54
 * @author peijun
 * @version 1.0
 * @since JDK 1.6
 */
public class AuthenFilter extends OncePerRequestFilter {
	/**
	 * @Title doFilterInternal
	 * @Description TODO(重写过滤器)
	 * @date 2015年7月6日 下午2:46:18
	 * @author peijun
	 * @param request
	 *            请求对象
	 * @param response
	 *            响应对象
	 * @param filterChain
	 *            filterChain对象
	 * @throws ServletException
	 *             Servlet异常
	 * @throws IOException
	 *             IO异常
	 * @see org.springframework.web.filter.OncePerRequestFilter#doFilterInternal
	 *      (javax.servlet.http.HttpServletRequest,
	 *      javax.servlet.http.HttpServletResponse, javax.servlet.FilterChain)
	 */
	@Override
	protected void doFilterInternal(HttpServletRequest request,
			HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		setLogMDC(request);
		// 不过滤的uri
		String[] notFilter = { "/images/", "/js/", "/css/", "/fonts/",
				"/login", "/mobile/","login/succeed", "login/failure", "registsystem", "registsave"};

		// 请求的uri
		String uri = request.getRequestURI();
		// 是否过滤
		boolean doFilter = true;
		for (String s : notFilter) {
			if (uri.indexOf(s) != -1) {
				// 如果uri中包含不过滤的uri，则不进行过滤
				doFilter = false;
				break;
			}
		}

		if (doFilter) {
			MirsUserSetSession(request);
			// 执行过滤
			// 从session中获取登录者实体
			Object obj = request.getSession().getAttribute(
					Platform.SESSION_USER_KEY);
			if (null == obj) {
				boolean isAjaxRequest = isAjaxRequest(request);
				if (isAjaxRequest) {
					response.setCharacterEncoding("UTF-8");
					response.sendError(HttpStatus.UNAUTHORIZED.value(),
							"您已经太长时间没有操作,请刷新页面");
					return;
				}
				response.sendRedirect(request.getContextPath() + "/login");
				return;
			} else {
				// 如果session中存在登录者实体，则继续
				filterChain.doFilter(request, response);
			}
		} else {
			// 如果不执行过滤，则继续
			filterChain.doFilter(request, response);
		}
	}

	/**
	 * @Title:MirsUserSetSession
	 * @Description TODO(根据tickt将用户信息放入session中).
	 * @date 2017年2月21日上午9:36:53
	 * @author lzqiangPC
	 * @param request
	 * @throws IOException
	 * @throws JsonProcessingException
	 */
	private void MirsUserSetSession(HttpServletRequest request)
			throws IOException, JsonProcessingException {
		Object obj = request.getSession().getAttribute(
				Platform.SESSION_USER_KEY);
		if (null == obj && request.getParameter("ticket") != null) {
			// 取mirs服务地址
			final String mirsurl = ResourceUtil.readValue(MirsUtil.MIRS_URL);
			String jsonStr = MirsUtil.formatJsonStr(MirsUtil.getUserInfo(
					mirsurl, request.getParameter("ticket")));
			Mirsation mirsationBean = JSONUtil.json2obj(jsonStr,
					Mirsation.class);
			HttpSession session = request.getSession();
			if (mirsationBean.Result) {
				ObjectMapper mapper = new ObjectMapper();
				JsonNode node = mapper.readTree(jsonStr);
				String KeyValue = node.get("KeyValue").toString();
				JsonNode userjson = mapper.readTree(KeyValue);
				String username = userjson.get("username").toString()
						.replace("\"", "");
				try {
					SysUserService sysUserService = (SysUserService) SpringContextUtil
							.getBean("sysUserService");
					SysUser sysuser = sysUserService.loadByUsername(username);
					if (null != sysuser) {
						session.setAttribute(Platform.SESSION_USER_KEY,
								sysuser);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			} else {
				session.removeAttribute(Platform.SESSION_USER_KEY);
			}
		}
	}

	/**
	 * @Title:isAjaxRequest
	 * @Description TODO(判断是否为Ajax请求).
	 * @date 2015年7月6日 下午2:47:36
	 * @author peijun
	 * @param request
	 *            请求对象
	 * @return boolean 是true, 否false
	 */
	public static boolean isAjaxRequest(HttpServletRequest request) {
		String header = request.getHeader("X-Requested-With");
		if (header != null && "XMLHttpRequest".equals(header)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 
	 * @Title:setLogMDC
	 * @Description TODO(设置log4j存储数据库日志所需参数).
	 * @date 2016年4月26日
	 * @author yxx
	 * @param request
	 */
	private void setLogMDC(HttpServletRequest request) {
		if (MDC.get("operatorid") == null || "".equals(MDC.get("operatorid"))) {
			HttpSession session = request.getSession();
			SysUser sysUser = (SysUser) session
					.getAttribute(Platform.SESSION_USER_KEY);
			if (sysUser != null) {
				MDC.put("operatorid", sysUser.getUserid());
				MDC.put("operatorname", sysUser.getUsername());
			} else {
				MDC.put("operatorid", "");
				MDC.put("operatorname", "");
			}
			MDC.put("ipaddress", IPUtil.getIpAddress(request));
		}
		MDC.put("logid", UUIDGenerator.generate());
	}

}
/**   
 * Project Name:platform_framework
 * File Name:BaseController.java
 * Package Name:com.zwsafety.platform.base
 * Date:2015年7月6日上午14:01:04 
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */
package com.fastwork.platform.base;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONObject;
import com.fastwork.platform.utils.HtmlUtil;
import com.github.miemiedev.mybatis.paginator.domain.Order;
import com.github.miemiedev.mybatis.paginator.domain.Order.Direction;
import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
import com.github.miemiedev.mybatis.paginator.domain.PageList;

/**
 * @ClassName:BaseController
 * @Description:TODO(Controller基类)
 * @date:2015年7月6日 下午2:01:50
 * @author peijun
 * @version 1.0
 * @since JDK 1.6
 */
public class BaseController {

    /**
     * @Fields SUCCESS:TODO(成功).
     */
    public static final String SUCCESS = "success";

    /**
     * @Fields SUCCESS:TODO(返回码).
     */
    public static final String CODE = "code";
    
    /**
     * @Fields SUCCESS:TODO(消息).
     */
    public static final String MSG = "msg";

    /**
     * @Fields SUCCESS:TODO(消息).
     */
    public static final String DATA = "data";
    
    /**
     * @Title:forword
     * @Description TODO(转发:服务器直接访问目标地址的URL[浏览器地址栏中还是原来的地址]).
     * @date 2015年7月6日 下午2:02:23
     * @author peijun
     * @param viewName
     *            页面名称
     * @return ModelAndView
     */
    public ModelAndView forword(String viewName) {
        return new ModelAndView(viewName);
    }

    /**
     * @Title:redirect
     * @Description TODO(重定向:浏览器会用刚才请求的所有参数重新请求，所有session，requst参数都可以获取).
     * @date 2015年7月6日 下午2:03:40
     * @author peijun
     * @param viewName
     *            页面名称
     * @return ModelAndView
     */
    public ModelAndView redirect(String viewName) {
        return new ModelAndView("redirect:" + viewName);
    }

    /**
     * @Title:sendSuccessMessage
     * @Description TODO(提示成功信息).
     * @date 2015年7月6日 下午2:04:45
     * @author peijun
     * @param response
     *            响应对象
     * @param message
     *            消息字符串
     */
    public void sendSuccessMessage(HttpServletResponse response,
            String message, Object data) {
        sendSuccessMessage(response, message, data, true);
    }

    /**
     * @Title:sendSuccessMessage
     * @Description TODO(提示成功信息).
     * @date 2015年7月6日 下午2:04:45
     * @author peijun
     * @param response
     *            响应对象
     * @param message
     *            消息字符串
     */
    public void sendSuccessMessage(HttpServletResponse response,
            String message, Object data, boolean isJson) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put(SUCCESS, true);
        result.put(MSG, message);
        if (data != null) {
            result.put(DATA, data);
        }
        if (isJson) {
            HtmlUtil.writerJson(response, result);
        } else {
            HtmlUtil.writerText(response, result);
        }
    }

    /**
     * @Title:sendSuccessMessage
     * @Description TODO(提示成功信息).
     * @date 2015年7月6日 下午2:04:45
     * @author peijun
     * @param response
     *            响应对象
     * @param message
     *            消息字符串
     */
    public void sendSuccessMessage(HttpServletResponse response, String message) {
        sendSuccessMessage(response, message, null, true);
    }

    /**
     * @Title:sendSuccessMessage
     * @Description TODO(提示成功信息).
     * @date 2015年7月6日 下午2:04:45
     * @author peijun
     * @param response
     *            响应对象
     * @param message
     *            消息字符串
     */
    public void sendSuccessMessage(HttpServletResponse response,
            String message, boolean isJson) {
        sendSuccessMessage(response, message, null, isJson);
    }

    /**
     * @Title:sendFailureMessage
     * @Description TODO(提示失败信息).
     * @date 2015年7月6日 下午2:05:39
     * @author peijun
     * @param response
     *            响应对象
     * @param message
     *            消息字符串
     */
    public void sendFailureMessage(HttpServletResponse response,
            String message, boolean isJson) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put(SUCCESS, false);
        result.put(MSG, message);
        if (isJson) {
            HtmlUtil.writerJson(response, result);
        } else {
            HtmlUtil.writerText(response, result);
        }
    }

    /**
     * @Title:sendFailureMessage
     * @Description TODO(提示失败信息).
     * @date 2015年7月6日 下午2:05:39
     * @author peijun
     * @param response
     *            响应对象
     * @param message
     *            消息字符串
     */
    public void sendFailureMessage(HttpServletResponse response, String message) {
        sendFailureMessage(response, message, true);
    }

    /**
     * @Title:getPageBounds
     * @Description TODO(获取分页参数).
     * @date 2015年7月6日 下午2:07:06
     * @author peijun
     * @param request
     *            请求对象
     * @return PageBounds 分页对象
     * @throws Exception
     *             异常
     */
    public PageBounds getPageBounds(HttpServletRequest request)
            throws Exception {
        String currentstr = request.getParameter("page"); // 当前页
        String rowCountstr = request.getParameter("rows"); // 行数
        String[] sidxArr = request.getParameterValues("sidx");// 排序字段
        String[] sordArr = request.getParameterValues("sord");// 排序顺序

        // 封装排序对象
        Order order = null;
        if (sidxArr != null && sidxArr.length > 0 && sordArr != null
                && sordArr.length > 0) {
            String sidx = sidxArr[0];
            String sord = sordArr[0];
            order = new Order(sidx, Direction.fromString(sord), null);
        }

        // 封装分页对象
        if (StringUtils.isNotBlank(currentstr)
                && StringUtils.isNotBlank(rowCountstr)) {
            Integer current = new Integer(currentstr);
            Integer rowCount = new Integer(rowCountstr);
            if (order != null) {
                return new PageBounds(current.intValue(), rowCount.intValue(),
                        order);
            } else {
                return new PageBounds(current.intValue(), rowCount.intValue());
            }

        } else {
            return new PageBounds(0, 0);
        }
    }

    /**
     * @Title:createGrid
     * @Description TODO(返回grid数据格式).
     * @date 2015年7月6日 下午2:08:03
     * @author peijun
     * @param datas
     *            数据集
     * @param pageBounds
     *            分页参数
     * @return Map<String, Object>
     */
    public <T> Map<String, Object> createGrid(List<T> datas,
            PageBounds pageBounds) {
        Map<String, Object> results = new HashMap<String, Object>();
        @SuppressWarnings("rawtypes")
        PageList pageList = (PageList) datas;
        int records = pageList.getPaginator().getTotalCount();// 数据总条数

        int currentpage = getCurrentPage(pageBounds.getPage());// 当前页

        int everypage = getEveryPage(pageBounds.getLimit());// 每页显示记录

        int totalpage = getTotalPage(everypage, records);// 获得总页数

        results.put("page", currentpage); // 当前页
        results.put("records", records); // 数据总条数
        results.put("total", totalpage); // 数据总页数
        results.put("datas", datas); // 数据集合
        return results;
    }

    /**
     * @Title:getTotalPage
     * @Description TODO(获得总页).
     * @date 2015年9月16日
     * @author peijun
     * @param everyPage
     *            每页显示记录
     * @param totalCount
     *            总记录数
     * @return 总页
     */
    public static int getTotalPage(int everyPage, int totalCount) {
        int totalPage = 0;
        if (totalCount != 0 && totalCount % everyPage == 0) {
            totalPage = totalCount / everyPage;
        } else {
            totalPage = totalCount / everyPage + 1;
        }
        return totalPage;
    }

    /**
     * @Title:getCurrentPage
     * @Description TODO(获得当前页).
     * @date 2015年9月16日
     * @author peijun
     * @param currentPage
     *            当前页
     * @return 当前页
     */
    public static int getCurrentPage(int currentPage) {
        return currentPage == 0 ? 1 : currentPage;
    }

    /**
     * @Title:getEveryPage
     * @Description TODO(获取每页记录).
     * @date 2015年9月16日
     * @author peijun
     * @param everyPage
     *            每页显示记录
     * @return 每页记录
     */
    public static int getEveryPage(int everyPage) {
        return everyPage == 0 ? 10 : everyPage;
    }
    
    
    /**
     * 手机返回方法
     * @param data
     * @param code
     * @param msg
     * @return
     */
    public Map<String, Object> sendMobile(Object data,String code,String msg) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("code", code);
        result.put(MSG, msg);
        if(data!=null){
        	result.put(DATA, JSONObject.toJSON(data));
        }
        return result;
    }
}

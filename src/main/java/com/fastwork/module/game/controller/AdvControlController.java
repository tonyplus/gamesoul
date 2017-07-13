/**  
 * Project Name:xx项目工程(英文名称)
 * File Name:gameInfoController.java  
 * Package Name:com.zwsafety.module.system.controller  
 * Date:2017年7月3日
 * Copyright (c) 2016 ,zwsafety All Rights Reserved.   
 */
package com.fastwork.module.game.controller;

import java.io.File;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.fastwork.module.game.entity.AdvControl;
import com.fastwork.module.game.service.AdvControlService;
import com.fastwork.platform.base.BaseController;
import com.fastwork.platform.entity.ResultCode;
import com.fastwork.platform.framework.Token;
import com.fastwork.platform.utils.FileUtil;
import com.fastwork.platform.utils.ResourceUtil;
 
 /**
 * AdvControlController
 * @Description:TODO(app版本维护)
 * @date:2017年7月3日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
@Controller
@RequestMapping("/game/advcontrol") 
public class AdvControlController extends BaseController {
	
	/**  
    * @Fields LOG:TODO(日志).  
    */
	private static final  Logger LOG = Logger.getLogger(AdvControlController.class);	
	
	 /**  
    * @Fields gameInfoService(用一句话描述这个变量表示什么).  
    */
	@Autowired
	private AdvControlService advControlService; 
	
	/**  
    * @Title:edit
    * @Description TODO(进入编辑界面). 
    * @date 2017年7月3日
    * @author xufeng
    * @param id
    * @param model model对象
    * @return ModelAndView
    */
	@RequestMapping
	@Token(save=true)
	public	ModelAndView edit(Model model) {
		try {
			List<AdvControl> list = advControlService.loadBaseList(null);
			AdvControl advControl=null;
			if(list!=null&&list.size()>0){
				advControl=list.get(0);
				model.addAttribute("advControl", advControl);
			}
		} catch (Exception e) {
		 	LOG.error(e.getMessage(),e);
		}
		return forword("module/game/advcontrol/advcontrolAdd");
	}
	
	/**  
    * @Title:save
    * @Description TODO(新增或编辑). 
    * @date 2017年7月3日
    * @author xufeng
    * @param gameInfo
    * @param response 响应对象
    */
	@RequestMapping(value="/save",method=RequestMethod.POST)
	@Token(remove = true)
	public void save(@ModelAttribute AdvControl advControl,
			@RequestParam(value = "filemyfile", required = false) MultipartFile file,
			HttpServletRequest request,HttpServletResponse response) {
			if (StringUtils.isEmpty(advControl.getAdvid())) {
			    //新增
				try {
					advControlService.save(advControl,file,request);
					sendSuccessMessage(response, "保存成功",false);
				} catch (Exception e) {
					sendFailureMessage(response, "保存失败!",false);
					LOG.error(e.getMessage(),e);
				}
			} else {
				//更新
				try {
					advControlService.update(advControl,file,request);
					sendSuccessMessage(response, "编辑成功",false);
				} catch (Exception e) {
					sendFailureMessage(response, "编辑失败!",false);
					LOG.error(e.getMessage(),e);
				}
			}
	}
	
	
	/**
	 * 下载文件
	 * @param request
	 * @param response
	 * @param pageid
	 */
	@RequestMapping(value = "/download/{id}", method = RequestMethod.GET)
	public void downloadImg(HttpServletRequest request,
			HttpServletResponse response, @PathVariable String id) {
		if (!StringUtils.isEmpty(id)) {
			try {
				AdvControl advControl = advControlService.loadBaseById(id);
				if (advControl != null) {
					String rootPath = ResourceUtil.getUploadRootPath(request);
					String url = rootPath+File.separatorChar+advControl.getAdvfile();
					FileUtil.download(url.substring(url.lastIndexOf("\\")+1),url, response);
				}
			} catch (Exception e) {
				LOG.error(e.getMessage(),e);
			} 
		}
	}
	
	/**
	 * 验证文件是否存在
	 * @param request
	 * @param response
	 * @param pageid
	 */
	@RequestMapping(value = "/download/{id}", method = RequestMethod.POST)
	public void downloadImgValidate(HttpServletRequest request,
			HttpServletResponse response, @PathVariable String id) {
		if (!StringUtils.isEmpty(id)) {
			try {
				AdvControl advControl = advControlService.loadBaseById(id);
				if (advControl != null) {
					String rootPath = ResourceUtil.getUploadRootPath(request);
					File file = new File(rootPath+File.separatorChar+advControl.getAdvfile());
					if(file.exists()){
						sendSuccessMessage(response, "文件存在",false);
					}else{
						sendFailureMessage(response, "文件丢失",false);
					}
				}
			} catch (Exception e) {
				LOG.error(e.getMessage(),e);
				sendFailureMessage(response, "文件丢失",false);
			} 
		}
	}
	
	 /** ----------------------------------------移动端接口-------------------------------*/	
	
	 /**  
	    * @Description 获得广告信息
	    * @date 2017年7月3日
	    * @author xufeng
	    * @param request 请求对象
	    * @return Map<String, Object> 返回数据结果集
	    */
		@RequestMapping(value = "/mobile/advinfo", method = RequestMethod.POST)
		@ResponseBody
		public Map<String, Object> loadAdvInfo(HttpServletRequest request) {
			try {
				List<AdvControl> list = advControlService.loadBaseList(null);
				AdvControl advControl=null;
				if(list!=null&&list.size()>0){
					advControl=list.get(0);
					return sendMobile(advControl, ResultCode.SUCCESS,"数据获取成功");
				}else{
					return sendMobile(null, ResultCode.NO_ADV_CONTROL,"广告控制信息不存在");
				}
				//返回数据结果集
			} catch (Exception e) {
				LOG.error(e.getMessage(),e);
				return sendMobile(null, ResultCode.ERROR,"系统繁忙，请稍候再试");
			}
		}
		
		/**
		 * mobile下载文件
		 * @param request
		 * @param response
		 * @param pageid
		 */
		@RequestMapping(value = "/mobile/download/{id}", method = RequestMethod.GET)
		public void mobiledownloadImg(HttpServletRequest request,
				HttpServletResponse response, @PathVariable String id) {
			if (!StringUtils.isEmpty(id)) {
				try {
					AdvControl advControl = advControlService.loadBaseById(id);
					if (advControl != null) {
						String rootPath = ResourceUtil.getUploadRootPath(request);
						String url = rootPath+File.separatorChar+advControl.getAdvfile();
						FileUtil.download(url.substring(url.lastIndexOf("\\")+1),url, response);
					}
				} catch (Exception e) {
					LOG.error(e.getMessage(),e);
				} 
			}
		}
}

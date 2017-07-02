/**  
 * Project Name:xx项目工程(英文名称)
 * File Name:SysAppVersionController.java  
 * Package Name:com.zwsafety.module.system.controller  
 * Date:2016年12月13日
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

import tk.mybatis.mapper.entity.Condition;
import tk.mybatis.mapper.entity.Example.Criteria;

import com.fastwork.module.game.entity.GameInfo;
import com.fastwork.module.game.service.GameInfoService;
import com.fastwork.platform.base.BaseController;
import com.fastwork.platform.framework.Token;
import com.fastwork.platform.utils.FileUtil;
import com.fastwork.platform.utils.ResourceUtil;
import com.fastwork.platform.utils.UUIDGenerator;
import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
 
 /**
 * @ClassName:SysAppVersionController
 * @Description:TODO(app版本维护)
 * @date:2016年12月13日
 * @author lzqiang
 * @version 1.0
 * @since JDK 1.7
 */
@Controller
@RequestMapping("/game/gameinfo") 
public class GameInfoController extends BaseController {
	
	/**  
    * @Fields LOG:TODO(日志).  
    */
	private static final  Logger LOG = Logger.getLogger(GameInfoController.class);	
	
	 /**  
    * @Fields gameInfoService(用一句话描述这个变量表示什么).  
    */
	@Autowired
	private GameInfoService gameInfoService; 
	
	  /**
     * @Title:intoMainPage
     * @Description TODO(进入首页).
     * @date 2016年12月13日
     * @author lzqiang
     * @return ModelAndView
     */
	@RequestMapping
	public ModelAndView  intoMainPage()  {
		return forword("module/game/gameinfo/gameinfoList");
	}
	
	
    /**  
    * @Title:loadByPage
    * @Description TODO(根据条件查询权限数据结果集). 
    * @date 2016年12月13日
    * @author lzqiang
    * @param request 请求对象
    * @return Map<String, Object> 返回数据结果集
    */
	@RequestMapping(value = "/list", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> loadByPage(@RequestParam String appversion,
										  @RequestParam String apptype,
										  HttpServletRequest request) {
		try {
			//封装查询参数
			PageBounds pageBounds = getPageBounds(request);
            Condition c=new Condition(GameInfo.class);
            Criteria criteria = c.createCriteria();
            if(StringUtils.isNotBlank(apptype)){
            	criteria.andEqualTo("apptype",apptype);
            }
            if(StringUtils.isNotBlank(appversion)){
            	criteria.andLike("appversion",appversion);
            }
            List<GameInfo> rows = gameInfoService.loadBasePage(c,pageBounds);
			//返回数据结果集
			Map<String,Object> results  = createGrid(rows, pageBounds);
			return results;
		} catch (Exception e) {
			LOG.error(e.getMessage(),e);
		}
		return null;
	}
	
	/**  
    * @Title:add
    * @Description TODO(进入新增页面). 
    * @date 2016年12月13日
    * @author lzqiang
    * @return ModelAndView
    */
	@RequestMapping("/add")
	@Token(save=true)
	public	ModelAndView add() {
		return forword("module/game/gameinfo/gameinfoAdd");
	}
	
	/**  
    * @Title:edit
    * @Description TODO(进入编辑界面). 
    * @date 2016年12月13日
    * @author lzqiang
    * @param id
    * @param model model对象
    * @return ModelAndView
    */
	@RequestMapping("/edit/{id}")
	@Token(save=true)
	public	ModelAndView edit(@PathVariable String id,Model model) {
		try {
			GameInfo sysAppVersion=gameInfoService.loadBaseById(id);
			model.addAttribute("sysAppVersion", sysAppVersion);
		} catch (Exception e) {
		 	LOG.error(e.getMessage(),e);
		}
		return forword("module/game/gameinfo/gameinfoAdd");
	}
	
	/**  
    * @Title:save
    * @Description TODO(新增或编辑). 
    * @date 2016年12月13日
    * @author lzqiang
    * @param sysAppVersion
    * @param response 响应对象
    */
	@RequestMapping(value="/save",method=RequestMethod.POST)
	@Token(remove = true)
	public void save(@ModelAttribute GameInfo sysAppVersion,
			@RequestParam(value = "filemyfile", required = false) MultipartFile file,
			HttpServletRequest request,
			HttpServletResponse response) {
			if (StringUtils.isEmpty(sysAppVersion.getAppid())) {
			    //新增
				try {
					sysAppVersion.setAppid(UUIDGenerator.generate());
					gameInfoService.save(sysAppVersion,file,request);
					sendSuccessMessage(response, "保存成功",false);
				} catch (Exception e) {
					sendFailureMessage(response, "保存失败!",false);
					LOG.error(e.getMessage(),e);
				}
			} else {
				//更新
				try {
					gameInfoService.update(sysAppVersion,file,request);
					sendSuccessMessage(response, "编辑成功",false);
				} catch (Exception e) {
					sendFailureMessage(response, "编辑失败!",false);
					LOG.error(e.getMessage(),e);
				}
			}
	}
	
	/**  
    * @Title:delete
    * @Description TODO(批量删除). 
    * @date 2016年12月13日
    * @author lzqiang 
    * @param ids
    * @param response 响应对象
    */
	@RequestMapping(value="/delete",method=RequestMethod.POST)
	public void delete(String[] ids,HttpServletResponse response) {
		try {
			if(ids.length>0){
				for (String id:ids) {
					gameInfoService.deleteBase(id);
				}
				sendSuccessMessage(response, "删除成功");
			}
		} catch (Exception e) {
			sendFailureMessage(response, "删除失败!");
			LOG.error(e.getMessage(),e);
		}
	}
	
	 /**  
    * @Title:display
    * @Description TODO(查看详细界面). 
    * @date 2016年12月13日
    * @author lzqiang
    * @param id
    * @param model model对象
    * @return ModelAndView
    */
	@RequestMapping(value="/display/{id}")
	public	ModelAndView display(@PathVariable String id,Model model) {
		try {
			GameInfo sysAppVersion=gameInfoService.loadBaseById(id);
			model.addAttribute("sysAppVersion", sysAppVersion);
		} catch (Exception e) {
		 	LOG.error(e.getMessage(),e);
		}
		return forword("module/game/gameinfo/gameinfoDisplay");
	}
	
	/**
	 * 下载app文件
	 * @param request
	 * @param response
	 * @param pageid
	 */
	@RequestMapping(value = "/download/{id}", method = RequestMethod.GET)
	public void download(HttpServletRequest request,
			HttpServletResponse response, @PathVariable String id) {
		if (!StringUtils.isEmpty(id)) {
			try {
				GameInfo sysAppVersion = gameInfoService.loadBaseById(id);
				if (sysAppVersion != null) {
					String rootPath = ResourceUtil.getUploadRootPath(request);
					String url = rootPath+sysAppVersion.getAppurl();
					FileUtil.download(sysAppVersion.getAppname()+url.substring(url.lastIndexOf(".")),url, response);
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
	public void downloadValidate(HttpServletRequest request,
			HttpServletResponse response, @PathVariable String id) {
		if (!StringUtils.isEmpty(id)) {
			try {
				GameInfo sysAppVersion = gameInfoService.loadBaseById(id);
				if (sysAppVersion != null) {
					String rootPath = ResourceUtil.getUploadRootPath(request);
					File file = new File(rootPath+sysAppVersion.getAppurl());
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
}

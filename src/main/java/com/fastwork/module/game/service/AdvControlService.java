/**  
 * Project Name:xx项目工程(英文名称)
 * File Name:SysAppVersionService.java  
 * Package Name:com.zwsafety.module.system.service
 * Date:2016年12月13日
 * Copyright (c) 2016 ,zwsafety All Rights Reserved.   
 */
package com.fastwork.module.game.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

import com.fastwork.module.game.entity.AdvControl;
import com.fastwork.platform.base.BaseService;

 /**
 * AdvControlService
 * @Description:TODO(用一句话描述该文件做什么)
 * @date:2017年7月3日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
public interface AdvControlService extends BaseService<AdvControl> {

	public void save(AdvControl advControl,MultipartFile file,HttpServletRequest request) throws Exception;

	public void update(AdvControl advControl,MultipartFile file,HttpServletRequest request) throws Exception;

}

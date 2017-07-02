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

import com.fastwork.module.game.entity.GameInfo;
import com.fastwork.platform.base.BaseService;

 /**
 * @ClassName:SysAppVersionService
 * @Description:TODO(用一句话描述该文件做什么)
 * @date:2016年12月13日
 * @author lzqiang
 * @version 1.0
 * @since JDK 1.7
 */
public interface GameInfoService extends BaseService<GameInfo> {

	public void save(GameInfo sysAppVersion, MultipartFile appfile,HttpServletRequest request) throws Exception;

	public void update(GameInfo sysAppVersion, MultipartFile appfile,HttpServletRequest request) throws Exception;

}

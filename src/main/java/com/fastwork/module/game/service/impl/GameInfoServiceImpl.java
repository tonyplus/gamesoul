/**  
 * Project Name:xx项目工程(英文名称)
 * File Name:SysAppVersionServiceImpl.java  
 * Package Name:com.zwsafety.module.system.service.impl
 * Date:2016年12月13日
 * Copyright (c) 2016 ,zwsafety All Rights Reserved.   
 */
package com.fastwork.module.game.service.impl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fastwork.module.game.dao.GameInfoMapper;
import com.fastwork.module.game.entity.GameInfo;
import com.fastwork.module.game.service.GameInfoService;
import com.fastwork.platform.base.BaseMapper;
import com.fastwork.platform.base.BaseServiceImpl;
import com.fastwork.platform.utils.FileUtil;

 /**
 * @ClassName:SysAppVersionServiceImpl
 * @Description:TODO(用一句话描述该文件做什么)
 * @date:2016年12月13日
 * @author lzqiang
 * @version 1.0
 * @since JDK 1.7
 */
@Service("gameInfoService")
public class GameInfoServiceImpl extends BaseServiceImpl<GameInfo> implements GameInfoService {
	
	/**  
	* @Fields sysAppVersionMapper:TODO(用一句话描述这个变量表示什么).  
	*/
	@Autowired
	private GameInfoMapper gameInfoMapper;

	/**  
	* @Fields redisTemplate:TODO(redis缓存模板).  
	*/
	@Autowired  
	private RedisTemplate<String,Object> redisTemplate;

	
	@Override
	public BaseMapper<GameInfo> getMapper() {
		return gameInfoMapper;
	}


	public void save(GameInfo gameInfo, MultipartFile appfile,HttpServletRequest request)
			throws Exception {
		if (appfile != null && !appfile.isEmpty()) {
			String imageurl = FileUtil.getUploadPath("app", appfile); // 文件子路径
			FileUtil.upload(request, imageurl, appfile); // 上传文件
			gameInfo.setAppurl(imageurl);
		}
		super.saveBase(gameInfo);
	}


	public void update(GameInfo gameInfo, MultipartFile appfile,HttpServletRequest request)
			throws Exception {
		if (appfile != null && !appfile.isEmpty()) {
			String imageurl = FileUtil.getUploadPath("app", appfile); // 文件子路径
			FileUtil.upload(request, imageurl, appfile); // 上传文件
			gameInfo.setAppurl(imageurl);
		}
		super.updateBase(gameInfo);
	}
}

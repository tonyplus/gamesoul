/**  
 * Project Name:xx项目工程(英文名称)
 * File Name:SysAppVersionServiceImpl.java  
 * Package Name:com.zwsafety.module.system.service.impl
 * Date:2016年12月13日
 * Copyright (c) 2016 ,zwsafety All Rights Reserved.   
 */
package com.fastwork.module.game.service.impl;

import java.io.File;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fastwork.module.game.dao.AdvControlMapper;
import com.fastwork.module.game.entity.AdvControl;
import com.fastwork.module.game.service.AdvControlService;
import com.fastwork.platform.base.BaseMapper;
import com.fastwork.platform.base.BaseServiceImpl;
import com.fastwork.platform.utils.FileUtil;
import com.fastwork.platform.utils.UUIDGenerator;

 /**
 * AdvControlServiceImpl
 * @Description:TODO(用一句话描述该文件做什么)
 * @date:2017年7月3日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
@Service("advControlService")
public class AdvControlServiceImpl extends BaseServiceImpl<AdvControl> implements AdvControlService {
	
	/**  
	* @Fields sysAppVersionMapper:TODO(用一句话描述这个变量表示什么).  
	*/
	@Autowired
	private AdvControlMapper advControlMapper;

	/**  
	* @Fields redisTemplate:TODO(redis缓存模板).  
	*/
	@Autowired  
	private RedisTemplate<String,Object> redisTemplate;

	
	@Override
	public BaseMapper<AdvControl> getMapper() {
		return advControlMapper;
	}


	public void save(AdvControl advControl, MultipartFile file,HttpServletRequest request)throws Exception {
		if (file != null && !file.isEmpty()) {
			advControl.setAdvid(UUIDGenerator.generate());
			String advfile = FileUtil.getUploadPath("adv", file); // 文件
			FileUtil.upload(request, advControl.getAdvname()+File.separator+advfile, file); // 上传文件
			advControl.setAdvfile(advfile);
		}
		super.saveBase(advControl);
	}


	public void update(AdvControl advControl, MultipartFile file,HttpServletRequest request)throws Exception {
		if (file != null && !file.isEmpty()) {
			String advfile = FileUtil.getUploadPath("adv", file); // 文件
			FileUtil.upload(request, advControl.getAdvname()+File.separator+advfile, file); // 上传文件
			advControl.setAdvfile(advfile);
		}
		super.updateBase(advControl);
	}
}

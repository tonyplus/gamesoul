/**  
 * Project Name:系统管理(module_system)
 * File Name:SysPrivServiceImpl.java  
 * Package Name:com.zwsafety.module.system.service.impl
 * Date:2016年01月14日
 * Copyright (c) 2016 ,zwsafety All Rights Reserved.   
 */
package com.fastwork.module.system.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.fastwork.module.system.dao.SysPrivMapper;
import com.fastwork.module.system.entity.SysPriv;
import com.fastwork.module.system.service.SysPrivService;
import com.fastwork.platform.base.BaseMapper;
import com.fastwork.platform.base.BaseServiceImpl;

/**
 * @ClassName:SysPrivServiceImpl
 * @Description:TODO(权限Service实现层)
 * @date:2016年01月14日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
@Service("sysPrivService")
public class SysPrivServiceImpl extends BaseServiceImpl<SysPriv>
        implements SysPrivService {

    /**
     * @Fields sysPrivMapper:TODO(用一句话描述这个变量表示什么).
     */
    @Autowired
    private SysPrivMapper sysPrivMapper;

    /**
     * @Fields redisTemplate:TODO(redis缓存模板).
     */
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    /**
     * @Title getMapper
     * @Description TODO(get方法)
     * @date:2016年01月14日
     * @author xufeng
     * @return BaseMapper<SysPriv, String>
     * @see com.zwsafety.platform.base.BaseServiceImpl#getMapper()
     */
    @Override
    public BaseMapper<SysPriv> getMapper() {
        return sysPrivMapper;
    }
    
    /**
	 * 用户id查询菜单权限
	 * @param userid
	 * @return
	 */
	 public List<SysPriv> loadByUserid(String userid){
		 return sysPrivMapper.loadByUserid(userid);
	 }

    
}

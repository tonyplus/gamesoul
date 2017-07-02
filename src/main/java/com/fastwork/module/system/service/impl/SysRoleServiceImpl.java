package com.fastwork.module.system.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.fastwork.module.system.dao.LkRolePrivMapper;
import com.fastwork.module.system.dao.LkUserRoleMapper;
import com.fastwork.module.system.dao.SysRoleMapper;
import com.fastwork.module.system.entity.SysRole;
import com.fastwork.module.system.service.SysRoleService;
import com.fastwork.platform.base.BaseMapper;
import com.fastwork.platform.base.BaseServiceImpl;

/**
 * @ClassName:SysRoleServiceImpl
 * @Description:TODO(用一句话描述该文件做什么)
 * @date:2016年4月13日
 * @author yxx
 * @version 1.0
 * @since JDK 1.7
 */
@Service("sysRoleService")
public class SysRoleServiceImpl extends BaseServiceImpl<SysRole>
        implements SysRoleService {

    /**
     * @Fields sysRoleMapper:TODO(角色Mapper).
     */
    @Autowired
    private SysRoleMapper sysRoleMapper;

    /**
     * @Fields lkRolePrivMapper:TODO(角色权限关联Mapper).
     */
    @Autowired
    private LkRolePrivMapper lkRolePrivMapper;

    /**
     * @Fields lkRolePrivMapper:TODO(用户角色关联Mapper).
     */
    @Autowired
    private LkUserRoleMapper lkUserRoleMapper;

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
     * @return BaseMapper<SysRole, String>
     * @see com.zwsafety.platform.base.BaseServiceImpl#getMapper()
     */
    @Override
    public BaseMapper<SysRole> getMapper() {
        return sysRoleMapper;
    }

    

}

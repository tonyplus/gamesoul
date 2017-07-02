package com.fastwork.module.system.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import tk.mybatis.mapper.entity.Condition;

import com.fastwork.module.system.dao.LkUserRoleMapper;
import com.fastwork.module.system.dao.SysUserMapper;
import com.fastwork.module.system.entity.SysUser;
import com.fastwork.module.system.service.SysUserService;
import com.fastwork.platform.base.BaseMapper;
import com.fastwork.platform.base.BaseServiceImpl;

/**
 * @ClassName:SysUserServiceImpl
 * @Description:TODO(用一句话描述该文件做什么)
 * @date:2016年01月14日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
@Service("sysUserService")
public class SysUserServiceImpl extends BaseServiceImpl<SysUser>
        implements SysUserService {

    /**
     * @Fields sysUserMapper:TODO(用一句话描述这个变量表示什么).
     */
    @Autowired
    private SysUserMapper sysUserMapper;

    /**
     * @Fields sysUserMapper:TODO(用户角色中间表).
     */
    @Autowired
    private LkUserRoleMapper LkUserRoleMapper;

    /**
     * @Fields redisTemplate:TODO(redis缓存模板).
     */
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    public BaseMapper<SysUser> getMapper() {
        return sysUserMapper;
    }
    
	/**
	 * 根据账户查询用户信息
	 * @param username
	 * @return
	 */
	public SysUser loadByUsername(String username){
		Condition c=new Condition(SysUser.class);
		c.createCriteria().andEqualTo("username", username);
		List<SysUser> datas=sysUserMapper.selectByCondition(c);
		if(datas!=null&&datas.size()==1){
			return datas.get(0);
		}else{
			return null;
		}
		
	}
    

}

package com.fastwork.module.system.service;

import com.fastwork.module.system.entity.SysUser;
import com.fastwork.platform.base.BaseService;

/**
 * @Description:用户信息Service
 * @date:2017年7月1日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
public interface SysUserService extends BaseService<SysUser> {
	
	/**
	 * 根据账户查询用户信息
	 * @param username
	 * @return
	 */
	public SysUser loadByUsername(String username);
	
}

package com.fastwork.module.system.service;

import java.util.List;

import com.fastwork.module.system.entity.SysPriv;
import com.fastwork.platform.base.BaseService;

/**
 * @ClassName:SysPrivService
 * @Description:权限信息Service
 * @date:2016年01月14日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
public interface SysPrivService extends BaseService<SysPriv> {
	
	/**
	 * 用户id查询菜单权限
	 * @param userid
	 * @return
	 */
	 public List<SysPriv> loadByUserid(String userid);
	
}

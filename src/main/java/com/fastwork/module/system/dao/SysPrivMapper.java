package com.fastwork.module.system.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.fastwork.module.system.entity.SysPriv;
import com.fastwork.platform.base.BaseMapper;

/**
 * @Description:权限mapper
 * @date:2017年7月1日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
@Repository
public interface SysPrivMapper extends BaseMapper<SysPriv> {
	
	/**
	 * 用户id查询菜单权限
	 * @param userid
	 * @return
	 */
	 public List<SysPriv> loadByUserid(String userid);
	
}

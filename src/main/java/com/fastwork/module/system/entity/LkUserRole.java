package com.fastwork.module.system.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
 /**  
* @Description:用户角色关联实体类
* @date:2017年7月1日 
* @author  xufeng  
* @version   1.0
* @since  JDK 1.7  
*/
@Table(name = "lk_user_role")
public class LkUserRole implements Serializable {
    /**  
    * @Fields serialVersionUID:TODO(UID).  
    */
	private static final long serialVersionUID = 1L;

	/**
	@Id
	@Column(name="conid")
	@GeneratedValue(generator = "UUID")
}

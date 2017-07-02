package com.fastwork.module.system.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @Description:角色信息实体类
 * @date:2017年7月1日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
@Table(name = "sys_role")
public class SysRole implements Serializable {
    /**
     * @Fields serialVersionUID:TODO(UID).
     */
    private static final long serialVersionUID = 1L;

    /**
     * @Fields roleid:TODO(角色主键).
     */
    @Id
	@Column(name="roleid")
    private String roleid;

    /**
     * @Fields rolename:TODO(角色名称).
     */
    private String rolename;

    /**
     * @Fields note:TODO(备注).
     */
    private String notes;

	public String getRoleid() {
		return roleid;
	}

	public void setRoleid(String roleid) {
		this.roleid = roleid;
	}

	public String getRolename() {
		return rolename;
	}

	public void setRolename(String rolename) {
		this.rolename = rolename;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}


}

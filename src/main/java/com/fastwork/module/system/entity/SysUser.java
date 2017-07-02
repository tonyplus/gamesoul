package com.fastwork.module.system.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * @Description:用户信息实体类
 * @date:2017年7月1日
 * @author xufeng
 * @version 1.0
 * @since JDK 1.7
 */
@Table(name = "sys_user")
public class SysUser implements Serializable {
    /**
     * @Fields serialVersionUID:TODO(UID).
     */
    private static final long serialVersionUID = 1L;

    /**
     * @Fields userid:TODO(用户id).
     */
    @Id
    @Column(name = "userid")
    @GeneratedValue(generator = "UUID")
    private String userid;

    /**
     * @Fields username:TODO(账号).
     */
    private String username;

    /**
     * @Fields password:TODO(密码).
     */
    private String password;

    /**
     * @Fields nickname:TODO(用户名字).
     */
    private String nickname;

    /**
     * @Fields updatetime:TODO(更新时间).
     */
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date updatetime = new Date();

    /**
     * @Fields note:TODO(备注).
     */
    private String notes;

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public Date getUpdatetime() {
		return updatetime;
	}

	public void setUpdatetime(Date updatetime) {
		this.updatetime = updatetime;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

}

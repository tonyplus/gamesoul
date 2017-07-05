/**  
 * Project Name:xx项目工程(英文名称)
 * File Name:SysAppVersion.java  
 * Package Name:com.zwsafety.module.system.entity
 * Date:2016年12月13日
 * Copyright (c) 2016 ,zwsafety All Rights Reserved.   
 */
package com.fastwork.module.game.entity;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

 /**  
* GameInfo
* @Description:TODO(游戏信息) 
* @date:2017年7月3日 
* @author:xufeng 
* @version   1.0
* @since  JDK 1.7  
*/
@Table(name = "adv_control")
public class AdvControl implements Serializable {

    /**  
    * @Fields serialVersionUID:TODO(UID).  
    */
	private static final long serialVersionUID = 1L;
	/**
	* @Fields advid:TODO(主键id).
	*/
	@Id
	@GeneratedValue(generator = "UUID")
	private String advid;
	
	/**
	* @Fields 广告名称.
	*/
	private String advname;
	
	/**
	* @Fields 广告文件.
	*/
	private String advfile;
	
	/**
	* @Fields 广告标示(0.不显示 1.显示).
	*/
	private String showflag;
	
	/**
	* @Fields 备注.
	*/
	private String notes;

	public String getAdvid() {
		return advid;
	}

	public void setAdvid(String advid) {
		this.advid = advid;
	}

	public String getAdvname() {
		return advname;
	}

	public void setAdvname(String advname) {
		this.advname = advname;
	}

	public String getAdvfile() {
		return advfile;
	}

	public void setAdvfile(String advfile) {
		this.advfile = advfile;
	}

	public String getShowflag() {
		return showflag;
	}

	public void setShowflag(String showflag) {
		this.showflag = showflag;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
}


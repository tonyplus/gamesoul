package com.fastwork.module.system.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
 /**  
* @Description:权限信息实体类
* @date:2017年7月1日 
* @author  xufeng  
* @version   1.0
* @since  JDK 1.7  
*/
@Table(name = "sys_priv")
public class SysPriv implements Serializable {
    /**  
    * @Fields serialVersionUID:TODO(UID).  
    */
	private static final long serialVersionUID = 1L;

	/**	* @Fields privid:TODO(权限主键).	*/
	@Id
	@Column(name="privid")
	private String privid;		/**	* @Fields privname:TODO(权限名称).	*/	private String privname;	
	/**	* @Fields privurl:TODO(权限url链接).	*/	private String privurl;		/**	* @Fields privimg:TODO(权限图片).	*/	private String privimg;		/**	* @Fields privlevel:TODO(权限级别).	*/	private String privlevel;		/**	* @Fields parentid:TODO(权限父菜单).	*/	private String parentid;
	
	/**
	 * @Fields privtype:TODO(权限类型).
	 * @author ly
	 * 权限类型（1：系统内部权限，权限url链接是/模块名开头的
     *         2：跨域权限，权限url链接是http开头的）).
	 */
	private String privtype;		/**	* @Fields ordernum:TODO(顺序号).	*/	private Integer ordernum;	
	/**
	* @Fields 更新时间
	*/
	private Date updatetime;	/**  
	* @Fields note:TODO(备注).  
	*/
	private String notes;

	public String getPrivid() {
		return privid;
	}

	public void setPrivid(String privid) {
		this.privid = privid;
	}

	public String getPrivname() {
		return privname;
	}

	public void setPrivname(String privname) {
		this.privname = privname;
	}

	public String getPrivurl() {
		return privurl;
	}

	public void setPrivurl(String privurl) {
		this.privurl = privurl;
	}

	public String getPrivimg() {
		return privimg;
	}

	public void setPrivimg(String privimg) {
		this.privimg = privimg;
	}

	public String getPrivlevel() {
		return privlevel;
	}

	public void setPrivlevel(String privlevel) {
		this.privlevel = privlevel;
	}

	public String getParentid() {
		return parentid;
	}

	public void setParentid(String parentid) {
		this.parentid = parentid;
	}

	public String getPrivtype() {
		return privtype;
	}

	public void setPrivtype(String privtype) {
		this.privtype = privtype;
	}

	public Integer getOrdernum() {
		return ordernum;
	}

	public void setOrdernum(Integer ordernum) {
		this.ordernum = ordernum;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Date getUpdatetime() {
		return updatetime;
	}

	public void setUpdatetime(Date updatetime) {
		this.updatetime = updatetime;
	}
    
}


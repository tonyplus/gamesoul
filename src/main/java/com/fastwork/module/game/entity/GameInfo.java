/**  
 * Project Name:xx项目工程(英文名称)
 * File Name:SysAppVersion.java  
 * Package Name:com.zwsafety.module.system.entity
 * Date:2016年12月13日
 * Copyright (c) 2016 ,zwsafety All Rights Reserved.   
 */
package com.fastwork.module.game.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

 /**  
* GameInfo
* @Description:TODO(app版本信息) 
* @date:2016年12月13日 
* @author:lzqiang 
* @version   1.0
* @since  JDK 1.7  
*/
@Table(name = "game_info")
public class GameInfo implements Serializable {
    /**  
    * @Fields serialVersionUID:TODO(UID).  
    */
	private static final long serialVersionUID = 1L;
	/**	* @Fields appid:TODO(主键id).	*/
	@Id
	@GeneratedValue(generator = "UUID")	private String appid;		/**	* @Fields appname:TODO(app名称).	*/	private String appname;		/**	* @Fields appversion:TODO(app版本).	*/	private String appversion;		/**	* @Fields appurl:TODO(app下载路径).	*/	private String appurl;		/**	* @Fields onlinetime:TODO(发布时间).	*/
	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")	private Date onlinetime = new Date();		/**	* @Fields appdesc:TODO(app描述).	*/	private String appdesc;		/**	* @Fields isonline:TODO(是否发布 1发布 0不发布).	*/	private String isonline = "1";		/**	* @Fields apptype:TODO(app类型  0:Android 1:ios).	*/	private String apptype ="android";		/**	* @Fields note:TODO(备注).	*/	private String note;		/**	* @Fields updatetime:TODO(更新时间).	*/	private Date updatetime = new Date();			/**	* @return the appid	*/	public String getAppid() {	    return this.appid;	}		/**	* @param appid the appid to set	*/	public void setAppid(String appid) {	    this.appid = appid;	}		/**	* @return the appname	*/	public String getAppname() {	    return this.appname;	}		/**	* @param appname the appname to set	*/	public void setAppname(String appname) {	    this.appname = appname;	}		/**	* @return the appversion	*/	public String getAppversion() {	    return this.appversion;	}		/**	* @param appversion the appversion to set	*/	public void setAppversion(String appversion) {	    this.appversion = appversion;	}		/**	* @return the appurl	*/	public String getAppurl() {	    return this.appurl;	}		/**	* @param appurl the appurl to set	*/	public void setAppurl(String appurl) {	    this.appurl = appurl;	}		/**	* @return the onlinetime	*/	public Date getOnlinetime() {	    return this.onlinetime;	}		/**	* @param onlinetime the onlinetime to set	*/	public void setOnlinetime(Date onlinetime) {	    this.onlinetime = onlinetime;	}		/**	* @return the appdesc	*/	public String getAppdesc() {	    return this.appdesc;	}		/**	* @param appdesc the appdesc to set	*/	public void setAppdesc(String appdesc) {	    this.appdesc = appdesc;	}		/**	* @return the isonline	*/	public String getIsonline() {	    return this.isonline;	}		/**	* @param isonline the isonline to set	*/	public void setIsonline(String isonline) {	    this.isonline = isonline;	}		/**	* @return the apptype	*/	public String getApptype() {	    return this.apptype;	}		/**	* @param apptype the apptype to set	*/	public void setApptype(String apptype) {	    this.apptype = apptype;	}		/**	* @return the note	*/	public String getNote() {	    return this.note;	}		/**	* @param note the note to set	*/	public void setNote(String note) {	    this.note = note;	}		/**	* @return the updatetime	*/	public Date getUpdatetime() {	    return this.updatetime;	}		/**	* @param updatetime the updatetime to set	*/	public void setUpdatetime(Date updatetime) {	    this.updatetime = updatetime;	}	
}


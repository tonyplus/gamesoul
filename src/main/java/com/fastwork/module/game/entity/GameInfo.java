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

 /**  
* GameInfo
* @Description:TODO(游戏信息) 
* @date:2017年7月3日 
* @author:xufeng 
* @version   1.0
* @since  JDK 1.7  
*/
@Table(name = "game_info")
public class GameInfo implements Serializable {
    /**  
    * @Fields serialVersionUID:TODO(UID).  
    */
	private static final long serialVersionUID = 1L;
	/**	* @Fields gameid:TODO(主键id).	*/
	@Id
	@GeneratedValue(generator = "UUID")	private String gameid;		/**	* @Fields (游戏名称).	*/	private String gamename;		/**	* @Fields (游戏类型 01.射击 02.动作 03.赛车 99.更多).	*/	private String gametype;		/**	* @Fields (游戏图片).	*/	private String gameimg;		/**	* @Fields (游戏描述).	*/
	private String gamedesc;		/**	* @Fields (游戏文件).	*/	private String gamefile;		/**	* @Fields (下载次数).	*/	private Integer downloadcount;
	
	/**
	* @Fields (更新时间).
	*/
	private Date updatetime = new Date();		public String getGameid() {
		return gameid;
	}

	public void setGameid(String gameid) {
		this.gameid = gameid;
	}

	public String getGamename() {
		return gamename;
	}

	public void setGamename(String gamename) {
		this.gamename = gamename;
	}

	public String getGametype() {
		return gametype;
	}

	public void setGametype(String gametype) {
		this.gametype = gametype;
	}

	public String getGameimg() {
		return gameimg;
	}

	public void setGameimg(String gameimg) {
		this.gameimg = gameimg;
	}

	public String getGamedesc() {
		return gamedesc;
	}

	public void setGamedesc(String gamedesc) {
		this.gamedesc = gamedesc;
	}

	public String getGamefile() {
		return gamefile;
	}

	public void setGamefile(String gamefile) {
		this.gamefile = gamefile;
	}

	
	public Integer getDownloadcount() {
		return downloadcount;
	}

	public void setDownloadcount(Integer downloadcount) {
		this.downloadcount = downloadcount;
	}

	public Date getUpdatetime() {
		return updatetime;
	}

	public void setUpdatetime(Date updatetime) {
		this.updatetime = updatetime;
	}

	}


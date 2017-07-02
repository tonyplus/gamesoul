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
	/**
	@Id
	@GeneratedValue(generator = "UUID")
	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
}

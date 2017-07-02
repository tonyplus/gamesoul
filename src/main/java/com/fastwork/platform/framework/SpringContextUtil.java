/**   
 * Project Name:platform_framework
 * File Name:SpringContextUtil.java
 * Package Name:com.zwsafety.platform.framework
 * Date:2015年7月6日上午13:43:04 
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */
package com.fastwork.platform.framework;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 * @ClassName:SpringContextUtil
 * @Description:TODO(Spring上下文工具)
 * @date:2015年7月6日 下午1:43:45
 * @author peijun
 * @version 1.0
 * @since JDK 1.6
 */
public class SpringContextUtil implements ApplicationContextAware{

    private static ApplicationContext   applicationContext;

    /**
     * 实现ApplicationContextAware接口的回调方法，设置上下文环境
     */
    public void setApplicationContext(ApplicationContext applicationContext){
        SpringContextUtil.applicationContext = applicationContext;
    }

    public static ApplicationContext getApplicationContext(){
        return applicationContext;
    }

    /**
     * 获取对象
     */
    public static Object getBean(String name) throws BeansException{
        return applicationContext.getBean(name);
    }
    /**
    * @Title:getHttpServletRequest
    * @Description TODO( 获取HttpServletRequest对象). 
    * @date  2016年8月2日 
    * @author lzqiangPC
     * @return 
     */
    public static HttpServletRequest getHttpServletRequest(){
    	HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
    	return request;
    }
}


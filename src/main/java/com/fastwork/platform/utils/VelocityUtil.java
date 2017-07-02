/**  
 * Project Name:platform_utils  
 * File Name:VelocityUtil.java  
 * Package Name:com.zwsafety.platform.utils  
 * Date:2016年9月5日
 * Copyright (c) 2016,zwsafety All Rights Reserved.   
 */

package com.fastwork.platform.utils;

import java.io.StringWriter;
import java.util.Map;
import java.util.Properties;

import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.apache.velocity.app.VelocityEngine;

import com.fastwork.platform.framework.SpringContextUtil;

/**
 * @ClassName:VelocityUtil模板工具类
 * @Description:TODO(用一句话描述该文件做什么)
 * @date:2016年9月5日
 * @author xufeng
 * @version 1.0
 * @since: JDK 1.7
 */
public class VelocityUtil {

    /**
     * 根据模板（字符串）和数据生成内容
     * 
     * @Title:getContent
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2016年9月5日
     * @author xufeng
     * @param templatecontent
     *            模板内容（字符串）
     * @param params
     *            模板替换内容
     * @return
     */
    public static String create(String templatecontent,
            Map<String, Object> params) {
        VelocityEngine ve = new VelocityEngine();
        ve.init();
        Velocity.init();
        VelocityContext context = new VelocityContext();
        if (params != null) {
            for (String key : params.keySet()) {
                context.put(key, params.get(key));
            }
        }
        StringWriter stringWriter = new StringWriter();
        Velocity.evaluate(context, stringWriter, "VelocityUtil",
                templatecontent);
        return stringWriter.toString();
    }

    /**
     * 根据模板（文件）和数据生成内容
     * 
     * @Title:getContent
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2016年9月5日
     * @author xufeng
     * @param templatecontent
     *            模板内容（字符串）
     * @param params
     *            模板替换内容
     * @return
     */
    public static String createFromFile(String fileUrl,
            Map<String, Object> params) {
    	params.put("rc",SpringContextUtil.getHttpServletRequest());
        Properties properties = new Properties();
        properties
                .put("file.resource.loader.class",
                        "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");
        Velocity.init(properties);
        // 实例化一个VelocityEngine对象
        VelocityEngine velocityEngine = new VelocityEngine(properties);

        // 实例化一个VelocityContext
        VelocityContext context = new VelocityContext();
        // 向VelocityContext中放入键值
        if (params != null) {
            for (String key : params.keySet()) {
                context.put(key, params.get(key));
            }
        }
        // 实例化一个StringWriter
        StringWriter writer = new StringWriter();
        // 从vm目录下加载模板,在eclipse工程中该vm目录与src目录平级
        velocityEngine.mergeTemplate(fileUrl, "utf-8", context, writer);
        return writer.toString();
    }
}

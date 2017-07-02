/**  
 * Project Name:platform_utils  
 * File Name:HttpUtil.java  
 * Package Name:com.zwsafety.platform.utils  
 * Date:2015年7月6日上午11:06:03  
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */
package com.fastwork.platform.utils;

import java.io.UnsupportedEncodingException;
import java.util.Map;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.apache.log4j.Logger;

/**
 * @ClassName:HttpUtil
 * @Description:TODO(http请求工具类)
 * @date:2015年7月6日 上午11:06:25
 * @author peijun
 * @version 1.0
 * @since JDK 1.6
 */
public final class HttpUtil {

    /**
     * LOG:TODO(日志).
     */
    private static final Logger LOG = Logger.getLogger(HttpUtil.class);

    /**
     * Creates a new instance of HttpUtil.
     */
    private HttpUtil() {
        // TODO Auto-generated constructor stub
    }

    /**
     * post请求
     */
    public static final String POST = "post";

    /**
     * get请求
     */
    public static final String GET = "get";

    /**
     * @Title:httpRequest
     * @Description TODO(发送http请求).
     * @date 2015年7月6日 上午11:07:27
     * @author peijun
     * @param url
     *            请求连接
     * @param params
     *            请求参数
     * @param requestMethod
     *            请求类型get/post
     * @return String 范围类型
     */
    public static String httpRequest(String url, Map<String, String> params,
            String requestMethod) {
        String response = null;
        HttpClient client = new HttpClient();
        if (POST.equals(requestMethod)) { // post请求
            HttpMethod method = new PostMethod(url);
            // 设置Http Post数据
            if (params != null) {
                HttpMethodParams p = new HttpMethodParams();
                for (Map.Entry<String, String> entry : params.entrySet()) {
                    p.setParameter(entry.getKey(), entry.getValue());
                }
                method.setParams(p);
            }
            try {
                client.executeMethod(method);
                response = method.getResponseBodyAsString();
            } catch (Exception e) {
                LOG.error("执行HTTP Post请求" + url + "时，发生异常！", e);
            } finally {
                method.releaseConnection();
            }

        } else { // get请求
            HttpMethod method = new GetMethod(url);
            try {

                if (params != null) { // 封装请求参数
                    HttpMethodParams p = new HttpMethodParams();
                    for (Map.Entry<String, String> entry : params.entrySet()) {
                        p.setParameter(entry.getKey(), entry.getValue());
                    }
                    method.setParams(p);
                }
                client.executeMethod(method);
                response = method.getResponseBodyAsString();
            } catch (Exception e) {
                LOG.error("执行HTTP Get请求" + url + "时，发生异常！", e);
            } finally {
                method.releaseConnection();
            }
        }

        return response;
    }

    /**
     * utf编码
     * 
     * @param source
     * @return
     */
    public static String urlEncodeUTF8(String source) {
        String result = source;
        try {
            result = java.net.URLEncoder.encode(source, "utf-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return result;
    }
}

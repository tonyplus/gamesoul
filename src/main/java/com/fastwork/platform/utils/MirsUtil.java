/**  
 * Project Name:platform_utils  
 * File Name:MirsUtil.java  
 * Package Name:com.zwsafety.platform.utils  
 * Date:2017年1月11日
 * Copyright (c) 2017,zwsafety All Rights Reserved.   
 */

package com.fastwork.platform.utils;

import java.util.HashMap;
import java.util.Map;

/**
 * @ClassName:MirsUtil
 * @Description:TODO(用一句话描述该文件做什么)
 * @date:2017年1月11日
 * @author luyao
 * @version 1.0
 * @since: JDK 1.7
 */
public class MirsUtil {
    /**
     * Creates a new instance of DateUtil.
     */
    private MirsUtil() {
        // TODO Auto-generated constructor stub
    }

    public static final String TICKET = "ticket";

    public static final String MIRS_URL = "mirsurl";
    /*********************** 接口开始 *************************/

    /**
     * 服务名称：用户登录 应用场景：单点登记 Http方法：GET 请求参数：logincode password
     */
    public static final String USER_GET_LOGIN = "/Config/Api/Service/SSO/Login";

    /**
     * 从mirs系统中获取用户信息URL
     */
    private static final String GetUserInfo_URL = "/Config/Api/Service/Identity/GetUserInfo/";
    /**
     * 从mirs系统中获取用户信息URL
     */
    private static final String GetUserType_URL = "/Config/Api/Service/Identity/GetUserType/";
    /**
     * 从mris系统中获取用户GUID的URL
     */
    private static final String GetUserGUID_URL = "/Config/Api/Service/Identity/GetUserGUID/";
    /**
     * 从mris系统中获取组织信息
     */
    private static final String GetOrgData_URL = "/Config/Api/UserConfig/Org/GetData/";
    /**
     * 获取用户详细信息，包含岗位信息
     */
    private static final String GetUserDtlInfo_URL = "/Config/Api/Service/Identity/GetUserDtlInfo/";
    /**
     * 从mirs系统中获取某个功能的操作按钮信息
     */
    private static final String GetAction_URL = "/Config/Api/Service/Auth/GetAction/";
    /**
     * 从mirs系统中获取用户的导航信息
     */
    private static final String GetMENU_URL = "/Config/Api/Service/Navigation/GetNavJson/";

    /*********************** 接口结束 *************************/

    /**
     * @Title:userLogin
     * @Description TODO(Mirs登陆). TODO(这里描述这个方法适用条件 – 可选). TODO(这里描述这个方法的执行流程 –
     *              可选). TODO(这里描述这个方法的使用方法 – 可选). TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2017年1月12日
     * @author luyao
     * @param ip
     *            Mirs服务地址
     * @param map
     *            参数
     * @return
     */
    public static String userLogin(String ip, Map<String, String> map) {
        String jsonStr = HttpUtil.httpRequest(ip + USER_GET_LOGIN, map,
                HttpUtil.GET);
        return jsonStr;
    }

    /**
     * @Title:userLogin
     * @Description TODO(Mirs登陆). TODO(这里描述这个方法适用条件 – 可选). TODO(这里描述这个方法的执行流程 –
     *              可选). TODO(这里描述这个方法的使用方法 – 可选). TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2017年1月12日
     * @author luyao
     * @param ip
     *            Mirs服务地址
     * @param null 参数
     * @return
     */
    public static String getMenuInfo(String ip, String ticket) {
        String jsonStr = HttpUtil.httpRequest(ip + GetMENU_URL + ticket, null,
                HttpUtil.GET);
        return jsonStr;
    }

    /**
     * @Title:getUserInfo
     * @Description TODO(从Mirs系统中获取用户信息).
     * @date 2017年1月9日
     * @author lzqiangPC
     * @return json字符串
     */
    public static String getUserInfo(String ip, String ticket) {
        String jsonStr = HttpUtil.httpRequest(ip + GetUserInfo_URL + ticket,
                null, HttpUtil.GET);
        return jsonStr;
    }

    /**
     * 
     * @Title:getUserDtlInfo
     * @Description TODO(获取用户详细信息，包含岗位信息).
     * @date 2017年1月11日
     * @author lzqiangPC
     * @return
     */
    public static String getUserDtlInfo(String ip, String ticket) {
        String jsonStr = HttpUtil.httpRequest(ip + GetUserDtlInfo_URL + ticket,
                null, HttpUtil.GET);
        return jsonStr;
    }

    /**
     * 
     * @Title:getUserType
     * @Description TODO(从Mirs系统中判断用户类型).
     * @date 2017年1月9日
     * @author lzqiangPC
     * @return json字符串
     */
    public static String getUserType(String ip, String ticket) {
        String jsonStr = HttpUtil.httpRequest(ip + GetUserType_URL + ticket,
                null, HttpUtil.GET);
        return jsonStr;
    }

    /**
     * @Title:GetUserGUID
     * @Description TODO(从mris系统中获取用户id).
     * @date 2017年1月9日
     * @author lzqiangPC
     * @return
     */
    public static String getUserGUID(String ip, String ticket) {
        String jsonStr = HttpUtil.httpRequest(ip + GetUserGUID_URL + ticket,
                null, HttpUtil.GET);
        return jsonStr;
    }

    /**
     * @Title:GetUserGUID
     * @Description TODO(从mris系统中获取组织信息).
     * @date 2017年1月9日
     * @author lzqiangPC
     * @return
     */
    public static String getGetOrgData(String ip, String ticket) {
        String jsonStr = HttpUtil.httpRequest(ip + GetOrgData_URL + ticket,
                null, HttpUtil.GET);
        return jsonStr;
    }

    /**
     * @Title:getAction
     * @Description TODO(获取功能的操作按钮信息).
     * @date 2017年1月11日
     * @author lzqiangPC
     * @param ip
     * @param ticket
     * @return
     */
    public static String getAction(String ip, String ticket,String funcode) {
    	Map<String,String> params = new HashMap<String, String>();
    	params.put("funcode",funcode);
        String jsonStr = HttpUtil.httpRequest(ip + GetAction_URL + ticket,
        		params, HttpUtil.GET);
        return jsonStr;
    }
    
    /**
    * @Title:formatJsonStr
    * @Description TODO(将mirs返回的字符串转换为可使用的json字符串). 
    * TODO(这里描述这个方法适用条件 – 可选).
    * TODO(这里描述这个方法的执行流程 – 可选).
    * TODO(这里描述这个方法的使用方法 – 可选).
    * TODO(这里描述这个方法的注意事项 – 可选).
    * @date  2017年1月13日 
    * @author luyao  
    * @param jsonstr
    * @return
     */
    public static String formatJsonStr(String jsonstr){
        return jsonstr.replace("\\", "").replace("\"{", "{").replace("}\"", "}").replace("\"[{", "[{").replace("}]\"", "}]");
    }
}

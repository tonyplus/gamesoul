/**  
 * Project Name:platform_utils  
 * File Name:UUIDGenerator.java  
 * Package Name:com.zwsafety.platform.utils  
 * Date:2015年7月6日上午11:10:04  
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */
package com.fastwork.platform.utils;

import java.net.InetAddress;

/**
 * @ClassName:UUIDGenerator
 * @Description:TODO(uuid工具类)
 * @date:2015年7月6日 上午11:25:31
 * @author peijun
 * @version 1.0
 * @since JDK 1.6
 */
public final class UUIDGenerator {

    /**
     * Creates a new instance of UUIDGenerator.
     */
    private UUIDGenerator() {
        // TODO Auto-generated constructor stub
    }

    static {
        int ipadd;
        try {
            ipadd = toInt(InetAddress.getLocalHost().getAddress());
        } catch (Exception e) {
            ipadd = 0;
        }
        IP = ipadd;
    }

    /**
     * @Title:generate
     * @Description TODO(产生一个32位的UUID).
     * @date 2015年7月6日 上午11:26:12
     * @author peijun
     * @return String
     */
    public static String generate() {
        return new StringBuilder(32).append(format(getIP()))
                .append(format(getJVM())).append(format(getHiTime()))
                .append(format(getLoTime())).append(format(getCount()))
                .toString();
    }

    /**
     * IP:TODO(ip地址).
     */
    private static final int IP;

    /**
     * COUNTER:TODO(数量).
     */
    private static short counter = (short) 0;

    /**
     * JVM:TODO(JVM).
     */
    private static final int JVM = (int) (System.currentTimeMillis() >>> 8);

    /**
     * @Title:format
     * @Description TODO(格式化整形).
     * @date 2015年7月6日 上午11:28:37
     * @author peijun
     * @param intval
     *            整形参数
     * @return String
     */
    private static final String format(int intval) {
        String formatted = Integer.toHexString(intval);
        StringBuilder buf = new StringBuilder("00000000");
        buf.replace(8 - formatted.length(), 8, formatted);
        return buf.toString();
    }

    /**
     * @Title:format
     * @Description TODO(格式化短整形).
     * @date 2015年7月6日 上午11:29:56
     * @author peijun
     * @param shortval
     *            参数
     * @return String
     */
    private static final String format(short shortval) {
        String formatted = Integer.toHexString(shortval);
        StringBuilder buf = new StringBuilder("0000");
        buf.replace(4 - formatted.length(), 4, formatted);
        return buf.toString();
    }

    /**
     * @Title:getJVM
     * @Description TODO(获取JVM).
     * @date 2015年7月6日 上午11:32:01
     * @author peijun
     * @return int
     */
    private static final int getJVM() {
        return JVM;
    }

    /**
     * @Title:getCount
     * @Description TODO(获取数量).
     * @date 2015年7月6日 上午11:32:46
     * @author peijun
     * @return short
     */
    private static final short getCount() {
        synchronized (UUIDGenerator.class) {
            if (counter < 0) {
                counter = 0;
            }
            return counter++;
        }
    }

    /**
     * @Title:getIP
     * @Description TODO(唯一本地网络).
     * @date 2015年7月6日 上午11:33:36
     * @author peijun
     * @return int
     */
    private static final int getIP() {
        return IP;
    }

    /**
     * @Title:getHiTime
     * @Description TODO(Unique down to millisecond).
     * @date 2015年7月6日 上午11:34:25
     * @author peijun
     * @return short
     */
    private static final short getHiTime() {
        return (short) (System.currentTimeMillis() >>> 32);
    }

    /**
     * @Title:getLoTime
     * @Description TODO(获取时间).
     * @date 2015年7月6日 上午11:35:04
     * @author peijun
     * @return int
     */
    private static final int getLoTime() {
        return (int) System.currentTimeMillis();
    }

    /**
     * @Title:toInt
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2015年7月6日 上午11:35:07
     * @author peijun
     * @param bytes
     *            字节数组
     * @return int
     */
    private static final int toInt(byte[] bytes) {
        int result = 0;
        for (int i = 0; i < 4; i++) {
            result = (result << 8) - Byte.MIN_VALUE + (int) bytes[i];
        }
        return result;
    }

}

/**  
 * Project Name:platform_utils  
 * File Name:StreamUtil.java  
 * Package Name:com.zwsafety.platform.utils 
 * Date:2015年7月27日
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */
package com.fastwork.platform.utils;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;

/**
 * @ClassName:StreamUtil
 * @Description:TODO(流工具类)
 * @date:2015年9月23日
 * @author peijun 流工具类
 * @version 1.0
 * @since JDK 1.7
 */
public final class StreamUtil {

    /**  
     * Creates a new instance of StreamUtil.    
     */

    private StreamUtil() {
        // TODO Auto-generated constructor stub  
    }
    
    /**
     * @Fields BUFFER_SIZE:TODO(设置的字节大小).
     */
    private static final int BUFFER_SIZE = 4096;

    /**
     * @Title:toString
     * @Description TODO(将InputStream转换成某种字符编码的String).
     * @date 2015年9月23日
     * @author peijun
     * @param inputstream
     *            输入流
     * @param encoding
     *            字符编码
     * @return String
     */
    public static String toString(InputStream inputstream, String encoding) {
        String string = null;
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        byte[] data = new byte[BUFFER_SIZE];
        int count = -1;
        try {
            while ((count = inputstream.read(data, 0, BUFFER_SIZE)) != -1) {
                outStream.write(data, 0, count);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        data = null;
        try {
            string = new String(outStream.toByteArray(), encoding);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return string;
    }

    /**
     * @Title:toString
     * @Description TODO(将InputStream转换成String).
     * @date 2015年9月23日
     * @author peijun
     * @param inputstream
     *            输入流
     * @return String
     */
    public static String toString(InputStream inputstream) {
        return toString(inputstream, "UTF-8");
    }

    /**
     * @Title:toString
     * @Description TODO(将byte数组转换成String).
     * @date 2015年9月23日
     * @author peijun
     * @param bytes
     *            字节
     * @return String
     */
    public static String toString(byte[] bytes) {

        InputStream is = null;
        try {
            is = toInputStream(bytes);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return toString(is, "UTF-8");
    }

    /**
     * @Title:toInputStream
     * @Description TODO(将String转换成InputStream).
     * @date 2015年9月23日
     * @author peijun
     * @param str
     *            字符串
     * @return InputStream
     * @throws Exception
     *             异常
     */
    public static InputStream toInputStream(String str) throws Exception {
        ByteArrayInputStream is = new ByteArrayInputStream(
                str.getBytes("UTF-8"));
        return is;
    }

    /**
     * @Title:toInputStream
     * @Description TODO(将byte数组转换成InputStream).
     * @date 2015年9月23日
     * @author peijun
     * @param bytes
     *            字节
     * @return InputStream
     * @throws Exception
     *             异常
     */
    public static InputStream toInputStream(byte[] bytes) throws Exception {
        ByteArrayInputStream is = new ByteArrayInputStream(bytes);
        return is;
    }

    /**
     * @Title:toBytes
     * @Description TODO(将InputStream转换成byte数组).
     * @date 2015年9月23日
     * @author peijun
     * @param inputstream
     *            输入流
     * @return byte[]
     * @throws IOException
     *             异常
     */
    public static byte[] toBytes(InputStream inputstream) throws IOException {
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        byte[] data = new byte[BUFFER_SIZE];
        int count = -1;
        while ((count = inputstream.read(data, 0, BUFFER_SIZE)) != -1) {
            outStream.write(data, 0, count);
        }
        data = null;
        return outStream.toByteArray();
    }

    /**
     * @Title:toBytes
     * @Description TODO(将String转换成byte[]流).
     * @date 2015年9月23日
     * @author peijun
     * @param str
     *            字符串
     * @return byte[]
     */
    public static byte[] toBytes(String str) {
        byte[] bytes = null;
        try {
            bytes = toBytes(toInputStream(str));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return bytes;
    }
}
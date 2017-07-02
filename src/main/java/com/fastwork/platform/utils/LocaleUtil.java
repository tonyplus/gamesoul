/**  
 * Project Name:Utils  
 * File Name:Demo.java  
 * Package Name:javaUtil  
 * Date:2015年7月30日
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */

package com.fastwork.platform.utils;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.apache.commons.lang.StringUtils;


/**
 * @ClassName:Demo
 * @Description:TODO(国际化)
 * @date:2015年7月30日
 * @author luyao
 * @version 1.0
 * @since: JDK 1.7
 */
public final class LocaleUtil {
    /**
    * Creates a new instance of LocaleUtil.
     */
    private LocaleUtil() {
        // TODO Auto-generated constructor stub  
    }
    /**
     * DEFAULT_LOCALE
     */
    private static final Locale DEFAULT_LOCALE = Locale.ENGLISH;
    /**
     * IETF_SEPARATOR
     */
    public static final String IETF_SEPARATOR = "-";
    /**
     * SEPARATOR
     */
    public static final String SEPARATOR = "_";
    /**
     * EMPTY_STRING
     */
    public static final String EMPTY_STRING = "";
    /**
    * @Title:toLocale
    * @Description TODO(这里用一句话描述这个方法的作用). 
    * @date  2015年7月31日 
    * @author luyao  
    * @param language String
    * @return Locale
     */
    public static Locale toLocale(String language) {
        if (!StringUtils.isBlank(language)) {
            return langToLocale(language, SEPARATOR);
        }
        return DEFAULT_LOCALE;
    }

    /**
    * @Title:langToLocale
    * @Description TODO(这里用一句话描述这个方法的作用). 
    * @date  2015年7月31日 
    * @author luyao  
    * @param lang String
    * @param separator String
    * @return Locale
     */
    public static Locale langToLocale(String lang, String separator) {
        if (StringUtils.isBlank(lang)) {
            return DEFAULT_LOCALE;
        }
        String language = EMPTY_STRING;
        String country = EMPTY_STRING;
        String variant = EMPTY_STRING;

        int i1 = lang.indexOf(separator);
        if (i1 < 0) {
            language = lang;
        } else {
            language = lang.substring(0, i1);
            ++i1;
            int i2 = lang.indexOf(separator, i1);
            if (i2 < 0) {
                country = lang.substring(i1);
            } else {
                country = lang.substring(i1, i2);
                variant = lang.substring(i2 + 1);
            }
        }

        if (language.length() == 2) {
            language = language.toLowerCase();
        } else {
            language = EMPTY_STRING;
        }

        if (country.length() == 2) {
            country = country.toUpperCase();
        } else {
            country = EMPTY_STRING;
        }

        if ((variant.length() > 0)
                && ((language.length() == 2) || (country.length() == 2))) {
            variant = variant.toUpperCase();
        } else {
            variant = EMPTY_STRING;
        }

        return new Locale(language, country, variant);
    }

    public static void main(String[] args) {
        
        //System.out.println(langToLocale("abc_123", SEPARATOR).getDefault());
       
        Locale l =  Locale.getDefault();
        
        System.out.println(l.getDisplayName());
        System.out.println(DateFormat.getDateInstance(DateFormat.FULL, l).format(new Date()));
        
        Locale.setDefault(Locale.US);
        Locale lc =  Locale.getDefault();
        System.out.println(lc.getDisplayName());
        System.out.println(DateFormat.getDateInstance(DateFormat.FULL, lc).format(new Date()));
        System.out.println(DateFormat.getDateTimeInstance(DateFormat.FULL, DateFormat.FULL, lc).format(new Date()));
        
       /* Locale[] thaiLocale = {new Locale("th"), new Locale("th","TH"), new Locale("th","TH", "TH")};
        for (Locale locale : thaiLocale) {
            NumberFormat format = NumberFormat.getNumberInstance(locale);
            StringBuffer buffer = new StringBuffer();
            buffer.append(locale.toString()+": ");
            buffer.append(format.format(573.34));
            System.out.println(buffer.toString());
        }*/
    

        /*
        Locale.setDefault(Locale.CHINA);
        Locale l =  Locale.getDefault();
        System.out.println("默认语言代码: " + l.getLanguage());
        System.out.println("默认地区代码: " + l.getCountry());
        System.out.println("默认语言地区代码: " + l.toString());
        System.out.println("---------------------------------------");
        System.out.println("默认语言描述: " + l.getDisplayLanguage());
        System.out.println("默认地区描述: " + l.getDisplayCountry());
        System.out.println("默认语言,地区描述: " + l.getDisplayName());
        System.out.println("---------------------------------------");
        System.out.println("在美国默认语言叫: " + l.getDisplayLanguage(Locale.US));
        System.out.println("在美国默认地区叫: " + l.getDisplayCountry(Locale.US));
        System.out.println("在美国默认语言,地区叫: " + l.getDisplayName(Locale.US));
        System.out.println("在日本默认语言代码叫: " + l.getDisplayLanguage(Locale.JAPAN));
        System.out.println("在日本默认地区代码叫: " + l.getDisplayCountry(Locale.JAPAN));
        System.out.println("在日本默认语言,地区代码叫: " + l.getDisplayName(Locale.JAPAN));
        System.out.println("---------------------------------------");
        System.out.println("语言环境三字母缩写: " + l.getISO3Language());
        System.out.println("国家环境三字母缩写: " + l.getISO3Country());*/

    
    }

}

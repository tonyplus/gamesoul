/**  
 * Project Name:platform_utils  
 * File Name:DateUtil.java  
 * Package Name:com.zwsafety.platform.utils  
 * Date:2015年7月6日上午10:21:28  
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */
package com.fastwork.platform.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.StringUtils;

/**
 * @ClassName:DateUtil
 * @Description:TODO(时间操作定义类)
 * @date:2015年7月6日 上午10:22:55
 * @author peijun
 * @version 1.0
 * @since JDK 1.6
 */
public final class DateUtil {

    /**
     * Creates a new instance of DateUtil.
     */
    private DateUtil() {
        // TODO Auto-generated constructor stub
    }

    /**
     * DefaultFormat:TODO(时间格式).
     */
    public static final String DEFAULTFORMAT = "yyyy-MM-dd HH:mm:ss";

    /**
     * dayFormat:TODO(日期格式).
     */
    public static final String DAYFORMAT = "yyyy-MM-dd";

    /**
     * @Title:getCalendar
     * @Description TODO(当前日历，这里用中国时间表示).
     * @date 2015年7月6日 上午10:26:14
     * @author peijun
     * @return Calendar 以当地时区表示的系统当前日历
     */
    public static Calendar getCalendar() {
        return Calendar.getInstance();
    }

    /**
     * @Title:getCurrentYear
     * @Description TODO(获得当前年份).
     * @date 2015年7月6日 上午10:26:57
     * @author peijun
     * @return int
     */
    public static int getCurrentYear() {
        return getCalendar().get(Calendar.YEAR);
    }

    /**
     * @Title:getCalendar
     * @Description TODO(指定毫秒数表示的日历).
     * @date 2015年7月6日 上午10:27:32
     * @author peijun
     * @param millis
     *            毫秒数
     * @return 指定毫秒数表示的日历
     */
    public static Calendar getCalendar(long millis) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date(millis));
        return cal;
    }

    /**
     * @Title:getCalendar
     * @Description TODO(指定日期表示的日历).
     * @date 2015年7月24日
     * @author lzqiangPC
     * @param date
     * @return 指定日期表示的日历
     */
    public static Calendar getCalendar(Date date) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        return cal;
    }

    /**
     * @Title:getDate
     * @Description TODO(当前日期).
     * @date 2015年7月6日 上午10:28:11
     * @author peijun
     * @return 系统当前时间
     */
    public static Date getDate() {
        return new Date();
    }

    /**
     * @Title:getDate
     * @Description TODO(指定毫秒数表示的日期).
     * @date 2015年7月6日 上午10:28:33
     * @author peijun
     * @param millis
     *            毫秒数
     * @return 指定毫秒数表示的日期
     */
    public static Date getDate(long millis) {
        return new Date(millis);
    }

    /**
     * @Title:parseDate
     * @Description TODO(字符串转为date).
     * @date 2015年7月6日 上午10:29:02
     * @author peijun
     * @param str
     *            字符串
     * @param format
     *            格式
     * @return Date
     */
    public static Date parseDate(String str, String format) {
        if (null == str || "".equals(str)) {
            return null;
        }
        Date date = null;
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(format);
            date = sdf.parse(str);
            return date;
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * @Title:parseDate
     * @Description TODO(字符串转为date yyyy-MM-dd HH:mm:ss).
     * @date 2015年7月6日 上午10:29:39
     * @author peijun
     * @param str
     *            字符串
     * @return Date
     * @throws ParseException
     */
    public static Date parseDate(String str) throws ParseException {
        return parseDate(str, DEFAULTFORMAT);
    }

    /**
     * @Title:formatDate
     * @Description TODO(时间转为字符串).
     * @date 2015年7月6日 上午10:30:09
     * @author peijun
     * @param date
     *            时间
     * @param format
     *            格式
     * @return String
     */
    public static String formatDate(Date date, String format) {
        if (null == date) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }

    /**
     * @Title:formatDate
     * @Description TODO(时间转为字符串 yyyy-MM-dd HH:mm:ss).
     * @date 2015年7月6日 上午10:30:44
     * @author peijun
     * @param date
     *            时间
     * @return String字符串
     */
    public static String formatDate(Date date) {
        return formatDate(date, DEFAULTFORMAT);
    }

    /**
     * @Title:getDaysBetweenDate
     * @Description TODO(获取date1和date2之间的天数).
     * @date 2015年7月23日
     * @author lzqiangPC
     * @param date1
     * @param date2
     * @return 两日期之间的天数
     */
    public static Long getDaysBetweenDate(Date date1, Date date2) {
        return (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
    }

    /**
     * @Title:getDaysBetweenTime
     * @Description TODO(date2和date1之间相差的毫秒值).
     * @date 2016年9月2日
     * @author lzqiangPC
     * @param date1
     * @param date2
     * @return
     */
    public static Long getDaysBetweenMilliseconds(Date date1, Date date2) {
        return date2.getTime() - date1.getTime();
    }

    /**
     * @Title:addDays
     * @Description TODO(某一日期添加具体天数后的日期).
     * @date 2015年7月23日
     * @author lzqiangPC
     * @param date
     *            要添加天数的日期
     * @param days
     *            天数
     * @return 某一日期添加具体天数后的日期
     */
    public static Date addDays(Date date, int days) {
        Calendar calendar = getCalendar(date);
        calendar.add(Calendar.DATE, days);
        return calendar.getTime();
    }

    /**
     * @Title:getFirstDayOfMonth
     * @Description TODO(返回指定日期的月的第一天).
     * @date 2015年7月24日
     * @author lzqiangPC
     * @param date
     * @return Date
     */
    public static Date getFirstDayOfMonth(Date date) {
        Calendar calendar = getCalendar(date);
        calendar.set(calendar.get(Calendar.YEAR), calendar.get(Calendar.MONTH),
                1);
        return calendar.getTime();
    }

    /**
     * @Title:getLastDayOfMonth
     * @Description TODO(返回指定日期的月的最后一天).
     * @date 2015年7月24日
     * @author lzqiangPC
     * @param date
     * @return Date
     */
    public static Date getLastDayOfMonth(Date date) {
        Calendar calendar = getCalendar(date);
        calendar.set(calendar.get(Calendar.YEAR), calendar.get(Calendar.MONTH),
                1);
        calendar.roll(Calendar.DATE, -1);
        return calendar.getTime();
    }

    /**
     * @Title:getMonths
     * @Description TODO(获取开始日期和结束日期之间的月份集合,不包括开始和结束时间).
     * @date 2015年7月24日
     * @author lzqiangPC
     * @param p_start
     *            开始时间
     * @param p_end
     *            结束时间
     * @return
     */
    public static List<Date> getMonths(Calendar p_start, Calendar p_end) {
        List<Date> result = new ArrayList<Date>();
        p_end.set(p_end.get(Calendar.YEAR), p_end.get(Calendar.MONTH), 1);
        p_start.add(Calendar.MONDAY, 1);
        while (p_start.before(p_end)) {
            result.add(p_start.getTime());
            p_start.add(Calendar.MONDAY, 1);
        }
        return result;
    }

    /**
     * @Title:getBetweenDays
     * @Description TODO(获取两日期之间天数月份数组).
     * @date 2015年7月23日
     * @author lzqiangPC
     * @param day1
     * @param day2
     * @return
     */
    public static String[] getBetweenDays(String day1, String day2) {
        if (StringUtils.isNotEmpty(day1) && StringUtils.isNotEmpty(day2)) {
            Date date1 = DateUtil.parseDate(day1, "yyyy-MM-dd");
            Date date2 = DateUtil.parseDate(day2, "yyyy-MM-dd");
            long daycount = DateUtil.getDaysBetweenDate(date1, date2) + 1;
            String[] days = new String[(int) daycount];
            for (int i = 0; i < daycount; i++) {
                days[i] = DateUtil.formatDate(DateUtil.addDays(date1, i),
                        "yyyy-MM-dd");
            }
            return days;
        }
        return null;
    }

    /**
     * @Title:getBetweenDays
     * @Description TODO(获取两日期之间日期数组).
     * @date 2015年7月23日
     * @author lzqiangPC
     * @param day1
     * @param day2
     * @return
     */
    public static Date[][] getBetweenMonths(String day1, String day2) {
        if (StringUtils.isNotEmpty(day1) && StringUtils.isNotEmpty(day2)) {
            Date start = DateUtil.parseDate(day1, "yyyy-MM-dd");
            Date end = DateUtil.parseDate(day2, "yyyy-MM-dd");
            List<Date> dates = DateUtil.getMonths(DateUtil.getCalendar(start),
                    DateUtil.getCalendar(end));
            Date[][] date;
            if (DateUtil.formatDate(start, "yyyy-MM").equals(
                    DateUtil.formatDate(end, "yyyy-MM"))) {
                date = new Date[dates.size() + 1][2];
            } else {
                date = new Date[dates.size() + 2][2];
            }
            date[0][0] = start;
            date[0][1] = DateUtil.getLastDayOfMonth(start);
            for (int i = 0; i < dates.size(); i++) {
                date[i + 1][0] = DateUtil.getFirstDayOfMonth(dates.get(i));
                date[i + 1][1] = DateUtil.getLastDayOfMonth(dates.get(i));
            }
            if (!DateUtil.formatDate(start, "yyyy-MM").equals(
                    DateUtil.formatDate(end, "yyyy-MM"))) {
                date[dates.size() + 1][0] = DateUtil.getFirstDayOfMonth(end);
                date[dates.size() + 1][1] = end;
            }
            return date;
        }
        return null;
    }

    /**
     * 
     * @Title:getBeginDateInQuarter
     * @Description TODO(获取季度第一天日期时间).
     * @date 2016年7月22日
     * @author yxx
     * @param year
     * @param quarter
     * @return
     * @throws ParseException
     */
    public static Date getBeginDateInQuarter(String year, String quarter)
            throws ParseException {
        if (quarter.equals("1")) {
            return parseDate(year + "-01-01 00:00:01");
        } else if (quarter.equals("2")) {
            return parseDate(year + "-04-01 00:00:01");
        } else if (quarter.equals("3")) {
            return parseDate(year + "-07-01 00:00:01");
        } else {
            return parseDate(year + "-10-01 00:00:01");
        }
    }

    /**
     * 
     * @Title:getEndDateInQuarter
     * @Description TODO(获取季度最后一天日期时间).
     * @date 2016年7月22日
     * @author yxx
     * @param year
     * @param quarter
     * @return
     * @throws ParseException
     */
    public static Date getEndDateInQuarter(String year, String quarter)
            throws ParseException {
        if (quarter.equals("1")) {
            return parseDate(year + "-03-31 23:59:59");
        } else if (quarter.equals("2")) {
            return parseDate(year + "-06-30 23:59:59");
        } else if (quarter.equals("3")) {
            return parseDate(year + "-09-30 23:59:59");
        } else {
            return parseDate(year + "-12-31 23:59:59");
        }
    }

    /**
     * 获得年份
     * 
     * @Title:getYear
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2016年9月8日
     * @author xufeng
     * @param date
     * @return
     */
    public static Integer getYear(Date date) {
        if (date != null) {
            Calendar c = Calendar.getInstance();
            c.setTime(date);
            return c.get(Calendar.YEAR);
        } else {
            return null;
        }
    }

    /**
     * 获得月份
     * 
     * @Title:getMonth
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2016年9月8日
     * @author xufeng
     * @param date
     * @return
     */
    public static Integer getMonth(Date date) {
        if (date != null) {
            Calendar c = Calendar.getInstance();
            c.setTime(date);
            return c.get(Calendar.MONTH) + 1;
        } else {
            return null;
        }

    }

    /**
     * 月的天
     * 
     * @Title:getDay
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2016年9月8日
     * @author xufeng
     * @param date
     * @return
     */
    public static Integer getDay(Date date) {
        if (date != null) {
            Calendar c = Calendar.getInstance();
            c.setTime(date);
            return c.get(Calendar.DAY_OF_MONTH);
        } else {
            return null;
        }

    }

    /**
     * 月的天
     * 
     * @Title:getDay
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2016年9月8日
     * @author xufeng
     * @param date
     * @return
     */
    public static Integer getHour(Date date) {
        if (date != null) {
            Calendar c = Calendar.getInstance();
            c.setTime(date);
            return c.get(Calendar.HOUR_OF_DAY);
        } else {
            return null;
        }

    }

    /**
     * 月的天
     * 
     * @Title:getDay
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2016年9月8日
     * @author xufeng
     * @param date
     * @return
     */
    public static Integer getMi(Date date) {
        if (date != null) {
            Calendar c = Calendar.getInstance();
            c.setTime(date);
            return c.get(Calendar.MINUTE);
        } else {
            return null;
        }

    }
}
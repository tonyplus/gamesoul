/**  
 * Project Name:platform_utils  
 * File Name:EmailUtil.java  
 * Package Name:com.zwsafety.platform.utils  
 * Date:2015年7月6日上午10:34:28  
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */
package com.fastwork.platform.utils;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.mail.EmailAttachment;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.apache.log4j.Logger;

/**
 * @ClassName:EmailUtil
 * @Description:TODO(邮件发送工具类)
 * @date:2015年7月6日 上午10:34:57
 * @author peijun
 * @version 1.0
 * @since JDK 1.6
 */
public final class EmailUtil {

    /**
     * LOG:TODO(日志).
     */
    private static final Logger LOG = Logger.getLogger(EmailUtil.class);

    /**
     * Creates a new instance of EmailUtil.
     */
    private EmailUtil() {
        // TODO Auto-generated constructor stub
    }

    /**
     * executor:TODO(线程池对象).
     */
    private static ExecutorService executor;

    static {
        executor = Executors.newFixedThreadPool(50); // 创建线程池
    }

    /**
     * @Title:sendEmail
     * @Description TODO(发送邮件).
     * @date 2015年7月6日 上午10:37:50
     * @author peijun
     * @param to
     *            发送对象
     * @param subject
     *            主题
     * @param content
     *            发送内容
     * @param attachs
     *            发送附件
     * @throws EmailException
     *             邮件异常
     */
    public static void sendEmail(final String to, final String subject,
            final String content, final EmailAttachment[] attachs)
            throws EmailException {
        final String mailServer = ResourceUtil.getConfigByName("email_host");
        final String mailFrom = ResourceUtil.getConfigByName("email_from");
        final String mailUser = ResourceUtil.getConfigByName("email_user");
        final String mailPwd = ResourceUtil.getConfigByName("email_password");
        final String mailName = ResourceUtil.getConfigByName("email_name");

        executor.execute(new Runnable() {
            public void run() {
                try {
                    HtmlEmail email = new HtmlEmail(); // 可以发送html类型的邮件

                    email.setHostName(mailServer); // 指定要使用的邮件服务器

                    // 使用163的邮件服务器需提供在163已注册的用户名、密码
                    email.setAuthentication(mailUser, mailPwd);
                    email.setCharset("UTF-8");
                    email.setFrom(mailFrom, mailName);
                    email.addTo(to); // 设置收件人
                    email.setSubject(subject); // 设置主题
                    if (StringUtils.isNotBlank(content)) {
                        email.setHtmlMsg(content); // 可以发送html
                    }

                    if (attachs != null && attachs.length > 0) { // 处理附件
                        for (EmailAttachment attach : attachs) {
                            email.attach(attach);
                        }
                    }

                    LOG.info("mailServer:" + mailServer + " mailTo: " + to);
                    LOG.info("邮件正文：" + subject);
                    email.send();
                } catch (EmailException e) {
                    e.printStackTrace();
                    LOG.info(e.getMessage());
                }
            }
        });
    }
}

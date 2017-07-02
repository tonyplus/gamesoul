package com.fastwork.platform.web.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.fastwork.platform.base.BaseController;
import com.fastwork.platform.utils.DateUtil;
import com.fastwork.platform.utils.Encrypter;
import com.fastwork.platform.utils.LicenseUtil;
import com.fastwork.platform.utils.ResourceUtil;

/**
 * @ClassName:IndexController
 * @Description:TODO(index主页面)
 * @date:2015年9月14日
 * @author peijun
 * @version 1.0
 * @since JDK 1.7
 */
@Controller
@RequestMapping(value = { "", "/index" })
public class IndexController extends BaseController {

    /**
     * @Fields LOG:TODO(日志).
     */
    private static final Logger LOG = Logger.getLogger(IndexController.class);
    /**
     * @Title:intoPage
     * @Description TODO(进入主页面).
     * @date 2015年9月14日
     * @author peijun
     * @return ModelAndView 对象
     */
    @RequestMapping
    public ModelAndView intoPage(Model model) {
        //当前皮肤
        final String themecurrent = ResourceUtil.readValue("theme_current");
        model.addAttribute("theme_current", themecurrent);
        boolean isMirsSystem = ResourceUtil.isMirsSystem();
        if(isMirsSystem){
        	return forword("index_mirs");
        }else{
        	return forword("index");
        }
    }
    
    /**
     * @Title:intoPage
     * @Description TODO(进入主页面).
     * @date 2015年9月14日
     * @author peijun
     * @return ModelAndView 对象
     */
    @RequestMapping("last")
    public ModelAndView intoMirsPage(Model model) {
        //当前皮肤
        //final String themecurrent = ResourceUtil.readValue("theme_current");
        //model.addAttribute("theme_current", themecurrent);
        return forword("index");
    }
    
    /**
    * @Title:theme
    * @Description TODO(这里用一句话描述这个方法的作用). 
    * TODO(这里描述这个方法适用条件 – 可选).
    * TODO(这里描述这个方法的执行流程 – 可选).
    * TODO(这里描述这个方法的使用方法 – 可选).
    * TODO(这里描述这个方法的注意事项 – 可选).
    * @date  2016年12月30日 
    * @author luyao  
    * @return
     */
    @RequestMapping(value = "/theme/{id}", method = RequestMethod.GET)
    public void theme(@PathVariable String id,HttpServletRequest request,
            HttpServletResponse response) {
        try {
            ResourceUtil.updateProperties("theme_current", id);
        } catch (Exception e) {
            LOG.error(e);
            e.printStackTrace();
        }
    }

    /**
     * @Title:downloadManual
     * @Description TODO(用户帮助手册).
     * @date 2015年9月22日
     * @author peijun
     * @param request
     *            请求对象
     * @param response
     *            响应对
     */
    @RequestMapping(value = "/download", method = RequestMethod.GET)
    public void downloadManual(HttpServletRequest request,
            HttpServletResponse response) {
        response.setContentType("multipart/form-data");
        InputStream in = null;
        OutputStream os = null;
        try {
            response.setHeader("Content-Disposition", "attachment;fileName="
                    + new String("用户手册.pdf".getBytes("gb2312"), "iso8859-1"));
            String filepath = request.getSession().getServletContext()
                    .getRealPath("/document/用户手册.pdf"); // 用户手册路径
            in = new FileInputStream(filepath);
            os = response.getOutputStream();
            byte[] b = new byte[1024 * 1024];
            int length;
            while ((length = in.read(b)) > 0) {
                os.write(b, 0, length);
            }
        } catch (Exception e) {
            LOG.error(e);
            e.printStackTrace();
        } finally {
            try {
                if (in != null) {
                    in.close();
                }
                if (os != null) {
                    os.close();
                }
            } catch (IOException e) {
                LOG.error(e);
                e.printStackTrace();
            }
        }
    }

    /**
     * @Title:welcome
     * @Description TODO(首页面跳转).
     * @date 2015年9月22日
     * @author peijun
     * @return ModelAndView
     */
    @RequestMapping("/welcome")
    public ModelAndView welcome() {
        return forword("common/welcome");
    }

    /**
     * @Title:404
     * @Description TODO(404错误页面跳转).
     * @date 2016年6月24日
     * @author luyao
     * @return ModelAndView
     */
    @RequestMapping("/404")
    public ModelAndView errorPage404() {
        return forword("common/404");
    }

    /**
     * @Title:500
     * @Description TODO(500错误页面跳转).
     * @date 2016年6月24日
     * @author luyao
     * @return ModelAndView
     */
    @RequestMapping("/500")
    public ModelAndView errorPage500() {
        return forword("common/500");
    }

    /**
     * 激活系统
     * 
     * @Title:registsystem
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2016年9月28日
     * @author xufeng
     * @param model
     * @return
     */
    @RequestMapping("/registsystem")
    public ModelAndView registsystem(HttpServletRequest request, Model model) {
        String mac = LicenseUtil.getLocalMac();
        String macEncrypt = Encrypter.encrypt(mac, Encrypter.MD5);
        model.addAttribute("registname", macEncrypt);
        
        String license = LicenseUtil.getLincese(request);
        if(StringUtils.isNotEmpty(license)){
        	license = new String(Base64.decodeBase64((license).getBytes()));
        }
        if (StringUtils.isNotBlank(license)) {
            model.addAttribute("registcode", LicenseUtil.getLincese(request));
            String arr[] = license.split("##");
            if (arr.length == 2) {
                String registdate = arr[1];
                if (!"999".equals(registdate)) {
                    Date d = new Date(Long.parseLong(registdate));
                    model.addAttribute("registdate", DateUtil.formatDate(d));
                } else {
                    model.addAttribute("registdate", "永久");
                }
            }
        }
        return forword("registsystem");
    }

    /**
     * 激活保存
     * 
     * @Title:registsave
     * @Description TODO(这里用一句话描述这个方法的作用). TODO(这里描述这个方法适用条件 – 可选).
     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
     *              TODO(这里描述这个方法的注意事项 – 可选).
     * @date 2016年9月28日
     * @author xufeng
     * @param registcode
     * @return
     */
    @RequestMapping(value = "registsave", method = RequestMethod.POST)
    public void registsave(HttpServletRequest request,
            HttpServletResponse response, @RequestParam String registcode) {
        boolean license;
        try {
            license = LicenseUtil.validateLicense(registcode);
            if (license) {
                LicenseUtil.setLincese(registcode, request);
                sendSuccessMessage(response, "保存成功");
            } else {
                sendFailureMessage(response, "激活码无效");
            }
        } catch (Exception e) {
            e.printStackTrace();
            sendFailureMessage(response, "激活码无效");
        }
    }
}

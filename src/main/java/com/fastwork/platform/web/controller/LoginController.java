package com.fastwork.platform.web.controller;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fastwork.module.system.entity.SysPriv;
import com.fastwork.module.system.entity.SysUser;
import com.fastwork.module.system.service.SysPrivService;
import com.fastwork.module.system.service.SysUserService;
import com.fastwork.platform.base.BaseController;
import com.fastwork.platform.entity.Platform;
import com.fastwork.platform.framework.Token;
import com.fastwork.platform.utils.Encrypter;
import com.fastwork.platform.utils.FileUtil;
import com.fastwork.platform.utils.LicenseUtil;
import com.fastwork.platform.utils.ResourceUtil;

/**
 * @ClassName:LoginController
 * @Description:TODO(登录)
 * @date:2015年9月14日
 * @author peijun
 * @version 1.0
 * @since JDK 1.7
 */
@Controller
@RequestMapping("/login")
public class LoginController extends BaseController {

    /**
     * @Fields log:TODO(日志).
     */
    private static final Logger LOG = Logger.getLogger(LoginController.class);

    /**
     * @Fields sysUserService:TODO(用户Service).
     */
    @Autowired
    private SysUserService sysUserService;

    /**
     * @Fields sysPrivService:TODO(权限Service).
     */
    @Autowired
    private SysPrivService sysPrivService;
    
    /**
     * @Title:intoLogin
     * @Description TODO(进入登陆界面).
     * @date 2015年9月14日
     * @author peijun
     * @return ModelAndView
     */
    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView intoLogin() {
        boolean isMirsSystem = ResourceUtil.isMirsSystem();
        if (isMirsSystem) {
            return forword("login_mirs");
        } else {
            return forword("login");
        }
    }

    /**
     * @Title:validate
     * @Description TODO(用户验证).
     * @date 2015年9月18日
     * @author peijun
     * @param request
     *            请求对象
     * @param username
     *            账号
     * @param password
     *            密码
     * @param usertype
     *            用户类型
     * @return Map<String,String>
     */
    @RequestMapping(value = "validate", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, String> validate(HttpServletRequest request,
            @RequestParam String username, @RequestParam String password,
            @RequestParam String usertype) {
        Map<String, String> result = new HashMap<String, String>();

        try {

             boolean license = LicenseUtil.validateLicense(LicenseUtil.getLincese(request));// 验证license 
             if (!license) {
            	 result.put("success", "false"); result.put("msg","系统未授权，请联系管理员！");
            	 return result; 
              }

            if (StringUtils.isNotBlank(username)
                    && StringUtils.isNotBlank(password)) {
                SysUser sysuser = sysUserService.loadByUsername(username);
                if (sysuser == null) {
                    result.put("success", "false");
                    result.put("msg", "用户名或密码错误！");
                } else {
                    String serverpassword = sysuser.getPassword();
                    String encrypt = Encrypter.encrypt(password,
                            Encrypter.MD5);
                    if (!encrypt.equalsIgnoreCase(serverpassword)) {
                        result.put("success", "false");
                        result.put("msg", "用户名或密码错误！");
                    } else {
                        // 获取用户菜单
                        List<SysPriv> menus = sysPrivService.loadByUserid(sysuser.getUserid());
                        if (menus != null && menus.size() > 0) {
                            // 登录成功
                            HttpSession session = request.getSession(true);
                            if (session != null) {
                                // 将登录用户放入session中
                                session.setAttribute(
                                        Platform.SESSION_USER_KEY, sysuser);
                                session.setAttribute(
                                        Platform.SESSION_MENU_KEY, menus);
                                session.setAttribute(
                                        Platform.SESSION_LOGIN_KEY, true);
                            }
                            result.put("success", "true");
                            result.put("msg", "密码正确");
                        } else {
                            result.put("msg", "没有登录权限！");
                            result.put("success", "false");
                        }
                    }
                }
            } else {
                result.put("success", "false");
                result.put("msg", "用户名或密码不能为空！");
            }
            return result;
        } catch (Exception e) {
            LOG.error(e);
            e.printStackTrace();
        }
        return null;
    }

    /**
     * @Title:logout
     * @Description TODO(用户退出登录).
     * @date 2015年9月18日
     * @author peijun
     * @param request
     *            请求参数
     * @return ModelAndView对象
     */
    @RequestMapping("/logout")
    public ModelAndView logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        boolean isMirsSystem = ResourceUtil.isMirsSystem();
        if (isMirsSystem) {
            return forword("login_mirs");
        } else {
            return forword("login");
        }
    }

    /**
     * @Title:logout
     * @Description TODO(用户退出登录).
     * @date 2015年9月18日
     * @author peijun
     * @param request
     *            请求参数
     * @return ModelAndView对象
     */
    @RequestMapping("/logout_mirs")
    public ModelAndView logout_mirs(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        boolean isMirsSystem = ResourceUtil.isMirsSystem();
        if (isMirsSystem) {
            return forword("login_mirs");
        } else {
            return forword("login");
        }
    }

    /**
     * @Title:resetpw
     * @Description TODO(进入密码修改).
     * @date 2015年9月18日
     * @author peijun
     * @param model
     *            model对象
     * @return ModelAndView
     */
    @RequestMapping(value = "/resetpw")
    public ModelAndView resetpw(Model model, HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            SysUser sysUser = (SysUser) session
                    .getAttribute(Platform.SESSION_USER_KEY);
            model.addAttribute("sysUser", sysUser);
        } catch (Exception e) {
            LOG.error(e);
            e.printStackTrace();
        }
        return forword("module/system/SysUser/sysuserReset");
    }

    /**
     * @Title:save
     * @Description TODO(保存修改密码).
     * @date 2015年9月18日
     * @author peijun
     * @param sysuser
     *            用户对象
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> save(String userid,String oldpassword, String newpassword) {
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            if (StringUtils.isNotBlank(userid)) {
                // 原来用户对象
                SysUser olduser = sysUserService.loadBaseById(userid);
                String serverpassword = olduser.getPassword(); // 服务器用户密码
                if (StringUtils.isNotBlank(oldpassword)) { // 输入框原密码
                    String encrypt = Encrypter.encrypt(olduser.getUsername()
                            + oldpassword, Encrypter.MD5);
                    if (!encrypt.equalsIgnoreCase(serverpassword)) {
                        result.put("success", false);
                        result.put("msg", "原密码错误！");
                    } else {
                        // 输入框新密码
                        if (StringUtils.isNotBlank(newpassword)) {
                            String newpw = Encrypter.encrypt(
                                    olduser.getUsername()
                                            + newpassword,
                                    Encrypter.MD5); // 新密码加密
                            olduser.setPassword(newpw);
                            sysUserService.updateBase(olduser);;
                            result.put("success", true);
                            result.put("msg", "密码修改成功");
                        }
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(e);
            e.printStackTrace();
        }
        return result;
    }

    /**
     * @Title:agreement
     * @Description TODO(注册协议).
     * @date 2016年7月31日
     * @author luyao
     * @param request
     *            请求参数
     * @return ModelAndView对象
     */
    @RequestMapping("/agreement")
    public ModelAndView agreement(HttpServletRequest request) {
        return forword("agreement");
    }

    /**
     * @Title:register
     * @Description TODO(注册).
     * @date 2016年7月31日
     * @author luyao
     * @param request
     *            请求参数
     * @return ModelAndView对象
     */
    @RequestMapping("/register")
    @Token(save = true)
    public ModelAndView register(HttpServletRequest request) {
        return forword("register");
    }

    /**
     * @Title:failure
     * @Description TODO(注册失败).
     * @date 2016年7月31日
     * @author luyao
     * @param request
     *            请求参数
     * @return ModelAndView对象
     */
    @RequestMapping("/failure")
    public ModelAndView failure(HttpServletRequest request) {
        return forword("failure");
    }

    /**
     * 下载操作手册
     */
    @RequestMapping("/downloadOperationFile")
    public void downloadOperationFile(@RequestParam String filename,
            HttpServletRequest request, HttpServletResponse response) {
        try {
            filename = new String(filename.getBytes("ISO-8859-1"), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        String rootPath = ResourceUtil.getTemplateRootPath(request);
        FileUtil.download(
                filename,
                rootPath + System.getProperty("file.separator")
                        + "operationFile"
                        + System.getProperty("file.separator") + filename,
                response);
    }

    /**
     * @Title:downloadFileList
     * @Description TODO（登录页待下载文件列表).
     * @date 2016年8月5日
     * @author lzqiangPC
     * @param request
     * @param response
     */
    @RequestMapping("/operationFileList")
    public ModelAndView operationFileList(HttpServletRequest request,
            HttpServletResponse response, Model model) {
        String rootPath = ResourceUtil.getTemplateRootPath(request);
        File file = new File(rootPath + System.getProperty("file.separator")
                + "operationFile");
        File[] fileList = file.listFiles();
        model.addAttribute("fileList", fileList);
        return forword("operationFileList");
    }

}

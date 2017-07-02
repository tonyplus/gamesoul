///**  
// * Project Name:xx项目工程(英文名称)
// * File Name:SysUserController.java  
// * Package Name:com.zwsafety.module.system.controller  
// * Date:2016年01月14日
// * Copyright (c) 2016 ,zwsafety All Rights Reserved.   
// */
//package com.fastwork.platform.system.controller;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import org.apache.commons.lang.StringUtils;
//import org.apache.log4j.Logger;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.servlet.ModelAndView;
//
//import com.fastwork.module.system.constants.SystemConstants;
//import com.fastwork.module.system.entity.SysUser;
//import com.fastwork.module.system.service.LkUserRoleService;
//import com.fastwork.module.system.service.SysPrivService;
//import com.fastwork.module.system.service.SysUserService;
//import com.fastwork.platform.base.BaseController;
//import com.fastwork.platform.utils.Encrypter;
//import com.fastwork.platform.utils.HtmlUtil;
//import com.fastwork.platform.utils.UUIDGenerator;
//import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
//
///**
// * @ClassName:SysUserController
// * @Description:(用一句话描述该文件做什么)
// * @date:2016年01月14日
// * @author xufeng
// * @version 1.0
// * @since JDK 1.7
// */
//@Controller
//@RequestMapping("/system/sysuser")
//public class SysUserController extends BaseController {
//
//    /**
//     * @Fields LOG:(日志).
//     */
//    private static final Logger LOG = Logger.getLogger(SysUserController.class);
//
//    /**
//     * @Fields sysUserService:(用户接口).
//     */
//    @Autowired
//    private SysUserService sysUserService;
//
//    /**
//     * @Fields LkUserRoleService:(用户角色中间接口)
//     */
//    @Autowired
//    private LkUserRoleService lkUserRoleService;
//
//    /**
//     * @Fields sysPrivService:(权限接口)
//     */
//    @Autowired
//    private SysPrivService sysPrivService;
//
//    /**
//     * @Title:intoMainPage
//     * @Description (进入首页).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @param privcode
//     *            权限编码
//     * @return ModelAndView
//     */
//    @RequestMapping(value = "/{privcode}")
//    public ModelAndView intoMainPage(@PathVariable String privcode) {
//        return forword("module/system/sysuser/sysuserList");
//    }
//
//    /**
//     * @Title:loadByPage
//     * @Description (根据条件查询数据结果集).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @param username
//     *            账户
//     * @param nickname
//     *            用户名
//     * @param model
//     *            model对象
//     * @param request
//     *            请求对象
//     * @return Map<String, Object> 返回数据结果集
//     */
//    @RequestMapping(value = "/list", method = RequestMethod.POST)
//    @ResponseBody
//    public Map<String, Object> loadByPage(@RequestParam String username,
//            @RequestParam String nickname, Model model,
//            HttpServletRequest request) {
//        try {
//            // 封装查询参数
//            Map<String, Object> params = new HashMap<String, Object>();
//            params.put("username", username);
//            params.put("nickname", nickname);
//            // 系统用户
//            params.put("usertype", "SYS");
//            PageBounds pageBounds = getPageBounds(request);
//            List<Map<String, Object>> rows = null;
//            // 返回数据结果集
//            Map<String, Object> results = createGrid(rows, pageBounds);
//            return results;
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return null;
//    }
//
//    /**
//     * @Title:display
//     * @Description (查看详细界面).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @param id
//     *            用户id
//     * @param model
//     *            model对象
//     * @return ModelAndView
//     */
//    @RequestMapping(value = "/display/{id}")
//    public ModelAndView display(@PathVariable String id, Model model) {
//        try {
//            SysUser sysUser = sysUserService.loadById(id);
//            model.addAttribute("sysUser", sysUser);
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return forword("module/system/sysUser/sysuserDisplay");
//    }
//
//    /**
//     * @Title:add
//     * @Description(进入新增页面).
//     * @date 2016年4月14日
//     * @author luyao
//     * @return ModelAndView对象
//     */
//    @RequestMapping("/add")
//    public ModelAndView add() {
//        return forword("module/system/SysUser/sysuserAdd");
//    }
//
//    /**
//     * @Title:edit
//     * @Description(进入编辑界面).
//     * @date 2016年04月14日
//     * @author luyao
//     * @param userid
//     *            用户id
//     * @param model
//     *            model对象
//     * @return ModelAndView
//     */
//    @RequestMapping("/edit/{userid}")
//    public ModelAndView edit(@PathVariable String userid, Model model) {
//        try {
//            SysUser sysUser = sysUserService.loadById(userid);
//            model.addAttribute("sysUser", sysUser);
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return forword("module/system/SysUser/sysuserEdit");
//    }
//
//    /**
//     * @Title:account
//     * @Description TODO(账户). TODO(这里描述这个方法适用条件 – 可选). TODO(这里描述这个方法的执行流程 – 可选).
//     *              TODO(这里描述这个方法的使用方法 – 可选). TODO(这里描述这个方法的注意事项 – 可选).
//     * @date 2016年12月28日
//     * @author luyao
//     * @param request
//     * @param model
//     * @return
//     */
//    @RequestMapping("/account")
//    public ModelAndView account(HttpServletRequest request, Model model) {
//        try {
//            HttpSession session = request.getSession(true);
//            SysUser sysUser = (SysUser) session
//                    .getAttribute(Platform.SESSION_USER_KEY);
//            model.addAttribute("sysUser", sysUser);
//            model.addAttribute("_accountPageFrm", "_accountPageFrm");
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return forword("module/system/SysUser/sysuserEdit");
//    }
//
//    /**
//     * @Title:edit
//     * @Description(进入修改密码界面).
//     * @date 2016年04月14日
//     * @author luyao
//     * @param userid
//     *            用户id
//     * @param model
//     *            model对象
//     * @return ModelAndView
//     */
//    @RequestMapping("/reset/{userid}")
//    public ModelAndView reset(@PathVariable String userid, Model model) {
//        try {
//            SysUser sysUser = sysUserService.loadById(userid);
//            model.addAttribute("sysUser", sysUser);
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return forword("module/system/SysUser/sysuserReset");
//    }
//
//    /**
//     * @Title:save
//     * @Description(保存（新增或编辑）).
//     * @date 2016年4月14日
//     * @author luyao
//     * @param sysUser
//     *            用户对象
//     * @param response
//     *            响应对象
//     * @param request
//     *            访问对象
//     */
//    @RequestMapping(value = "/save", method = RequestMethod.POST)
//    public void save(@ModelAttribute SysUser sysUser,
//            HttpServletRequest request, HttpServletResponse response) {
//        HttpSession session = request.getSession();
//        // 当前登录用户
//        SysUser user = (SysUser) session
//                .getAttribute(Platform.SESSION_USER_KEY);
//        if (StringUtils.isEmpty(sysUser.getUserid())) {
//            try {
//                sysUser.setUserid(UUIDGenerator.generate());
//                // 新增
//                String encrypt = Encrypter.encrypt(sysUser.getUsername()
//                        + sysUser.getPassword(), Encrypter.MD5);
//                sysUser.setPassword(encrypt); // 加密
//                sysUser.setUpdateper(user.getUserid());
//                sysUser.setCheckstates(Platform.SYSTEM_CHECKSTATES_YES);// 已审核
//                sysUser.setUserstates(Platform.SYSTEM_USERSTATES_NORMAL);// 正常
//                sysUserService.save(sysUser);
//                sendSuccessMessage(response, "保存成功");
//            } catch (Exception e) {
//                sendFailureMessage(response, "保存失败!");
//                LOG.error(e);
//                e.printStackTrace();
//            }
//        } else {
//            // 更新
//            try {
//                sysUser.setUpdateper(user.getUserid());
//                sysUserService.update(sysUser);
//                sendSuccessMessage(response, "编辑成功!");
//            } catch (Exception e) {
//                sendFailureMessage(response, "编辑失败!");
//                LOG.error(e);
//                e.printStackTrace();
//            }
//        }
//    }
//
//    /**
//     * @Title:delete
//     * @Description(批量删除).
//     * @date 2016年4月15日
//     * @author luyao
//     * @param ids
//     *            用户id数组
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/delete", method = RequestMethod.POST)
//    public void delete(String[] ids, HttpServletResponse response) {
//        try {
//            if (ids.length > 0) {
//                for (String id : ids) {
//                    sysUserService.delete(id);
//                }
//                sendSuccessMessage(response, "删除成功");
//            }
//        } catch (Exception e) {
//            sendFailureMessage(response, "删除失败!");
//            LOG.error(e);
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:userRole
//     * @Description (进入用户授权页面(角色分配)).
//     * @date 2016年4月15日
//     * @author luyao
//     * @param userid
//     *            用户id
//     * @param usertype
//     *            用户类型
//     * @param model
//     *            model对象
//     * @param request
//     *            访问对象
//     * @return ModelAndView
//     */
//    @RequestMapping("/userRole/{userid}/{usertype}")
//    public ModelAndView userRole(@PathVariable String userid,
//            @PathVariable String usertype, Model model,
//            HttpServletRequest request) {
//        try {
//            HttpSession session = request.getSession();
//            // 当前登录用户
//            SysUser user = (SysUser) session
//                    .getAttribute(Platform.SESSION_USER_KEY);
//
//            Map<String, Object> params = new HashMap<String, Object>();
//            params.put("userid", userid);
//            params.put("usertype", usertype);
//            if (user.getOrganid() == null) {
//                user.setOrganid("");
//            }
//            params.put("orgids", user.getOrganid());
//            List<Map<String, Object>> roleList = sysUserService
//                    .loadRoleCheckById(params);
//            if (roleList != null && roleList.size() > 0) {
//                model.addAttribute("roleList", roleList); // 被选中的角色
//            }
//            model.addAttribute("userid", userid);
//        } catch (Exception e) {
//            LOG.error(e);
//            e.printStackTrace();
//        }
//        return forword("module/system/SysUser/SysUserRole");
//    }
//
//    /**
//     * @Title:existsUser
//     * @Description (判断是否账号已经存在).
//     * @date 2015年9月18日
//     * @author peijun
//     * @param username
//     *            账号
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/existsUser", method = RequestMethod.POST)
//    public void existsUser(@RequestParam String username,
//            HttpServletResponse response) {
//        try {
//            if (StringUtils.isNotBlank(username)) {
//                Map<String, Object> params = new HashMap<String, Object>();
//                params.put("username", username);
//                params.put("userstates", "1"); // 用户正常
//                List<SysUser> userList = sysUserService.loadByList(params);
//                if (userList != null && userList.size() > 0) {
//                    HtmlUtil.writer(response, "false");// 验证不通过
//                } else {
//                    HtmlUtil.writer(response, "true");// 验证通过
//                }
//            }
//        } catch (Exception e) {
//            LOG.error(e);
//            HtmlUtil.writer(response, "false");// 验证不通过
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:existsUser
//     * @Description (判断企业账号是否存在).
//     * @date 2015年9月18日
//     * @author peijun
//     * @param username
//     *            账号
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/existsEnt", method = RequestMethod.POST)
//    public void existsUser(@RequestParam String businessinfoid,
//            @RequestParam String username, HttpServletResponse response) {
//        try {
//            if (StringUtils.isNotBlank(username)) {
//                Map<String, Object> params = new HashMap<String, Object>();
//                params.put("businessinfoid", businessinfoid);
//                params.put("username", username);
//                params.put("userstates", "1");// 用户正常
//                List<SysUser> userList = sysUserService.loadByEntList(params);
//                if (userList != null && userList.size() > 0) {
//                    HtmlUtil.writer(response, "false");// 验证不通过
//                } else {
//                    HtmlUtil.writer(response, "true");// 验证通过
//                }
//            }
//        } catch (Exception e) {
//            LOG.error(e);
//            HtmlUtil.writer(response, "false");// 验证不通过
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:loadLinkById
//     * @Description (关联引用查询[根据用户ids查询用户是否有关联引用等]).
//     * @date 2016年4月14日
//     * @author luyao
//     * @param ids
//     *            用户id数组
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/loadLinkById", method = RequestMethod.POST)
//    public void loadLinkById(String[] ids, HttpServletResponse response) {
//        try {
//            if (ids.length > 0) {
//                // 查询用户角色关联
//                Integer urcount = lkUserRoleService.loadLkRoleById(ids);
//                if (urcount.intValue() > 0) {
//                    sendFailureMessage(response, "该用户被引用不能删除");
//                } else {
//                    sendSuccessMessage(response, "该用户没有被引用!");
//                }
//            }
//        } catch (Exception e) {
//            sendFailureMessage(response, "该用户被引用不能删除！");
//            LOG.error(e);
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:saveUserRole
//     * @Description (保存用户授权信息(角色分配)).
//     * @date 2016年4月15日
//     * @author luyao
//     * @param ids
//     *            角色id数组
//     * @param userid
//     *            用户id
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/saveUserRole", method = RequestMethod.POST)
//    public void saveUserRole(String[] ids, String userid,
//            HttpServletResponse response) {
//        try {
//            if (ids != null && StringUtils.isNotBlank(userid)) {
//                sysUserService.saveUserRole(userid, ids);
//                sendSuccessMessage(response, "授权成功!");
//            }
//        } catch (Exception e) {
//            sendFailureMessage(response, "授权失败！");
//            LOG.error(e);
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:setPwd
//     * @Description (密码修改).
//     * @date 2016年4月15日
//     * @author luyao
//     * @param sysUser
//     *            用户对象
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/setPwd", method = RequestMethod.POST)
//    public void setPwd(@ModelAttribute SysUser sysUser,
//            HttpServletResponse response) {
//        try {
//
//            SysUser user = sysUserService.loadById(sysUser.getUserid());
//            // 修改密码
//            String encrypt = Encrypter.encrypt(
//                    sysUser.getUsername() + sysUser.getPassword(),
//                    Encrypter.MD5);
//            user.setPassword(encrypt); // 加密
//            sysUserService.update(user);
//            sendSuccessMessage(response, "密码修改成功!");
//        } catch (Exception e) {
//            sendFailureMessage(response, "密码修改失败！");
//            LOG.error(e);
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:resetPwd
//     * @Description (密码重置).
//     * @date 2016年4月15日
//     * @author luyao
//     * @param userid
//     *            用户id
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/resetpwd", method = RequestMethod.POST)
//    public void resetPwd(String userid, HttpServletResponse response) {
//        try {
//            SysUser user = sysUserService.loadById(userid);
//            // 修改密码
//            String encrypt = Encrypter.encrypt(user.getUsername() + "123456",
//                    Encrypter.MD5);
//            user.setPassword(encrypt); // 加密
//            sysUserService.update(user);
//            sendSuccessMessage(response, "密码重置成功!");
//        } catch (Exception e) {
//            sendFailureMessage(response, "密码重置失败！");
//            LOG.error(e);
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:existsUser
//     * @Description (判断是否账号已经存在).
//     * @date 2015年9月18日
//     * @author peijun
//     * @param username
//     *            账号
//     * @param password
//     *            当前密码
//     * @param password1
//     *            新密码
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/existsPassword", method = RequestMethod.POST)
//    public void existsPassword(@RequestParam String password,
//            @RequestParam String username, @RequestParam String password1,
//            HttpServletResponse response) {
//        if (StringUtils.isNotBlank(password)
//                && StringUtils.isNotBlank(username)) {
//            try {
//                if (StringUtils.isNotBlank(password1)) {
//                    String encrypt = Encrypter.encrypt(username + password1,
//                            Encrypter.MD5);
//                    if (password.equals(encrypt)) {
//                        HtmlUtil.writer(response, "true");// 验证通过
//                    } else {
//                        HtmlUtil.writer(response, "false");// 验证不通过
//                    }
//                }
//            } catch (Exception e) {
//                LOG.error(e);
//                HtmlUtil.writer(response, "false");// 验证不通过
//                e.printStackTrace();
//            }
//        } else {
//            HtmlUtil.writer(response, "false");// 验证不通过
//        }
//    }
//
//    /**
//     * @Title:loadUserByOrgidSelect
//     * @Description TODO(根据企业或机构id查询用户树).
//     * @date 2016年7月1日
//     * @author yxx
//     * @return List<Map<String, Object>>
//     */
//    @RequestMapping(value = "/orguserselect", method = RequestMethod.POST)
//    @ResponseBody
//    public List<Map<String, Object>> loadUserByOrgidSelect(
//            @RequestParam String orgid) {
//        try {
//            List<Map<String, Object>> list = sysUserService
//                    .loadUserByOrgidSelect(orgid);
//            return list;
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return null;
//    }
//
//    /**
//     * @Title:loadOtherUserByOrgidSelect
//     * @Description TODO(其他需要根据企业或机构id查询用户树， 如巡查对象、执法人员等不需要显示已经选择的用户).
//     * @date 2016年7月1日
//     * @author yxx
//     * @return List<Map<String, Object>>
//     */
//    @RequestMapping(value = "/orgotheruserselect", method = RequestMethod.POST)
//    @ResponseBody
//    public List<Map<String, Object>> loadOtherUserByOrgidSelect(
//            @RequestParam String orgid, @RequestParam String usertype) {
//        try {
//            Map<String, Object> params = new HashMap<String, Object>();
//            params.put("orgid", orgid);
//            if (!StringUtils.isEmpty(usertype)) {
//                params.put(usertype, "1");
//            }
//            List<Map<String, Object>> list = sysUserService
//                    .loadOtherUserByOrgidSelect(params);
//            return list;
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return null;
//    }
//
//    /**
//     * 
//     * @Title:findByLeader
//     * @Description TODO(根据用户id查询上级领导). TODO(这里描述这个方法适用条件 – 可选).
//     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
//     *              TODO(这里描述这个方法的注意事项 – 可选).
//     * @date 2017年5月20日
//     * @author Administrator
//     * @param auditid
//     * @param model
//     * @param request
//     * @return
//     */
//    @RequestMapping(value = "/leaderuserselect", method = RequestMethod.POST)
//    @ResponseBody
//    public List<Map<String, Object>> findByLeader(@RequestParam String userid,
//            @RequestParam String jobtype) {
//        try {
//            int type = Integer.parseInt(jobtype);
//            String job = "";
//            switch (type) {// 查找当前用户的上级领导 (1局长2科长3执法员)
//            case 1:
//                job = "1";
//                break;
//            case 2:
//                job = "1";
//                break;
//            case 3:
//                job = "2";
//                break;
//
//            }
//            Map<String, Object> params = new HashMap<String, Object>();
//            params.put("jobtype", job);
//            params.put("userid", userid);
//            List<Map<String, Object>> list = sysUserService
//                    .loadLeaderUserSelect(params);
//            return list;
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return null;
//
//    }
//
//}

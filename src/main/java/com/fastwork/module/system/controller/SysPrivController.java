///**  
// * Project Name:系统管理(module_system)
// * File Name:SysPrivController.java  
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
//
//import org.apache.commons.lang3.StringUtils;
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
//import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
//import com.zwsafety.module.system.constants.Constants;
//import com.zwsafety.module.system.entity.SysPriv;
//import com.zwsafety.module.system.service.LkRolePrivService;
//import com.zwsafety.module.system.service.SysOperService;
//import com.zwsafety.module.system.service.SysPrivService;
//import com.zwsafety.platform.base.BaseController;
//import com.zwsafety.platform.base.HtmlUtil;
//import com.zwsafety.platform.utils.UUIDGenerator;
//
///**
// * @ClassName:SysPrivController
// * @Description:TODO(权限管理)
// * @date:2016年01月14日
// * @author peijun
// * @version 1.0
// * @since JDK 1.7
// */
//@Controller
//@RequestMapping("/system/syspriv")
//public class SysPrivController extends BaseController {
//
//    /**
//     * @Fields LOG:TODO(日志).
//     */
//    private static final Logger LOG = Logger.getLogger(SysPrivController.class);
//
//    /**
//     * @Fields sysPrivService:TODO(用一句话描述这个变量表示什么).
//     */
//    @Autowired
//    private SysPrivService sysPrivService;
//
//    /**
//     * @Fields lkRolePrivService:TODO(用一句话描述这个变量表示什么).
//     */
//    @Autowired
//    private LkRolePrivService lkRolePrivService;
//
//    /**
//     * @Fields sysOperService:TODO(用一句话描述这个变量表示什么).
//     */
//    @Autowired
//    private SysOperService sysOperService;
//
//    /**
//     * @Title:intoMainPage
//     * @Description TODO(进入首页).
//     * @date 2016年01月14日
//     * @author peijun
//     * @param privcode
//     *            权限编码
//     * @return ModelAndView
//     */
//    @RequestMapping(value = "/{privcode}")
//    public ModelAndView intoMainPage(@PathVariable String privcode) {
//        return forword("module/system/syspriv/sysprivList");
//    }
//
//    /**
//     * @Title:loadByPage
//     * @Description TODO(根据条件查询权限数据结果集).
//     * @date 2016年01月14日
//     * @author peijun
//     * @param privid
//     *            权限id
//     * @param privname
//     *            权限名称
//     * @param request
//     *            请求对象
//     * @return Map<String, Object> 返回数据结果集
//     */
//    @RequestMapping(value = "/list", method = RequestMethod.POST)
//    @ResponseBody
//    public Map<String, Object> loadByPage(HttpServletRequest request,
//            @RequestParam String privid, @RequestParam String privname) {
//        try {
//            // 封装查询参数
//            Map<String, Object> params = new HashMap<String, Object>();
//            params.put("privid", privid);
//            params.put("privname", privname);
//
//            PageBounds pageBounds = getPageBounds(request);
//            List<Map<String, Object>> rows = sysPrivService.loadByPage(params,
//                    pageBounds);
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
//     * @Description TODO(查看详细界面).
//     * @date 2016年01月14日
//     * @author peijun
//     * @param id
//     *            权限id
//     * @param model
//     *            model对象
//     * @return ModelAndView
//     */
//    @RequestMapping(value = "/display/{id}")
//    public ModelAndView display(@PathVariable String id, Model model) {
//        try {
//            SysPriv sysPriv = sysPrivService.loadById(id);
//            model.addAttribute("sysPriv", sysPriv);
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return forword("module/system/syspriv/sysprivDisplay");
//    }
//
//    /**
//     * @Title:add
//     * @Description TODO(进入新增页面).
//     * @date 2016年01月14日
//     * @author peijun
//     * @param usertype
//     *            用户类型(授权人类型)
//     * @param privlevel
//     *            上级权限级别
//     * @param model
//     *            model对象
//     * @return ModelAndView model对象
//     */
//    @RequestMapping("/add/{usertype}/{privlevel}")
//    public ModelAndView add(@PathVariable String usertype,
//            @PathVariable String privlevel, Model model) {
//        try {
//            if (StringUtils.isNotBlank(usertype)) {
//                SysPriv sysPriv = new SysPriv();
//                sysPriv.setUsertype(usertype);
//                model.addAttribute("sysPriv", sysPriv);
//                if (Platform.SYSTEM_PRIVLEVEL_SECOND.equals(privlevel)) {
//                    // 上级权限级别是二级菜单
//                    return forword("module/system/syspriv/sysprivoperAdd"); // 跳转到可以添加操作项页面
//                } else {
//                    return forword("module/system/syspriv/sysprivAdd"); // 跳转到不可以添加操作项页面
//                }
//            }
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//            return null;
//        }
//        return null;
//    }
//
//    /**
//     * @Title:edit
//     * @Description TODO(进入编辑界面).
//     * @date 2016年01月14日
//     * @author peijun
//     * @param id
//     *            权限id
//     * @param model
//     *            model对象
//     * @return ModelAndView
//     */
//    @RequestMapping("/edit/{id}")
//    public ModelAndView edit(@PathVariable String id, Model model) {
//        try {
//            SysPriv sysPriv = sysPrivService.loadById(id);
//            model.addAttribute("sysPriv", sysPriv);
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return forword("module/system/syspriv/sysprivEdit");
//    }
//
//    /**
//     * @Title:save
//     * @Description TODO(新增保存权限及关联的操作项).
//     * @date 2016年01月14日
//     * @author peijun
//     * @param sPriv
//     *            权限JSON字符串
//     * @param sOpers
//     *            操作项JSON字符串
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/savePrivOper", method = RequestMethod.POST)
//    public void savePrivOper(@ModelAttribute(value = "sysPriv") String sPriv,
//            @RequestParam(value = "sysOpers") String sOpers,
//            HttpServletResponse response) {
//        try {
//            if (StringUtils.isNotBlank(sPriv)) {
//                sysPrivService.savePriv(sPriv, sOpers);
//                sendSuccessMessage(response, "保存成功");
//            }
//        } catch (Exception e) {
//            sendFailureMessage(response, "保存失败!");
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:save
//     * @Description TODO(添加保存).
//     * @date 2016年5月4日
//     * @author peijun
//     * @param sysPriv
//     *            权限实体
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/save", method = RequestMethod.POST)
//    public void save(@ModelAttribute SysPriv sysPriv,
//            HttpServletResponse response) {
//        try {
//            sysPriv.setPrivid(UUIDGenerator.generate());
//            sysPrivService.save(sysPriv);
//            sendSuccessMessage(response, "保存成功");
//        } catch (Exception e) {
//            sendFailureMessage(response, "保存失败!");
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:update
//     * @Description TODO(权限更新).
//     * @date 2016年4月20日
//     * @author peijun
//     * @param sysPriv
//     *            权限实体
//     * @param response
//     */
//    @RequestMapping(value = "/update", method = RequestMethod.POST)
//    public void update(@ModelAttribute SysPriv sysPriv,
//            HttpServletResponse response) {
//        try {
//            sysPrivService.update(sysPriv);
//            sendSuccessMessage(response, "编辑成功");
//        } catch (Exception e) {
//            sendFailureMessage(response, "编辑失败!");
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:delete
//     * @Description TODO(批量删除).
//     * @date 2016年01月14日
//     * @author peijun
//     * @param ids
//     *            权限id数组
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/delete", method = RequestMethod.POST)
//    public void delete(String[] ids, HttpServletResponse response) {
//        try {
//            if (ids.length > 0) {
//                for (String id : ids) {
//                    sysPrivService.delete(id);
//                }
//                sendSuccessMessage(response, "删除成功");
//            }
//        } catch (Exception e) {
//            sendFailureMessage(response, "删除失败!");
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:privtree
//     * @Description TODO(左侧权限树).
//     * @date 2016年01月14日
//     * @author peijun
//     * @return List<Map<String,Object>>
//     */
//    @RequestMapping(value = "/privtree", method = RequestMethod.POST)
//    @ResponseBody
//    public List<Map<String, Object>> loadPrivTree(@RequestParam String usertype) {
//        try {
//            return sysPrivService.loadPrivTree(usertype);
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return null;
//    }
//
//    /**
//     * @Title:findLinkById
//     * @Description TODO(查询权限是否有关联引用).
//     * @date 2016年4月15日
//     * @author peijun
//     * @param ids
//     *            权限id数组
//     * @param response
//     */
//    @RequestMapping(value = "/loadLinkById", method = RequestMethod.POST)
//    public void loadLinkById(String[] ids, HttpServletResponse response) {
//        try {
//            if (ids.length > 0) {
//                Integer spcount = sysPrivService.loadCountLkParentById(ids); // 查询权限子节点数量
//
//                Integer rpcount = lkRolePrivService.loadCountLkRoleById(ids); // 查询角色权限关联
//
//                Integer opcount = sysOperService.loadCountLkOperById(ids); // 查询权限操作关联
//
//                if (spcount.intValue() > 0) {
//                    sendFailureMessage(response, "该权限有子节点不能删除");
//                    return;
//                }
//
//                if (rpcount.intValue() > 0 || opcount.intValue() > 0) {
//                    sendFailureMessage(response, "该权限被引用不能删除");
//                } else {
//                    sendSuccessMessage(response, "该权限没有被引用!");
//                }
//            }
//        } catch (Exception e) {
//            sendFailureMessage(response, "异常不能删除！");
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:existsPrivCode
//     * @Description TODO(判断权限编码是否存在).
//     * @date 2016年4月29日
//     * @author peijun
//     * @param privid
//     *            权限id
//     * @param privcode
//     *            权限编码
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/existsPrivCode", method = RequestMethod.POST)
//    public void existsPrivCode(@RequestParam String privid,
//            @RequestParam String privcode, HttpServletResponse response) {
//        Map<String, Object> result = new HashMap<String, Object>();
//        try {
//            Map<String, Object> params = new HashMap<String, Object>();
//            params.put("privcode", privcode);
//
//            if (StringUtils.isBlank(privid)) {
//                // 添加页面进去
//                List<SysPriv> privList = sysPrivService.loadByList(params);
//                if (privList != null && privList.size() > 0) {
//                    HtmlUtil.writer(response, "false");// 验证不通过
//                } else {
//                    HtmlUtil.writer(response, "true");// 验证通过
//                }
//            } else {
//                // 编辑页面进去
//                SysPriv sysPrivOld = sysPrivService.loadById(privid); // 老数据
//                String privcodeold = sysPrivOld.getPrivcode();
//
//                List<SysPriv> privList = sysPrivService.loadByList(params);// 新数据
//
//                if (privList != null && privList.size() > 0) {
//                    SysPriv sysPrivNew = privList.get(0); // 权限编号只会有一条数据
//                    if (sysPrivNew.getPrivcode().equalsIgnoreCase(privcodeold)) {
//                        HtmlUtil.writer(response, "true");// 验证通过,是以前的权限编码
//                    } else {
//                        HtmlUtil.writer(response, "false");// 验证不通过
//                    }
//                } else {
//                    HtmlUtil.writer(response, "true");// 验证通过
//                }
//            }
//        } catch (Exception e) {
//            LOG.error(e);
//            HtmlUtil.writer(response, "false"); // 验证不通过
//            e.printStackTrace();
//        }
//        HtmlUtil.writerJson(response, result);
//    }
//
//}

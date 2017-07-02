///**  
// * Project Name:module_system
// * File Name:SysRoleController.java  
// * Package Name:com.zwsafety.module.system.controller  
// * Date:2016年04月14日
// * Copyright (c) 2016 ,zwsafety All Rights Reserved.   
// */
//package com.fastwork.platform.system.controller;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
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
//import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
//import com.zwsafety.module.system.constants.Constants;
//import com.zwsafety.module.system.entity.SysRole;
//import com.zwsafety.module.system.entity.SysUser;
//import com.zwsafety.module.system.service.LkRolePrivService;
//import com.zwsafety.module.system.service.SysRoleService;
//import com.zwsafety.platform.base.BaseController;
//import com.zwsafety.platform.base.HtmlUtil;
//import com.zwsafety.platform.utils.UUIDGenerator;
//
///**
// * @ClassName:SysRoleController
// * @Description:TODO(用一句话描述该文件做什么)
// * @date:2016年01月14日
// * @author xufeng
// * @version 1.0
// * @since JDK 1.7
// */
//@Controller
//@RequestMapping("/system/sysrole")
//public class SysRoleController extends BaseController {
//
//    /**
//     * @Fields LOG:TODO(日志).
//     */
//    private static final Logger LOG = Logger.getLogger(SysRoleController.class);
//
//    /**
//     * @Fields sysRoleService:TODO(角色服务类).
//     */
//    @Autowired
//    private SysRoleService sysRoleService;
//
//    /**
//     * @Fields sysRoleService:TODO(角色权限关联服务类).
//     */
//    @Autowired
//    private LkRolePrivService lkRolePrivService;
//
//    /**
//     * @Title:intoMainPage
//     * @Description TODO(进入首页). TODO(这里描述这个方法适用条件 – 可选). TODO(这里描述这个方法的执行流程 –
//     *              可选). TODO(这里描述这个方法的使用方法 – 可选). TODO(这里描述这个方法的注意事项 – 可选).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @return ModelAndView
//     */
//    @RequestMapping(value = "/{privcode}")
//    public ModelAndView intoMainPage(@PathVariable String privcode) {
//        return forword("module/system/sysrole/sysroleList");
//    }
//
//    /**
//     * @Title:loadByPage
//     * @Description TODO(根据条件查询权限数据结果集). TODO(这里描述这个方法适用条件 – 可选).
//     *              TODO(这里描述这个方法的执行流程 – 可选). TODO(这里描述这个方法的使用方法 – 可选).
//     *              TODO(这里描述这个方法的注意事项 – 可选).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @param rolename
//     *            角色名
//     * @param request
//     *            请求对象
//     * @return Map<String, Object> 返回数据结果集
//     */
//    @RequestMapping(value = "/list", method = RequestMethod.POST)
//    @ResponseBody
//    public Map<String, Object> loadByPage(@RequestParam String rolename,
//            HttpServletRequest request) {
//        try {
//            // 封装查询参数
//            Map<String, Object> params = new HashMap<String, Object>();
//            params.put("rolename", rolename);
//            params.put("usertype", "SYS");
//            PageBounds pageBounds = getPageBounds(request);
//            List<Map<String, Object>> rows = sysRoleService.loadByPage(params,
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
//     * @Description TODO(查看详细界面). TODO(这里描述这个方法适用条件 – 可选). TODO(这里描述这个方法的执行流程 –
//     *              可选). TODO(这里描述这个方法的使用方法 – 可选). TODO(这里描述这个方法的注意事项 – 可选).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @param id
//     *            角色ID
//     * @param model
//     *            model对象
//     * @return ModelAndView
//     */
//    @RequestMapping(value = "/display/{id}")
//    public ModelAndView display(@PathVariable String id, Model model) {
//        try {
//            SysRole sysRole = sysRoleService.loadById(id);
//            model.addAttribute("sysRole", sysRole);
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return forword("module/system/sysrole/sysroleDisplay");
//    }
//
//    /**
//     * @Title:add
//     * @Description TODO(进入新增页面). TODO(这里描述这个方法适用条件 – 可选). TODO(这里描述这个方法的执行流程 –
//     *              可选). TODO(这里描述这个方法的使用方法 – 可选). TODO(这里描述这个方法的注意事项 – 可选).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @return ModelAndView
//     */
//    @RequestMapping("/add")
//    public ModelAndView add() {
//        return forword("module/system/sysrole/sysroleAdd");
//    }
//
//    /**
//     * @Title:edit
//     * @Description TODO(进入编辑界面). TODO(这里描述这个方法适用条件 – 可选). TODO(这里描述这个方法的执行流程 –
//     *              可选). TODO(这里描述这个方法的使用方法 – 可选). TODO(这里描述这个方法的注意事项 – 可选).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @param id
//     *            角色ID
//     * @param model
//     *            model对象
//     * @return ModelAndView
//     */
//    @RequestMapping("/edit/{id}")
//    public ModelAndView edit(@PathVariable String id, Model model) {
//        try {
//            SysRole sysRole = sysRoleService.loadById(id);
//            model.addAttribute("sysRole", sysRole);
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return forword("module/system/sysrole/sysroleAdd");
//    }
//
//    /**
//     * @Title:save
//     * @Description TODO(新增或编辑). TODO(这里描述这个方法适用条件 – 可选). TODO(这里描述这个方法的执行流程 –
//     *              可选). TODO(这里描述这个方法的使用方法 – 可选). TODO(这里描述这个方法的注意事项 – 可选).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @param sysRole
//     *            角色
//     * @param request
//     *            请求对象
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/save", method = RequestMethod.POST)
//    public void save(@ModelAttribute SysRole sysRole,
//            HttpServletRequest request, HttpServletResponse response) {
//        sysRole.setUsertype("SYS");
//        SysUser sysUser = (SysUser) request.getSession().getAttribute(
//                Platform.SESSION_USER_KEY);
//        sysRole.setUpdateper(sysUser.getUsername());
//        sysRole.setUpdatetime(new Date());
//        if (StringUtils.isBlank(sysRole.getRoleid())) {
//            // 新增
//            try {
//                sysRole.setRoleid(UUIDGenerator.generate());
//                sysRoleService.save(sysRole);
//                sendSuccessMessage(response, "保存成功");
//            } catch (Exception e) {
//                sendFailureMessage(response, "保存失败!");
//                LOG.error(e.getMessage());
//                e.printStackTrace();
//            }
//        } else {
//            // 更新
//            try {
//                sysRoleService.update(sysRole);
//                sendSuccessMessage(response, "编辑成功");
//            } catch (Exception e) {
//                sendFailureMessage(response, "编辑失败!");
//                LOG.error(e.getMessage());
//                e.printStackTrace();
//            }
//        }
//    }
//
//    /**
//     * @Title:delete
//     * @Description TODO(批量删除). TODO(这里描述这个方法适用条件 – 可选). TODO(这里描述这个方法的执行流程 –
//     *              可选). TODO(这里描述这个方法的使用方法 – 可选). TODO(这里描述这个方法的注意事项 – 可选).
//     * @date 2016年01月14日
//     * @author xufeng
//     * @param ids
//     *            角色ID数组
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/delete", method = RequestMethod.POST)
//    public void delete(String[] ids, HttpServletResponse response) {
//        try {
//            String info = "删除成功!";
//            if (ids.length > 0) {
//                boolean flag = sysRoleService.deleteRoles(ids);
//                if (!flag) {
//                    info = "角色被引用不能删除！";
//                }
//                sendSuccessMessage(response, info);
//            }
//        } catch (Exception e) {
//            sendFailureMessage(response, "删除失败!");
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * 
//     * @Title:loadLinkById
//     * @Description TODO(查询是否有关联引用(角色权限、父权限关联)).
//     * @date 2016年4月15日
//     * @author yxx
//     * @param ids
//     *            角色ID数组
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/loadLinkById", method = RequestMethod.POST)
//    public void loadLinkById(String[] ids, HttpServletResponse response) {
//        try {
//            if (ids.length > 0) {
//                boolean flag = sysRoleService.hasRelation(ids);
//                if (flag) {
//                    sendFailureMessage(response, "角色被引用不能删除！");
//                } else {
//                    sendSuccessMessage(response, "角色无关联，可以删除！");
//                }
//            }
//        } catch (Exception e) {
//            sendFailureMessage(response, "查询角色关联出错!");
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * 
//     * @Title:loadLinkById
//     * @Description TODO(查询角色是否有非目标角色类型的权限，有则不可以改变角色的类型).
//     * @date 2016年4月15日
//     * @author yxx
//     * @param roleid
//     *            角色ID
//     * @param usertype
//     *            新选择的角色类型
//     * @param oldusertype
//     *            角色原来的角色类型
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/loadRolePrivLinkById", method = RequestMethod.POST)
//    public void loadRolePrivLinkById(String roleid, String usertype,
//            String oldusertype, HttpServletResponse response) {
//        Map<String, Object> result = new HashMap<String, Object>();
//        try {
//            if (usertype.equalsIgnoreCase(oldusertype)) {
//                result.put("valid", true); // 验证通过
//            } else {
//                // 封装查询参数
//                Map<String, Object> params = new HashMap<String, Object>();
//                params.put("roleid", roleid);
//                params.put("usertype", usertype);
//                boolean flag = sysRoleService.hasPrivsByUsertype(params);
//                if (flag) {
//                    result.put("valid", false); // 验证不通过
//                } else {
//                    result.put("valid", true); // 验证通过
//                }
//            }
//        } catch (Exception e) {
//            result.put("valid", false); // 验证不通过
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        HtmlUtil.writerJson(response, result);
//    }
//
//    /**
//     * 
//     * @Title:existsRole
//     * @Description TODO(判断角色名是否存在).
//     * @date 2016年4月14日
//     * @author yxx
//     * @param roleid
//     *            角色ID
//     * @param rolename
//     *            角色名称
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/existsRole", method = RequestMethod.POST)
//    public void existsRole(@RequestParam String roleid,
//            @RequestParam String rolename, HttpServletResponse response) {
//        // Map<String, Object> result = new HashMap<String, Object>();
//        try {
//            // 是否存在
//            boolean flag = sysRoleService.existsRole(roleid, rolename);
//            if (flag) {
//                // result.put("valid", false); // 验证不通过
//                HtmlUtil.writer(response, "false");
//            } else {
//                // result.put("valid", true); // 验证通过
//                HtmlUtil.writer(response, "true");
//            }
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            // result.put("valid", true); // 验证通过
//            HtmlUtil.writer(response, "true");
//            e.printStackTrace();
//        }
//        // HtmlUtil.writerJson(response, result);
//    }
//
//    /**
//     * 
//     * @Title:rolePriv
//     * @Description TODO(进入角色授权界面).
//     * @date 2016年4月15日
//     * @author yxx
//     * @param id
//     *            角色ID
//     * @param model
//     *            model对象
//     * @return ModelAndView
//     */
//    @RequestMapping("/rolePriv/{id}")
//    public ModelAndView rolePriv(@PathVariable String id, Model model) {
//        model.addAttribute("roleids", id);
//        return forword("module/system/sysrole/sysrolePriv");
//    }
//
//    /**
//     * 
//     * @Title:loadPrivOperTree
//     * @Description TODO(加载权限树).
//     * @date 2016年4月15日
//     * @author yxx
//     * @param ids
//     *            角色ID数组
//     * @return List<Map<String, Object>>
//     */
//    @RequestMapping(value = "/loadPrivOperTree", method = RequestMethod.GET)
//    @ResponseBody
//    public List<Map<String, Object>> loadPrivOperTree(String[] ids) {
//        try {
//            List<Map<String, Object>> treeList = lkRolePrivService
//                    .loadPrivTree(ids);
//            return treeList;
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return null;
//    }
//
//    /**
//     * @Title:saveRolePriv
//     * @Description TODO(保存角色授权信息).
//     * @date 2016年4月18日
//     * @author yxx
//     * @param ids
//     *            权限id数组
//     * @param roleids
//     *            角色id
//     * @param response
//     *            响应对象
//     */
//    @RequestMapping(value = "/saveRolePriv", method = RequestMethod.POST)
//    public void saveRolePriv(String[] ids, String roleids,
//            HttpServletResponse response) {
//        try {
//            if (ids != null && StringUtils.isNotBlank(roleids)) {
//                lkRolePrivService.saveRolePriv(ids, roleids);
//                sendSuccessMessage(response, "授权成功!");
//            }
//        } catch (Exception e) {
//            sendFailureMessage(response, "授权失败！");
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//    }
//
//    /**
//     * @Title:loadPrivTree
//     * @Description TODO(加载权限树).
//     * @date 2016年4月15日
//     * @author luyao
//     * @param ids
//     *            角色id数组
//     * @param usertype
//     *            用户类型
//     * @return List<Map<String, Object>>
//     */
//    @RequestMapping(value = "/privtree", method = RequestMethod.GET)
//    @ResponseBody
//    public List<Map<String, Object>> loadPrivTree(String[] ids, String usertype) {
//        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
//        try {
//            // 封装查询参数
//            Map<String, Object> params = new HashMap<String, Object>();
//            params.put("ids", ids);
//            params.put("usertype", usertype);
//            list = sysRoleService.loadPrivByid(params);
//        } catch (Exception e) {
//            LOG.error(e.getMessage());
//            e.printStackTrace();
//        }
//        return list;
//    }
//}

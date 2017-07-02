/**   
 * Project Name:platform_framework
 * File Name:VelocityToolbox2View.java
 * Package Name:com.zwsafety.platform.framework
 * Date:2015年7月6日上午13:59:04 
 * Copyright (c) 2015,zwsafety All Rights Reserved.   
 */
package com.fastwork.platform.framework;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.velocity.context.Context;
import org.apache.velocity.tools.Scope;
import org.apache.velocity.tools.ToolManager;
import org.apache.velocity.tools.view.ViewToolContext;
import org.springframework.web.servlet.view.velocity.VelocityToolboxView;

/**
 * @ClassName:VelocityToolbox2View
 * @Description:TODO(spring3.x支持 velocity tools 2.x)
 * @date:2015年7月6日 下午1:59:22
 * @author peijun
 * @version 1.0
 * @since JDK 1.6
 */
public class VelocityToolbox2View extends VelocityToolboxView {

    /**
     * @Title createVelocityContext
     * @Description TODO(创建Velocity内容)
     * @date 2015年7月6日 下午1:59:39
     * @author peijun
     * @param model
     *            对象
     * @param request
     *            请求对象
     * @param response
     *            响应对象
     * @return Context
     * @throws Exception
     *             异常
     * @see org.springframework.web.servlet.view.
     *      velocity.VelocityToolboxView#createVelocityContext(java.util.Map,
     *      javax.servlet.http.HttpServletRequest,
     *      javax.servlet.http.HttpServletResponse)
     */
    protected Context createVelocityContext(Map<String, Object> model,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception { // Create a
                               // ChainedContext
                               // instance.
        ViewToolContext ctx;

        ctx = new ViewToolContext(getVelocityEngine(), request, response,
                getServletContext());

        ctx.putAll(model);

        if (this.getToolboxConfigLocation() != null) {
            ToolManager tm = new ToolManager();
            tm.setVelocityEngine(getVelocityEngine());
            tm.configure(getServletContext().getRealPath(
                    getToolboxConfigLocation()));
            if (tm.getToolboxFactory().hasTools(Scope.REQUEST)) {
                ctx.addToolbox(tm.getToolboxFactory().createToolbox(
                        Scope.REQUEST));
            }
            if (tm.getToolboxFactory().hasTools(Scope.APPLICATION)) {
                ctx.addToolbox(tm.getToolboxFactory().createToolbox(
                        Scope.APPLICATION));
            }
            if (tm.getToolboxFactory().hasTools(Scope.SESSION)) {
                ctx.addToolbox(tm.getToolboxFactory().createToolbox(
                        Scope.SESSION));
            }
        }
        return ctx;
    }
}

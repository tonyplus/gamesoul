package com.fastwork.platform.base;

import java.util.List;

import tk.mybatis.mapper.entity.Condition;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;

/**
 * @Title:BaseService接口
 * @Description:baseService接口，提供基本的service
 * @date:2016.7.14
 * @author xufeng
 */
public interface BaseService<T> {

    /**
     * @Title:loadBaseById查询
     * @Description 根据主键ID查询信息
     * @date 2016.7.14
     * @author xufeng
     * @param key
     *            主键id
     * @throws Exception
     *             异常
     */
    public T loadBaseById(Object key) throws Exception;

    /**
     * @Title:loadBaseList查询结果集
     * @Description 根据查询条件查询结果集
     * @date 2016.7.14
     * @author xufeng
     * @param condition
     *            封装的查询条件
     * @throws Exception
     *             异常
     */
    public List<T> loadBaseList(Condition condition) throws Exception;

    /**
     * @Title:loadBasePage分页查询结果集
     * @Description 根据查询条件分页查询结果集
     * @date 2016.7.14
     * @author xufeng
     * @param condition
     *            封装的查询条件
     * @param pageBounds
     *            封装的分页信息
     * @throws Exception
     *             异常
     */
    public List<T> loadBasePage(Condition condition, PageBounds pageBounds)
            throws Exception;

    /**
     * @Title:saveBase保存
     * @Description 保存
     * @date 2016.7.14
     * @author xufeng
     * @param record
     *            实体信息
     *            
     * @throws Exception
     *             异常
     */
    public void saveBase(T record) throws Exception;
    
    /**
     * @Title:saveBase保存
     * @Description 保存
     * @date 2016.7.14
     * @author xufeng
     * @param record
     *            实体信息
     * @param isAll
     *            是否保存null值。true保存null，false不保存null
     * @throws Exception
     *             异常
     */
    public void saveBase(T record, boolean isAll) throws Exception;

    /**
     * @Title:updateBase更新
     * @Description 更新
     * @date 2016.7.14
     * @author xufeng
     * @param record
     *            实体信息
     * @throws Exception
     *             异常
     */
    public void updateBase(T record) throws Exception;
    
    /**
     * @Title:updateBase更新
     * @Description 更新
     * @date 2016.7.14
     * @author xufeng
     * @param record
     *            实体信息
     * @param isAll
     *            是否更新null值。true更新null，false不更新null
     * @throws Exception
     *             异常
     */
    public void updateBase(T record, boolean isAll) throws Exception;

    /**
     * @Title:deleteBase删除
     * @Description 根据ID删除信息
     * @date 2016.7.14
     * @author xufeng
     * @param key
     *            主键ID
     * @throws Exception
     *             异常
     */
    public void deleteBase(Object key) throws Exception;

}

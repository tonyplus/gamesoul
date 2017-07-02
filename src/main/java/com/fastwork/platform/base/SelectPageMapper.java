package com.fastwork.platform.base;

import java.util.List;

import org.apache.ibatis.annotations.SelectProvider;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;

/**
 * 分页SelectPageMapper
 * @author xufeng
 *
 * @param <T>
 */
public interface SelectPageMapper<T> {
	 /**
     * 通用分页查询
     *
     * @param condition 查询条件
     * @param pageBounds 分页信息
     * @return
     */
    @SelectProvider(type = BasePageProvider.class, method = "dynamicSQL")
    List<T> selectBasePage(Object condition,PageBounds pageBounds);
}

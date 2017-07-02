package com.fastwork.platform.base;

import tk.mybatis.mapper.common.base.BaseDeleteMapper;
import tk.mybatis.mapper.common.base.BaseInsertMapper;
import tk.mybatis.mapper.common.base.BaseUpdateMapper;
import tk.mybatis.mapper.common.base.select.SelectAllMapper;
import tk.mybatis.mapper.common.base.select.SelectByPrimaryKeyMapper;
import tk.mybatis.mapper.common.condition.SelectByConditionMapper;
import tk.mybatis.mapper.common.condition.SelectCountByConditionMapper;

/**
 * baseMapper
 * 
 * @author xufeng
 *
 * @param <T>
 */
public interface BaseMapper<T> extends BaseInsertMapper<T>,
        BaseUpdateMapper<T>, BaseDeleteMapper<T>, SelectAllMapper<T>,
        SelectByPrimaryKeyMapper<T>, SelectByConditionMapper<T>,
        SelectCountByConditionMapper<T>, SelectPageMapper<T> {
}

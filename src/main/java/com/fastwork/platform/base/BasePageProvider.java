package com.fastwork.platform.base;

import org.apache.ibatis.mapping.MappedStatement;

import tk.mybatis.mapper.mapperhelper.MapperHelper;
import tk.mybatis.mapper.mapperhelper.MapperTemplate;
import tk.mybatis.mapper.provider.ExampleProvider;

/**
 * 分页BasePageProvider
 * @author xufeng
 *
 */
public class BasePageProvider extends MapperTemplate {

	private ExampleProvider exampleProvider;
    public BasePageProvider(Class<?> mapperClass, MapperHelper mapperHelper) {
        super(mapperClass, mapperHelper);
        exampleProvider = new ExampleProvider(mapperClass, mapperHelper);
    }

    public String selectBasePage(MappedStatement ms){
    	return exampleProvider.selectByExample(ms);
    }
}

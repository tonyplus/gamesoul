package com.fastwork.platform.entity;

/**
* @ClassName:MirsationBean 
* @Description:TODO(用一句话描述该文件做什么) 
* @date:2017年1月11日 
* @author  luyao  
* @version   1.0
* @since  JDK 1.7
 */
public class Mirsation {

    //访问错误信息
    public String Message;
    //返回错误信息
    public String ErrorMessage;
    //返回数据
    public Object KeyValue;
    //状态
    public boolean Result;
    
    
    
    public String getMessage() {
    
        return Message;
    }
    public void setMessage(String message) {
    
        Message = message;
    }
    public String getErrorMessage() {
    
        return ErrorMessage;
    }
    public void setErrorMessage(String errorMessage) {
    
        ErrorMessage = errorMessage;
    }
    public boolean isResult() {
    
        return Result;
    }
    public void setResult(boolean result) {
    
        Result = result;
    }
    public Object getKeyValue() {
    
        return KeyValue;
    }
    public void setKeyValue(Object keyValue) {
    
        KeyValue = keyValue;
    }
    
}

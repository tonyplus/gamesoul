package com.fastwork.platform.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.Reader;
import java.sql.Clob;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fastwork.module.system.entity.SysPriv;
import com.fastwork.platform.entity.Platform;

public class BaseTool {
	
	 /**
	  * 生成mirs菜单
	  * @param menus
	  * @param path
	  * @return
	  */
	 public String createMirsMenu(List<SysPriv> menus,String path){
	    	Map<String,Object> root=new HashMap<String, Object>();
	    	//生成菜单
	    	List<Map<String,Object>> firstArray=new ArrayList<Map<String,Object>>();
	    	Map<String,Object> firstmap=null;
	    	List<Map<String,Object>> secondArray=null;
	    	Map<String,Object> secondmap=null;
	    	List<Map<String,Object>> thirdArray=null;
	    	Map<String,Object> thirdmap=null;
	    	for(SysPriv sysPriv1:menus){
	    		if("1".equals(sysPriv1.getPrivlevel())){//一级菜单
	    			firstmap=new HashMap<String, Object>();
	    			//firstmap.put("Icon", "images/classOneIcon.png");
	    			firstmap.put("Icon", path+"/images/theme/blue/menu/"+sysPriv1.getPrivimg()+".png");
	    			
	    			firstmap.put("Code", sysPriv1.getPrivid());
	    			firstmap.put("Caption", sysPriv1.getPrivname());
	    			firstmap.put("Description", sysPriv1.getPrivname());
	    			
	    			//二级菜单
	    			secondArray=new ArrayList<Map<String,Object>>();
	    			for(SysPriv sysPriv2:menus){
	    				if(sysPriv1.getPrivid().equals(sysPriv2.getParentid())){
	    					secondmap=new HashMap<String, Object>();
	    					secondmap.put("Icon", "a1.png");
	    					secondmap.put("Code", sysPriv2.getPrivid());
	    					secondmap.put("Caption", sysPriv2.getPrivname());
	    					secondmap.put("Description", sysPriv2.getPrivname());
	    					
	    					//三级菜单
	    					thirdArray=new ArrayList<Map<String,Object>>();
	    					for(SysPriv sysPriv3:menus){
	    						if(sysPriv2.getPrivid().equals(sysPriv3.getParentid())){
	    						    thirdmap=new HashMap<String, Object>();
	    						    //判断内部链接和外部链接
	    						    if(sysPriv3.getPrivtype().equals(Platform.SYSTEM_PRIVURL_INSIDE)){
	    						        thirdmap.put("RunUrl", path+sysPriv3.getPrivurl());
	    						    }
	    						    if(sysPriv3.getPrivtype().equals(Platform.SYSTEM_PRIVURL_EXTERNAL)){
	    						        thirdmap.put("RunUrl", sysPriv3.getPrivurl());
	    						    }
	    	    					thirdmap.put("IconClassName", "");
	    	    					thirdmap.put("NavClassName", "");
	    	    					thirdmap.put("RunTarget", "");
	    	    					thirdmap.put("IsSingleton", true);
	    	    					thirdmap.put("HelpUrl", "帮助地址");
	    	    					thirdmap.put("MinVisible", 0);
	    	    					thirdmap.put("OwnershipUnit", "游魂网咯研发中心");
	    	    					//thirdmap.put("Icon", "images/文档/更新说明.png");
	    	    					thirdmap.put("Icon", path+"/images/theme/blue/menu/"+sysPriv3.getPrivimg()+".png");
	    	    					thirdmap.put("FontColor", "");
	    	    					thirdmap.put("BackgroundColor", "");
	    	    					thirdmap.put("ParmsExpression", "参数3");
	    	    					thirdmap.put("Tags", "测试3");
	    	    					thirdmap.put("Code", sysPriv3.getPrivid());
	    	    					thirdmap.put("Caption", sysPriv3.getPrivname());
	    	    					thirdmap.put("Description", sysPriv3.getPrivname());
	    	    					thirdArray.add(thirdmap);
	    						}
	    					}
	    					secondmap.put("SubNodes", thirdArray);
	    					secondArray.add(secondmap);
	    				}
	    			}
	    			firstmap.put("SubNodes", secondArray);
	    			firstArray.add(firstmap);
	    		}
	    	}
	    	root.put("Icon", null);
	    	root.put("Code", "00000000-0000-0000-0000-000000000000");
	    	root.put("Caption", "");
	    	root.put("Description","");
	    	root.put("SubNodes", firstArray);
	    	
	    	return JSONUtil.obj2json(root);
	    	
	    }

	/**
	 * clob转为字符串
	 * @param clob
	 * @return
	 */
    public String clob2String(Clob clob){
    	String reString = "";
    	if(null!=clob){
	    	Reader is = null;
	    	BufferedReader br = null;
			try {
				is = clob.getCharacterStream();
				br = new BufferedReader(is);
		    	String s = br.readLine();
		    	StringBuffer sb = new StringBuffer();
		    	while (s != null) {// 执行循环将字符串全部取出付值给StringBuffer由StringBuffer转成STRING
		    		sb.append(s);
		    		s = br.readLine();
		    	}
		    	reString = sb.toString();
			} catch (Exception e) {
				e.printStackTrace();  
			}finally{
				try {
					if(null!=is){
						is.close();
					}
					if(null!=br){
						br.close();
					}
				} catch (IOException e) {
					e.printStackTrace();  
				}
			}
    	}
		return reString;
    }
    
    /**
     * 获得文件名
     * @param path
     * @return
     */
    public String getFileName(String path){
    	if(path!=null){
    		return path.substring(path.lastIndexOf("\\")+1);
    	}else{
    		return "";
    	}
    }
}

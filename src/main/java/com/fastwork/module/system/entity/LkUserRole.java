package com.fastwork.module.system.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
 /**  
* @Description:用户角色关联实体类
* @date:2017年7月1日 
* @author  xufeng  
* @version   1.0
* @since  JDK 1.7  
*/
@Table(name = "lk_user_role")
public class LkUserRole implements Serializable {
    /**  
    * @Fields serialVersionUID:TODO(UID).  
    */
	private static final long serialVersionUID = 1L;

	/**	* @Fields conid:TODO().	*/
	@Id
	@Column(name="conid")
	@GeneratedValue(generator = "UUID")	private String conid;		/**	* @Fields roleid:TODO(角色主键).	*/	private String roleid;		/**	* @Fields userid:TODO(用户id).	*/	private String userid;			/**	* @return the conid	*/	public String getConid() {	    return this.conid;	}		/**	* @param conid the conid to set	*/	public void setConid(String conid) {	    this.conid = conid;	}		/**	* @return the roleid	*/	public String getRoleid() {	    return this.roleid;	}		/**	* @param roleid the roleid to set	*/	public void setRoleid(String roleid) {	    this.roleid = roleid;	}		/**	* @return the userid	*/	public String getUserid() {	    return this.userid;	}		/**	* @param userid the userid to set	*/	public void setUserid(String userid) {	    this.userid = userid;	}	
}


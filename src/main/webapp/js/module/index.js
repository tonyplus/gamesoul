$(function(){
	var iIndex=layer.load();
	//初始化菜单
	initMenu();
	layer.close(iIndex);
	
});
function initMenu(){
    //隐藏所有的二级菜单
    $('li[lid^=menu2_]').each(function(){
    	$(this).hide();
	});
	
	//显示第一个一级菜单
	var fistMenu=$('img',$('.subnav2 li:first'));
	fistMenu.attr('clicked','true');
	var privid= fistMenu.attr('privid');
	//显示第一个一级菜单下的所有二级菜单
	$('li[lid=menu2_'+privid+']').each(function(){
		$(this).show();
	});
}

/*点击一级菜单*/
function menuClick1(obj){
	if($('img',obj).attr('clicked')!='true'){
		//隐藏之前的二级菜单
		var oldClick=$('.subnav2 img[clicked=true]');//之前被选中一级菜单
		$('li[lid=menu2_'+oldClick.attr('privid')+']').each(function(){
			$(this).hide();
		});
		oldClick.attr('clicked','false');//取消之前被选中的一级菜单
		//显示二级菜单
		$('li[lid=menu2_'+$('img',obj).attr('privid')+']').each(function(){
			$(this).show();
		});
		//设置当前菜单选中
		$('img',obj).attr('clicked',true);
		//$('#iframe').attr('src',BASE_URL+'/index/welcome');
	}
}

/*修改密码*/
function resetpw(){
	parent.openWin(BASE_URL+'/login/resetpw','密码修改', "25%", "30%");
}

/* 账户信息 */
var _accountPageFrm = null;
function account(){
    if (_accountPageFrm && document.getElementById("accountFrm")) {
    	_accountPageFrm.show();
    } else {
        var app = window.Mirs.Application.getInstance();
        var cwin = app.getWorkControl().getMdiControl().createChildWindow();
        var iframeEle = document.createElement("iframe");
        iframeEle.src = BASE_URL+'/system/sysuser/account';
        iframeEle.style.width = "100%";
        iframeEle.style.height = "100%";
        iframeEle.id = "accountFrm";
        cwin.setIframeElement(iframeEle);
        cwin.getContainer().appendChild(iframeEle);
        _accountPageFrm = null;
        cwin.setCaption("账户");

        cwin.show();
        _accountPageFrm = cwin;
    }
};

/*系统退出*/
function logout(){
	//弹出提示框
	parent.confirm('确认退出吗?',function(){
		window.location.href=BASE_URL+"/login/logout";
	 });
}

/*系统退出*/
function logout_mirs(){
	//弹出提示框
	parent.confirm('确认退出吗?',function(){
		window.location.href=BASE_URL+"/login/logout_mirs";
	 });
}

/**
 * 获取当前iframe
 */
function getActiveIFrame(){
	//通过判断当前默认皮肤来判断版本
	if($('#theme_current').val()){
		var mdi = Mirs.Navigation.MDIControl.getInstance().getActiveMdiChild();
		//debugger;
		var iframe=mdi.children[1].children[0];
		return iframe.contentWindow;
	}else{
		return $(".J_iframe:visible")[0].contentWindow;
	}
}

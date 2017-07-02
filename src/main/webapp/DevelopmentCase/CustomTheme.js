!function () {
    //初始化名称空间
    window.CurProject = window.CurProject || {};


    //实现
    if (window.CurProject.CustomTheme) throw new Error('CurProject.CustomTheme 类重复加载');
    var curProjectCustomTheme = window.CurProject.CustomTheme = function () {
        this._masterElement = null;
      
    }
    var _curProjectCustomTheme = null;
    //获得 CurProject.CustomTheme 实例
    curProjectCustomTheme.getInstance = function () {
        var rtn = null;
        if (_curProjectCustomTheme == null) {
            rtn = new window.CurProject.CustomTheme();
            _curProjectCustomTheme = rtn;
        }
        else {
            rtn = _curProjectCustomTheme;
        }
        return rtn;
    }
    curProjectCustomTheme.Create = function () {
        var ins = new CurProject.CustomTheme();
      
        return ins;
    }
	var xmlHttpRequest = null;
    //加载用户主题 必须有 主题文件夹加入MirsThemes文件夹内
    curProjectCustomTheme.prototype.LoadUserTheme = function (callBackFunc) {
        var app = window.Mirs.Application.getInstance();
		var org = app.AuthInfo.Organization;
        var loginid = app.AuthInfo.LoginID;
		//请求服务端读取当前用户的主题配置 如果使用了JQuery那么就可以使用自带的函数实现，这里是简单写了一下
        callBackFunc($("#theme_current").val());//传入主题名 必须有
        /*
		if(window.ActiveXObject) // IE浏览器
        {
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else if(window.XMLHttpRequest) // 除IE以外的其他浏览器
        {
            xmlHttpRequest = new XMLHttpRequest();
        }
        if(null != xmlHttpRequest)
        {                      
            // 准备向服务器发出一个请求          
            xmlHttpRequest.open("GET", "Page/ReadUserTheme.jsp", true);
            // 当发生状态变化时就调用这个回调函数
            xmlHttpRequest.onreadystatechange = function()
			{
				if(xmlHttpRequest.readyState == 4)
				{
					if(xmlHttpRequest.status == 200)
					{
						var content = xmlHttpRequest.responseText;
						callBackFunc(content);//传入主题名 必须有
					}
				}
			};
            // 向服务器发出一个请求
            xmlHttpRequest.send(null);    
        }
		*/
        
    }
    //保存用户主题 必须有 可自定义主题保存方式
    curProjectCustomTheme.prototype.SaveUserTheme = function (selectThemeName, callBackFunc) {       
        var app = window.Mirs.Application.getInstance();
		var org = app.AuthInfo.Organization;
        var loginid = app.AuthInfo.LoginID;
       
		
		//请求服务端写当前用户的主题配置 如果使用了JQuery那么就可以使用自带的函数实现，这里是简单写了一下
		if(window.ActiveXObject) // IE浏览器
        {
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else if(window.XMLHttpRequest) // 除IE以外的其他浏览器
        {
            xmlHttpRequest = new XMLHttpRequest();
        }
        if(null != xmlHttpRequest)
        {                      
            // 准备向服务器发出一个请求          
            xmlHttpRequest.open("GET", "index/theme/"+selectThemeName, true);
			
            // 当发生状态变化时就调用这个回调函数
            xmlHttpRequest.onreadystatechange = function()
			{
				if(xmlHttpRequest.readyState == 4)
				{
					if(xmlHttpRequest.status == 200)
					{
						var content = xmlHttpRequest.responseText;
						 var rtn = selectThemeName;
						 callBackFunc(rtn);//必须有
					}
				}
			};
            // 向服务器发出一个请求
            xmlHttpRequest.send(null);  
            $('#theme_current').val(selectThemeName);
        }
		
        
    }
    
	
    
    

}()
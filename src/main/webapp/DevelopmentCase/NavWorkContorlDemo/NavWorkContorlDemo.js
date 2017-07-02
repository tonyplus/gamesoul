!function () {
    //初始化名称空间
    window.CurProject = window.CurProject || {};

    if (window.CurProject.workD) throw new Error('CurProject.workD 类重复加载');
    var uc = window.CurProject.workD = function () {
    };
    uc.dbing = function (instance, method) {
        return function () {
            return method.apply(instance, arguments);
        }
    };
    //事件通用函数
    uc.addHandler = function (element, eventName, handler) {

        if (element.addEventListener) {

            element.addEventListener(eventName, handler, false);

        }
        else if (element.attachEvent) {

            element.attachEvent('on' + eventName, handler);
        }
    };
    uc.ah = uc.addHandler;
}();

!function (g) {
    //TODO:自动生成部分 史家欢 2016-11-28

    //初始化名称空间
    window.workControl = window.workControl || {};


    //实现
    if (window.workControl.Demo) throw new Error('workControl.Demo 类重复加载');
    var workControlDemo = window.workControl.Demo = function () {
        this._masterElement = null;
    }
    var _workControlDemo = null;
    //获得 workControl.Demo 实例
    workControlDemo.getInstance = function () {
        var rtn = null;
        if (_workControlDemo == null) {
            rtn = new window.workControl.Demo();
            _workControlDemo = rtn;
        }
        else {
            rtn = _workControlDemo;
        }
        return rtn;
    }

    workControlDemo.prototype.create = function () {

        var rwFuncTitle = document.getElementById("rwFuncTitle");
        rwFuncTitle.style.display = "none";

        var headEmt = document.getElementsByTagName("head")[0];
        var linkEmt = document.createElement("link");
        linkEmt.href = "DevelopmentCase/NavWorkContorlDemo/NavWorkContorlDemo.css";
        linkEmt.rel = "stylesheet";
        linkEmt.type = "text/css";
        headEmt.appendChild(linkEmt);

        //自定义工具条
        var rwTitleCustom = document.getElementById("rwTitle");
        rwTitleCustom.style.backgroundImage = "none";

        var rwTitleTools = document.createElement("div");
        rwTitleTools.className = "rwTitleTools";
        rwTitleTools.id = "rwTitleTools";
        rwTitleCustom.appendChild(rwTitleTools);

        var rwHomeBtn = document.createElement("div");
        rwHomeBtn.className = "rwHomeBtn";
        rwHomeBtn.addEventListener("click", rwHomeBtnP, false);
        rwTitleCustom.appendChild(rwHomeBtn);

        
        //地图平台
        /*if($("#sysorg").val()){
	        var rwTCpartNews = document.createElement("div");
	        rwTCpartNews.className = "rwTCpart";
	        rwTCpartNews.id = "rwTCpartNews";
	        rwTCpartNews.addEventListener("click", showMap, false);
	        rwTCpartNews.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/gis.png)";
        }*/
        /*var rwTCpartTHContant = document.createElement("div");
        rwTCpartTHContant.className = "rwTCpartA";
        rwTCpartTHContant.id = "rwTCpartC";
        var rwTCpartNarow = document.createElement("div");
        rwTCpartNarow.className = "rwTCpartNarow";
        rwTCpartTHContant.appendChild(rwTCpartNarow);
        rwTitleTools.appendChild(rwTCpartTHContant);

        var NewsPortal = document.createElement("div");
        NewsPortal.className = "rwTCpartcontant";
        var NewsPIcon = document.createElement("div");
        NewsPIcon.className = "rwTCIcon";
        NewsPIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/集团首页.png)";
        var NewsPInfo = document.createElement("div");
        NewsPInfo.className = "rwTCInfo";
        NewsPInfo.innerHTML = "集团首页";
        NewsPortal.appendChild(NewsPIcon);
        NewsPortal.appendChild(NewsPInfo);

        var NewsMessage = document.createElement("div");
        NewsMessage.className = "rwTCpartcontant";
        var NewsMIcon = document.createElement("div");
        NewsMIcon.className = "rwTCIcon";
        NewsMIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/消息摘要.png)";
        var NewsMInfo = document.createElement("div");
        NewsMInfo.className = "rwTCInfo";
        NewsMInfo.innerHTML = "消息摘要";
        NewsMessage.appendChild(NewsMIcon);
        NewsMessage.appendChild(NewsMInfo);

        var NewsAttention = document.createElement("div");
        NewsAttention.className = "rwTCpartcontant";
        var NewsAIcon = document.createElement("div");
        NewsAIcon.className = "rwTCIcon";
        NewsAIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/关注.png)";
        var NewsAInfo = document.createElement("div");
        NewsAInfo.className = "rwTCInfo";
        NewsAInfo.innerHTML = "关注";
        NewsAttention.appendChild(NewsAIcon);
        NewsAttention.appendChild(NewsAInfo);

        var NewsMail = document.createElement("div");
        NewsMail.className = "rwTCpartcontant";
        var NewsMIcon = document.createElement("div");
        NewsMIcon.className = "rwTCIcon";
        NewsMIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/邮件.png)";
        var NewsMInfo = document.createElement("div");
        NewsMInfo.className = "rwTCInfo";
        NewsMInfo.innerHTML = "邮件";
        NewsMail.appendChild(NewsMIcon);
        NewsMail.appendChild(NewsMInfo);

        var NewsCollection = document.createElement("div");
        NewsCollection.className = "rwTCpartcontant";
        var NewsCIcon = document.createElement("div");
        NewsCIcon.className = "rwTCIcon";
        NewsCIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/收藏.png)";
        var NewsCInfo = document.createElement("div");
        NewsCInfo.className = "rwTCInfo";
        NewsCInfo.innerHTML = "收藏";
        NewsCollection.appendChild(NewsCIcon);
        NewsCollection.appendChild(NewsCInfo);

        rwTCpartTHContant.appendChild(NewsPortal);
        rwTCpartTHContant.appendChild(NewsMessage);
        rwTCpartTHContant.appendChild(NewsAttention);
        rwTCpartTHContant.appendChild(NewsMail);
        rwTCpartTHContant.appendChild(NewsCollection);*/


        //用户信息（2）
        /*var rwTCpartInfo = document.createElement("div");
        rwTCpartInfo.className = "rwTCpart";
        rwTCpartInfo.id = "rwTCpartInfo";
        rwTCpartInfo.addEventListener("click", rwTCpartInfoP, false);
        rwTCpartInfo.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/info.png)";

        var rwTCpartTContant = document.createElement("div");
        rwTCpartTContant.className = "rwTCpartB";
        rwTCpartTContant.id = "rwTCpartB";
        var rwTCpartIarow = document.createElement("div");
        rwTCpartIarow.className = "rwTCpartIarow";
        rwTCpartTContant.appendChild(rwTCpartIarow);
        rwTitleTools.appendChild(rwTCpartTContant);

        var infoProgressA = document.createElement("div");
        infoProgressA.className = "rwTCpartcontantA";
        var infoPno = document.createElement("div");
        infoPno.className = "infoPno";
        infoPno.innerHTML = "华润燃气施工进度";
        var infoNInfo = document.createElement("div");
        infoNInfo.className = "infoPvalue";
        infoNInfo.innerHTML = "60%";
        var infoProgressBar = document.createElement("div");
        infoProgressBar.className = "infoProgressBar";
        var infoPBbar = document.createElement("div");
        infoPBbar.className = "infoPBbar";
        infoPBbar.style.width = "60%";
        infoPBbar.style.backgroundColor = "#56bfff";
        infoProgressBar.appendChild(infoPBbar);

        infoProgressA.appendChild(infoPno);
        infoProgressA.appendChild(infoNInfo);
        infoProgressA.appendChild(infoProgressBar);

        var infoProgressB = document.createElement("div");
        infoProgressB.className = "rwTCpartcontantA";
        var infoPno = document.createElement("div");
        infoPno.className = "infoPno";
        infoPno.innerHTML = "浑南区水利项目完成情况";
        var infoNInfo = document.createElement("div");
        infoNInfo.className = "infoPvalue";
        infoNInfo.innerHTML = "80%";
        var infoProgressBar = document.createElement("div");
        infoProgressBar.className = "infoProgressBar";
        var infoPBbar = document.createElement("div");
        infoPBbar.className = "infoPBbar";
        infoPBbar.style.width = "80%";
        infoPBbar.style.backgroundColor = "#5cb85c";
        infoProgressBar.appendChild(infoPBbar);

        infoProgressB.appendChild(infoPno);
        infoProgressB.appendChild(infoNInfo);
        infoProgressB.appendChild(infoProgressBar);

        var infoProgressC = document.createElement("div");
        infoProgressC.className = "rwTCpartcontantA";
        var infoPno = document.createElement("div");
        infoPno.className = "infoPno";
        infoPno.innerHTML = "长春燃气项目完成情况";
        var infoNInfo = document.createElement("div");
        infoNInfo.className = "infoPvalue";
        infoNInfo.innerHTML = "20%";
        var infoProgressBar = document.createElement("div");
        infoProgressBar.className = "infoProgressBar";
        var infoPBbar = document.createElement("div");
        infoPBbar.className = "infoPBbar";
        infoPBbar.style.width = "20%";
        infoPBbar.style.backgroundColor = "#ca2828";
        infoProgressBar.appendChild(infoPBbar);

        infoProgressC.appendChild(infoPno);
        infoProgressC.appendChild(infoNInfo);
        infoProgressC.appendChild(infoProgressBar);

        var infoProAll = document.createElement("div");
        infoProAll.className = "infoProAll";
        infoProAll.innerHTML = "查看全部>>";

        rwTCpartTContant.appendChild(infoProgressA);
        rwTCpartTContant.appendChild(infoProgressB);
        rwTCpartTContant.appendChild(infoProgressC);
        rwTCpartTContant.appendChild(infoProAll);*/

        if($("#sysorg").val()){
        //行政区划
        var rwTCpartAlarm = document.createElement("div");
        rwTCpartAlarm.className = "rwTCpart";
        rwTCpartAlarm.id = "rwTCpartAlarm";
        rwTCpartAlarm.addEventListener("click", rwTCpartAlarmP, false);
        rwTCpartAlarm.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/xzqy.png)";

        var rwTCpartOContant = document.createElement("div");
        rwTCpartOContant.className = "rwTCpartC";
        rwTCpartOContant.id = "rwTCpartA";
        
        var OrderDoing = document.createElement("div");
        OrderDoing.className = "ztree";
        OrderDoing.id = "districttree";
        OrderDoing.addEventListener("click", null, false);
        var OrderDoingIcon = document.createElement("div");
        OrderDoingIcon.className = "rwTCIcon";
        OrderDoingIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/设备报警.png)";
        OrderDoingInfo = document.createElement("div");
        OrderDoingInfo.className = "rwTCInfo";
        OrderDoingInfo.innerHTML = "行政区划";
        OrderDoing.appendChild(OrderDoingIcon);
        OrderDoing.appendChild(OrderDoingInfo);
        
        rwTCpartOContant.appendChild(OrderDoing);
        
        /*var rwTCpartAarow = document.createElement("div");
        rwTCpartAarow.className = "rwTCpartAarow";
        rwTCpartOContant.appendChild(rwTCpartAarow);*/
        rwTitleTools.appendChild(rwTCpartOContant);
        }
        /*var AlarmUser = document.createElement("div");
        AlarmUser.className = "rwTCpartcontant";
        var AlarmUIcon = document.createElement("div");
        AlarmUIcon.className = "rwTCIcon";
        AlarmUIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/用户报警.png)";
        var AlarmUInfo = document.createElement("div");
        AlarmUInfo.className = "rwTCInfo";
        AlarmUInfo.innerHTML = "用户报警";
        AlarmUser.appendChild(AlarmUIcon);
        AlarmUser.appendChild(AlarmUInfo);

        var AlarmStation = document.createElement("div");
        AlarmStation.className = "rwTCpartcontant";
        var AlarmSIcon = document.createElement("div");
        AlarmSIcon.className = "rwTCIcon";
        AlarmSIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/场站报警.png)";
        var AlarmSInfo = document.createElement("div");
        AlarmSInfo.className = "rwTCInfo";
        AlarmSInfo.innerHTML = "场站报警";
        var AlarmSPush = document.createElement("div");
        AlarmSPush.className = "pushPointcontent";
        var pushPoint = document.createElement("div");
        pushPoint.className = "pushPoint";
        pushPoint.innerHTML = "3";
        AlarmSPush.appendChild(pushPoint);

        AlarmStation.appendChild(AlarmSIcon);
        AlarmStation.appendChild(AlarmSInfo);
        AlarmStation.appendChild(AlarmSPush);

        var AlarmEquipment = document.createElement("div");
        AlarmEquipment.className = "rwTCpartcontant";
        var AlarmEIcon = document.createElement("div");
        AlarmEIcon.className = "rwTCIcon";
        AlarmEIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/设备报警.png)";
        var AlarmEInfo = document.createElement("div");
        AlarmEInfo.className = "rwTCInfo";
        AlarmEInfo.innerHTML = "设备报警";
        AlarmEquipment.appendChild(AlarmEIcon);
        AlarmEquipment.appendChild(AlarmEInfo);

        var OrderNone = document.createElement("div");
        OrderNone.className = "rwTCpartcontant";
        OrderNone.addEventListener("click", orderNone, false);
        var OrderNIcon = document.createElement("div");
        OrderNIcon.className = "rwTCIcon";
        OrderNIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/设备报警.png)";
        var OrderNInfo = document.createElement("div");
        OrderNInfo.className = "rwTCInfo";
        OrderNInfo.innerHTML = "未处理订单";
        OrderNone.appendChild(OrderNIcon);
        OrderNone.appendChild(OrderNInfo);*/

       
/*        var OrderDone = document.createElement("div");
        OrderDone.className = "rwTCpartcontant";
        OrderDone.addEventListener("click", orderDone, false);
        var OrderDIcon = document.createElement("div");
        OrderDIcon.className = "rwTCIcon";
        OrderDIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/设备报警.png)";
        var OrderDInfo = document.createElement("div");
        OrderDInfo.className = "rwTCInfo";
        OrderDInfo.innerHTML = "已完成订单";
        OrderDone.appendChild(OrderDIcon);
        OrderDone.appendChild(OrderDInfo);*/

        //rwTCpartOContant.appendChild(OrderNone);
        
        //rwTCpartOContant.appendChild(OrderDone);
        //rwTCpartOContant.appendChild(AlarmUser);
        //rwTCpartOContant.appendChild(AlarmStation);
        //rwTCpartOContant.appendChild(AlarmEquipment);
       

        //用户信息（4）
        var rwTCpartLogin = document.createElement("div");
        rwTCpartLogin.className = "rwTCpart";
        rwTCpartLogin.id = "rwTCpartLogin";
        rwTCpartLogin.addEventListener("click", rwTCpartLoginP, false);
        rwTCpartLogin.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/login.png)";

        var rwTCpartFContant = document.createElement("div");
        rwTCpartFContant.className = "rwTCpartD";
        rwTCpartFContant.id = "rwTCpartD";
        var rwTCpartLarow = document.createElement("div");
        rwTCpartLarow.className = "rwTCpartLarow";
        rwTCpartFContant.appendChild(rwTCpartLarow);
        rwTitleTools.appendChild(rwTCpartFContant);

        var userHome = document.createElement("div");
        userHome.className = "rwTCpartcontant";
        userHome.addEventListener("click", account, false);
        var userHomeIcon = document.createElement("div");
        userHomeIcon.className = "rwTCIcon";
        userHomeIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/用户中心.png)";
        var userHomeInfo = document.createElement("div");
        userHomeInfo.className = "rwTCInfo";
        userHomeInfo.innerHTML = "用户中心";
        userHome.appendChild(userHomeIcon);
        userHome.appendChild(userHomeInfo);

        var userSetting = document.createElement("div");
        userSetting.className = "rwTCpartcontant";
        var userSettingIcon = document.createElement("div");
        userSettingIcon.className = "rwTCIcon";
        userSettingIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/设置.png)";
        var userSettingInfo = document.createElement("div");
        userSettingInfo.className = "rwTCInfo";
        userSettingInfo.innerHTML = "设置";
        userSetting.appendChild(userSettingIcon);
        userSetting.appendChild(userSettingInfo);

        var userLayout = document.createElement("div");
        userLayout.className = "rwTCpartcontant";
        userLayout.addEventListener("click", logout, false);
        var userLayoutIcon = document.createElement("div");
        userLayoutIcon.className = "rwTCIcon";
        userLayoutIcon.style.backgroundImage = "url(DevelopmentCase/NavWorkContorlDemo/images/layout.png)";
        var userLayoutInfo = document.createElement("div");
        userLayoutInfo.className = "rwTCInfo";
        userLayoutInfo.innerHTML = "退出";
        userLayout.appendChild(userLayoutIcon);
        userLayout.appendChild(userLayoutInfo);

        rwTCpartFContant.appendChild(userHome);
        //rwTCpartFContant.appendChild(userSetting);
        rwTCpartFContant.appendChild(userLayout);

        ////
        if($("#sysorg").val()){
        	//rwTitleTools.appendChild(rwTCpartNews);
        	rwTitleTools.appendChild(rwTCpartAlarm);
        }
        //rwTitleTools.appendChild(rwTCpartInfo);
        rwTitleTools.appendChild(rwTCpartLogin);

    }

    function rwTCpartAlarmP() {
        //alert("aaa");
        var rwTCpartOContant = document.getElementById("rwTCpartA");
        var rwTCpartTContant = document.getElementById("rwTCpartB");
        var rwTCpartTHContant = document.getElementById("rwTCpartC");
        var rwTCpartFContant = document.getElementById("rwTCpartD");
        var rwTCpartAlarm = document.getElementById("rwTCpartAlarm");
        //var rwTCpartInfo = document.getElementById("rwTCpartInfo");
        //var rwTCpartNews = document.getElementById("rwTCpartNews");
        var rwTCpartLogin = document.getElementById("rwTCpartLogin");
        if (rwTCpartOContant.style.display == "block") {
            rwTCpartOContant.style.display = "none";
            rwTCpartAlarm.style.backgroundColor = "rgba(255,255,255,0.2)";
        } else {
            rwTCpartOContant.style.display = "block";
            //rwTCpartTContant.style.display = "none";
            //rwTCpartTHContant.style.display = "none";
            rwTCpartFContant.style.display = "none";
            //rwTCpartAlarm.style.backgroundColor = "#58667d";
            rwTCpartAlarm.style.backgroundColor = "rgba(255,255,255,0.3)";
            //rwTCpartInfo.style.backgroundColor = "#354052";
            //rwTCpartNews.style.backgroundColor = "#354052";
            rwTCpartLogin.style.backgroundColor = "rgba(255,255,255,0.2)";
        }
        //加载行政区划树
        loadDistrictTree();
    }

    function rwTCpartInfoP() {
        //alert("bbb");
        var rwTCpartOContant = document.getElementById("rwTCpartA");
        var rwTCpartTContant = document.getElementById("rwTCpartB");
        var rwTCpartTHContant = document.getElementById("rwTCpartC");
        var rwTCpartFContant = document.getElementById("rwTCpartD");
        var rwTCpartAlarm = document.getElementById("rwTCpartAlarm");
        var rwTCpartInfo = document.getElementById("rwTCpartInfo");
        //var rwTCpartNews = document.getElementById("rwTCpartNews");
        var rwTCpartLogin = document.getElementById("rwTCpartLogin");
        if (rwTCpartTContant.style.display == "block") {
            rwTCpartTContant.style.display = "none";
            //rwTCpartNews.style.backgroundColor = "#6eb60c";
        } else {
            rwTCpartOContant.style.display = "none";
            rwTCpartTContant.style.display = "block";
            rwTCpartTHContant.style.display = "none";
            rwTCpartFContant.style.display = "none";
            rwTCpartAlarm.style.backgroundColor = "rgba(255,255,255,0.2)";
            rwTCpartInfo.style.backgroundColor = "#58667d";
            //rwTCpartNews.style.backgroundColor = "#6eb60c";
            rwTCpartLogin.style.backgroundColor = "rgba(255,255,255,0.2)";
        }
    }

    function rwTCpartNewsP() {
        //alert("ccc");
        var rwTCpartOContant = document.getElementById("rwTCpartA");
        var rwTCpartTContant = document.getElementById("rwTCpartB");
        var rwTCpartTHContant = document.getElementById("rwTCpartC");
        var rwTCpartFContant = document.getElementById("rwTCpartD");
        var rwTCpartAlarm = document.getElementById("rwTCpartAlarm");
       // var rwTCpartInfo = document.getElementById("rwTCpartInfo");
       // var rwTCpartNews = document.getElementById("rwTCpartNews");
        var rwTCpartLogin = document.getElementById("rwTCpartLogin");
        if (rwTCpartTHContant.style.display == "block") {
            rwTCpartTHContant.style.display = "none";
            //rwTCpartNews.style.backgroundColor = "#6eb60c";
        } else {
            rwTCpartOContant.style.display = "none";
            rwTCpartTContant.style.display = "none";
            rwTCpartTHContant.style.display = "block";
            rwTCpartFContant.style.display = "none";
            rwTCpartAlarm.style.backgroundColor = "rgba(255,255,255,0.2)";
            rwTCpartInfo.style.backgroundColor = "rgba(255,255,255,0.2)";
            //rwTCpartNews.style.backgroundColor = "#58667d";
            rwTCpartLogin.style.backgroundColor = "rgba(255,255,255,0.2)";
        }
    }
    
    //用户中心
    function rwTCpartLoginP() {
        var rwTCpartOContant = document.getElementById("rwTCpartA");
        var rwTCpartTContant = document.getElementById("rwTCpartB");
        var rwTCpartTHContant = document.getElementById("rwTCpartC");
        var rwTCpartFContant = document.getElementById("rwTCpartD");
        var rwTCpartAlarm = document.getElementById("rwTCpartAlarm");
        var rwTCpartInfo = document.getElementById("rwTCpartInfo");
        //var rwTCpartNews = document.getElementById("rwTCpartNews");
        var rwTCpartLogin = document.getElementById("rwTCpartLogin");
        if (rwTCpartFContant.style.display == "block") {
            rwTCpartFContant.style.display = "none";
            rwTCpartLogin.style.backgroundColor = "rgba(255,255,255,0.2)";
        } else {
        	if($("#sysorg").val()){
        		rwTCpartOContant.style.display = "none";
        		rwTCpartAlarm.style.backgroundColor = "rgba(255,255,255,0.2)";
        		//rwTCpartNews.style.backgroundColor = "#6eb60c";
        		
        	}
            //rwTCpartTContant.style.display = "none";
            //rwTCpartTHContant.style.display = "none";
            rwTCpartFContant.style.display = "block";
            //rwTCpartInfo.style.backgroundColor = "#354052";
            
            rwTCpartLogin.style.backgroundColor = "rgba(255,255,255,0.3)";
        }
        setTimeout(function(){document.body.addEventListener('click',hide,true);});
        function hide () {
        	rwTCpartFContant.style.display = "none";
        }
    }
    
    
    
    
    function rwHomeBtnP() {
    	window.location.href=BASE_URL+'/';
    }

    function orderNone() {
        alert("AAA");
    }

    function orderDoing() {
        alert("BBB");
    }

    function orderDone() {
        alert("CCC");
    }

    /*GIS跳转*/
    function showMap(){
    	//window.location.href=BASE_URL+'/olgis/gispage/addMainPage';
    	window.open(BASE_URL+'/olgis/gispage/addMainPage');
    }

}(CurProject.workD);
!function () {
    //初始化名称空间
    window.CurProject = window.CurProject || {};

    if (window.CurProject.Common4x) throw new Error('CurProject.Common 类重复加载');
    var uc = window.CurProject.Common4x = function () {
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
    //初始化名称空间
    window.CurProject = window.CurProject || {};

    //实现
    if (window.CurProject.NavPanelDemo1) throw new Error('CurProject.NavPanelDemo1 类重复加载');
    var curProjectNavPanelDemo1 = window.CurProject.NavPanelDemo1 = function () {
        this._masterElement = null;
        this._OpenIframe = null;
    }
    var _curProjectNavPanelDemo1 = null;
    //获得 CurProject.NavPanelDemo1 实例
    curProjectNavPanelDemo1.getInstance = function () {
        var rtn = null;
        if (_curProjectNavPanelDemo1 == null) {
            rtn = new window.CurProject.NavPanelDemo1();
            _curProjectNavPanelDemo1 = rtn;
        }
        else {
            rtn = _curProjectNavPanelDemo1;
        }
        return rtn;
    }
    curProjectNavPanelDemo1.prototype.getOpenIframe = function () {
        return this._OpenIframe;
    }
    curProjectNavPanelDemo1.prototype.initParms = function (element, model) {
        var app = window.Mirs.Application.getInstance();
        var themeName=app.getThemeName();

        var headEmt = document.getElementsByTagName("head")[0];
        var linkEmt = document.createElement("link");
        linkEmt.href = "DevelopmentCase/SitePanel/css/" + themeName + ".css";
        linkEmt.rel = "stylesheet";
        linkEmt.type = "text/css";
        linkEmt.id = "NavPanelDemo1Css";
        headEmt.appendChild(linkEmt);

        CreateEle();
        g.ah(element, "click", PanelActive);
        var tempBtn = CreateBtn();
        element.appendChild(tempBtn);
    }
    function PanelActive() {
        tempEle.Active();//激活面板对象(显示)
        setTimeout(function () {
            RootDiv.style.transform = "translateX(0)";
        }, 1)
    }
    function PanelHide() {
        RootDiv.style.transform = "translateX(-450px)";
        setTimeout(function () {
            tempEle.Hide();//隐藏面板对象
        }, 300)
    }
    //切换主题样式方法
    function changeTheme(themeName) {
        var link = document.getElementById("NavPanelDemo1Css");
        link.href = "DevelopmentCase/SitePanel/css/" + themeName + ".css";
        //alert(themeName);
    }

    var tempEle = null;
    var RootDiv = null;
    
    var CreateEle = function () {
        //获得NavPanelControl唯一实例对象
        var app = window.Mirs.Application.getInstance();
        var ins = app.getNavPanelControl();
        //创建ClientPanel实例对象
        var CPins = ins.createClientPanel();
        tempEle = CPins.Create();
        tempEle.setRefreshTheme(changeTheme);
        tempEle.id = "NavPanelApiDemo1";

        /*---------------------自定义element---------------------------*/
        var rtn = document.createElement("div");
        RootDiv = rtn;
        rtn.className = "gaRootContainer";
        //rtn.id = "3";
        var gaTopContainer = document.createElement("div");
        gaTopContainer.className = "gaTopContainer";
        rtn.appendChild(gaTopContainer);

        var gaBackContainer = document.createElement("div");
        gaBackContainer.className = "gaBackContainer";
        gaTopContainer.appendChild(gaBackContainer);

        g.ah(gaBackContainer, "click", PanelHide);


        var gaTopTitleContainer = document.createElement("div");
        gaTopTitleContainer.className = "gaTopTitleContainer";
        gaTopTitleContainer.innerHTML = "站点管理";
        gaTopContainer.appendChild(gaTopTitleContainer);

        var gaMainBar = document.createElement("div");
        gaMainBar.className = "gaMainBar";
        gaMainBar.innerHTML = "<div class='ga1thContainer'> <img src='DevelopmentCase/SitePanel/images/part1.png' /> </div> <div class='ga1thContainer'> <img src='DevelopmentCase/SitePanel/images/part2.png' /> </div> <div class='ga1thContainer'> <img src='DevelopmentCase/SitePanel/images/part3.png' /> </div> <div class='ga1thContainer'> <img src='DevelopmentCase/SitePanel/images/part4.png' /> </div>";
        rtn.appendChild(gaMainBar);

        //设置自定义element，同时会添加进ClientPanel
        tempEle.setCurrentEle(rtn);
        //NavPanelControl添加ClientPanel
        ins.addClientPanel(tempEle);
    }

    var CreateBtn = function () {
        var btnC = document.createElement("input");
        btnC.type = "button";
        btnC.className = "btnC";
        btnC.value = "";
        btnC.title = "点击查看代码"
        btnC.id = "btnC";
        g.ah(btnC, "click", EventBubbling);
        g.ah(btnC, 'click', ScreenClick);
        return btnC;
    }

    var ScreenClick = function () {
        var app = window.Mirs.Application.getInstance();
        var mdi = app.getWorkControl().getMdiControl();
        var OpenIframe = window.CurProject.NavPanelDemo1.getInstance().getOpenIframe();
        var tempIframe = null;
        if (OpenIframe) {
            tempIframe = document.getElementById(OpenIframe.id);
        }

        if (tempIframe) {
            return;
        }
        else {
            mdi.childrenClear();

            var tempWd = app.getWorkControl().getMdiControl().createChildWindow("E6E41C55-2016-472A-97C6-A7E86CB500F8");

            var iframeEle = document.createElement("iframe");
            iframeEle.src = "DevelopmentCase/SitePanel/NavPanelDemo1code.htm";
            iframeEle.style.width = "100%";
            iframeEle.style.height = "100%";
            iframeEle.id = "xpanel";

            tempWd.setIframeElement(iframeEle);
            tempWd.getContainer().appendChild(iframeEle);
            tempWd.setCaption("站点管理JS源代码");

            tempWd.show();
            OpenIframe = iframeEle;
        }
    }

    //去除冒泡，防止点击事件穿透
    var EventBubbling = function (evt) {
        var e = (evt) ? evt : window.event;
        if (window.event) {
            e.cancelBubble = true; // ie下阻止冒泡
        } else {
            e.stopPropagation(); // 其它浏览器下阻止冒泡
        }
    }
}(CurProject.Common4x);
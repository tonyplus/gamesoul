!function () {
    //初始化名称空间
    window.CurProject = window.CurProject || {};


    //实现
    if (window.CurProject.WpHelper) throw new Error('CurProject.WpHelper 类重复加载');
    var curProjectWpHelper = window.CurProject.WpHelper = function () {
    }
    curProjectWpHelper.dbing = function (instance, method) {
        return function () {
            return method.apply(instance, arguments);
        }
    };

    //事件通用函数
    curProjectWpHelper.addHandler = function (element, eventName, handler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, handler, false);
        }
        else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler);
        }
    };
    curProjectWpHelper.ah = curProjectWpHelper.addHandler;

    //element创建函数
    curProjectWpHelper.createEle = function (eleName) {
        var rtn = document.createElement(eleName);
        return rtn;
    }
}()
!function (g) {
    //初始化名称空间
    window.CurProject = window.CurProject || {};


    //实现
    if (window.CurProject.wPanelOne) throw new Error('CurProject.wPanelOne 类重复加载');
    var curProjectwPanelOne = window.CurProject.wPanelOne = function () {
        this._masterElement = null;
    }
    var _curProjectwPanelOne = null;
    //获得 CurProject.wPanelOne 实例
    curProjectwPanelOne.getInstance = function () {
        var rtn = null;
        if (_curProjectwPanelOne == null) {
            rtn = new window.CurProject.wPanelOne();
            _curProjectwPanelOne = rtn;
        }
        else {
            rtn = _curProjectwPanelOne;
        }
        return rtn;
    }

    //示例代码 开始 必带两参数 element父级元素 model配置文件类
    curProjectwPanelOne.prototype.initParms = function (element, model) {
        var headEmt = document.getElementsByTagName("head")[0];
        var linkEmt = document.createElement("link");
        linkEmt.href = "DevelopmentCase/WarningPanel/WarningPanel.css";
        linkEmt.rel = "stylesheet";
        linkEmt.type = "text/css";
        linkEmt.id = "WarningPanelCss"
        headEmt.appendChild(linkEmt);

        CreatePanel();

        var ins = window.CurProject.wPanelOne.getInstance();
        var tempCkBox = ins.CreateCkBox();
        element.appendChild(tempCkBox);
        var tempCodeBtn = ins.CreateCodeBtn();
        element.appendChild(tempCodeBtn);

        //设置定时器，定时检测报警开关是否开启
        window.setInterval(EquipmentAlarm, 8000);


        var btnC = document.getElementById("btnDemo2Cb");
        g.ah(btnC, "click", ChangeShow);
    }
    //input按钮
    curProjectwPanelOne.prototype.CreateCkBox = function () {
        var rtn = g.createEle("div");
        rtn.style.display = 'inline-block';
        rtn.style.width = "100px";
        rtn.style.paddingLeft = "20px";
        rtn.style.paddingTop = "8px";
        rtn.style.verticalAlign = "top";
        rtn.style.color = "#000";

        var tempswitch = g.createEle("div");
        tempswitch.className = "switch demo3";
        rtn.appendChild(tempswitch);

        var tempCB = g.createEle("input");
        tempCB.type = "checkbox";
        tempCB.id = "chk1";
        tempswitch.appendChild(tempCB);

        var tempLable = g.createEle("label");
        tempswitch.appendChild(tempLable);

        var tempi = g.createEle("i");
        tempLable.appendChild(tempi);
        return rtn;
    }
    //代码预览按钮
    curProjectwPanelOne.prototype.CreateCodeBtn = function () {
        var rtn = g.createEle("div");
        rtn.style.display = 'inline-block';
        rtn.style.verticalAlign = "top";
        rtn.style.float = "right";
        rtn.style.paddingRight = "8px";
        var tempBtn = g.createEle("input");
        tempBtn.type = "button";
        tempBtn.title = "显示代码";
        tempBtn.className = "btnC";
        g.ah(tempBtn, "click", this.CodeBtn_Ck);
        rtn.appendChild(tempBtn);
        return rtn;
    }

    curProjectwPanelOne.prototype.CodeBtn_Ck = function () {
        var app = window.Mirs.Application.getInstance();
        var mdi = app.getWorkControl().getMdiControl();
        mdi.childrenClear();

        //左侧面板预览
        var tempWd1 = app.getWorkControl().getMdiControl().createChildWindow();
        var tempDiv1 = document.createElement("div");
        tempDiv1.id = "demo3Frm";
        tempDiv1.style.height = "100%";
        tempDiv1.position = "absolute";
        tempDiv1.top = "0px";
        tempDiv1.bottom = "0px";
        tempDiv1.right = "0px";
        tempDiv1.left = "0px";
        tempDiv1.style.backgroundImage = "url(DevelopmentCase/WarningPanel/images/家报故障.png)";
        tempDiv1.style.backgroundRepeat = "no-repeat";
        tempWd1.getContainer().appendChild(tempDiv1);
        tempWd1.setCaption("工报故障信息");
        tempWd1.show();

        //右侧面板代码
        var tempWd2 = app.getWorkControl().getMdiControl().createChildWindow();
        var tempDiv2 = document.createElement("pre");
        tempDiv2.id = "demo3Frm";
        tempDiv2.style.backgroundColor = "#fff";
        tempDiv2.style.height = "100%";
        tempDiv2.position = "absolute";
        tempDiv2.top = "0px";
        tempDiv2.bottom = "0px";
        tempDiv2.right = "0px";
        tempDiv2.left = "0px";
        tempDiv2.innerHTML = "<iframe id='defPageALL' src='DevelopmentCase/WarningPanel/WarningPanelCode.html' style='width: 100%; height: 100%;'></iframe>";
        tempWd2.setCaption("代码");
        tempWd2.getContainer().appendChild(tempDiv2);
        tempWd2.show();

        mdi.setLayoutMdi(mdi.MdiLayout.Tile);
    }

    //切换主题样式方法
    function changeTheme(themeName) {
        var link = document.getElementById("WarningPanelCss");
        //link.href = "DevelopmentCase/GISPanel/css/" + themeName + ".css";
    }
    var ChangeShow = function () {
        var tempdiv = document.getElementById("arRootContainer");
        var p1 = document.getElementById("p1");
        var p2 = document.getElementById("p2");
        var p3 = document.getElementById("p3");
        if (RootDiv.style.left == "0px") {
            RootDiv.style.left = "-450px";
            p1.style.display = "none";
            p2.style.display = "none";
            p3.style.display = "none";
            setTimeout(function () {
                tempPanel.Hide();
            }, 300);
            
        }
        else {
            tempPanel.Active();
            setTimeout(function () {
                RootDiv.style.left = "0px";
            }, 1);
        }
    }
    var tempPanel = null;
    var RootDiv = null;
    var CreatePanel = function () {
        //获得NavPanelControl唯一实例对象
        var app = window.Mirs.Application.getInstance();
        var ins = app.getNavPanelControl();
        //创建ClientPanel实例对象
        var CPins = ins.createClientPanel();
        tempPanel = CPins.Create();
        tempPanel.setRefreshTheme(changeTheme);
        tempPanel.id = "WarningPanel";

        /*---------------------自定义element---------------------------*/
        var rtn = document.createElement("div");
        rtn.id = "arRootContainer";
        rtn.className = "arRootContainer";
        RootDiv = rtn;
        rtn.innerHTML = "<div class='arTopContainer'> <div class='arBackContainer' id='btnDemo2Cb' ><img src='DevelopmentCase/WarningPanel/images/back.png' /> </div> <div class='arTopTitleContainer'>报警列表</div> </div> <div class='arInfoContainer'> <div class='arPart1Container' id='p1'> <div class='arLine'> <div>工报故障信息</div> </div> <ul> <li> <img src='DevelopmentCase/WarningPanel/images/工报125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='河南华云宾馆锅炉房'>建筑点名称：河南华云宾馆锅炉房</div> <div class='arPContent'>数据状态：传感器故障</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736279.194328567,5130240.568807118)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> <li> <img src='DevelopmentCase/WarningPanel/images/工报125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='郑州市豪哥豪弟餐厅'>建筑点名称：郑州市豪哥豪弟餐厅</div> <div class='arPContent'>数据状态：传感器故障</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736412,5130170)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> <li> <img src='DevelopmentCase/WarningPanel/images/工报125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='郑州市龙元房地产开发公司郑州市龙元房地产开发公司'>建筑点名称：郑州市龙元房地产开发公司郑州市龙元房地产开发公司</div> <div class='arPContent'>数据状态：传感器故障</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736436, 5130382)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> </ul> </div>  <div class='arPart1Container' id='p2'> <div class='arLine'> <div>家报实时数据</div> </div> <ul> <li> <img src='DevelopmentCase/WarningPanel/images/家报125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='龙泉检查室'>建筑点名称：龙泉检查室</div> <div class='arPContent green'>安装位置：一层西</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736279.194328567,5130240.568807118)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> <li> <img src='DevelopmentCase/WarningPanel/images/家报125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='创业园609室1'>建筑点名称：创业园609室1</div> <div class='arPContent green'>安装位置：创业园B座609室</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736412,5130170)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> <li> <img src='DevelopmentCase/WarningPanel/images/家报125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='龙泉检查室'>建筑点名称：龙泉检查室</div> <div class='arPContent green'>安装位置：三层西</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736436, 5130382)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> <li> <img src='DevelopmentCase/WarningPanel/images/家报125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='汉威电子燃气展示'>建筑点名称：汉威电子燃气展示</div> <div class='arPContent green'>安装位置：二层西</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736436, 5130382)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> </ul> </div>  <div class='arPart1Container' id='p3'> <div class='arLine'> <div>压力故障信息</div> </div> <ul> <li> <img src='DevelopmentCase/WarningPanel/images/压力125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='公司办事处'>建筑点名称：公司办事处</div> <div class='arPContent'>检测项：4_TEMP(℃)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp检测值：25</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736279.194328567,5130240.568807118)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> <li> <img src='DevelopmentCase/WarningPanel/images/压力125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='开封市西街小学监测点'>建筑点名称：开封市西街小学监测点</div> <div class='arPContent'>检测项：0_CH4(LEL)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp检测值：0</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736412,5130170)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> <li> <img src='DevelopmentCase/WarningPanel/images/压力125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='北京国家会议中心'>建筑点名称：北京国家会议中心</div> <div class='arPContent'>检测项：0_CH4(LEL)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp检测值：999</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736436, 5130382)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> <li> <img src='DevelopmentCase/WarningPanel/images/压力125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='皇姑区中心医院'>建筑点名称：皇姑区中心医院</div> <div class='arPContent'>检测项：4_TEMP(℃)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp检测值：75</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736436, 5130382)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> <li> <img src='DevelopmentCase/WarningPanel/images/压力125.png' class='arImg1' /> <div class='arPTitleDiv'> <div class='arPTitle' title='沈阳市风雨坛街与热闹路交叉路口燃气井'>建筑点名称：沈阳市风雨坛街与热闹路交叉路口燃气井</div> <div class='arPContent'>检测项：0_CH4(LEL)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp检测值：60</div> </div> <div class='arPInfoContainer'> <img src='DevelopmentCase/WarningPanel/images/position.png' class='arImg2' onclick='zoomto(13736436, 5130382)' /> <img src='DevelopmentCase/WarningPanel/images/details.png' class='arImg2' onclick='detail_Click()'/> </div> </li> </ul> </div></div>"
        /*------------------------------------------------------------*/

        //设置自定义element，同时会添加进ClientPanel
        tempPanel.setCurrentEle(rtn);
        //NavPanelControl添加ClientPanel
        ins.addClientPanel(tempPanel);
    }

    function EquipmentAlarm() {
        var ck1 = document.getElementById("chk1");
        var ck2 = document.getElementById("chk2");
        var ck3 = document.getElementById("chk3");
        var p1 = document.getElementById("p1");
        var p2 = document.getElementById("p2");
        var p3 = document.getElementById("p3");
        var falg1 = false;
        var falg2 = false;
        var falg3 = false;
        if (ck1 != null && ck1.checked) {
            p1.style.display = "block";
            falg1 = true;
        }
        if (ck2 != null && ck2.checked) {
            p2.style.display = "block";
            falg2 = true;
        }
        if (ck3 != null && ck3.checked) {
            p3.style.display = "block";
            falg3 = true;
        }
        if (!falg1 && !falg2 && !falg3) { return; }
        var tempdiv = document.getElementById("arRootContainer");
        if (RootDiv.style.left != "0px") {
            var p1 = document.getElementById("p1");
            var p2 = document.getElementById("p2");
            var p3 = document.getElementById("p3");
            if (RootDiv.style.left == "0px") {
                RootDiv.style.left = "-450px";
                p1.style.display = "none";
                p2.style.display = "none";
                p3.style.display = "none";
            }
            else {
                tempPanel.Active();
                setTimeout(function () {
                    RootDiv.style.left = "0px";
                }, 1);
            }
        }
    }

}(window.CurProject.WpHelper);

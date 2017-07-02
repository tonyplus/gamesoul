!function () {
    //初始化名称空间
    window.CurProject = window.CurProject || {};

    if (window.CurProject.Common) throw new Error('CurProject.Common 类重复加载');
    var CurCommon = window.CurProject.Common = function () {
    };
    CurCommon.dbing = function (instance, method) {
        return function () {
            return method.apply(instance, arguments);
        }
    };
    //事件通用函数
    CurCommon.addHandler = function (element, eventName, handler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, handler, false);
        }
        else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler);
        }
    };
    CurCommon.ah = CurCommon.addHandler;

    //element创建函数
    CurCommon.createEle = function (eleName) {
        var rtn = document.createElement(eleName);
        return rtn;
    }
}();
//搜索结果定位点击
var MapZoomto1 = function () {
    var myiframe = document.getElementById("GisPanelIfr");
    myiframe.contentWindow.zoomTo1();
}
!function (g) {
    //初始化名称空间
    window.CurProject = window.CurProject || {};

    //实现
    if (window.CurProject.GisPanel) throw new Error('CurProject.GisPanel 类重复加载');
    var curProjectGisPanel = window.CurProject.GisPanel = function () {
        this._masterElement = null;
    }
    var _curProjectGisPanel = null;
    //获得 CurProject.GisPanel 实例
    curProjectGisPanel.getInstance = function () {
        var rtn = null;
        if (_curProjectGisPanel == null) {
            rtn = new window.CurProject.GisPanel();
            _curProjectGisPanel = rtn;
        }
        else {
            rtn = _curProjectGisPanel;
        }
        return rtn;
    }


    //示例代码 开始 必带两参数 element父级元素 model配置文件类
    curProjectGisPanel.prototype.initParms = function (element, model) {
        var app = window.Mirs.Application.getInstance();
        var themeName = app.getThemeName();

        var headEmt = document.getElementsByTagName("head")[0];
        var linkEmt = document.createElement("link");
        linkEmt.href = "DevelopmentCase/GISPanel/css/" + themeName + ".css";
        linkEmt.rel = "stylesheet";
        linkEmt.type = "text/css";
        linkEmt.id = "GISPanelCss";
        headEmt.appendChild(linkEmt);

        var ins = window.CurProject.GisPanel.getInstance();
        ins.Create();

        //创建两个代码预览按钮
        var Btn1 = ins.CreatePanelBtn();
        element.appendChild(Btn1);
        var Btn2 = ins.CreateMapBtn();
        element.appendChild(Btn2);

        g.ah(element, "click", PanelShow);
    }
    var childWin = null;
    //面板显示方法
    function PanelShow() {
        tempPanel.Active();
        setTimeout(function () {
            tempEle.style.transform = "translateX(0)";
        }, 1);

        //创建右侧窗口
        var app = window.Mirs.Application.getInstance();
        var mdi = app.getWorkControl().getMdiControl();

        childWin = app.getWorkControl().getMdiControl().createChildWindow();
        var tempMapBar = window.CurProject.GisPanel.MapBar.getInstance().Create();

        childWin.getContainer().appendChild(tempMapBar);
        childWin.setCaption("Gis窗口");
        childWin.show();
    }
    //面板隐藏方法
    function PanelHide() {
        tempEle.style.transform = "translateX(-450px)";
        setTimeout(function () {
            tempPanel.Hide();
        }, 800);
        childWin.closeing();
    }
    //切换主题样式方法
    function changeTheme(themeName) {
        var link = document.getElementById("GISPanelCss");
        link.href = "DevelopmentCase/GISPanel/css/" + themeName + ".css";
    }

    var tempPanel = null;
    var tempEle = null;
    curProjectGisPanel.prototype.Create = function () {
        //获得NavPanelControl唯一实例对象
        var app = window.Mirs.Application.getInstance();
        var ins = app.getNavPanelControl();
        //创建ClientPanel实例对象
        var CPins = ins.createClientPanel();
        tempPanel = CPins.Create();
        tempPanel.setRefreshTheme(changeTheme);
        tempPanel.id = "NavPanelApiDemo2";

        /*---------------------自定义element---------------------------*/
        var rtn = g.createEle("div");
        rtn.className = "d1RootDiv";
        tempEle = rtn;
        var temp1 = window.CurProject.GisPanel.TitleBar.getInstance().Create();
        rtn.appendChild(temp1);

        var temp2 = window.CurProject.GisPanel.CircleBar.getInstance().Create();
        rtn.appendChild(temp2);

        var temp3 = window.CurProject.GisPanel.ResultBar.getInstance().Create();
        rtn.appendChild(temp3);

        var temp4 = window.CurProject.GisPanel.HotelBar.getInstance().Create();
        rtn.appendChild(temp4);

        var temp5 = window.CurProject.GisPanel.FoodBar.getInstance().Create();
        rtn.appendChild(temp5);
        /*------------------------------------------------------------*/

        //设置自定义element，同时会添加进ClientPanel
        tempPanel.setCurrentEle(rtn);
        //NavPanelControl添加ClientPanel
        ins.addClientPanel(tempPanel);
    }

    curProjectGisPanel.prototype.CreatePanelBtn = function () {
        var rtn = document.createElement("div");
        rtn.style.display = 'inline-block';
        rtn.style.verticalAlign = "top";
        rtn.style.float = "right";
        rtn.style.paddingRight = "8px";
        rtn.innerHTML = "<input id='demo1Btn' type='button' title='Panel代码' class='btnC' />";
        g.ah(rtn, "click", GisPanelShowCode_Click);
        return rtn;
    }

    curProjectGisPanel.prototype.CreateMapBtn = function () {
        var rtn = document.createElement("div");
        rtn.style.display = 'inline-block';
        rtn.style.verticalAlign = "top";
        rtn.style.float = "right";
        rtn.style.paddingRight = "8px";
        rtn.innerHTML = "<input id='demo1MapBtn' type='button' title='GIS地图代码' class='btnC_b'/>";
        g.ah(rtn, "click", GisPanelMapShowCode_Click);
        return rtn;
    }

    //Gis地图代码按钮点击
    var GisPanelMapShowCode_Click = function (evt) {
        var e = (evt) ? evt : window.event;
        if (window.event) {
            e.cancelBubble = true;// ie下阻止冒泡
        } else {
            e.stopPropagation();// 其它浏览器下阻止冒泡
        }

        var app = window.Mirs.Application.getInstance();
        var mdi = app.getWorkControl().getMdiControl();
        mdi.childrenClear();
        var app = window.Mirs.Application.getInstance();
        var mdi = app.getWorkControl().getMdiControl();
        mdi.childrenClear();

        //左侧地图预览
        var tempWd1 = app.getWorkControl().getMdiControl().createChildWindow();
        var tempDiv1 = document.createElement("div");
        tempDiv1.id = "demo3Frm1";
        tempDiv1.style.height = "100%";
        tempDiv1.position = "absolute";
        tempDiv1.top = "0px";
        tempDiv1.bottom = "0px";
        tempDiv1.right = "0px";
        tempDiv1.left = "0px";
        tempDiv1.innerHTML = "<iframe id='defPageALL' src='DevelopmentCase/GISPanel/Mymap.html' style='width: 100%; height: 100%;'></iframe>";
        tempWd1.getContainer().appendChild(tempDiv1);
        tempWd1.setCaption("Gis地图查询");
        tempWd1.show();
        //右侧地图代码
        var tempWd2 = app.getWorkControl().getMdiControl().createChildWindow();
        var tempDiv2 = document.createElement("pre");
        tempDiv2.id = "demo3Frm2";
        tempDiv2.style.backgroundColor = "#fff";
        tempDiv2.style.height = "100%";
        tempDiv2.position = "absolute";
        tempDiv2.top = "0px";
        tempDiv2.bottom = "0px";
        tempDiv2.right = "0px";
        tempDiv2.left = "0px";;
        tempDiv2.innerHTML = "<iframe id='defPageALL' src='DevelopmentCase/GISPanel/GisPanelMapCode.html' style='width: 100%; height: 100%;'></iframe>";
        tempWd2.setCaption("代码");
        tempWd2.getContainer().appendChild(tempDiv2);
        tempWd2.show();

        mdi.setLayoutMdi(mdi.MdiLayout.Tile);
    }

    //Panel面板代码按钮点击
    var GisPanelShowCode_Click = function (evt) {
        var e = (evt) ? evt : window.event;
        if (window.event) {
            e.cancelBubble = true;// ie下阻止冒泡
        } else {
            e.stopPropagation();// 其它浏览器下阻止冒泡
        }
        var app = window.Mirs.Application.getInstance();
        var mdi = app.getWorkControl().getMdiControl();
        mdi.childrenClear();

        //左侧面板预览
        var tempWd1 = app.getWorkControl().getMdiControl().createChildWindow();
        var tempDiv1 = document.createElement("div");
        tempDiv1.id = "demo3Frm1";
        tempDiv1.style.height = "100%";
        tempDiv1.position = "absolute";
        tempDiv1.top = "0px";
        tempDiv1.bottom = "0px";
        tempDiv1.right = "0px";
        tempDiv1.left = "0px";
        tempDiv1.style.backgroundImage = "url(DevelopmentCase/GISPanel/images/Gis信息查询.png)";
        tempDiv1.style.backgroundRepeat = "no-repeat";
        tempWd1.getContainer().appendChild(tempDiv1);
        tempWd1.setCaption("Gis信息查询");
        tempWd1.show();

        //右侧面板代码
        var tempWd2 = app.getWorkControl().getMdiControl().createChildWindow();
        var tempDiv2 = document.createElement("pre");
        tempDiv2.id = "demo3Frm2";
        tempDiv2.style.backgroundColor = "#fff";
        tempDiv2.style.height = "100%";
        tempDiv2.position = "absolute";
        tempDiv2.top = "0px";
        tempDiv2.bottom = "0px";
        tempDiv2.right = "0px";
        tempDiv2.left = "0px";;
        tempDiv2.innerHTML = "<iframe id='defPageALL' src='DevelopmentCase/GISPanel/GisPanelCode.html' style='width: 100%; height: 100%;'></iframe>";
        tempWd2.setCaption("代码");
        tempWd2.getContainer().appendChild(tempDiv2);
        tempWd2.show();

        mdi.setLayoutMdi(mdi.MdiLayout.Tile);
    }

    //标题框部分
    if (window.CurProject.GisPanel.TitleBar) throw new Error('CurProject.GisPanel.TitleBar 类重复加载');
    var curProjectTitleBar = window.CurProject.GisPanel.TitleBar = function () {
        this._masterElement = null;
    }
    var _curProjectTitleBar = null;
    //获得 CurProject.GisPanel.TitleBar 实例
    curProjectTitleBar.getInstance = function () {
        var rtn = null;
        if (_curProjectTitleBar == null) {
            rtn = new window.CurProject.GisPanel.TitleBar();
            _curProjectTitleBar = rtn;
        }
        else {
            rtn = _curProjectTitleBar;
        }
        return rtn;
    }

    curProjectTitleBar.prototype.Create = function () {
        var rtn = g.createEle("div");
        rtn.className = "d1TopDiv";
        var d1TopBackDiv = g.createEle("d1TopBackDiv");
        d1TopBackDiv.className = "d1TopBackDiv";
        g.ah(d1TopBackDiv, "click", PanelHide);
        var newimg = g.createEle("img");
        newimg.src = "DevelopmentCase/GISPanel/images/back.png";
        d1TopBackDiv.appendChild(newimg);
        var d1TopTitleDiv = g.createEle("d1TopTitleDiv");
        d1TopTitleDiv.className = "d1TopTitleDiv";
        d1TopTitleDiv.innerHTML = "GIS信息查询";
        rtn.appendChild(d1TopBackDiv);
        rtn.appendChild(d1TopTitleDiv);
        return rtn;
    }

    //4个圆形按钮部分
    if (window.CurProject.GisPanel.CircleBar) throw new Error('CurProject.GisPanel.CircleBar 类重复加载');
    var curProjectCircleBar = window.CurProject.GisPanel.CircleBar = function () {
        this._masterElement = null;
    }
    var _curProjectCircleBar = null;
    //获得 CurProject.GisPanel.CircleBar 实例
    curProjectCircleBar.getInstance = function () {
        var rtn = null;
        if (_curProjectCircleBar == null) {
            rtn = new window.CurProject.GisPanel.CircleBar();
            _curProjectCircleBar = rtn;
        }
        else {
            rtn = _curProjectCircleBar;
        }
        return rtn;
    }

    curProjectCircleBar.prototype.Create = function () {
        var rtn = g.createEle("div");
        rtn.className = "d1MOneDiv";
        var CirclOne = g.createEle("div");
        CirclOne.className = "d1MOneItemDiv";
        g.ah(CirclOne, "click", this.food_Click);
        CirclOne.innerHTML = "<div class='d1CircleDiv s1'></div><div class='d1MOneItemTitleDiv'>地址查询</div>";
        var CirclTwo = g.createEle("div");
        CirclTwo.className = "d1MOneItemDiv";
        g.ah(CirclTwo, "click", this.hotel_Click);
        CirclTwo.innerHTML = "<div class='d1CircleDiv s2'></div><div class='d1MOneItemTitleDiv'>建筑物查询</div>";
        var CirclThree = g.createEle("div");
        CirclThree.className = "d1MOneItemDiv";
        CirclThree.innerHTML = "<div class='d1CircleDiv s3'></div><div class='d1MOneItemTitleDiv'>管径查询</div>";
        var CirclFour = g.createEle("div");
        CirclFour.className = "d1MOneItemDiv";
        CirclFour.innerHTML = "<div class='d1CircleDiv s4'></div><div class='d1MOneItemTitleDiv'>维护周期查询</div>";
        rtn.appendChild(CirclOne);
        rtn.appendChild(CirclTwo);
        rtn.appendChild(CirclThree);
        rtn.appendChild(CirclFour);
        return rtn;
    }

    curProjectCircleBar.prototype.food_Click = function () {
        var resultBar = window.CurProject.GisPanel.ResultBar.getInstance()._masterElement;
        var hotelBar = window.CurProject.GisPanel.HotelBar.getInstance()._masterElement;
        var foodBar = window.CurProject.GisPanel.FoodBar.getInstance()._masterElement;

        resultBar.style.left = "-450px";
        hotelBar.style.left = "-450px";
        foodBar.style.left = "0px";
    }

    curProjectCircleBar.prototype.hotel_Click = function () {
        var resultBar = window.CurProject.GisPanel.ResultBar.getInstance()._masterElement;
        var hotelBar = window.CurProject.GisPanel.HotelBar.getInstance()._masterElement;
        var foodBar = window.CurProject.GisPanel.FoodBar.getInstance()._masterElement;

        resultBar.style.left = "-450px";
        hotelBar.style.left = "0px";
        foodBar.style.left = "-450px";
    }


    //搜索结果列表部分
    if (window.CurProject.GisPanel.ResultBar) throw new Error('CurProject.GisPanel.ResultBar 类重复加载');
    var curProjectResultBar = window.CurProject.GisPanel.ResultBar = function () {
        this._masterElement = null;
    }
    var _curProjectResultBar = null;
    //获得 CurProject.GisPanel.ResultBar 实例
    curProjectResultBar.getInstance = function () {
        var rtn = null;
        if (_curProjectResultBar == null) {
            rtn = new window.CurProject.GisPanel.ResultBar();
            _curProjectResultBar = rtn;
        }
        else {
            rtn = _curProjectResultBar;
        }
        return rtn;
    }

    curProjectResultBar.prototype.Create = function () {
        var rtn = g.createEle("div");
        rtn.className = "d1listDiv";
        //CurResult.prototype.setMasterElement(rtn);
        rtn.innerHTML = "<ul><li onclick='MapZoomto1()'><img src='DevelopmentCase/GISPanel/images/1.png'/><div style='float:left'><span class='d1title'>沈阳站</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li><li><img src='DevelopmentCase/GISPanel/images/2.png'/><div style='float:left'><span class='d1title'>沈阳站地铁口</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li><li><img src='DevelopmentCase/GISPanel/images/3.png'/><div style='float:left'><span class='d1title'>沈阳站海关办事处</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li><li><img src='DevelopmentCase/GISPanel/images/3.png'/><div style='float:left'><span class='d1title'>沈阳站海关办事处</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li><li><img src='DevelopmentCase/GISPanel/images/3.png'/><div style='float:left'><span class='d1title'>沈阳站海关办事处</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li><li><img src='DevelopmentCase/GISPanel/images/3.png'/><div style='float:left'><span class='d1title'>沈阳站海关办事处</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li><li><img src='DevelopmentCase/GISPanel/images/3.png'/><div style='float:left'><span class='d1title'>沈阳站海关办事处</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li><li><img src='DevelopmentCase/GISPanel/images/3.png'/><div style='float:left'><span class='d1title'>沈阳站海关办事处</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li><li><img src='DevelopmentCase/GISPanel/images/3.png'/><div style='float:left'><span class='d1title'>沈阳站海关办事处</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li><li><img src='DevelopmentCase/GISPanel/images/3.png'/><div style='float:left'><span class='d1title'>沈阳站海关办事处</span><br/><span class='d1address'>地址地址地址地址</span></div><div class='d1infoDiv'>进入详情</div></li></ul>";
        this._masterElement = rtn;
        return rtn;
    }




    //hotel部分
    if (window.CurProject.GisPanel.HotelBar) throw new Error('CurProject.GisPanel.HotelBar 类重复加载');
    var curProjectHotelBar = window.CurProject.GisPanel.HotelBar = function () {
        this._masterElement = null;

    }
    var _curProjectHotelBar = null;
    //获得 CurProject.GisPanel.HotelBar 实例
    curProjectHotelBar.getInstance = function () {
        var rtn = null;
        if (_curProjectHotelBar == null) {
            rtn = new window.CurProject.GisPanel.HotelBar();
            _curProjectHotelBar = rtn;
        }
        else {
            rtn = _curProjectHotelBar;
        }
        return rtn;
    }

    curProjectHotelBar.prototype.Create = function () {
        var rtn = g.createEle("div");
        rtn.className = "d1Hotel";
        //CurHotel.prototype.setMasterElement(rtn);
        rtn.innerHTML = "<div class='d1MTwoDiv'><div class='Traffic'><ul><li class='title'>阀门<i class='separate'>|</i></li><li>球阀</li><li>蝶阀</li><li>针型阀</li><li>旋塞阀</li></ul></div><div class='fun'><ul><li class='title'>管线<i class='separate'>|</i></li><li>高压</li><li>次高压</li><li>中压</li><li>低压</li></ul></div><div class='life'><ul><li class='title'>变压器<i class='separate'>|</i></li><li>电力</li><li>仪用</li><li>试验</li><li>特种</li></ul></div></div>";
        var d1BottomDiv = g.createEle("div");
        d1BottomDiv.className = "d1BottomDiv";
        d1BottomDiv.innerHTML = "<div class='d1t1'><div class='d1BTitleDiv'>地址：</div><select class='d1Select wid130'><option value='value'>沈阳</option><option value='value'>大连</option><option value='value'>抚顺</option><option value='value'>辽阳</option></select></div><div class='d1t1'><div class='d1BTitleDiv'>关键字：</div><input id='Text1' class='sInput wid300' type='text' /></div><div class='d1t1'><div class='d1BTitleDiv'>行政区：</div><select class='d1Select wid130'><option value='value'>皇姑区</option><option value='value'>和平区</option><option value='value'>沈河区</option><option value='value'>和平区</option></select></div><div class='d1t1'><div class='d1BTitleDiv'>范围：</div><select class='d1Select wid130'><option value='value'>中街商圈</option><option value='value'>太原街商圈</option><option value='value'>北行商圈</option></select></div><div class='d1t1'><div class='d1BTitleDiv'>管径尺寸：</div><select class='d1Select wid130'><option value='value'>200以下</option><option value='value'>200-500</option><option value='value'>500-800</option></select></div>";
        var btnDiv = g.createEle("div");
        btnDiv.className = "btnDiv";
        d1BottomDiv.appendChild(btnDiv);

        var d1ButtonDiv = g.createEle("div");
        d1ButtonDiv.className = "d1ButtonDiv";
        d1ButtonDiv.innerHTML = "搜&nbsp&nbsp&nbsp索";
        g.ah(d1ButtonDiv, "click", this.search_Ck);
        btnDiv.appendChild(d1ButtonDiv);

        var d1ButtonDiv2 = g.createEle("div");
        d1ButtonDiv2.className = "d1ButtonDiv";
        d1ButtonDiv2.innerHTML = "重&nbsp&nbsp&nbsp置";
        g.ah(d1ButtonDiv2, "click", this.reset_Ck);
        btnDiv.appendChild(d1ButtonDiv2);

        rtn.appendChild(d1BottomDiv);
        this._masterElement = rtn;
        return rtn;
    }
    //重置按钮事件
    curProjectHotelBar.prototype.reset_Ck = function () {
        var myiframe = document.getElementById("GisPanelIfr");
        myiframe.contentWindow.resetPoint();

    }
    //查询按钮事件
    curProjectHotelBar.prototype.search_Ck = function () {
        var resultBar = window.CurProject.GisPanel.ResultBar.getInstance()._masterElement;
        resultBar.style.left = "0px";
        resultBar.style.zIndex = "999";
        var myiframe = document.getElementById("GisPanelIfr");
        myiframe.contentWindow.zoomToPoint(100, 100);
    }
    //food部分
    if (window.CurProject.GisPanel.FoodBar) throw new Error('CurProject.GisPanel.FoodBar 类重复加载');
    var curProjectFoodBar = window.CurProject.GisPanel.FoodBar = function () {
        this._masterElement = null;
    }
    var _curProjectFoodBar = null;
    //获得 CurProject.GisPanel.FoodBar 实例
    curProjectFoodBar.getInstance = function () {
        var rtn = null;
        if (_curProjectFoodBar == null) {
            rtn = new window.CurProject.GisPanel.FoodBar();
            _curProjectFoodBar = rtn;
        }
        else {
            rtn = _curProjectFoodBar;
        }
        return rtn;
    }
    
    curProjectFoodBar.prototype.Create = function () {
        var rtn = g.createEle("div");
        rtn.className = "d1Food";
        rtn.innerHTML = "<div class='d1MTwoDiv'><div class='Traffic'><ul><li class='title'>阀门<i class='separate'>|</i></li><li>球阀</li><li>蝶阀</li><li>针型阀</li><li>旋塞阀</li></ul></div><div class='fun'><ul><li class='title'>管线<i class='separate'>|</i></li><li>高压</li><li>次高压</li><li>中压</li><li>低压</li></ul></div><div class='life'><ul><li class='title'>变压器<i class='separate'>|</i></li><li>电力</li><li>仪用</li><li>试验</li><li>特种</li></ul></div></div>";
        var d1BottomDiv = g.createEle("div");
        d1BottomDiv.className = "d1BottomDiv";
        d1BottomDiv.innerHTML = "<div class='d1t1'><div class='d1BTitleDiv'>地址：</div><select class='d1Select wid130'><option value='value'>沈阳</option><option value='value'>大连</option><option value='value'>抚顺</option><option value='value'>辽阳</option></select></div><div class='d1t1'><div class='d1BTitleDiv'>起始周期：</div><select class='d1Select wid300'><option value='value'>2015年9月16日 14:44:04</option><option value='value'>2015年9月16日 14:44:16</option><option value='value'>2015年9月16日 14:44:22</option><option value='value'>2015年9月16日 14:44:26</option></select></div><div class='d1t1'><div class='d1BTitleDiv'>结束周期：</div><select class='d1Select wid300'><option value='value'>2015年9月16日 14:44:04</option><option value='value'>2015年9月16日 14:44:16</option><option value='value'>2015年9月16日 14:44:22</option><option value='value'>2015年9月16日 14:44:26</option></select></div><div class='d1t1'><div class='d1BTitleDiv'>关键字：</div><input id='Text1' type='text' class='sInput wid300' /></div><div class='d1t1'><div class='d1BTitleDiv'>行政区：</div><select class='d1Select wid130'><option value='value'>皇姑区</option><option value='value'>和平区</option><option value='value'>沈河区</option><option value='value'>和平区</option></select></div><div class='d1t1'><div class='d1BTitleDiv'>范围：</div><select class='d1Select wid130'><option value='value'>中街商圈</option><option value='value'>太原街商圈</option><option value='value'>北行商圈</option></select></div><div class='d1t1'><div class='d1BTitleDiv'>管径尺寸：</div><select class='d1Select wid130'><option value='value'>200以下</option><option value='value'>200-500</option><option value='value'>500-800</option></select></div><div class='d1t1'><div class='d1BTitleDiv'>类型：</div><select class='d1Select wid130'><option value='value'>经济型</option><option value='value'>三星/舒适</option><option value='value'>四星/高档</option><option value='value'>五星/豪华</option></select></div>";

        var btnDiv = g.createEle("div");
        btnDiv.className = "btnDiv";
        d1BottomDiv.appendChild(btnDiv);

        var d1ButtonDiv = g.createEle("div");
        d1ButtonDiv.className = "d1ButtonDiv";
        d1ButtonDiv.innerHTML = "搜&nbsp&nbsp&nbsp索";
        g.ah(d1ButtonDiv, "click", this.search_Ck);
        btnDiv.appendChild(d1ButtonDiv);

        var d1ButtonDiv2 = g.createEle("div");
        d1ButtonDiv2.className = "d1ButtonDiv";
        d1ButtonDiv2.innerHTML = "重&nbsp&nbsp&nbsp置";
        g.ah(d1ButtonDiv2, "click", this.reset_Ck);
        btnDiv.appendChild(d1ButtonDiv2);

        rtn.appendChild(d1BottomDiv);
        this._masterElement = rtn;
        return rtn;
    }
    //重置按钮事件
    curProjectFoodBar.prototype.reset_Ck = function () {
        var myiframe = document.getElementById("GisPanelIfr");
        myiframe.contentWindow.resetPoint();
    }
    //查询按钮事件
    curProjectFoodBar.prototype.search_Ck = function () {
        var resultBar = window.CurProject.GisPanel.ResultBar.getInstance()._masterElement;
        resultBar.style.left = "0px";
        resultBar.style.zIndex = "999";
        var myiframe = document.getElementById("GisPanelIfr");
        myiframe.contentWindow.zoomToPoint(100, 100);
    }



    //地图
    if (window.CurProject.GisPanel.MapBar) throw new Error('CurProject.GisPanel.MapBar 类重复加载');
    var curProjectMapBar = window.CurProject.GisPanel.MapBar = function () {
        this._masterElement = null;
    }
    var _curProjectMapBar = null;
    //获得 CurProject.GisPanel.MapBar 实例
    curProjectMapBar.getInstance = function () {
        var rtn = null;
        if (_curProjectMapBar == null) {
            rtn = new window.CurProject.GisPanel.MapBar();
            _curProjectMapBar = rtn;
        }
        else {
            rtn = _curProjectMapBar;
        }
        return rtn;
    }

    curProjectMapBar.prototype.Create = function () {
        var rtn = g.createEle("div");
        rtn.id = "DemoMapDiv";
        rtn.className = "ifrDiv";
        rtn.innerHTML = "<iframe id='GisPanelIfr' src='DevelopmentCase/GISPanel/Mymap.html' style='width: 100%; height: 100%;'></iframe>";
        _CurMap = rtn;
        return rtn;
    }

}(CurProject.Common);
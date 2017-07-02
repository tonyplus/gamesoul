!function () {
    //初始化名称空间
    window.CurProject = window.CurProject || {};


    //实现
    if (window.CurProject.WpHelper3) throw new Error('CurProject.WpHelper 类重复加载');
    var curProjectWpHelper3 = window.CurProject.WpHelper3 = function () {
    }
    curProjectWpHelper3.dbing = function (instance, method) {
        return function () {
            return method.apply(instance, arguments);
        }
    };

    //事件通用函数
    curProjectWpHelper3.addHandler = function (element, eventName, handler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, handler, false);
        }
        else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler);
        }
    };
    curProjectWpHelper3.ah = curProjectWpHelper3.addHandler;

    //element创建函数
    curProjectWpHelper3.createEle = function (eleName) {
        var rtn = document.createElement(eleName);
        return rtn;
    }
}()
!function (g) {
    //初始化名称空间
    window.CurProject = window.CurProject || {};


    //实现
    if (window.CurProject.wPanelThree) throw new Error('CurProject.wPanelThree 类重复加载');
    var curProjectwPanelThree = window.CurProject.wPanelThree = function () {
        this._masterElement = null;
    }
    var _curProjectwPanelThree = null;
    //获得 CurProject.wPanelThree 实例
    curProjectwPanelThree.getInstance = function () {
        var rtn = null;
        if (_curProjectwPanelThree == null) {
            rtn = new window.CurProject.wPanelThree();
            _curProjectwPanelThree = rtn;
        }
        else {
            rtn = _curProjectwPanelThree;
        }
        return rtn;
    }

    //示例代码 开始 必带两参数 element父级元素 model配置文件类
    curProjectwPanelThree.prototype.initParms = function (element, model) {
        var ins = window.CurProject.wPanelThree.getInstance();
        var tempCB = ins.CreateCkBox();
        element.appendChild(tempCB);

        var tempCodeBtn = ins.CreateCodeBtn();
        element.appendChild(tempCodeBtn);
    }

    //input按钮
    curProjectwPanelThree.prototype.CreateCkBox = function () {
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
        tempCB.id = "chk3";
        tempswitch.appendChild(tempCB);

        var tempLable = g.createEle("label");
        tempswitch.appendChild(tempLable);

        var tempi = g.createEle("i");
        tempLable.appendChild(tempi);
        return rtn;
    }
    //代码预览按钮
    curProjectwPanelThree.prototype.CreateCodeBtn = function () {
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
    curProjectwPanelThree.prototype.CodeBtn_Ck = function () {
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
        tempDiv1.style.backgroundImage = "url(DevelopmentCase/WarningPanel/images/压力报警.png)";
        tempDiv1.style.backgroundRepeat = "no-repeat";
        tempWd1.getContainer().appendChild(tempDiv1);
        tempWd1.setCaption("家用故障信息");
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
        tempDiv2.style.overflow = "auto";
        tempDiv2.innerHTML = "<iframe id='defPageALL' src='DevelopmentCase/WarningPanel/WarningPanel3Code.html' style='width: 100%; height: 100%;'></iframe>";
        tempWd2.setCaption("代码");
        tempWd2.getContainer().appendChild(tempDiv2);
        tempWd2.show();

        mdi.setLayoutMdi(mdi.MdiLayout.Tile);
    }
}(window.CurProject.WpHelper3)
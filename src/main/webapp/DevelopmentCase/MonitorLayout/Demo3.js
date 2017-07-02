!function () {
	//初始化名称空间
	window.CurProject = window.CurProject || {};

	if (window.CurProject.Common3x) throw new Error('CurProject.Common 类重复加载');
	var uc = window.CurProject.Common3x = function () {
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
} ();

!function (g) {
	//初始化名称空间
	window.CurProject = window.CurProject || {};

	//整体
	if (window.CurProject.Demo3) throw new Error('CurProject.Demo3 类重复加载');
	var dlist = window.CurProject.Demo3 = function () {
		this._masterElement = null;
	};

	var _dlist = null;
	var _openIframes = new Array();
	dlist.getOpenIframes = function () {
		return _openIframes;
	}

	//获取实例对象
	dlist.getInstance = function () {
		var rtn = null;
		if (_dlist == null) {
			rtn = new window.CurProject.Demo3();
			_dlist = rtn;
		}
		else {
			rtn = _dlist;
		}
		return rtn;
	}

	//创建分屏列表按钮
	dlist.Create = function () {
		var ScreenBtn = document.createElement("div");
		ScreenBtn.className = "fourth";
		var ScreenBox = document.createElement("input");
		ScreenBox.type = "checkbox";
		ScreenBox.id = "check";
		ScreenBtn.appendChild(ScreenBox);
		var ScreenImg = document.createElement("img");
		ScreenImg.id = "img";
		ScreenImg.src = "DevelopmentCase/MonitorLayout/images/平铺.png";
		ScreenBtn.appendChild(ScreenImg);
		var ins = new window.CurProject.Demo3();
		var ck = g.dbing(ins, ins.dlistClick);
		g.ah(ScreenBox, 'click', ck);
		ScreenBtn.appendChild(ScreenBox);
		return ScreenBtn;
	}

	//创建代码按钮
	dlist.BtnCreate = function () {
		var btnC = document.createElement("input");
		btnC.type = "button";
		btnC.className = "btnC";
		btnC.title = "点击查看代码";
		btnC.value = "";
		btnC.id = "btnC";
		var ins = new window.CurProject.Demo3();
		var ck = g.dbing(ins, ins.dlistScreenClick);
		g.ah(btnC, 'click', ck);
		return btnC;
	}

	//示例代码  开始     initParms初始化   element父对象   model配置文件
	dlist.prototype.initParms = function (element, model) {
		var app = window.Mirs.Application.getInstance();
		var headEmt = document.getElementsByTagName("head")[0];
		element.getTitleControl().addEventListener("click", createAll, false);
		var linkEmt = document.createElement("link");
		linkEmt.href = "DevelopmentCase/MonitorLayout/Demo3.css";
		linkEmt.rel = "stylesheet";
		linkEmt.type = "text/css";
		headEmt.appendChild(linkEmt);
		var de3 = new window.CurProject.Demo3.Create();
		var Wb3 = new window.CurProject.Demo3.BtnCreate();
		var ins = new window.CurProject.Demo3();
		element.appendChild(de3);
		element.appendChild(Wb3);
	}
	//示例代码  结束

	//功能点击事件
	function createAll() {
		var app = window.Mirs.Application.getInstance();
		var mdi = app.getWorkControl().getMdiControl();
		mdi.childrenClear();
		var tempWd = app.getWorkControl().getMdiControl().createChildWindow();
		var tempDiv = document.createElement("div");
		tempDiv.id = "defaultPageAll";
		tempDiv.style.height = "100%";
		tempDiv.position = "absolute";
		tempDiv.top = "0px";
		tempDiv.bottom = "0px";
		tempDiv.right = "0px";
		tempDiv.left = "0px";
		tempDiv.innerHTML = "<iframe id='defPageALL' src='DevelopmentCase/MonitorLayout/Monitor_Demo/MonitorDemo6.html' style='width: 100%; height: 100%;'></iframe>";
		tempWd.getContainer().appendChild(tempDiv);
		tempWd.setCaption("指标趋势");
		tempWd.show();
	};
	//分屏列表点击事件
	dlist.prototype.dlistClick = function (element, model) {
		var btn = document.getElementById("check");
		var imgBTN = document.getElementById("img");
		var dlistArray = window.CurProject.Demo3.getOpenIframes();
		var isload = false;
		var app = window.Mirs.Application.getInstance();
		var mdi = app.getWorkControl().getMdiControl();
		for (var i = 0; i < dlistArray.length; i++) {
			var temp = document.getElementById(dlistArray[i].id);
			if (temp) {
				isload = true;
			}
		}
		if (isload) {
			if (btn.checked == true) {
				imgBTN.src = "DevelopmentCase/MonitorLayout/images/四分屏列表.png";
				mdi.setLayoutMdi(mdi.MdiLayout.Tile);
			} else {
				imgBTN.src = "DevelopmentCase/MonitorLayout/images/平铺.png";
				mdi.setLayoutMdi(mdi.MdiLayout.TileVertical);
			};
			mdi.childrenClear();
			var arr = new Array();
			var obj1 = {};
			obj1.Caption = "经济指标趋势";
			obj1.Url = "DevelopmentCase/MonitorLayout/Monitor_Demo/MonitorDemo6.html";
			var obj2 = {};
			obj2.Caption = "全国主要城市空气质量";
			obj2.Url = "DevelopmentCase/MonitorLayout/Monitor_Demo/MonitorDemo4.html";
			var obj3 = {};
			obj3.Caption = "污染指数";
			obj3.Url = "DevelopmentCase/MonitorLayout/Monitor_Demo/MonitorDemo3.html";
			var obj4 = {};
			obj4.Caption = "参考指数";
			obj4.Url = "DevelopmentCase/MonitorLayout/Monitor_Demo/MonitorDemo5.html";


			arr.push(obj1);
			arr.push(obj2);
			arr.push(obj3);
			arr.push(obj4);
			for (var i = 0; i < arr.length; i++) {
				var tempWd = app.getWorkControl().getMdiControl().createChildWindow();
				var tempDiv = document.createElement("div");
				tempDiv.id = "dlistFrm" + i;
				tempDiv.style.height = "100%";
				tempDiv.position = "absolute";
				tempDiv.top = "0px";
				tempDiv.bottom = "0px";
				tempDiv.right = "0px";
				tempDiv.left = "0px";
				tempDiv.innerHTML = "<iframe id='ifr" + i + "' src='" + arr[i].Url + "' style='width: 100%; height: 100%;'></iframe>";
				tempWd.getContainer().appendChild(tempDiv);
				tempWd.setCaption(arr[i].Caption);
				tempWd.show();
				dlistArray.push(tempDiv);
			}
			if (btn.checked == true) {
				imgBTN.src = "DevelopmentCase/MonitorLayout/images/四分屏列表.png";
				mdi.setLayoutMdi(mdi.MdiLayout.Tile);
			} else {
				imgBTN.src = "DevelopmentCase/MonitorLayout/images/平铺.png";
				mdi.setLayoutMdi(mdi.MdiLayout.TileVertical);
			};
			return;
		} else {
			mdi.childrenClear();
			var arr = new Array();
			var obj1 = {};
			obj1.Caption = "经济指标趋势";
			obj1.Url = "DevelopmentCase/MonitorLayout/Monitor_Demo/MonitorDemo6.html";
			var obj2 = {};
			obj2.Caption = "全国主要城市空气质量";
			obj2.Url = "DevelopmentCase/MonitorLayout/Monitor_Demo/MonitorDemo4.html";
			var obj3 = {};
			obj3.Caption = "污染指数";
			obj3.Url = "DevelopmentCase/MonitorLayout/Monitor_Demo/MonitorDemo3.html";
			var obj4 = {};
			obj4.Caption = "参考指数";
			obj4.Url = "DevelopmentCase/MonitorLayout/Monitor_Demo/MonitorDemo5.html";


			arr.push(obj1);
			arr.push(obj2);
			arr.push(obj3);
			arr.push(obj4);

			for (var i = 0; i < arr.length; i++) {
				var tempWd = app.getWorkControl().getMdiControl().createChildWindow();
				var tempDiv = document.createElement("div");
				tempDiv.id = "dlistFrm" + i;
				tempDiv.style.height = "100%";
				tempDiv.position = "absolute";
				tempDiv.top = "0px";
				tempDiv.bottom = "0px";
				tempDiv.right = "0px";
				tempDiv.left = "0px";
				tempDiv.innerHTML = "<iframe id='ifr" + i + "' src='" + arr[i].Url + "' style='width: 100%; height: 100%;'></iframe>";
				tempWd.getContainer().appendChild(tempDiv);
				tempWd.setCaption(arr[i].Caption);
				tempWd.show();
				dlistArray.push(tempDiv);
			}
			if (btn.checked == true) {
				imgBTN.src = "DevelopmentCase/MonitorLayout/images/四分屏列表.png";
				mdi.setLayoutMdi(mdi.MdiLayout.Tile);
			} else {
				imgBTN.src = "DevelopmentCase/MonitorLayout/images/平铺.png";
				mdi.setLayoutMdi(mdi.MdiLayout.TileVertical);
			}
		}
	}
	//代码点击事件
	dlist.prototype.dlistScreenClick = function (element, model) {
		var btn = document.getElementById("check");
		var imgBTN = document.getElementById("img");
		var dlistArray = window.CurProject.Demo3.getOpenIframes();
		var isload = false;
		var app = window.Mirs.Application.getInstance();
		var mdi = app.getWorkControl().getMdiControl();
		for (var i = 0; i < dlistArray.length; i++) {
			var temp = document.getElementById(dlistArray[0].id);
			if (temp) {
				isload = true;
			}
		}
		if (isload) {
			mdi.childrenClear();
			var arr = new Array();
			var obj1 = {};
			obj1.Caption = "多窗口视频监控效果";
			obj1.Url = "DevelopmentCase/MonitorLayout/images/多窗口视频监控.png";
			arr.push(obj1);

			var obj2 = {};
			obj2.Caption = "JS源代码";
			obj2.Url = "DevelopmentCase/MonitorLayout/Demo3code.htm";
			arr.push(obj2);

			for (var i = 0; i < arr.length; i++) {

				var tempWd = app.getWorkControl().getMdiControl().createChildWindow();
				var tempDiv = document.createElement("div");
				tempDiv.id = "dlistFrm" + i;
				tempDiv.style.height = "100%";
				tempDiv.style.backgroundColor = "#fff";
				tempDiv.position = "absolute";
				tempDiv.top = "0px";
				tempDiv.bottom = "0px";
				tempDiv.right = "0px";
				tempDiv.left = "0px";
				tempDiv.innerHTML = "<iframe id='ifr" + i + "' src='" + arr[i].Url + "' style='width: 100%; height: 100%;'></iframe>";
				tempWd.getContainer().appendChild(tempDiv);
				tempWd.setCaption(arr[0].Caption);
				tempWd.show();
				dlistArray.push(tempDiv);
				mdi.setLayoutMdi(mdi.MdiLayout.Tile);
			}
			return;
		} else {
			mdi.childrenClear();
			var arr = new Array();
			var obj1 = {};
			obj1.Caption = "多窗口视频监控效果";
			obj1.Url = "DevelopmentCase/MonitorLayout/images/多窗口视频监控.png";
			arr.push(obj1);

			var obj2 = {};
			obj2.Caption = "JS源代码";
			obj2.Url = "DevelopmentCase/MonitorLayout/Demo3code.htm";
			arr.push(obj2);

			for (var i = 0; i < arr.length; i++) {
				var tempWd = app.getWorkControl().getMdiControl().createChildWindow();
				var tempDiv = document.createElement("div");
				tempDiv.id = "dlistFrm" + i;
				tempDiv.style.height = "100%";
				tempDiv.style.backgroundColor = "#fff";
				tempDiv.position = "absolute";
				tempDiv.top = "0px";
				tempDiv.bottom = "0px";
				tempDiv.right = "0px";
				tempDiv.left = "0px";
				tempDiv.innerHTML = "<iframe id='ifr" + i + "' src='" + arr[i].Url + "' style='width: 100%; height: 100%;'></iframe>";
				tempWd.getContainer().appendChild(tempDiv);
				tempWd.setCaption(arr[i].Caption);
				tempWd.show();
				dlistArray.push(tempDiv);
				mdi.setLayoutMdi(mdi.MdiLayout.Tile);
			}
		}
	}

} (CurProject.Common3x);

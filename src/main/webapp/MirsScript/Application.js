!function() {
	window.Mirs = window.Mirs || {};
	if (window.Mirs.Global) {
		throw new Error("Mirs.Global 重复引用")
	}
	var a = window.Mirs.Global = function() {
		throw new Error("Mirs.Global 禁止实例化或以函数方式调用")
	};
	a.createDelegate = function(b, c) {
		return function() {
			return c.apply(b, arguments)
		}
	};
	a.cd = a.createDelegate;
	a.createHttpRequest = function() {
		var b = null;
		if (window.XMLHttpRequest) {
			b = new XMLHttpRequest()
		} else {
			if (window.ActiveXObject) {
				b = new ActiveXObject("Microsoft.XMLHTTP")
			}
		}
		return b
	};
	a.creq = a.createHttpRequest;
	a.addHandler = function(c, b, d) {
		if (c.addEventListener) {
			c.addEventListener(b, d, false)
		} else {
			if (c.attachEvent) {
				c.attachEvent("on" + b, d)
			}
		}
	};
	a.ah = a.addHandler;
	a.createElement = function(b) {
		var c = document.createElement(b);
		return c
	};
	a.ce = a.createElement;
	a.getElementById = function(b) {
		return window.document.getElementById(b)
	};
	a.gb = a.getElementById
}();
!function(g) {
	window.Mirs = window.Mirs || {};
	if (window.Mirs.Application) {
		throw new Error("Mirs.Application 类重复加载")
	}
	var cl = window.Mirs.Application = function() {
		this.AuthInfo = null;
		this.View = null;
		this.NavData = null;
		this.NavRootControl = null;
		this.Config = null;
		this.IsDebug = null;
		this.ThemeAdapter = null;
		this.LoadingInfo = null
	};
	var _ai = null;
	function RootControlRun() {
		_ai.EquipmentType = getEquipmentType();
		var rootcontrol = window.Mirs.Navigation.RootControl.Create(_ai.View,
				_ai.NavData);
		var rpe = _ai.View.getMirsParentElement();
		_ai.NavRootControl = rootcontrol;
		_ai.getRootControl = getRootControl;
		_ai.getWorkControl = getWorkControl;
		_ai.getNavControl = getNavControl;
		_ai.getThemeName = getThemeName;
		_ai.setThemeName = setThemeName;
		_ai.getNavPanelControl = getNavPanelControl;
		if (_ai.ThemeAdapter) {
			_ai.userThemeLoad = false;
			_ai.themeListLoad = false;
			if (_ai.ThemeAdapter.LoadUserTheme) {
				_ai.ThemeAdapter.LoadUserTheme(GetUserThemeAdComplete)
			}
		} else {
			AppCompleted()
		}
	}
	function GetUserThemeAdComplete(themeName) {
		_ai.userThemeLoad = true;
		try {
			if (themeName && themeName != "") {
				setThemeName(themeName);
				_ai.getNavControl().setTheme(themeName);
				_ai.themeName = themeName;
				AppCompleted()
			}
		} catch (e) {
			alert("GetUserThemeAdComplete:主题代理类获取当前用户主题报错getUserTheme");
			_ai.ThemeAdapter = null;
			AppCompleted()
		}
	}
	function getRootControl() {
		var rtn = _ai.NavRootControl;
		return rtn
	}
	function getWorkControl() {
		var rtn = window.Mirs.Navigation.WorkControl.getInstance();
		return rtn
	}
	function getNavControl() {
		var rtn = window.Mirs.Navigation.RootNav.getInstance();
		return rtn
	}
	function getThemeName() {
		var rtn = _ai.themeName;
		if (rtn) {
			rtn = _ai.themeName
		} else {
			rtn = "Default"
		}
		return rtn
	}
	function getNavPanelControl() {
		var rtn = window.Navigation.NavPanelControl.getInstance();
		return rtn
	}
	function setThemeName(c) {
		_ai.themeName = c
	}
	function getEquipmentType() {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		var rtn = null;
		if (bIsIpad) {
			rtn = "IPAD"
		}
		if (bIsIphoneOs) {
			rtn = "IPHONE"
		}
		if (bIsMidp) {
			rtn = bIsMidp
		}
		if (bIsUc7) {
			rtn = bIsUc7
		}
		if (bIsUc) {
			rtn = bIsUc
		}
		if (bIsAndroid) {
			rtn = "ANDROID"
		}
		if (bIsCE) {
			rtn = bIsCE
		}
		if (bIsWM) {
			rtn = bIsWM
		}
		return rtn
	}
	function AppCompleted() {
		if (_ai.ThemeAdapter) {
			RunCompleted()
		} else {
			var app = window.Mirs.Application.getInstance();
			var ak = g.creq();
			var callUrl = "./MirsService/PlugTheme.svc/GetThemeJson/"
					+ app.AuthInfo.Organization + "/" + app.AuthInfo.LoginID;
			ak.open("GET", callUrl, true);
			ak.onreadystatechange = function() {
				if (ak.readyState == 4) {
					if (ak.status == 200) {
						var akjson = ak.responseText;
						var obj = eval("(" + akjson + ")");
						if (_ai.Config.DefTheme && _ai.Config.DefTheme != ""
								&& obj == "") {
							obj = _ai.Config.DefTheme
						} else {
							if (obj == "") {
								obj = "Default"
							}
						}
						_ai.getNavControl().setTheme(obj);
						_ai.themeName = obj;
						RunCompleted()
					}
				}
			};
			ak.send(null)
		}
	}
	function RunCompleted() {
		var app = window.Mirs.Application.getInstance();
		var NavPanelControl = window.Navigation.NavPanelControl.getInstance();
		app.NavPanelControl = NavPanelControl;
		var NavPanel = NavPanelControl.Create();
		app.getNavControl().appendChild(NavPanel);
		var tempSettingMenu = window.Mirs.Navigation.SettingMenu.Create();
		var tempFixedBar = window.Mirs.Navigation.FixedBar.getInstance();
		var femt = tempFixedBar.firstChild;
		tempFixedBar.insertBefore(tempSettingMenu, femt);
		var jsm = Mirs.ScriptManager.JSManager.getInstance();
		jsm._callbackComplete = PlatformLoaded;
		jsm.starup()
	}
	function PlatformLoaded() {
		var jsm = Mirs.ScriptManager.JSManager.getInstance();
		jsm.platLoaded();
		var tempMdiList = window.Mirs.Navigation.MdiList.getInstance()
				.getMdiList();
		if (_ai.Config.WinManagerBarSwitch == true) {
			window.Mirs.Navigation.WinManagerBar.getInstance().startUp()
		}
		_ai.View.MirsAppCompleted()
	}
	cl.getInstance = function() {
		var rtn = null;
		if (_ai == null) {
			rtn = new cl();
			_ai = rtn
		} else {
			rtn = _ai
		}
		return rtn
	};
	cl.Create = function(view, navdata) {
		var rtn = cl.getInstance();
		rtn.View = view;
		rtn.NavData = navdata;
		rtn.Config = view.getMirsConfig();
		rtn.IsDebug = rtn.Config.DebugSwitch;
		return rtn
	};
	cl.prototype.startup = function() {
		if (this.NavData) {
			RootControlRun()
		} else {
			getNavData()
		}
		var LoadingModel = window.Mirs.LoadingModel.getInstance();
		LoadingModel.LoadingStart();
		var app = window.Mirs.Application.getInstance();
		app.LoadingInfo = LoadingModel
	};
	if (window.Mirs.LoadingModel) {
		throw new Error("Mirs.LoadingModel 类重复加载")
	}
	var mirsLoadingModel = window.Mirs.LoadingModel = function() {
		this._LoadingWindowDom = null;
		this._LoadingThemeInfoList = new Array()
	};
	var _mirsLoadingModel = null;
	mirsLoadingModel.getInstance = function() {
		var rtn = null;
		if (_mirsLoadingModel == null) {
			rtn = new window.Mirs.LoadingModel();
			_mirsLoadingModel = rtn
		} else {
			rtn = _mirsLoadingModel
		}
		return rtn
	};
	mirsLoadingModel.prototype.LoadingStart = function() {
		tempThis = this;
		var xhr = new XMLHttpRequest();
		var url = "MirsThemes/LoadingPage/LoadingInterface.html";
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status == 200) {
					var app = window.Mirs.Application.getInstance();
					tempThis._LoadingWindowDom = xhr.responseText
				} else {
					alert("Loading页载入错误！")
				}
			}
		};
		xhr.send(null);
		var xhr2 = new XMLHttpRequest();
		var url = "MirsThemes/StyleThemes.json";
		xhr2.open("GET", url, true);
		xhr2.onreadystatechange = function() {
			if (xhr2.readyState === 4) {
				if (xhr2.status == 200) {
					var app = window.Mirs.Application.getInstance();
					var model = eval("(" + xhr2.responseText + ")");
					model = model.MirsStyleThemeList;
					for (var i = 0; i < model.MirsStyleTheming.length; i++) {
						var LoadInfo = new window.Mirs.LoadingModel.LoadingThemeInfo();
						LoadInfo._ThemeName = model.MirsStyleTheming[i].ThemeFileName;
						tempThis.PushLoadingThemeDom(LoadInfo)
					}
				} else {
					alert("StyleThemes.json载入错误！")
				}
			}
		};
		xhr2.send(null)
	};
	mirsLoadingModel.prototype.PushLoadingThemeDom = function(LoadInfoModel) {
		tempThis = this;
		tempThis._LoadingThemeInfoList;
		var xhr3 = new XMLHttpRequest();
		var url = "MirsThemes/" + LoadInfoModel._ThemeName
				+ "/LoadingTheme.css";
		xhr3.open("GET", url, false);
		xhr3.onreadystatechange = function() {
			if (xhr3.readyState === 4) {
				if (xhr3.status == 200) {
					LoadInfoModel._StyleDom = xhr3.responseText;
					tempThis._LoadingThemeInfoList.push(LoadInfoModel)
				} else {
					alert(LoadInfoModel._ThemeName + "样式载入错误！")
				}
			}
		};
		xhr3.send(null)
	};
	if (window.Mirs.LoadingModel.LoadingThemeInfo) {
		throw new Error("Mirs.LoadingModel.LoadingThemeInfo 类重复加载")
	}
	var mirsLoadingThemeInfo = window.Mirs.LoadingModel.LoadingThemeInfo = function() {
		this._ThemeName = null;
		this._StyleDom = null
	};
	var _mirsLoadingThemeInfo = null;
	mirsLoadingThemeInfo.getInstance = function() {
		var rtn = null;
		if (_mirsLoadingThemeInfo == null) {
			rtn = new window.Mirs.LoadingModel.LoadingThemeInfo();
			_mirsLoadingThemeInfo = rtn
		} else {
			rtn = _mirsLoadingThemeInfo
		}
		return rtn
	};
	function getNavData() {
		var ak = g.creq();
		var mRan = Math.round(Math.random() * 100);
		var callUrl = "./MirsService/MergerNavXml.svc/MergerNav"
				+ encodeURI("/" + _ai.AuthInfo.Organization + "/"
						+ _ai.AuthInfo.LoginID);
		ak.open("GET", callUrl, true);
		ak.onreadystatechange = function() {
			getUserXML(ak)
		};
		ak.send(null)
	}
	function getUserXML(ak) {
		var arg = arguments;
		if (ak.readyState == 4) {
			if (ak.status == 200) {
				var strJson = ak.responseText;
				var objJson = eval(ak.responseText);
				if (objJson == "ok") {
					var mRan = Math.round(Math.random() * 100);
					var mk = g.creq();
					mk.open("GET", "./MirsConfigs/Orgs/"
							+ _ai.AuthInfo.Organization + "/"
							+ _ai.AuthInfo.LoginID
							+ "/Cache/RuntimeNavgation.json?r=" + mRan, true);
					mk.onreadystatechange = function() {
						setNavData(mk)
					};
					mk.send(null)
				}
			}
		}
	}
	function setNavData(mk) {
		var arg = arguments;
		if (mk.readyState == 4) {
			if (mk.status == 200) {
				var strJson = mk.responseText;
				var objJson = eval(mk.responseText);
				_ai.NavData = objJson[0];
				RootControlRun()
			}
		}
	}
}(Mirs.Global);
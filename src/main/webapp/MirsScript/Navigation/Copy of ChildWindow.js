!function(f, b) {
	window.Mirs = window.Mirs || {};
	window.Mirs.Navigation = window.Mirs.Navigation || {};
	if (window.Mirs.Navigation.ChildWindow) {
		throw new Error("Mirs.Navigation.ChildWindow 类重复加载")
	}
	var d = 0;
	var i = window.Mirs.Navigation.ChildWindow = function() {
		this._masterElement = null;
		this._model = null;
		this._iframeElement = null;
		this._titleContainer = null;
		this._ifContainer = null;
		this._ifID = null;
		this._callBackScreen = null;
		this._callBackClose = null;
		this._caption = null;
		this._userState = null;
		this._closeingAddList = new Array();
		this._closedAddList = new Array();
		this._cancel = true;
		this._screeningAddList = new Array();
		this._screenedAddList = new Array();
		this._screenCancel = true;
		this._createType = null
	};
	i.Create = function(m) {
		var m = m || {
			_Caption : "新窗口"
		};
		var o = f.ce("div");
		o.setAttribute("MirsElementType", "Mirs.Navigation.ChildWindow");
		o.className = "rwIframeContainerShow";
		d++;
		o.id = "key" + d;
		var n = f.ce("div");
		n.className = "rwIfTitleContainerNone";
		var C = f.ce("div");
		C.className = "rwIfContainer rwIfContainerTop0";
		var A = f.ce("div");
		var z = f.ce("div");
		var F = f.ce("div");
		A.className = "rwIfTitleText";
		A.innerHTML = m._Caption;
		z.className = "rwIfTitleScreen";
		F.className = "rwIfTitleClose";
		n.appendChild(A);
		n.appendChild(z);
		n.appendChild(F);
		var a = f.ce("iframe");
		var s = b.getInstance();
		a.setAttribute("MirsElementType", "Navigation.mcSecondContainer");
		a.style.width = "100%";
		a.style.height = "100%";
		a.style.backgroundColor = "#ffffff";
		C.appendChild(a);
		o.appendChild(n);
		o.appendChild(C);
		var D = window.Mirs.Navigation.MDIControl.getInstance();
		D.appendChild(o);
		var u = s.AuthInfo.SmallTicket;
		var r = m._RunUrl;
		var l = r.indexOf("#");
		if (r.indexOf("?") > 0 || l > 0) {
			r = r + "&ticket=" + u
		} else {
			r = r + "?ticket=" + u
		}
		var t = window.Mirs.Application.getInstance();
		var v = t.getThemeName();
		if (l > 0) {
			r = r + "&MirsThemeName=" + v
		} else {
			r = r + "#MirsThemeName=" + v
		}
		var k = m._Caption + "，加载中.....<br/><br/>访问地址:<br/>" + r;
		var p = m._OwnershipUnit;
		var s = window.Mirs.Application.getInstance();
		k = s.LoadingInfo._LoadingWindowDom;
		var y = s.LoadingInfo._LoadingThemeInfoList;
		for (var B = 0; B < y.length; B++) {
			if (y[B]._ThemeName == v) {
				k = k.replace("${LStyle}$", y[B]._StyleDom)
			}
		}
		k = k.replace("${LThemeName}$", v);
		k = k.replace("${LCaption}$", m._Caption);
		k = k.replace("${LOwner}$", p);
		k = k.replace("${LUrl}$", r);
		a.contentWindow.document.write(k);
		a.src = r;
		var g = new Mirs.Navigation.ChildWindow();
		g._masterElement = o;
		g._model = m;
		g._titleContainer = n;
		g._iframeElement = a;
		g._ifContainer = C;
		g._createType = "AUTO";
		o.setClassName = f.cd(g, g.setClassName);
		o.setID = f.cd(g, g.setID);
		o.setWidthHeight = f.cd(g, g.setWidthHeight);
		o.setBorder = f.cd(g, g.setBorder);
		o.setMargin = f.cd(g, g.setMargin);
		o.setIframeElement = f.cd(g, g.setIframeElement);
		o.getTitleContainer = f.cd(g, g.getTitleContainer);
		o.getIframeElement = f.cd(g, g.getIframeElement);
		o.getIfContainer = f.cd(g, g.getIfContainer);
		o.getContainer = f.cd(g, g.getContainer);
		o.getFrom = f.cd(g, g.getFrom);
		o.getIfID = f.cd(g, g.getIfID);
		o.getModel = f.cd(g, g.getModel);
		o.setCaption = f.cd(g, g.setCaption);
		o.getCaption = f.cd(g, g.getCaption);
		o.show = f.cd(g, g.show);
		o.closeing = f.cd(g, g.closeing);
		o.closed = f.cd(g, g.closed);
		o.getUserState = f.cd(g, g.getUserState);
		o.setUserState = f.cd(g, g.setUserState);
		o.addCloseingAddEvent = f.cd(g, g.addCloseingAddEvent);
		o.addCloseingRemoveEvent = f.cd(g, g.addCloseingRemoveEvent);
		o.addClosedAddEvent = f.cd(g, g.addClosedAddEvent);
		o.addClosedRemoveEvent = f.cd(g, g.addClosedRemoveEvent);
		o.getChildCloseingAddList = f.cd(g, g.getChildCloseingAddList);
		o.getChildClosedAddList = f.cd(g, g.getChildClosedAddList);
		o.setCancel = f.cd(g, g.setCancel);
		o.getCancel = f.cd(g, g.getCancel);
		o.screening = f.cd(g, g.screening);
		o.getCreateType = f.cd(g, g.getCreateType);
		var x = f.cd(g, g.screen_Click);
		f.ah(z, "click", x);
		var E = f.cd(g, g.close_Click);
		f.ah(F, "click", E);
		var q = window.Mirs.Navigation.NavListControl.getInstance();
		var j = q.getSelectMdiItem();
		if (j) {
			j.style.display = "none";
			j.disable = false
		}
		q.setSelectMdiItem(o);
		var w = window.Mirs.Navigation.MdiList.getInstance();
		w.addItem(o);
		return o
	};
	i.prototype.getCreateType = function() {
		return this._createType
	};
	function e() {
		alert("该窗口未定义【最大化】回调事件")
	}
	function c() {
		alert("该窗口未定义【最大化】回调事件")
	}
	i.CreateCustom = function(j) {
		var j = j || {
			_caption : "默认名称",
			_callBackScreen : e,
			_callBackClose : c,
		};
		var o = f.ce("div");
		o.setAttribute("MirsElementType", "Mirs.Navigation.ChildWindow");
		o.className = "rwIframeContainerShow";
		d++;
		o.id = "key" + d;
		var q = f.ce("div");
		q.className = "rwIfTitleContainer";
		var n = f.ce("div");
		n.className = "rwIfContainer";
		var a = f.ce("div");
		var k = f.ce("div");
		var p = f.ce("div");
		a.className = "rwIfTitleText";
		a.innerHTML = j._caption;
		k.className = "rwIfTitleScreen";
		p.className = "rwIfTitleClose";
		q.appendChild(a);
		q.appendChild(k);
		q.appendChild(p);
		o.appendChild(q);
		o.appendChild(n);
		var m = new Mirs.Navigation.ChildWindow();
		m._masterElement = o;
		m._titleContainer = q;
		m._ifContainer = n;
		m._callBackScreen = j._callBackScreen;
		m._callBackClose = j._callBackClose;
		o.setClassName = f.cd(m, m.setClassName);
		o.setID = f.cd(m, m.setID);
		o.setWidthHeight = f.cd(m, m.setWidthHeight);
		o.setBorder = f.cd(m, m.setBorder);
		o.setMargin = f.cd(m, m.setMargin);
		o.getTitleContainer = f.cd(m, m.getTitleContainer);
		o.getIfContainer = f.cd(m, m.getIfContainer);
		o.getContainer = f.cd(m, m.getContainer);
		o.getFrom = f.cd(m, m.getFrom);
		var g = f.cd(m, m.screenCustom_Click);
		f.ah(k, "click", g);
		var l = f.cd(m, m.closeCustom_Click);
		f.ah(p, "click", l);
		return o
	};
	i.CreateChildWindow = function() {
		var r = {
			_hmfuncid : "",
			_Caption : "",
			_Code : ""
		};
		var q = f.ce("div");
		q.setAttribute("MirsElementType", "Mirs.Navigation.ChildWindow");
		q.className = "rdwIframeContainerShow";
		q.style.display = "none";
		d++;
		q.id = "key" + d;
		r._hmfuncid = q.id;
		var t = f.ce("div");
		t.className = "rwIfTitleContainerNone";
		var p = f.ce("div");
		p.className = "rwIfContainer rwIfContainerTop0";
		var a = f.ce("div");
		var m = f.ce("div");
		var s = f.ce("div");
		a.className = "rwIfTitleText";
		a.innerHTML = "";
		m.className = "rwIfTitleScreen";
		s.className = "rwIfTitleClose";
		t.appendChild(a);
		t.appendChild(m);
		t.appendChild(s);
		q.appendChild(t);
		q.appendChild(p);
		var k = window.Mirs.Navigation.MDIControl.getInstance();
		k.appendChild(q);
		var o = new Mirs.Navigation.ChildWindow();
		o._masterElement = q;
		o._model = r;
		o._titleContainer = t;
		o._caption = a;
		o._ifContainer = p;
		q.setClassName = f.cd(o, o.setClassName);
		q.getTitleContainer = f.cd(o, o.getTitleContainer);
		q.getIfContainer = f.cd(o, o.getIfContainer);
		q.getContainer = f.cd(o, o.getContainer);
		q.getFrom = f.cd(o, o.getFrom);
		q.getIfID = f.cd(o, o.getIfID);
		q.getIframeElement = f.cd(o, o.getIframeElement);
		q.setIframeElement = f.cd(o, o.setIframeElement);
		q.getModel = f.cd(o, o.getModel);
		q.setCallBackScreen = f.cd(o, o.setCallBackScreen);
		q.setCallBackClose = f.cd(o, o.setCallBackClose);
		q.setCaption = f.cd(o, o.setCaption);
		q.getCaption = f.cd(o, o.getCaption);
		q.show = f.cd(o, o.show);
		q.closeing = f.cd(o, o.closeing);
		q.closed = f.cd(o, o.closed);
		q.getUserState = f.cd(o, o.getUserState);
		q.setUserState = f.cd(o, o.setUserState);
		q.addCloseingAddEvent = f.cd(o, o.addCloseingAddEvent);
		q.addCloseingRemoveEvent = f.cd(o, o.addCloseingRemoveEvent);
		q.addClosedAddEvent = f.cd(o, o.addClosedAddEvent);
		q.addClosedRemoveEvent = f.cd(o, o.addClosedRemoveEvent);
		q.getChildCloseingAddList = f.cd(o, o.getChildCloseingAddList);
		q.getChildClosedAddList = f.cd(o, o.getChildClosedAddList);
		q.setCancel = f.cd(o, o.setCancel);
		q.getCancel = f.cd(o, o.getCancel);
		q.addWindowStatusingAddEvent = f.cd(o, o.addWindowStatusingAddEvent);
		q.addWindowStatusedAddEvent = f.cd(o, o.addWindowStatusedAddEvent);
		q.fullScreen = f.cd(o, o.fullScreen);
		q.screening = f.cd(o, o.screening);
		q.close = f.cd(o, o.close);
		q.getCreateType = f.cd(o, o.getCreateType);
		var l = f.cd(o, o.screenCustom_Click);
		f.ah(m, "click", l);
		var n = f.cd(o, o.closeCustom_Click);
		f.ah(s, "click", n);
		var g = window.Mirs.Navigation.MdiList.getInstance();
		g.addItem(q);
		var j = window.Mirs.Navigation.MDILayoutControl.getInstance();
		j.refshLayout();
		j.refshLayManager();
		return q
	};
	i.prototype.setCancel = function(a) {
		this._cancel = a;
		return this._cancel
	};
	i.prototype.getCancel = function() {
		return this._cancel
	};
	i.prototype.addCloseingAddEvent = function(a) {
		this._closeingAddList.push(a)
	};
	i.prototype.addCloseingRemoveEvent = function(k) {
		var j = new Array();
		for (var g = 0; g < this._closeingAddList.length; g++) {
			var a = this._closeingAddList[g];
			if (a == k) {
			} else {
				j.push(a)
			}
		}
		this._closeingAddList = j;
		return j
	};
	i.prototype.addClosedAddEvent = function(a) {
		this._closedAddList.push(a)
	};
	i.prototype.addClosedRemoveEvent = function(k) {
		var j = new Array();
		for (var g = 0; g < this._closedAddList.length; g++) {
			var a = this._closedAddList[g];
			if (a == k) {
			} else {
				j.push(a)
			}
		}
		this._closedAddList = j;
		return j
	};
	i.prototype.addWindowStatusingAddEvent = function(a) {
		this._screeningAddList.push(a)
	};
	i.prototype.childScreenedAdd = function(a) {
		this._screenedAddList.push(a)
	};
	i.prototype.getChildCloseingAddList = function() {
		return this._closeingAddList
	};
	i.prototype.getChildClosedAddList = function() {
		return this._closedAddList
	};
	i.prototype.setClassName = function(a) {
		this._masterElement.className = a
	};
	i.prototype.setID = function(a) {
		this._masterElement.id = a
	};
	i.prototype.setWidthHeight = function(a, g) {
		this._masterElement.style.width = a;
		this._masterElement.style.height = g
	};
	i.prototype.setBorder = function(a) {
		this._masterElement.style.border = a
	};
	i.prototype.setMargin = function(a) {
		this._masterElement.style.margin = a
	};
	i.prototype.getTitleContainer = function() {
		return this._titleContainer
	};
	i.prototype.getModel = function() {
		return this._model
	};
	i.prototype.setIframeElement = function(a) {
		this._iframeElement = a;
		this._createType = "AUTO"
	};
	i.prototype.getIframeElement = function() {
		return this._iframeElement
	};
	i.prototype.getIfContainer = function() {
		return this._ifContainer
	};
	i.prototype.getContainer = function() {
		return this._ifContainer
	};
	i.prototype.getFrom = function() {
		return this._ifContainer
	};
	i.prototype.getIfID = function() {
		return this._ifID
	};
	i.prototype.setCallBackScreen = function(a) {
		this._callBackScreen = a
	};
	i.prototype.setCallBackClose = function(a) {
		this._callBackClose = a
	};
	i.prototype.setCaption = function(g) {
		this._caption.innerHTML = g;
		this._model._Caption = g;
		var a = window.Mirs.Navigation.MDILayoutControl.getInstance();
		a.refshLayManager()
	};
	i.prototype.getCaption = function() {
		return this._caption.innerHTML
	};
	i.prototype.setUserState = function(a) {
		this._userState = a
	};
	i.prototype.getUserState = function() {
		return this._userState
	};
	i.prototype.show = function(r) {
		var j = this._masterElement;
		j.className = "rwIframeContainerShow";
		j.setAttribute("style", "");
		var q = window.Mirs.Navigation.MdiList.getInstance();
		for (var p = 0; p < q.getMdiList().length; p++) {
			var k = q.getMdiList()[p];
			if (k == j) {
			} else {
				k.style.display = "none"
			}
			k.style.border = "0px solid #bbbbbb";
			k.getTitleContainer().className = "rwIfTitleContainer displaynone";
			k.getIfContainer().className = "rwIfContainer rwIfContainerTop0"
		}
		var o = window.Mirs.Navigation.MDIControl.getInstance();
		o.setActiveMdiChild(this._masterElement);
		var l = document.documentElement.clientWidth;
		var a = window.Mirs.Navigation.LoadBodyEvent.getInstance();
		if ((a._widStatus == "Normal") && l < 900) {
			var n = window.Mirs.Navigation.WorkControl.getInstance();
			n.changeWindow()
		}
		var g = window.Mirs.Navigation.WinManagerBar.getInstance();
		g.CreateItems()
	};
	i.prototype.closed = function() {
		var l = this._masterElement;
		var t = this._cancel;
		if (t) {
			var r = window.Mirs.Navigation.MdiList.getInstance();
			var n = window.Mirs.Navigation.MDIControl.getInstance();
			var s = new Array();
			for (var o = 0; o < r.getMdiList().length; o++) {
				var u = r.getMdiList()[o];
				if (u.id == this._masterElement.id) {
					n.removeChild(u)
				} else {
					s.push(u)
				}
			}
			r.setMdiList(s);
			var p = this._closedAddList;
			for (var o = 0; o < p.length; o++) {
				var j = p[o];
				j(this)
			}
			var q = n.getEventRemoveList();
			for (var o = 0; o < q.length; o++) {
				var k = q[o];
				k(this)
			}
		}
		var r = window.Mirs.Navigation.MdiList.getInstance();
		var v = r.getMdiList().length - 1;
		if (v >= 0) {
			var a = r.getMdiList()[v];
			a.show()
		}
		var g = window.Mirs.Navigation.MDILayoutControl.getInstance();
		g.refshLayout();
		g.refshLayManager()
	};
	i.prototype.fullScreen = function() {
		var a = this._masterElement;
		a.className = "rwIframeContainerShow";
		a.setAttribute("style", "");
		var l = window.Mirs.Navigation.MdiList.getInstance();
		for (var j = 0; j < l.getMdiList().length; j++) {
			var g = l.getMdiList()[j];
			if (g == a) {
			} else {
				g.style.display = "none"
			}
			g.style.border = "0px solid #bbbbbb";
			g.getTitleContainer().className = "rwIfTitleContainer displaynone";
			g.getIfContainer().className = "rwIfContainer rwIfContainerTop0"
		}
		var p = window.Mirs.Navigation.MDIControl.getInstance();
		p.setActiveMdiChild(this._masterElement);
		var n = this._screenedAddList;
		for (var j = 0; j < n.length; j++) {
			var o = n[j];
			o(this)
		}
		var k = window.Mirs.Navigation.WinManagerBar.getInstance();
		k.CreateItems()
	};
	i.prototype.screen_Click = function() {
		this.fullScreen()
	};
	i.prototype.close_Click = function() {
		var j = this._masterElement;
		var elid = this._masterElement.id;
		var n = this._closedAddList;
		confirm("是否关闭当前窗口",function(index){
			var o = window.Mirs.Navigation.MdiList.getInstance();
			var k = window.Mirs.Navigation.MDIControl.getInstance();
			var p = new Array();
			for (var l = 0; l < o.getMdiList().length; l++) {
				var s = o.getMdiList()[l];
				if (s.id == elid) {
					k.removeChild(s)
				} else {
					p.push(s)
				}
			}
			o.setMdiList(p);
			for (var l = 0; l < n.length; l++) {
				var g = n[l];
				g(this)
			}
			var a = window.Mirs.Navigation.MDILayoutControl.getInstance();
			a.refshLayout();
			a.refshLayManager();
			var q = window.Mirs.Navigation.WinManagerBar.getInstance();
			q.CreateItems();
		});
		
	};
	i.prototype.screenCustom_Click = function() {
		var g = this._screeningAddList;
		for (var a = 0; a < g.length; a++) {
			var j = g[a];
			j(this)
		}
		this.fullScreen()
	};
	i.prototype.screening = function() {
		var g = this._screeningAddList;
		for (var a = 0; a < g.length; a++) {
			var j = g[a];
			j(this)
		}
		this.fullScreen()
	};
	i.prototype.closeing = function() {
		var g = this._closeingAddList;
		for (var a = 0; a < g.length; a++) {
			var j = g[a];
			j(this)
		}
		this.closed();
		return this
	};
	i.prototype.close = function() {
		this.closeing()
	};
	i.prototype.closeCustom_Click = function() {
		this.closeing();
		return this
	};
	var h = window.Mirs.Navigation.MdiCustomFuns = function() {
		this._caption = null;
		this._callBackScreen = null;
		this._callBackClose = null
	}
}(Mirs.Global, Mirs.Application);
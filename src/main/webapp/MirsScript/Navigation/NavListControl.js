﻿!function(e,c){window.Mirs=window.Mirs||{};window.Mirs.Navigation=window.Mirs.Navigation||{};if(window.Mirs.Navigation.NavListControl){throw new Error("Mirs.Navigation.NavListControl 类重复加载")}var i=window.Mirs.Navigation.NavListControl=function(){this._masterElement=null;this._selItem=null;this._selClassName=null;this._selFuncItem=null;this._selIframeItem=null;this._menus=new Array()};var b=null;i.getInstance=function(){var a=null;if(b==null){a=new window.Mirs.Navigation.NavListControl();b=a}else{a=b}return a};i.Create=function(){var g=e.ce("ul");g.setAttribute("MirsElementType","Mirs.Navigation.NavListControl");var a=new window.Mirs.Navigation.NavListControl();a._masterElement=g;g.addItem=e.cd(a,a.addItem);g.getSelectItem=e.cd(a,a.getSelectItem);g.setSelectClassName=e.cd(a,a.setSelectClassName);g.setSelectFirst=e.cd(a,a.setSelectFirst);g.setSelectItem=e.cd(a,a.setSelectItem);g.getMenus=e.cd(a,a.getMenus);g.setSelectFuncItem=e.cd(a,a.setSelectFuncItem);g.getSelectFuncItem=e.cd(a,a.getSelectFuncItem);g.setSelectMdiItem=e.cd(a,a.setSelectMdiItem);g.getSelectMdiItem=e.cd(a,a.getSelectMdiItem);b=g;return g};i.prototype.addItem=function(g){var a=window.Mirs.Navigation.NavMenuCtrlItem.Create(g);this._masterElement.appendChild(a);this._menus.push(a);return g};i.prototype.getMenus=function(){return this._menus};i.prototype.getSelectItem=function(){return this._selItem};i.prototype.setSelectItem=function(a){this._selItem=a;return this._selItem};i.prototype.getSelectFuncItem=function(){return this._selFuncItem};i.prototype.setSelectFuncItem=function(a){this._selFuncItem=a;return this._selFuncItem};i.prototype.getSelectMdiItem=function(){return this._selIframeItem};i.prototype.setSelectMdiItem=function(a){this._selIframeItem=a;return this._selIframeItem};var h=window.Mirs.Navigation.NavMenuCtrlItem=function(){this._masterElement=null;this._model=null};h.Create=function(g){var j=e.ce("li");j.setAttribute("MirsElementType","Mirs.Navigation.NavMenuCtrlItem");j.className="displaynone";j.appendChild(g);j.appendChild(g.getSubElement());var a=new window.Mirs.Navigation.NavMenuCtrlItem();a._masterElement=j;a._model=g.getModel();j.getModel=e.cd(a,a.getModel);return j};h.prototype.getModel=function(){return this._model};var f=window.Mirs.Navigation.NavMenuList=function(){this._masterElement=null;this._model=null;this._subElement=null;this._funs=new Array();this._funFirst=null};f.Create=function(l){var o=null;var j=e.ce("div");j.setAttribute("MirsElementType","Mirs.Navigation.NavMenuList");var g="";switch(l._Level){case 2:g="mnContainer mnTwoBg";break;case 3:g="mnContainer mnThreeBg";break;case 4:g="mnContainer mnFourBg";break}j.className=g;o=j;var n=e.ce("div");n.className="menuPic";var m=e.ce("div");m.className="menuTitle";m.innerHTML=l.Caption;j.appendChild(n);j.appendChild(m);var k=new window.Mirs.Navigation.NavMenuList();k._model=l;k._subElement=e.ce("div");k._masterElement=o;var a=e.cd(k,k.m_Click);e.ah(j,"click",a);o.setSubElement=e.cd(k,k.setSubElement);o.getSubElement=e.cd(k,k.getSubElement);o.addFuncItem=e.cd(k,k.addFuncItem);o.addMenuItem=e.cd(k,k.addMenuItem);o.getModel=e.cd(k,k.getModel);o.getFuns=e.cd(k,k.getFuns);return o};f.prototype.addFuncItem=function(g){if(g._ScriptType==""){var k=window.Mirs.Navigation.FuncMenuItem.CreateContent(g);var j=new window.Mirs.ScriptManager.JSManagerItem();j._cfgModel=g;j._subElement=k;var l=window.Mirs.ScriptManager.JSManager.getInstance();l.addItemModel(j);this._subElement.className="displayblock";this._subElement.appendChild(k);return k}else{var a=window.Mirs.Navigation.FuncMenuItem.Create(g);this._subElement.className="displayblock";this._subElement.appendChild(a);this._funs.push(a);if(this._funFirst==null){this._funFirst=a}return g}};f.prototype.addMenuItem=function(g){var a=g;this._subElement.appendChild(g);this._subElement.appendChild(g.getSubElement());return this._subElement};f.prototype.setSubElement=function(a){this._subElement=a;return this._subElement};f.prototype.getSubElement=function(){return this._subElement};f.prototype.getModel=function(){return this._model};f.prototype.getFuns=function(){return this._funs};f.prototype.m_Click=function(){this._subElement.className=this._subElement.className=="displaynone"?"displayblock":"displaynone";if(this._subElement.className=="displaynone"){this._masterElement.children[0].className="menuPicClose"}else{this._masterElement.children[0].className="menuPic"}};var d=window.Mirs.Navigation.FuncMenuItem=function(){this._masterElement=null;this._model=null;this._titleControl=null};d.Create=function(l){var o=null;var g=e.ce("div");o=g;o.setAttribute("MirsElementType","Mirs.Navigation.FuncMenuItem");g.className="mnContainer funBg";var n=e.ce("div");n.className="funPic";var k=e.ce("img");k.src=l._Icon;var m=e.ce("div");m.className="funTitle";m.innerHTML=l._Caption;n.appendChild(k);g.appendChild(n);g.appendChild(m);var j=new window.Mirs.Navigation.FuncMenuItem();j._model=l;j._masterElement=o;var a=e.cd(j,j.func_Click);e.ah(g,"click",a);o.getModel=e.cd(j,j.getModel);return o};d.CreateContent=function(l){var o=null;var g=e.ce("div");o=g;g.className="mnContainer funBg";o.setAttribute("MirsElementType","Mirs.Navigation.FuncMenuItem");var n=e.ce("div");n.className="funPic";var k=e.ce("img");k.src=l._Icon;var m=e.ce("div");m.className="funTitle";m.innerHTML=l._Caption;n.appendChild(k);g.appendChild(n);g.appendChild(m);var j=new window.Mirs.Navigation.FuncMenuItem();j._model=l;j._masterElement=o;j._titleControl=m;var a=e.cd(j,j.funcContent_Click);e.ah(g,"click",a);o.getModel=e.cd(j,j.getModel);o.getTitleControl=e.cd(j,j.getTitleControl);return o};d.prototype.getTitleControl=function(){return this._titleControl};d.prototype.funcContent_Click=function(){var a=window.Mirs.Navigation.NavListControl.getInstance();var g=a.getSelectFuncItem();a.setSelectFuncItem(this._masterElement);if(g){g.className="mnContainer funBg"}this._masterElement.className="mnContainer funBg funBgShow"};d.prototype.func_Click=function(){var g=false;var D=false;var L=window.Mirs.Navigation.MdiList.getInstance();for(var C=0;C<L.getMdiList().length;C++){var z=L.getMdiList()[C];var r=L.getMdiList()[C].getModel();if(this._model._Code==r._Code&&this._model._IsSingleton){g=true;z.screening()}else{z.style.display="none"}}if(false){for(var C=0;C<L.getMdiList().length;C++){var z=L.getMdiList()[C];var r=L.getMdiList()[C].getModel();var I=L.getMdiList()[C].getIframeElement();var K=this._model._RunUrl;var G=K.indexOf("?");var p=K.indexOf("#");var w=-1;if(G>0&&p>0){w=G>p?p:G}else{if(G>0&&p<0){w=G}else{if(G<0&&p>0){w=p}}}if(w>0){K=K.substring(0,w)}var J=r._RunUrl;if(J){var E=J.indexOf("?");var o=J.indexOf("#");var v=-1;if(E>0&&o>0){v=E>o?o:E}else{if(E>0&&o<0){v=E}else{if(E<0&&o>0){v=o}}}if(v>0){J=J.substring(0,v)}if(K==J){var s=c.getInstance();var x=s.AuthInfo.SmallTicket;var n=this._model._RunUrl;var a=n.indexOf("#");if(n.indexOf("?")>0||a>0){n=n+"&ticket="+x}else{n=n+"?ticket="+x}var y=s.getThemeName();if(a>0){n=n+"&MirsThemeName="+y}else{n=n+"#MirsThemeName="+y}I.src=n;D=true;break}}}}if(!g&&!D){var B=window.Mirs.Navigation.ChildWindow.Create(this._model);var M=window.Mirs.Navigation.MDIControl.getInstance();M.setActiveMdiChild(B)}var m=window.Mirs.Navigation.NavListControl.getInstance();var H=m.getSelectFuncItem();m.setSelectFuncItem(this._masterElement);if(H){H.className="mnContainer funBg"}this._masterElement.className="mnContainer funBg funBgShow";var u=window.Mirs.Navigation.WinManagerBar.getInstance();u.CreateItems();var F=window.Mirs.Navigation.LoadBodyEvent.getInstance();var A=document.documentElement.clientWidth;if((F._widStatus=="Normal")&&A<900){var t=window.Mirs.Navigation.WorkControl.getInstance();t.changeWindow()}var q=window.Mirs.Navigation.MDILayoutControl.getInstance();q.refshLayManager();var l=window.Mirs.Navigation.LayoutContainer.getInstance();l.setStatus("");var k=window.Mirs.Navigation.MDIControl.getInstance().getEventAddList();for(var C=0;C<k.length;C++){var j=k[C];j()}};d.prototype.getModel=function(){return this._model}}(Mirs.Global,Mirs.Application);
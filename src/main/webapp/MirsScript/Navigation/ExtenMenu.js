﻿!function(k,o){window.Mirs=window.Mirs||{};window.Mirs.Navigation=window.Mirs.Navigation||{};var e=function(a){var g=document.createElement(a);return g};if(window.Mirs.Navigation.Mset){throw new Error("Mirs.Navigation.Mset 类重复加载")}var b=window.Mirs.Navigation.Mset=function(){this._masterElement=null};var d=null;b.getInstance=function(){var a=null;if(d==null){a=new window.Mirs.Navigation.Mset();d=a}else{a=d}return a};b.Create=function(g,a){if(!document.getElementById("MsetCss")){var t=window.Mirs.Application.getInstance()}var s=window.Mirs.Navigation.MsetConfig.Create();g.appendChild(s);window.Mirs.Navigation.Mset.getInstance()._masterElement=s;return s};b.prototype.initParms=function(g,a){if(!document.getElementById("MsetCss")){var t=window.Mirs.Application.getInstance()}var s=window.Mirs.Navigation.MsetConfig.Create();g.appendChild(s);s.show();window.Mirs.Navigation.Mset.getInstance()._masterElement=s};b.prototype.show=function(){this._masterElement.show();var a=window.Mirs.Application.getInstance();if(a.getThemeName!=null){this.refreshTheme(a.getThemeName())}};b.prototype.refreshTheme=function(a){};if(window.Mirs.Navigation.MsetConfig){throw new Error("Mirs.Navigation.MsetConfig 类重复加载")}var f=window.Mirs.Navigation.MsetConfig=function(){this._masterElement=null;this._subElement=null};var h=null;f.getInstance=function(){var a=null;if(h==null){a=new window.Mirs.Navigation.MsetConfig();h=a}else{a=h}return a};f.Create=function(){var v=e("div");var g=window.Mirs.Navigation.MsetConfig.getInstance();g._masterElement=v;v.setAttribute("MirsElementType","Mirs.Navigation.MsetConfig");v.className="msetRootContainer";v.id="msetRoot";v.show=k.cd(g,g.show);v.close=k.cd(g,g.close);var w=e("div");w.className="msetBg";v.appendChild(w);var a=k.cd(g,g.close);k.ah(w,"click",a);var x=e("div");x.className="msetMainContainer";v.appendChild(x);var u=e("div");u.className="msetArrow";x.appendChild(u);var s=window.Mirs.Navigation.MsetConfig.TitleBar.Create();x.appendChild(s);var t=e("div");t.className="msetItemsBar";x.appendChild(t);g._subElement=t;v.getSubElement=k.cd(g,g.getSubElement);return v};f.prototype.getSubElement=function(){return this._subElement};f.prototype.show=function(){this._masterElement.style.display="block"};f.prototype.close=function(a){this._masterElement.style.display="none"};if(window.Mirs.Navigation.MsetConfig.TitleBar){throw new Error("Mirs.Navigation.MsetConfig.TitleBar 类重复加载")}var q=window.Mirs.Navigation.MsetConfig.TitleBar=function(){this._masterElement=null};var r=null;q.getInstance=function(){var a=null;if(r==null){a=new window.Mirs.Navigation.MsetConfig.TitleBar();r=a}else{a=r}return a};q.Create=function(){var u=e("div");u.className="msetTopContainer";u.setAttribute("MirsElementType","Mirs.Navigation.MsetConfig.TitleBar");var t=e("div");t.className="msetBackBtn";u.appendChild(t);var s=window.Mirs.Navigation.MsetConfig.getInstance();var a=k.cd(s,s.close);k.ah(t,"click",a);var g=e("div");g.className="msetTitle";g.innerText="扩展";u.appendChild(g);var v=e("div");v.className="msetEditBtn";u.appendChild(v);return u};if(window.Mirs.Navigation.MsetConfig.ItemsBar){throw new Error("Mirs.Navigation.MsetConfig.ItemsBar 类重复加载")}var m=window.Mirs.Navigation.MsetConfig.ItemsBar=function(){this._masterElement=null;this._model=null};var n=null;m.getInstance=function(){var a=null;if(n==null){a=new window.Mirs.Navigation.MsetConfig.ItemsBar();n=a}else{a=n}return a};m.Create=function(s){var v=e("div");v.setAttribute("MirsElementType","Mirs.Navigation.MsetConfig.ItemsBar");v.className="msetItemContainer";v.title=s.title;var y=e("div");y.className="msetItemIcon";if(s.icon){y.style.backgroundImage="url("+s.icon+")"}v.appendChild(y);var x=e("div");x.className="msetItemTitle";var u=l(s.title,8);x.innerHTML=u;v.appendChild(x);var g=new window.Mirs.Navigation.MsetConfig.ItemsBar();g._masterElement=v;g._model=s;var a=k.cd(g,g.Item_Click);k.ah(v,"click",a);var w=window.Mirs.Navigation.MsetConfig.getInstance();w._subElement.appendChild(v);return v};m.CreateItem=function(a){var g=e("div");g.className="msetItemContainer";g.appendChild(a);var s=window.Mirs.Navigation.MsetConfig.getInstance();s._subElement.appendChild(g);return g};m.prototype.Item_Click=function(){if(this._model.call){this._model.call()}};var l=function(a,s){if(a.length>s){var g=a.substring(0,s);a=g+"...";return a}else{return a}};if(window.Mirs.Navigation.MsetConfig.ItemsModel){throw new Error("Mirs.Navigation.MsetConfig.ItemsModel 类重复加载")}var j=window.Mirs.Navigation.MsetConfig.ItemsModel=function(){this._masterElement=null;this.title=null;this.icon=null;this.call=null};var i=null;j.getInstance=function(){var a=null;if(i==null){a=new window.Mirs.Navigation.MsetConfig.ItemsModel();i=a}else{a=i}return a};var p=window.Mirs.Navigation.ExtenMenu=function(){this._masterElement=null};var c=null;p.getInstance=function(){var a=null;if(c==null){a=new window.Mirs.Navigation.ExtenMenu();c=a}else{a=c}return a};p.CreateItem=function(a){var g=e("div");g.setAttribute("MirsElementType","Mirs.Navigation.MsetConfig.ItemsModel");g.className="msetItemContainer";g.appendChild(a);var s=window.Mirs.Navigation.MsetConfig.getInstance();s._subElement.appendChild(g);return g}}(Mirs.Global,Mirs.Application);
﻿!function(e,c){window.Mirs=window.Mirs||{};window.Mirs.Navigation=window.Mirs.Navigation||{};if(window.Mirs.Navigation.NavTitleBar){throw new Error("Mirs.Navigation.NavTitleBar 类重复加载")}var b=window.Mirs.Navigation.NavTitleBar=function(){this._masterElement=null};var d=null;b.getInstance=function(){var a=null;if(d==null){a=new window.Mirs.Navigation.NavTitleBar();d=a}else{a=d}return a};b.Create=function(){var f=document.createElement("div");f.setAttribute("MirsElementType","Navigation.mcSecondContainer");var a=new window.Mirs.Navigation.NavTitleBar();a._masterElement=f;f.setClassName=e.cd(a,a.setClassName);f.setID=e.cd(a,a.setID);d=f;return f};b.prototype.setClassName=function(a){this._masterElement.className=a};b.prototype.setID=function(a){this._masterElement.id=a};b.prototype.addItem=function(a){var f=window.Mirs.Navigation.NavRibItem.Create();return f}}(Mirs.Global,Mirs.Application);
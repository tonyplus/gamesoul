﻿!function(){window.Plugin=window.Plugin||{};window.Plugin.Theme=window.Plugin.Theme||{};window.Plugin.Theme.CurProject=window.Plugin.Theme.CurProject||{};if(window.Plugin.Theme.CurProject.Common){throw new Error("Plugin.Theme.CurProject.Common 类重复加载")}var a=window.Plugin.Theme.CurProject.Common=function(){};a.dbing=function(b,c){return function(){return c.apply(b,arguments)}};a.addHandler=function(c,b,d){if(c.addEventListener){c.addEventListener(b,d,false)}else{if(c.attachEvent){c.attachEvent("on"+b,d)}}};a.ah=a.addHandler;a.createHttpRequest=function(){var b=null;if(window.XMLHttpRequest){b=new XMLHttpRequest()}else{if(window.ActiveXObject){b=new ActiveXObject("Microsoft.XMLHTTP")}}return b};a.creq=a.createHttpRequest}();!function(g){var showleft="0px";var hideleft="-450px";window.Mirs=window.Mirs||{};window.Mirs.Navigation=window.Mirs.Navigation||{};var createElement=function(type){var rtn=document.createElement(type);return rtn};if(window.Mirs.Navigation.Theme){throw new Error("Mirs.Navigation.Theme 类重复加载")}var mirsTheme=window.Mirs.Navigation.Theme=function(){this._masterElement=null;this._themeList=null;this._themeName=null};var _mirsTheme=null;mirsTheme.getInstance=function(){var rtn=null;if(_mirsTheme==null){rtn=new window.Mirs.Navigation.Theme();_mirsTheme=rtn}else{rtn=_mirsTheme}return rtn};mirsTheme.prototype.initParms=function(element,model){var app=window.Mirs.Application.getInstance();var navControl=app.getNavControl();var ThemeConfig=window.Mirs.Navigation.ThemeConfig.Create();var ins=window.Mirs.Navigation.Theme.getInstance();var ShowClick=g.dbing(ins,ins.plugThemeClick);g.ah(element,"click",ShowClick);element.refreshTheme=g.dbing(ins,ins.refreshTheme);navControl.appendChild(ThemeConfig)};mirsTheme.prototype.loadParms=function(element){var app=window.Mirs.Application.getInstance();var navControl=app.getNavControl();var ThemeConfig=window.Mirs.Navigation.ThemeConfig.Create();var ins=window.Mirs.Navigation.Theme.getInstance();var ShowClick=g.dbing(ins,ins.plugThemeClick);g.ah(element,"click",ShowClick);element.refreshTheme=g.dbing(ins,ins.refreshTheme);navControl.appendChild(ThemeConfig)};mirsTheme.prototype.refreshTheme=function(msTheming){};mirsTheme.prototype.plugThemeClick=function(){var ins=window.Mirs.Navigation.ThemeConfig.getInstance();ins.show()};if(window.Mirs.Navigation.ThemeConfig){throw new Error("Mirs.Navigation.ThemeConfig 类重复加载")}var mirsThemeConfig=window.Mirs.Navigation.ThemeConfig=function(){this._masterElement=null};var _mirsThemeConfig=null;mirsThemeConfig.getInstance=function(){var rtn=null;if(_mirsThemeConfig==null){rtn=new window.Mirs.Navigation.ThemeConfig();_mirsThemeConfig=rtn}else{rtn=_mirsThemeConfig}return rtn};mirsThemeConfig.Create=function(){var rtn=createElement("div");rtn.className="thmContainer";rtn.setAttribute("MirsElementType","Mirs.Navigation.ThemeConfig");rtn.id="thmroot";var TitlePart=window.Mirs.Navigation.ThemeConfig.TitlePart.Create();rtn.appendChild(TitlePart);var MainPart=window.Mirs.Navigation.ThemeConfig.MainPart.Create();rtn.appendChild(MainPart);var ConfirmPart=window.Mirs.Navigation.ThemeConfig.ConfirmPart.Create();rtn.appendChild(ConfirmPart);var ins=window.Mirs.Navigation.ThemeConfig.getInstance();ins._masterElement=rtn;return rtn};mirsThemeConfig.prototype.show=function(){var holdEle=getHoldItem();var selEle=getSelItem();if(holdEle==selEle){holdEle.style.borderColor="#fff";holdEle.children["1"].className="thmfirm_g";holdEle.children["2"].style.display="block"}else{selEle.style.borderColor="#575757";selEle.children["2"].style.display="none";selEle.children["1"].className="thmfirm_g none";holdEle.style.borderColor="#fff";holdEle.children["1"].className="thmfirm_g";holdEle.children["2"].style.display="block";setSelItem(holdeItem)}this._masterElement.style.left=showleft};mirsThemeConfig.prototype.close=function(){this._masterElement.style.left=hideleft;var app=window.Mirs.Application.getInstance();var mdi=app.getWorkControl().getMdiControl()};if(window.Mirs.Navigation.ThemeConfig.TitlePart){throw new Error("Mirs.Navigation.ThemeConfig.TitlePart 类重复加载")}var mirsTitlePart=window.Mirs.Navigation.ThemeConfig.TitlePart=function(){this._masterElement=null};var _mirsTitlePart=null;mirsTitlePart.getInstance=function(){var rtn=null;if(_mirsTitlePart==null){rtn=new window.Mirs.Navigation.ThemeConfig.TitlePart();_mirsTitlePart=rtn}else{rtn=_mirsTitlePart}return rtn};mirsTitlePart.Create=function(){var rtn=createElement("div");rtn.className="thmTopContainer";rtn.setAttribute("MirsElementType","Mirs.Navigation.ThemeConfig.TitlePart");var thmBackContainer=createElement("div");thmBackContainer.className="thmBackContainer";var newimg=createElement("img");newimg.src="MirsThemes/CommonImages/back.png";thmBackContainer.appendChild(newimg);rtn.appendChild(thmBackContainer);var thmTopTitleContainer=createElement("div");thmTopTitleContainer.className="thmTopTitleContainer";thmTopTitleContainer.innerHTML="主题系统";rtn.appendChild(thmTopTitleContainer);var ins=window.Mirs.Navigation.ThemeConfig.getInstance();var CloseClick=g.dbing(ins,ins.close);g.ah(thmBackContainer,"click",CloseClick);return rtn};if(window.Mirs.Navigation.ThemeConfig.MainPart){throw new Error("Mirs.Navigation.ThemeConfig.MainPart 类重复加载")}var mirsMainPart=window.Mirs.Navigation.ThemeConfig.MainPart=function(){this._masterElement=null};var _mirsMainPart=null;mirsMainPart.getInstance=function(){var rtn=null;if(_mirsMainPart==null){rtn=new window.Mirs.Navigation.ThemeConfig.MainPart();_mirsMainPart=rtn}else{rtn=_mirsMainPart}return rtn};mirsMainPart.Create=function(){var rtn=createElement("div");rtn.className="thmMainContainer";rtn.setAttribute("MirsElementType","Mirs.Navigation.ThemeConfig.MainPart");var ThemeList=window.Mirs.Navigation.ThemeList.Create();rtn.appendChild(ThemeList);return rtn};if(window.Mirs.Navigation.ThemeList){throw new Error("Mirs.Navigation.ThemeList 类重复加载")}var mirsThemeList=window.Mirs.Navigation.ThemeList=function(){this._masterElement=null};var _mirsThemeList=null;mirsThemeList.getInstance=function(){var rtn=null;if(_mirsThemeList==null){rtn=new window.Mirs.Navigation.ThemeList();_mirsThemeList=rtn}else{rtn=_mirsThemeList}return rtn};mirsThemeList.Create=function(){var rtn=createElement("ul");rtn.setAttribute("MirsElementType","Mirs.Navigation.ThemeList");var app=window.Mirs.Application.getInstance();if(app.ThemeAdapter){var mk=g.creq();var callUrl="./MirsThemes/StyleThemes.json?rad="+Math.random(1)*1000;mk.open("GET",callUrl,false);mk.onreadystatechange=function(){if(mk.readyState==4){if(mk.status==200){var strJson=mk.responseText;var objJson=eval("("+strJson+")");var themeIns=Mirs.Navigation.Theme.getInstance();themeIns._themeList=objJson;adGetThemeList(rtn)}}};mk.send(null)}else{getThemeList(rtn)}return rtn};var holdeItem=null;function getHoldItem(){return holdeItem}function setHoldItem(c){holdeItem=c;return holdeItem}function adGetThemeList(rtn){var app=window.Mirs.Application.getInstance();var themeIns=Mirs.Navigation.Theme.getInstance();var themeList=themeIns._themeList.MirsStyleThemeList.MirsStyleTheming;for(var i=0;i<themeList.length;i++){var tempLi=window.Mirs.Navigation.ThemeItem.Create(themeList[i]);if(app.getThemeName()==tempLi.FileName){setHoldItem(tempLi.childNodes["0"]);setSelItem(tempLi.childNodes["0"])}rtn.appendChild(tempLi)}}function getThemeList(rtn){var a=window.Mirs.Application.getInstance();var org=a.AuthInfo.Organization;var loginid=a.AuthInfo.LoginID;var ak=g.creq();var callUrl="./MirsService/PlugTheme.svc/GetThemeJson/"+org+"/"+loginid;ak.open("GET",callUrl,true);ak.onreadystatechange=function(){if(ak.readyState==4){if(ak.status==200){var mk=g.creq();var callUrl="./MirsThemes/StyleThemes.json";mk.open("GET",callUrl,true);mk.onreadystatechange=function(){if(mk.readyState==4){if(mk.status==200){var strJson=mk.responseText;var objJson=eval("("+strJson+")");var akjson=ak.responseText;akjson=eval("("+akjson+")");if(akjson==""){akjson=a.getThemeName()}for(var i=0;i<objJson.MirsStyleThemeList.MirsStyleTheming.length;i++){var tempLi=window.Mirs.Navigation.ThemeItem.Create(objJson.MirsStyleThemeList.MirsStyleTheming[i]);if(akjson==tempLi.FileName){setHoldItem(tempLi.childNodes["0"]);setSelItem(tempLi.childNodes["0"])}rtn.appendChild(tempLi)}}}};mk.send(null)}}};ak.send(null)}function getEquipmentType(){var sUserAgent=navigator.userAgent.toLowerCase();var bIsIpad=sUserAgent.match(/ipad/i)=="ipad";var bIsIphoneOs=sUserAgent.match(/iphone os/i)=="iphone os";var bIsMidp=sUserAgent.match(/midp/i)=="midp";var bIsUc7=sUserAgent.match(/rv:1.2.3.4/i)=="rv:1.2.3.4";var bIsUc=sUserAgent.match(/ucweb/i)=="ucweb";var bIsAndroid=sUserAgent.match(/android/i)=="android";var bIsCE=sUserAgent.match(/windows ce/i)=="windows ce";var bIsWM=sUserAgent.match(/windows mobile/i)=="windows mobile";var rtn=null;if(bIsIpad){rtn="IPAD"}if(bIsIphoneOs){rtn="IPHONE"}if(bIsMidp){rtn=bIsMidp}if(bIsUc7){rtn=bIsUc7}if(bIsUc){rtn=bIsUc}if(bIsAndroid){rtn=bIsAndroid}if(bIsCE){rtn=bIsCE}if(bIsWM){rtn=bIsWM}return rtn}var getEq=getEquipmentType();if(window.Mirs.Navigation.ThemeItem){throw new Error("Mirs.Navigation.ThemeItem 类重复加载")}var mirsThemeItem=window.Mirs.Navigation.ThemeItem=function(){this._masterElement=null;this._skateDiv=null};var _mirsThemeItem=null;mirsThemeItem.getInstance=function(){var rtn=null;if(_mirsThemeItem==null){rtn=new window.Mirs.Navigation.ThemeItem();_mirsThemeItem=rtn}else{rtn=_mirsThemeItem}return rtn};mirsThemeItem.Create=function(item){var rtn=createElement("li");rtn.setAttribute("MirsElementType","Mirs.Navigation.ThemeItem");rtn.FileName=item.ThemeFileName;var thmItemBox=createElement("div");thmItemBox.className="thmItemBox";rtn.appendChild(thmItemBox);thmItemBox.Yulan="MirsThemes/"+item.ThemeFileName+"/Images/LoadPic.png";thmItemBox.FileName=item.ThemeFileName;var tbl=createElement("img");tbl.src="MirsThemes/"+item.ThemeFileName+"/Images/RenderingsPic.png";thmItemBox.appendChild(tbl);var thmfirm_g=createElement("div");thmfirm_g.className="thmfirm_g none";thmItemBox.appendChild(thmfirm_g);var cfg=createElement("img");cfg.src="MirsThemes/CommonImages/confirm_g.png";thmfirm_g.appendChild(cfg);var thmItemTitleBox=createElement("div");thmItemTitleBox.className="thmItemTitleBox";thmItemBox.appendChild(thmItemTitleBox);var thmItemText=createElement("div");thmItemText.className="thmItemText";thmItemText.innerHTML=item.ThemeTitle;thmItemTitleBox.appendChild(thmItemText);var ins=new window.Mirs.Navigation.ThemeItem();ins._skateDiv=thmItemBox;if(getEq=="IPAD"||getEq=="IPHONE"){}else{var moIn=g.dbing(ins,ins.MoveIn);g.ah(rtn,"mouseover",moIn);var moOut=g.dbing(ins,ins.MoveOut);g.ah(rtn,"mouseout",moOut)}var selectClick=g.dbing(ins,ins.selectTheme);g.ah(rtn,"click",selectClick);return rtn};mirsThemeItem.prototype.MoveIn=function(){var skateDiv=this._skateDiv;skateDiv.children["2"].style.display="block"};mirsThemeItem.prototype.MoveOut=function(){var skateDiv=this._skateDiv;var selectElement=getSelItem();if(skateDiv==selectElement){}else{skateDiv.children["2"].style.display="none"}};mirsThemeItem.prototype.selectTheme=function(){var skateDiv=this._skateDiv;var selectElement=getSelItem();if(getEq=="IPAD"||getEq=="IPHONE"){selectElement.style.borderColor="#575757";selectElement.children["2"].style.display="none";selectElement.children["1"].className="thmfirm_g none";skateDiv.style.borderColor="#fff";skateDiv.children["2"].style.display="block";skateDiv.children["1"].className="thmfirm_g";setSelItem(skateDiv);selectElement=getSelItem()}else{if(selectElement!=null){if(skateDiv==selectElement){}else{selectElement.style.borderColor="#575757";selectElement.children["2"].style.display="none";selectElement.children["1"].className="thmfirm_g none"}}skateDiv.style.borderColor="#fff";skateDiv.children["1"].className="thmfirm_g";setSelItem(skateDiv);selectElement=getSelItem()}};var selItem=null;function getSelItem(){return selItem}function setSelItem(c){selItem=c;return selItem}if(window.Mirs.Navigation.ThemeConfig.ConfirmPart){throw new Error("Mirs.Navigation.ThemeConfig.ConfirmPart 类重复加载")}var mirsConfirmPart=window.Mirs.Navigation.ThemeConfig.ConfirmPart=function(){this._masterElement=null};var _mirsConfirmPart=null;mirsConfirmPart.getInstance=function(){var rtn=null;if(_mirsConfirmPart==null){rtn=new window.Mirs.Navigation.ThemeConfig.ConfirmPart();_mirsConfirmPart=rtn}else{rtn=_mirsConfirmPart}return rtn};mirsConfirmPart.Create=function(){var rtn=createElement("div");rtn.setAttribute("MirsElementType","Mirs.Navigation.ThemeConfig.ConfirmPart");rtn.className="thmConfirmContainer";var thmConfirmBox=createElement("div");thmConfirmBox.className="thmConfirmBox";rtn.appendChild(thmConfirmBox);var newimg=createElement("img");newimg.src="MirsThemes/CommonImages/confirm_w.png";thmConfirmBox.appendChild(newimg);var thmConfirmText=createElement("div");thmConfirmText.className=("thmConfirmText");thmConfirmText.innerHTML=("确认选择");thmConfirmBox.appendChild(thmConfirmText);var ins=new window.Mirs.Navigation.ThemeConfig.ConfirmPart();var ConfirmClick=g.dbing(ins,ins.submitTheme);g.ah(rtn,"click",ConfirmClick);return rtn};mirsConfirmPart.prototype.submitTheme=function(){var a=window.Mirs.Application.getInstance();var org=a.AuthInfo.Organization;var loginid=a.AuthInfo.LoginID;var selTemp=getSelItem();setHoldItem(selTemp);if(a.ThemeAdapter){try{a.ThemeAdapter.SaveUserTheme(selTemp.FileName,setUserThemeAdpter)}catch(e){setUserThemeAdpter("Default")}}else{var kk=g.createHttpRequest();var callUrl="./MirsService/PlugTheme.svc/SetUserTheme/"+selTemp.FileName+"/"+org+"/"+loginid;kk.open("GET",callUrl,true);kk.onreadystatechange=function(){if(kk.readyState==4&&kk.status==200){var app=window.Mirs.Application.getInstance();app.getNavControl().setTheme(selTemp.FileName);refshTheme(selTemp.FileName);a.setThemeName(selTemp.FileName)}};kk.send(null)}};function setUserThemeAdpter(themeName){var app=window.Mirs.Application.getInstance();app.getNavControl().setTheme(themeName);refshTheme(themeName);app.setThemeName(themeName)}var refshTheme=function(themeName){var sMagList=window.Mirs.ScriptManager.JSManager.getInstance().GetModelList();for(var i=0;i<sMagList.length;i++){var temp=sMagList[i];if(temp.refreshTheme){temp.refreshTheme(themeName)}}var app=window.Mirs.Application.getInstance();var mdiList=app.getWorkControl().getMdiControl().getMdiChildren();for(var i=0;i<mdiList.length;i++){var temp=mdiList[i];if(temp.getCreateType&&temp.getCreateType()=="AUTO"){if(temp.getIframeElement){var tempSrc=temp.getIframeElement().src;var tempWell=tempSrc.indexOf("#");if(tempWell>0){var pNameIndex=tempSrc.indexOf("MirsThemeName");if(pNameIndex>0){var sName=tempSrc.substring(pNameIndex+14);var lName="";var cWell=sName.indexOf("&",pNameIndex);if(cWell>=0){lName=tempSrc.substring(pNameIndex+14,cWell);tempSrc=lName+themeName}else{lName=tempSrc.substring(0,pNameIndex+14);tempSrc=lName+themeName}}else{tempSrc=tempSrc+"&MirsThemeName="+themeName}}else{tempSrc=tempSrc+"#MirsThemeName="+themeName}temp.getIframeElement().src=tempSrc}}}var metIns=Mirs.Navigation.Mset.getInstance();metIns.refreshTheme(themeName);var navPanelControl=window.Navigation.NavPanelControl.getInstance();var pClientList=navPanelControl.getClientPanels();for(var i=0;i<pClientList.length;i++){var tempModel=pClientList[i];if(tempModel.refreshTheme!=null){tempModel.refreshTheme(themeName)}}};if(window.Mirs.Navigation.ThemePreview){throw new Error("Mirs.Navigation.ThemePreview 类重复加载")}var mirsThemePreview=window.Mirs.Navigation.ThemePreview=function(){this._masterElement=null;this._imgThemePreview=null};var _mirsThemePreview=null;mirsThemePreview.getInstance=function(){var rtn=null;if(_mirsThemePreview==null){rtn=new window.Mirs.Navigation.ThemePreview();_mirsThemePreview=rtn}else{rtn=_mirsThemePreview}return rtn};var showPanel=null;mirsThemePreview.Create=function(t){var app=window.Mirs.Application.getInstance();var mdi=app.getWorkControl().getMdiControl();var tempWd=mdi.createChildWindow();var tempDiv=document.createElement("div");tempDiv.setAttribute("MirsElementType","Mirs.Navigation.ThemePreview");tempDiv.style.height="100%";tempDiv.style.backgroundImage="url(MirsThemes/CommonImages/01.jpg)";tempDiv.style.backgroundRepeat="no-repeat";var imgDiv=createElement("div");imgDiv.className="thmRImgConContainer";tempDiv.appendChild(imgDiv);var newimg=createElement("img");newimg.src=t.Yulan;imgDiv.appendChild(newimg);tempWd.getContainer().appendChild(tempDiv);tempWd.show();var ins=new window.Mirs.Navigation.ThemePreview();ins._imgThemePreview=newimg;showPanel=tempWd;_mirsThemePreview=ins};mirsThemePreview.prototype.getThemePreview=function(){return this._imgThemePreview}}(Plugin.Theme.CurProject.Common);
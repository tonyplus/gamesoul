var SelectOption = function() {

};

/**
 * 游戏类型
 * @return
 */
SelectOption.getGameTypeData = function getGameTypeData() {
	var data=new Array();
	data.push({code:'01',name:'射击'});
	data.push({code:'02',name:'动作'});
	data.push({code:'03',name:'赛车'});
	data.push({code:'99',name:'更多'});
	return data;
};

SelectOption.loadGameType = function loadGameType(code) {
	var data=SelectOption.getGameTypeData();
	SelectOption.loadBaseCode(data, code);
};

SelectOption.getGameType=function getGameType(code){
	return SelectOption.getCodeName(SelectOption.getGameTypeData(),code);
};


/**
 * 广告控制
 * @return
 */
SelectOption.getAdvControlData = function getAdvControlData() {
	var data=new Array();
	data.push({code:'0',name:'不显示'});
	data.push({code:'1',name:'显示'});
	return data;
};

SelectOption.loadAdvControl = function loadAdvControl(code) {
	var data=SelectOption.getAdvControlData();
	SelectOption.loadBaseCode(data, code);
};

/************************************************* base start*******************************************************************************/
/**
 * 加载code
 * 
 * @param loadurl
 *            访问地址
 * @param code
 *            界面ID
 * @return
 */
SelectOption.loadBaseCodeFromDB = function loadBaseCodeFromDB(loadurl, code,jsonParam) {
	var value = $('#' + code).attr("selectvalue");
	$.ajax( {
		type : "post",
		cache : false,
		url : loadurl,
		data: jsonParam,
		dataType : 'json',
		success : function(json) {
			if (json.length > 0) {
				var o = new Option('请选择', '');
				$("#" + code)[0].options.add(o);
				for ( var i = 0; i < json.length; i++) {
					var t = new Option(json[i].name, json[i].code);
					if(json[i].attr){//附带属性
						$(t).attr("attr",json[i].attr);
					}
					$("#" + code)[0].options.add(t);
						if (value == json[i].code) {
							$("#" + code).val(value);
						}
				}
			}else{
			    var o = new Option('请选择', '');
			    $("#" + code)[0].options.add(o);
			}
		}
	});
};

/**
 * 加载code
 * 
 * @param data
 *            数据
 * @param code
 *            界面ID
 * @return
 */
SelectOption.loadBaseCode = function loadBaseCode(data, code) {
	var value = $('#' + code).attr("selectvalue");
	if (data.length > 0) {
		var o = new Option('请选择', '');
		$("#" + code)[0].options.add(o);
		for ( var i = 0; i < data.length; i++) {
			var t = new Option(data[i].name, data[i].code);
			$("#" + code)[0].options.add(t);
			if (value) {
				if (value == data[i].code) {
					$("#" + code).val(value);
				}
			}
		}
	}
};

SelectOption.getCodeName=function getCodeName(data,code){
	for(var i=0;i<data.length;i++){
		if(data[i].code==code){
			return data[i].name;
		}
	}
};
/************************************************* base end*******************************************************************************/

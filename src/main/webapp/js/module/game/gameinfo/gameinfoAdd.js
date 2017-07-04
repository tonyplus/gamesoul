$(document).ready(function() {
	SelectOption.loadGameType("gametype");//游戏类型
	showUploadFile('myimg','image');
	showUploadFile("myfile",null,true);//显示文件上传控件
	
	
	$("#gameInfoform").validate({
		rules : {
			gamename : {
				required : true
			},
			filemyfile : {
				required : true
			},
			filemyimg : {
				required : true
			},
			gametype : {
				required : true
			}
		},
		messages : {
			gamename : {
				required : "游戏名不能为空"
			},
			filemyfile : {
				required : "请上传游戏包"
			},
			filemyimg : {
				required : "请上传游戏图片"
			},
			gametype : {
				required : "请选择游戏类型"
			}
		},
		submitHandler : function(form) {
			save();
		}
	});
});

/** 保存 */
function save() {
	//var filemyimg=$("input[name='filemyimg']");
	//alert($("input[name='filemyimg']"))
	//var filemyfile=$("input[name='filemyfile']");
	//var files=[$("input[name='filemyimg']"),$("input[name='filemyfile']")];
	$.ajaxFileUpload({
		type : 'post',
		url : BASE_URL + '/game/gameinfo/save',
		secureuri:false,
	    files : [$("input[name='filemyimg']"),$("input[name='filemyfile']")],
		cache : false,
		dataType : 'json',
		data : $("#gameInfoform").serializeArray(),
		global : false,
		success : function(json) {
			if (json.success == true) {
				parent.toast(json.msg);// 弹出提示信息
				parent.getActiveIFrame().reloadGrid();// 刷新列表
				parent.closeWin();// 关闭弹出框
			} else {
				parent.toast(json.msg);
			}
		},
		error : function() {
			parent.toast("保存失败");
		}
	});
}
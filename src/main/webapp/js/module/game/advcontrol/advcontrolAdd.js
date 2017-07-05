$(document).ready(function() {
	SelectOption.loadAdvControl("showflag");//广告控制是否显示
	showUploadFile("myfile",null,true);//显示文件上传控件
	
	$("#advcontrolform").validate({
		rules : {
			advname : {
				required : true
			},
			filemyfile : {
				required : true
			},
			showflag : {
				required : true
			}
		},
		messages : {
			advname : {
				required : "广告名不能为空"
			},
			filemyfile : {
				required : "请上传广告安装包"
			},
			showflag : {
				required : "请选择广告控制"
			}
		},
		submitHandler : function(form) {
			save();
		}
	});
});

/** 保存 */
function save() {
	$.ajaxFileUpload({
		type : 'post',
		url : BASE_URL + '/game/advcontrol/save',
		secureuri:false,
	    files : [$("input[name='filemyfile']")],
		cache : false,
		dataType : 'json',
		data : $("#advcontrolform").serializeArray(),
		global : false,
		success : function(json) {
			if (json.success == true) {
				parent.toast(json.msg);// 弹出提示信息
			} else {
				parent.toast(json.msg);
			}
			window.location.reload();
		},
		error : function() {
			parent.toast("保存失败");
		}
	});
}
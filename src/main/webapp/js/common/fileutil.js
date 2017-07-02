
/**
 * 显示图片信息
 * @param filediv
 * @param filetype类型 图片或者文件
 * @param isnotpreview是否不显示预览
 * @param isdel 是否显示删除按钮(默认显示)
 */
function showUploadFile(filediv,filetype,ispreview,isdel){
	if($('#'+filediv).attr("id")){
		//初始化
		$('#'+filediv).append($("<div id='fileshow"+filediv+"' style='display:none;'/>"));
		$('#'+filediv).append($("<div id='fileselect"+filediv+"' style='display:none;'/>"));
		
		//显示文件名
		var filename=$('#'+filediv).attr("filename");
		//文件id
		var fileid=$('#'+filediv).attr("fileid");
		//文件地址
		var fileurl=$('#'+filediv).attr("fileurl");
		
		if(filename){
			//存在文件名称
			if(filetype=="image"){
				$('#fileshow'+filediv).append($("<img style='width:50%;height:200px;' href='javascript:void(0);' src='"+fileurl+"' ><input type='button' class='btn btn-primary btn-sm' value='删除' onclick=deleteFile('"+filediv+"','"+filetype+"',"+ispreview+",'"+fileid+"')   /> "));
			}else{
		//		$('#fileshow'+filediv).append($("<input class=\"form-control\" id=\"uploadFile"+filediv+"\" value="+filename+" name=\"filemyfileA\" data-show-preview=\"false\" type=\"file\" multiple data-min-file-count=\"1\"><input type='button' class='btn btn-primary btn-sm' value='删除' onclick=deleteFile('"+filediv+"','"+filetype+"',"+ispreview+")   />"));
				$('#fileshow'+filediv).append($("<a href='javascript:void(0);' onclick=downloadFile('"+fileurl+"') >"+filename+"</a>"));
				if(isdel == null){
					$('#fileshow'+filediv).append($(" <input type='button' class='btn btn-primary btn-sm' value='删除' onclick=deleteFile('"+filediv+"','"+filetype+"',"+ispreview+",'"+fileid+"')   /> "));
				}else{
					if(isdel)
						$('#fileshow'+filediv).append($(" <input type='button' class='btn btn-primary btn-sm' value='删除' onclick=deleteFile('"+filediv+"','"+filetype+"',"+ispreview+",'"+fileid+"')   /> "));
				}
			}
			$('#fileshow'+filediv).show();
		}else{
			if(ispreview){
				 $('#fileselect'+filediv).append($("<input class=\"form-control\" id=\"uploadFile"+filediv+"\" name=\"file"+filediv+"\" data-show-preview=\"false\"  class=\"file\" type=\"file\" multiple data-min-file-count=\"1\">"));
			}else{
				$('#fileselect'+filediv).append($("<input class=\"form-control\" id=\"uploadFile"+filediv+"\" name=\"file"+filediv+"\" class=\"file\" type=\"file\" multiple data-min-file-count=\"1\">"));
			}
			$('#fileselect'+filediv).show();
		}
		showFileSelect("uploadFile"+filediv,filetype);
	}
}

function deleteFile(filediv,filetype,ispreview,fileid){
	$('#fileshow'+filediv).hide();
	if(ispreview){
		$('#fileselect'+filediv).append($("<input class=\"form-control\" id=\"uploadFile"+filediv+"\" name=\"file"+filediv+"\"  data-show-preview=\"false\" class=\"file\" type=\"file\" multiple data-min-file-count=\"1\">"));
	}else{
		$('#fileselect'+filediv).append($("<input class=\"form-control\" id=\"uploadFile"+filediv+"\" name=\"file"+filediv+"\" class=\"file\" type=\"file\" multiple data-min-file-count=\"1\">"));
	}
	$('#fileselect'+filediv).show();
	$('#'+filediv).append($("<input class=\"form-control\" type='hidden' name='delids' value='"+fileid+"'/>"));
	showFileSelect("uploadFile"+filediv,filetype);
}


/**
*下载附件
*/
function downloadFile(attachurl){
	$.ajax({
		type : 'post',
		url : attachurl,
		cache : false,
		dataType : 'json',
		success : function(data) {
		  if(data.success==true){
		  	window.location.href=attachurl;	  
		  }else{
		  	parent.toast(data.msg);
		  }
		},
		error : function() {
			parent.toast("网络异常");
		}
	});
}

function showFileSelect(uploadFile,filetype){
	var defaultparams = {
		    language: 'zh',
		    showUpload: false,
			showCaption: true,
			browseClass: "btn btn-primary",
		    previewFileIcon: "<i class='glyphicon glyphicon-king'></i>"
		};
	if(typeof filetype!="object"){
		filetype = {allowedFileTypes: [filetype]};
	}
	$.extend(defaultparams,filetype);
	//文件上传
	$('#'+uploadFile).fileinput(defaultparams);
}


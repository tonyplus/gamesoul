$(document).ready(function() {
	SelectOption.loadGameType("gametype");//游戏类型
	var colname = ['主键id','游戏类型 ','游戏名称','游戏介绍','下载次数','更新时间']; 
	var colmodel = [
					{name:'gameid',index:'gameid',hidden:true},
					{name:'gamename',index:'gamename',
						formatter:function(cellvalue, options, obj) { 
							   return '<a href="javascript:void(0);" onclick="display(\''+obj.gameid+'\')">'+obj.gamename+'</a>';
						}
					},
					{name:'gametype',index:'gametype',
						formatter:function(cellvalue, options, obj) { 
							return SelectOption.getGameType(obj.gametype);
						}
					},
					{name:'gamedesc',index:'gamedesc'},
					{name:'downloadcount',index:'downloadcount'},
					{name:'updatetime',index:'updatetime',
						formatter:function(cellvalue, options, obj) { 
							return getSmpFormatDateByLong(obj.updatetime,true);
						}
					}
			];
	
	var tableHeight = $(window).height() - $('.pcheck').height() - 190;
	$(window).resize(function(){
		$("#grid-table").jqGrid( 'setGridHeight', $(window).height() - $('.pcheck').height() - 190 );
		$("#grid-table").jqGrid( 'setGridWidth', $(window).width()*0.99 );
	});

    $("#grid-table").jqGrid({
    	height: tableHeight,
    	url : BASE_URL + "/game/gameinfo/list",
    	datatype : "json",
		cache : false,
		mtype : 'POST',
		colNames : colname,
		colModel : colmodel,
		postData : {
			gamename:$("#gamename").val(),
			gametype:$("#gametype").val()
		},
		sortname : 'UPDATETIME',
		sortorder : "desc",
		viewrecords : true,
		pager : "#grid-pager",
		jsonReader : {
			root : "datas",
			total : "total",
			page : "page",
			records : "records",
			repeatitems : false
		},
		rowNum:10,
		rowList:[10,20,30],
		altRows: true,
		multiselect: true,
		caption: "游戏信息列表",
		autowidth: true
	});
});

/*加载*/
function reloadGrid(){
	$("#grid-table").jqGrid('setGridParam',{
		page:1,postData:{
			gamename:$("#gamename").val(),
			gametype:$("#gametype").val()
		}
	}).trigger("reloadGrid");
}

/*搜索查询*/
$("#searchBtn").bind("click",function(){
	reloadGrid();
});

/*重置*/
$("#resetBtn").bind("click",function(){
	 $(':input','#searchForm')
     .not(':button,:submit,:reset,:hidden') 
     .val('')
     .removeAttr('checked')

});

/*添加*/
$("#addBtn").on("click", function () {
	parent.openWin(BASE_URL+"/game/gameinfo/add",'添加','65%','75%');
});

/*编辑*/
$("#editBtn").on("click", function () {
	var ids = getSingleIds();
	var rowdata = $("#grid-table").jqGrid('getRowData',ids[0]); //选中的一条记录
	var gameid = rowdata.gameid;
	parent.openWin(BASE_URL+'/game/gameinfo/edit/'+gameid,'编辑','65%','75%');
});

/*详细查询*/
function display(gameid){
	parent.openWin(BASE_URL+"/game/gameinfo/display/"+gameid,'详细','65%','75%');
}
/*批量删除*/
$("#delBtn").on("click", function () {
	//返回当前grid中复选框所选择的数据的id 
	var ids = getManyIds("请选择需要删除的数据!");
	var gameids=[];
	var state = "";
	for(var i=0;i<ids.length;i++){
		var id = ids[i]; 
		//返回指定id行的数据 
		var rowdatas = $("#grid-table").jqGrid('getRowData',id);
		gameids[i]= rowdatas.gameid;
	}
	var parmJson = gameids.toString();
	var param = {"ids":parmJson};
	del(param);
});

/**
 * 值选择一条记录
 * @returns
 * @author lzqiang
 * @date 2016年7月7日 下午4:43:15
 */
function getSingleIds(){
	var ids = $("#grid-table").jqGrid('getGridParam','selarrrow');
	if(ids.length !=1){
		// 弹出提示信息
		parent.toast("请选择一条记录！");
		return;
	}
	return ids;
}
/**
 * 获取多条记录id
 * @param message
 * @returns
 * @author lzqiang
 * @date 2016年7月7日 下午4:45:13
 */
function getManyIds(message){
	var ids = $("#grid-table").jqGrid('getGridParam','selarrrow');
	if(ids.length==0){
		// 弹出提示信息
		parent.toast(message);
		return;
	}
	return ids;
}
/*删除方法*/
function del(param){
    //弹出提示框
	parent.confirm('确认删除吗?',function(){
		$.ajax({ 
	  		url: BASE_URL+"/game/gameinfo/delete",
	  		type:'post',
	  		dataType:'json',
	  		data:param,
	  		success: function(json){
	  			if(json.success==true){
	  				parent.toast(json.msg);
	  				reloadGrid();//刷新列表
	  			}else{
	  				parent.toast(json.msg);
	  			}
	  		}
		 });
	})
}

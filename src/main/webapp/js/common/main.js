$(function() {
	//$('.subnav').metisMenu();
	$('.J_menuItem').click(function() {
		$('.J_menuItem').removeClass('active');
		$(this).addClass('active');
	});
	$(".right-sidebar-toggle").click(function() {
		$("#right-sidebar").toggleClass("sidebar-open")
	});
	$(".sidebar-container").slimScroll({
		height: "100%",
		railOpacity: .4,
		wheelStep: 10
	});
	
	$("#slimtest").find("a").on("click",function(e){
		e.preventDefault();
		$(this).next("ul").toggle(400);
		$(this).find("i").toggleClass("arrow-up");
	});
	
	var flag = 1;
	$('.sidebar-collapse ul li').click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			$('.subnav').css('display','block');
			$('#page-wrapper').css('margin-left','253px');
			flag = 1;
		});

	
	$('.pinch').on('click',function() {
		$('.subnav').css('display','block');
		if(flag == 1) {
			$('.subnav').css('display','none');
			$('#page-wrapper').css('margin-left','75px');
			flag = 0;
		}else {
			$('.subnav').css('display','block');
			$('#page-wrapper').css('margin-left','253px');
			flag = 1;
		}
	});
	function sub() {
		var simHeight = $(window).height() - $('.header').height() -12;
		$('#slimtest').slimScroll({
		    height: simHeight,
		});
	}
	sub()
	$(window).resize(function() {
		var simHeight = $(window).height() - $('.header').height()-12;
		$('#slimtest').slimScroll({
		    height: simHeight,
		});
	});
	slider();	
	
	//加载请求获取待办事项,三分钟数据刷新一次
//	setInterval(function(){
//		loadWaiting();
//	},180000);
	function slider(){
		var outer=$('.sidebar-collapse');
		var oul=$('.sidebar-collapse ul');
		var ali=$('.sidebar-collapse ul li');	
		var aliHei=ali.eq(0).height();	
		var outHei=outer.height();
		var aliSize=ali.size();
		var ulHei=aliHei*aliSize;
		oul.height(ulHei);
		var btnPre = $(".prev-bnt");
		var btnNext = $(".next-btn");	
		var timer = null;
		haveHei = function() {
			var leftHi= $('.navbar-style').height();
			var lisize=Math.floor((leftHi - 105 )/aliHei);
			if(ulHei>=leftHi){	
				outer.css({'top':'0','height':lisize*aliHei});	
				btnPre.addClass('active');
				btnNext.show();	
				btnPre.show();
			}else{
				outer.css({'height':'100%'});
				oul.css({'top':'0'});
				btnPre.hide();
				btnNext.hide();
			}
			outHei=lisize*(aliHei+2); 	
		};	
		$(window).resize(function() {
				clearTimeout(timer);
				timer = setTimeout(haveHei, 300);
			}).ready(haveHei);
		btnNext.click(function(){
			timeId = setTimeout(function(){				
			var oulTop=parseInt(oul.css('top'));	
			if( (oulTop+ulHei)>outHei ) {
				ulMove(-outHei);
			}},100);
			btnNext.addClass('active');
			btnPre.removeClass('active');
		}).dblclick(function(){
			clearTimeout(timeId)
		});
		btnPre.click(function(){		
				   timeId = setTimeout(function(){	
					var oulTop=parseInt(oul.css('top'));				
					if(oulTop>=0){	
					 oul.animate({top:'0px'},500);
					}else{
						ulMove(outHei);
					}},300);
				   btnPre.addClass('active');
				   btnNext.removeClass('active');
				}).dblclick(function(){
					clearTimeout(timeId)
				});
		function ulMove(speed){		   
			oul.animate({top:'+='+speed+'px'},500,function(){
				if(parseInt(oul.css('top'))>0){
					oul.animate({top:'0px'},200);
				}
			});
	   }
	}
	
});

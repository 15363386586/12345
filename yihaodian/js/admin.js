//帮助中心
$(function(){
	$(".li1,.helpcenter").hover(function(){
		$(".helpcenter").css("display","block");
		$(".li1").css({"border-left":"1px solid #cccccc","border-right":"1px solid #cccccc","border-top":"1px solid #cccccc"})
		
	},function(){
		$(".helpcenter").css("display","none");
		$(".li1").css({"border-left":"1px solid white","border-right":"1px solid white","border-top":"1px solid white"})
	});
});

//更多合作网站
$(function(){
	$("#webspan").click(function(){
		$(".moreweb").toggle();
		if($(".moreweb").css("display")=="list-item"){
			$(".right").css("height","470px");
		}else{
			$(".right").css("height","410px");
		}
	})
});

//自动登录
$(function(){
	$(".checkbox1").click(function(){
		$("#qingwu").toggle();
		if($("#qingwu").css("display")=="inline"){
			$(".checkbox1").css({"background":"url(img/20180903132422.png) no-repeat","background-size":"12px"});
			$(".checkbox1").css("border","1px solid #ff875a");
		}else{
			$(".checkbox1").css("background","white");
		}
	});
});

//切换二维码
$(function(){
	$(".erweima").click(function(){
		$(".right2").show();
		$(".right").hide();
	});
	$(".computer").click(function(){
		$(".right").show();
		$(".right2").hide();
	});
});

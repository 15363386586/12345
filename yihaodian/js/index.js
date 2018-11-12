$(function(){
	//关闭广告
	$(".chachacha").click(function(){
		$(".advertisement").hide();
	});
	//右边固定栏
	$(".guding>ul>li").hover(function(){
		$(this).css("background","#ff5c4d");
	},function(){
		$(this).css("background","#303030");
	});
	
	$(".gudingli6").hover(function(){
		$(".erweima2").show();
	},function(){
		$(".erweima2").hide();
	});
	
	$(".gudingli7").hover(function(){
		$(".font6").animate({"left":"-70px"},200);
		$(".gudingli7 a").css("background","#ff5c4d");
	},function(){
		$(".font6").animate({"left":"0px"},200);
		$(".gudingli7 a").css("background","#303030");
	});
	
	$(".gudingli5").hover(function(){
		$(".font7").animate({"left":"-70px"},200);
		$(".gudingli5 a").css("background","#ff5c4d");
	},function(){
		$(".font7").animate({"left":"0px"},200);
		$(".gudingli5 a").css("background","#303030");
	});
	
	$(".gudingli3").hover(function(){
		$(".font8").animate({"left":"-50px"},200);
		$(".gudingli3 a").css("background","#ff5c4d");
	},function(){
		$(".font8").animate({"left":"0px"},200);
		$(".gudingli3 a").css("background","#303030");
	});
	
	$(".gudingli1").hover(function(){
		$(".font9").animate({"left":"-70px"},200);
		$(".gudingli1 a").css("background","#ff5c4d");
	},function(){
		$(".font9").animate({"left":"0px"},200);
		$(".gudingli1 a").css("background","#303030");
	});
	//返回顶部
	$(".font6").click(function(){
		$("html").animate({scrollTop: 0},'slow');
	})
	//最顶部

	$(".headertop").mouseover(function(){
		$(".headertop1>img").stop();
		$(".contain").stop();
		$(".contain").animate({top:"250px"});
		$(".headertop1>img").animate({top:"250px"});
	});
	$(".headertop").mouseout(function(){
		$(".headertop1>img").stop();
		$(".contain").stop();
		$(".contain").animate({top:"80px"});
		$(".headertop1>img").animate({top:"0px"});
	});
	
	
	//APP下载下拉
	$(".li15,.app").hover(function(){
		$(".app").show();
	},function(){
		$(".app").hide();
	})
	//客服服务
	$(".li14,.fuwu").hover(function(){
		$(".li14").css({"background":"white","border-left":"1px solid #cccccc","border-right":"1px solid #cccccc"});
		$(".fuwu").show();
		$("#jiantou").css("transition","0.4s");
		$("#jiantou").css("transform","rotate(180deg)")
	},function(){
		$(".li14").css({"background":"#f4f4f4","border-left":"1px solid #f4f4f4","border-right":"1px solid #f4f4f4"});
		$(".fuwu").hide();
		$("#jiantou").css("transform","rotate(0deg)")
	});
	
	//所有商品分类
	$(".shopbottom>ul>li").hover(function(){
		$(this).children(a).css("background","white");
		$(this).children(a).css("color","black");
		var a=$(this).index()+1;
		$(".shopbottomright"+a).show();
	},function(){
		$(this).children(a).css("background","#444444");
		$(this).children(a).css("color","white");
		var a=$(this).index()+1;
		$(".shopbottomright"+a).hide();
	});
	
	//轮播图
	$(function(){
		//数字点击转换
		$(".lunbodian ul li").mouseover(function(){
			//终止轮播定时器
			clearInterval(lunbo);
			var a=$(this).index()+1;
			$(".lunboimg ul li").fadeOut(200);
			$(".lunbodian ul li").attr("id","none");
			$(".lunboimg ul li:nth-of-type("+a+")").fadeIn(200);
			$(this).attr("id","hot");
			//定时器的位置
			time=a;
			//箭头滑动的位置
			img=a;

		}).mouseout(function(){
			//开启定时器
			lunbo =setInterval(time1,2500);
		});
		//显示箭头
		$(".lunbodian,.jiantou,.lunboimg").hover(function(){
			$(".jiantou").show();
		},function(){
			$(".jiantou").hide();
		})
		
		//左箭头
		var img=1;
		$(".jiantouleft").click(function(){
			img--;
			if(img<=0){img=8;}
			$(".lunboimg ul li").fadeOut(200);
			$(".lunboimg ul li:nth-of-type("+img+")").fadeIn(200);
			$(".lunbodian ul li").attr("id","none");
			$(".lunbodian ul li:nth-of-type("+img+")").attr("id","hot");
			//定时器的位置
			time=img;
		});	
		
		//右箭头
		$(".jiantouright").click(function(){
			img++;
			if(img>=9){img=1;}
			$(".lunboimg ul li").fadeOut(200);
			$(".lunboimg ul li:nth-of-type("+img+")").fadeIn(200);
			$(".lunbodian ul li").attr("id","none");
			$(".lunbodian ul li:nth-of-type("+img+")").attr("id","hot");
			//定时器的位置
			time=img;
		});	
		
		//定时轮播
		var time=1;
		function time1(){
			time++;
			if(time>8){time=1;}
			//左右滑动的位置
			img=time;
			$(".lunboimg ul li").fadeOut(200);
			$(".lunbodian ul li").attr("id","none");
			$(".lunboimg ul li:nth-of-type("+time+")").fadeIn(200);
			$(".lunbodian ul li:nth-of-type("+time+")").attr("id","hot");
		}
		var lunbo =setInterval(time1,2500);
		
		//左右箭头放鼠标停止轮播
		$(".jiantouleft,.jiantouright").mouseover(function(){
			//终止轮播定时器
			clearInterval(lunbo);
		}).mouseout(function(){
			//开启定时器
			lunbo =setInterval(time1,2500);
		});
		
	});

	//一号抢购栏
	//显示箭头
	$(".onebuyevery").hover(function(){
		$(".jiantouleft2,.jiantouright2").show();
	},function(){
		$(".jiantouleft2,.jiantouright2").hide();
	});
	//鼠标放上去图片动
	$(".onebuy1").hover(function(){
		$(this).find("a").find("img").stop();
		$(this).find("a").find("img").animate({right:10},300);
	},function(){
		$(this).find("a").find("img").stop();
		$(this).find("a").find("img").animate({right:0},300);
	});
	//轮播
	var onebuy=0;
	$(".jiantouleft2").click(function(){
		onebuy--;
		if(onebuy<0){onebuy=0;}
		$(".onebuyevery1").animate({right:onebuy*1023},500);
	});
	$(".jiantouright2").click(function(){
		onebuy++;
		if(onebuy>2){onebuy=2;}
		$(".onebuyevery1").animate({right:onebuy*1023},500);
	});
	
	//1号闪购
	//鼠标放上去图片动
	$(".shanbuycenter2 a").hover(function(){
		$(this).find("img").stop();
		$(this).find("img").animate({right:10},300);
	},function(){
		$(this).find("img").stop();
		$(this).find("img").animate({right:0},300);
	});
	
	//右侧轮播
	$(".paihang1 ul li").mouseover(function(){
		var a=$(this).index()+1;
		$(".paihang1 ul li").attr("id","none");
		$(this).attr("id","hot1");
		$(".paihang3").hide();
		$(".paihang3:nth-of-type("+a+")").show();
	});
	
	//生活派
	$(".shenghuoright1 a").hover(function(){
		$(this).find("img").stop();
		$(this).find("img").animate({right:10},300);
	},function(){
		$(this).find("img").stop();
		$(this).find("img").animate({right:0},300);
	});
});


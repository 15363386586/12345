$(function(){
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
	})
	//所有商品分类
	$(".everyshangpin,.shopbottom").hover(function(){
		$(".everyshangpin img").css("transform","rotate(180deg)");
		$(".shopbottom").show();
	},function(){
		$(".everyshangpin img").css("transform","rotate(0deg)");
		$(".shopbottom").hide();
	});
	
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
	
	//更多筛选项
	$(".classifyright7 >ul li").hover(function(){
		$(this).find("img").css("transform","rotate(180deg)");
	},function(){
		$(this).find("img").css("transform","rotate(0deg)");
	});
	
	$(".classifyright7 >ul li:nth-of-type(1),.everyonesay1").hover(function(){
		$(".everyonesay1").show();
		$(".classifyright7 >ul li:nth-of-type(1)").css({"border":"1px solid #DCDCDC","z-index":"999","border-bottom":"1px solid white"});
		},function(){
		$(".everyonesay1").hide();
		$(".classifyright7 >ul li:nth-of-type(1)").css({"border":"1px solid white","z-index":"0","border-bottom":"1px solid white"});
	});
	
	$(".classifyright7 >ul li:nth-of-type(2),.everyonesay2").hover(function(){
		$(".everyonesay2").show();
		$(".classifyright7 >ul li:nth-of-type(2)").css({"border":"1px solid #DCDCDC","z-index":"999","border-bottom":"1px solid white"});
		},function(){
		$(".everyonesay2").hide();
		$(".classifyright7 >ul li:nth-of-type(2)").css({"border":"1px solid white","z-index":"0","border-bottom":"1px solid white"});
	});
	
	$(".classifyright7 >ul li:nth-of-type(3),.everyonesay3").hover(function(){
		$(".everyonesay3").show();
		$(".classifyright7 >ul li:nth-of-type(3)").css({"border":"1px solid #DCDCDC","z-index":"999","border-bottom":"1px solid white"});
		},function(){
		$(".everyonesay3").hide();
		$(".classifyright7 >ul li:nth-of-type(3)").css({"border":"1px solid white","z-index":"0","border-bottom":"1px solid white"});
	});
	
	$(".classifyright7 >ul li:nth-of-type(4),.everyonesay4").hover(function(){
		$(".everyonesay4").show();
		$(".classifyright7 >ul li:nth-of-type(4)").css({"border":"1px solid #DCDCDC","z-index":"999","border-bottom":"1px solid white"});
		},function(){
		$(".everyonesay4").hide();
		$(".classifyright7 >ul li:nth-of-type(4)").css({"border":"1px solid white","z-index":"0","border-bottom":"1px solid white"});
	});
	
	$(".classifyright7 >ul li:nth-of-type(5),.everyonesay5").hover(function(){
		$(".everyonesay5").show();
		$(".classifyright7 >ul li:nth-of-type(5)").css({"border":"1px solid #DCDCDC","z-index":"999","border-bottom":"1px solid white"});
		},function(){
		$(".everyonesay5").hide();
		$(".classifyright7 >ul li:nth-of-type(5)").css({"border":"1px solid white","z-index":"0","border-bottom":"1px solid white"});
	});
	
	$(".classifyright7 >ul li:nth-of-type(6),.everyonesay6").hover(function(){
		$(".everyonesay6").show();
		$(".classifyright7 >ul li:nth-of-type(6)").css({"border":"1px solid #DCDCDC","z-index":"999","border-bottom":"1px solid white"});
		},function(){
		$(".everyonesay6").hide();
		$(".classifyright7 >ul li:nth-of-type(6)").css({"border":"1px solid white","z-index":"0","border-bottom":"1px solid white"});
	});

	$(".classifyright7 >ul li:nth-of-type(7),.everyonesay7").hover(function(){
		$(".everyonesay7").show();
		$(".classifyright7 >ul li:nth-of-type(7)").css({"border":"1px solid #DCDCDC","z-index":"999","border-bottom":"1px solid white"});
		},function(){
		$(".everyonesay7").hide();
		$(".classifyright7 >ul li:nth-of-type(7)").css({"border":"1px solid white","z-index":"0","border-bottom":"1px solid white"});
	});
	
	$(".classifyright7 >ul li:nth-of-type(8),.everyonesay8").hover(function(){
		$(".everyonesay8").show();
		$(".classifyright7 >ul li:nth-of-type(8)").css({"border":"1px solid #DCDCDC","z-index":"999","border-bottom":"1px solid white"});
		},function(){
		$(".everyonesay8").hide();
		$(".classifyright7 >ul li:nth-of-type(8)").css({"border":"1px solid white","z-index":"0","border-bottom":"1px solid white"});
	});
	
	$(".classifyright7 >ul li:nth-of-type(9),.everyonesay9").hover(function(){
		$(".everyonesay9").show();
		$(".classifyright7 >ul li:nth-of-type(9)").css({"border":"1px solid #DCDCDC","z-index":"999","border-bottom":"1px solid white"});
		},function(){
		$(".everyonesay9").hide();
		$(".classifyright7 >ul li:nth-of-type(9)").css({"border":"1px solid white","z-index":"0","border-bottom":"1px solid white"});
	});
	
	//综合栏
	$(".zonghe2 li").hover(function(){
		$(this).find(".font4").css("border","1px solid #FF3C3C");
	},function(){
		$(this).find(".font4").css("border","1px solid #A9A9A9");
	});
	
	$(".zonghe2 li").click(function(){
		if($(this).find(".font5").css("display")=="none"){
			$(this).find(".font5").show();
			$(this).find(".font4").hide();
		}else{
			$(this).find(".font5").hide();
			$(this).find(".font4").show();
		}
	});
	
	//价格下拉栏
	$(".zongheli5").hover(function(){
		$(".price").show();
	},function(){
		$(".price").hide();
	});
	
	
	//物品边框
	$(".wupin10,.wupin11").hover(function(){
		$(this).find(".border1").show();
	},function(){
		$(this).find(".border1").hide();
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
	
	
	//地址选项卡
	//点击主体选项进行选择
	$(".songhuodizhi2 ul li").click(function(){
		$(".songhuodizhi2 ul li").attr("id","none");
		$(this).attr("id","hot7");
		var a=$(this).index()+1;
		$(".songhuodizhi3>div").hide();
		$(".songhuodizhi3>div:nth-of-type("+a+")").show();
	})
	//点击省份进行id变换
	$(".shengfen font").click(function(){
		$(".shengfen font").attr("id","none");
		$(this).attr("id","hot8");
		var a=$(this).text();
		$(".songhuodizhi2 ul li:nth-of-type(1)").text(a);
		//点击省份时省份页消失，跳转到城市页面
		$(".songhuodizhi3>div:nth-of-type(1)").hide();
		$(".songhuodizhi3>div:nth-of-type(2)").show();
		$(".songhuodizhi2 ul li:nth-of-type(2)").text("请选择");
		$(".songhuodizhi2 ul li").attr("id","none");
		$(".songhuodizhi2 ul li:nth-of-type(2)").attr("id","hot7");
		//点击省份时，后面城市页面出现，后面的消失
		$(".songhuodizhi2 ul li:nth-of-type(3),.songhuodizhi2 ul li:nth-of-type(4)").hide();
		//点击省份时，子城市页面出现
		var b=$(this).index();
		if($(this).parent().index()==1){
			b=b+5;
		}
		if($(this).parent().index()==2){
			b=b+11;
		}
		if($(this).parent().index()==3){
			b=b+14;
		}
		if($(this).parent().index()==4){
			b=b+18;
		}
		if($(this).parent().index()==5){
			b=b+23;
		}
		if($(this).parent().index()==6){
			b=b+28;
		}
		$(".chengshi ul").hide();
		$(".chengshi ul:nth-of-type("+b+")").show();
		
	})
	//点击城市进行id转换
	$(".chengshi font").click(function(){
		$(".chengshi font").attr("id","none");
		$(this).attr("id","hot9");
		var a=$(this).text();
		$(".songhuodizhi2 ul li:nth-of-type(2)").text(a);
		//点击城市时城市页消失，跳转到区市页面
		$(".songhuodizhi3>div:nth-of-type(2)").hide();
		$(".songhuodizhi3>div:nth-of-type(3)").show();
		$(".songhuodizhi2 ul li:nth-of-type(3)").text("请选择");
		$(".songhuodizhi2 ul li").attr("id","none");
		$(".songhuodizhi2 ul li:nth-of-type(3)").attr("id","hot7");
		////点击城市时，区市页面出现
		$(".songhuodizhi2 ul li:nth-of-type(3)").show();
	})
	//点击区市进行id转换
	$(".quxian font").click(function(){
		$(".quxian font").attr("id","none");
		$(this).attr("id","hot10");
		var a=$(this).text();
		$(".songhuodizhi2 ul li:nth-of-type(3)").text(a);
		//点击区市时城区市消失，跳转到村镇页面
		$(".songhuodizhi3>div:nth-of-type(3)").hide();
		$(".songhuodizhi3>div:nth-of-type(4)").show();
		$(".songhuodizhi2 ul li:nth-of-type(4)").text("请选择");
		$(".songhuodizhi2 ul li").attr("id","none");
		$(".songhuodizhi2 ul li:nth-of-type(4)").attr("id","hot7");
		////点击区市时，村镇页面出现
		$(".songhuodizhi2 ul li:nth-of-type(4)").show();
	})
	//点击村镇进行id转换
	$(".cunzhen font").click(function(){
		$(".cunzhen font").attr("id","none");
		$(this).attr("id","hot11");
		var a=$(this).text();
		$(".songhuodizhi2 ul li:nth-of-type(4)").text(a);
		var x=$(".songhuodizhi2 ul li:nth-of-type(1)").text();
		var y=$(".songhuodizhi2 ul li:nth-of-type(2)").text();
		var z=$(".songhuodizhi2 ul li:nth-of-type(3)").text();
		var k=$(".songhuodizhi2 ul li:nth-of-type(4)").text();
		$(".span81 span").text(x+y+z+k);
	})
	
	//点击出现
	$(".span8").hover(function(){
		$(".songhuodizhi").show();
		$(".span8").css("background","white");
	},function(){
		$(".songhuodizhi").hide();
		$(".span8").css("background","#f4f4f4");
	});
	//点击x消失
	$(".chacha").click(function(){
		$(".songhuodizhi").hide();
	})


});

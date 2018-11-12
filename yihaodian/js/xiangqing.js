$(function(){
	//放大镜
	function Zoom(imgbox, hoverbox, l, t, x, y, h_w, h_h, showbox) {
	    var moveX = x - l - (h_w / 2);
	    //鼠标区域距离
	    var moveY = y - t - (h_h / 2);
	    //鼠标区域距离
	    if (moveX < 0) {
	        moveX = 0
	    }
	    if (moveY < 0) {
	        moveY = 0
	    }
	    if (moveX > imgbox.width() - h_w) {
	        moveX = imgbox.width() - h_w
	    }
	    if (moveY > imgbox.height() - h_h) {
	        moveY = imgbox.height() - h_h
	    }
	    //判断鼠标使其不跑出图片框
	    var zoomX = showbox.width() / imgbox.width()
	    //求图片比例
	    var zoomY = showbox.height() / imgbox.height()
	
	    showbox.css({
	        left: -(moveX * zoomX),
	        top: -(moveY * zoomY)
	    })
	    hoverbox.css({
	        left: moveX,
	        top: moveY
	    })
	    //确定位置

	}

	function Zoomhover(imgbox, hoverbox, showbox) {
	    var l = imgbox.offset().left;
	    var t = imgbox.offset().top;
	    var w = hoverbox.width();
	    var h = hoverbox.height();
	    var time;
	    $(".xiangqing11 li,.hoverbox").mouseover(function(e) {
	        var x = e.pageX;
	        var y = e.pageY;
	        var showbox1=$("#hot5").index()+1;
	        $(".hoverbox,.showbox:nth-of-type("+showbox1+")").show();
	        hoverbox.css("opacity", "0.3")
	        time = setTimeout(function() {
	            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
	        }, 1)
	    }).mousemove(function(e){
	        var x = e.pageX;
	        var y = e.pageY;
	        time = setTimeout(function() {
	            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
	        }, 1)
	    }).mouseout(function(){
	        showbox.parent().hide()
	        hoverbox.hide();
	    })
	}
	$(function() {
	    Zoomhover($(".xiangqing11 li"), $(".hoverbox"), $(".showbox img"));
	})
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
	
	//详情最右边换一换
	var xiangqing32=2;
	$(".xiangqing31 li:nth-of-type(2)").click(function(){
		xiangqing32++;
		console.log(xiangqing32);
		if(xiangqing32>5){xiangqing32=2;}
		$(".xiangqing32").hide();
		$(".xiangqing32:nth-of-type("+xiangqing32+")").show();
		
	});
	
	//购物车购买数量
	$("#num").focus(function(){
		$(".input3").css({"border":"1px solid #A6C7FF"});
	}).blur(function(){
		$(".input3").css({"border":"1px solid white"});
	});
	
	$(".jiantoushang").click(function(){
		$(this).css({"border":"1px solid #A6C7FF"});
		$(".jiantouxia").css({"border":"1px solid #c8c7cc"});
		var a=Number($(".input3 input").val())+1;
		$(".input3 input").val(a);
		if($(".input3 input").val()>1){
			$(".jiantouxia").css({"background":"white url(img/51427.png) no-repeat 4.5px 4px","background-size":"15px"});
		}
		return false;
	});
	$(".jiantouxia").click(function(){
		$(this).css({"border":"1px solid #A6C7FF"});
		$(".jiantoushang").css({"border":"1px solid #c8c7cc"});
		if($(".input3 input").val()==1){
			$(".input3 input").val("2");
			$(this).css({"background":"#efeff4 url(img/0910164902.png) no-repeat 4.5px 4px","background-size":"17px"});
		}
		var a=Number($(".input3 input").val())-1;
		$(".input3 input").val(a);
		return false;
	});
	$(document).click(function(){
        $(".jiantoushang,.jiantouxia").css("border","1px solid #c8c7cc");
   })
	
	//关注爱心
	$(".xiangqing13li2").hover(function(){
		$(".heart ul").stop();
		$(".heart ul").animate({bottom:"18px"},100);
	},function(){
		$(".heart ul").stop();
		$(".heart ul").animate({bottom:"0px"},100);
	});
	
	//左边轮播
	$(".jiantouleft3").click(function(){
		$(".xiangqingul").animate({right:"0px"},100);
	});
	$(".jiantouright3").click(function(){
		$(".xiangqingul").animate({right:"66px"},100);
	});
	$(".xiangqingul li").mousemove(function(){
		var a=$(this).index()+1;
		$(".xiangqingul li").attr("id","none");
		$(this).attr("id","hot5");
		$(".xiangqing11 li").hide();
		$(".xiangqing11 li:nth-of-type("+a+")").show();
	});
	
	//评价选项卡
	$(".xuanxiangka1 ul li").click(function(){
		$(".xuanxiangka1 ul li").attr("id","none");
		$(this).attr("id","hot2");
		var a=$(this).index()+1;
		$(".xuanxiangka2>div").hide();
		$(".xuanxiangka2>div:nth-of-type("+a+")").show();
	});
	//评价第二个选项卡
	$(".radio").click(function(){
		$(".radio").attr("id","none");
		$(this).attr("id","hot6");
		var a=$(this).index()+1;
		$(".pinglunxuanxiangka2>div").hide();
		$(".pinglunxuanxiangka2>div:nth-of-type("+a+")").show();
	});
	
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
	$(".span81").click(function(){
		$(".songhuodizhi").show();
	})
	//点击x消失
	$(".chacha").click(function(){
		$(".songhuodizhi").hide();
	})
	
	//视频播放
	$(".video").click(function(){
		$(".video1").show();
		$(".chacha2").show();
	})
	$(".chacha2").click(function(){
		$(".video1").hide();
		$(".chacha2").hide();
	})
	
	
});	
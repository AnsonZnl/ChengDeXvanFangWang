//登陆
$(".denluyezi").hover(function(){
    $(".denluye").stop().slideDown()
},function(){});
$(".denluye").hover(function(){},function(){
    $(".denluye").stop().slideUp()
});
//二维码滑动

$(".tupiandw").hover(function(){
    $(".dwei").stop().show();
},function(){
    $(".dwei").stop().hide();
});
//回到顶部
$(window).scroll(function(){//
    if ($(window).scrollTop()>100){//当高度小于100
        $("#back-to-top").fadeIn(1000);
    }else{
        $("#back-to-top").fadeOut(1000);
    }
});
$("#back-to-top").click(function(){
    $("body").animate({"scrollTop":"0"},1500)
});
//banner 轮播
var n=0;//变量
function run(){
    n++;
    n=(n==6)?0:n;// 三元表达式 如果n=5.那么n=0.如果n=n.则n=n
//              if(n==5){//如果n=5
//                  n=0;
//              }
    $(".banner-img img").eq(n).fadeIn(2900).siblings("img").fadeOut(2900); //fadeIn显示，fadeOut隐藏
    $(".banner-img .bul li").eq(n).css({"background":"red"}).siblings("li").css({"background":"#000"});
}
var timer= setInterval(run,3000);//替换时间。
$(".banner-img .bul li").mouseenter(function(){//鼠标移入事件
        clearInterval(timer);//停止替换
        var i=$(this).index();//取出当前li的索引
//                alert(i);//弹出
        $(".banner-img img").eq(i).fadeIn(1000).siblings("img").fadeOut(1000)//让鼠标移入当前的li显示对应的img.兄弟节点隐藏(淡出)
        $(".banner-img .bul li").eq(i).css({"background":"red"}).siblings("li").css({"background":"#000"});
        //$(this).css({"background":"red"}).siblings("li").css({"background":"#000"});
        //找到第.eq(i).li、当前i变成红色。兄弟节点其余变成黑色、
    })
    .mouseleave(function(){
        timer=setInterval(run,3000);
    });//鼠标移除继续轮播
//main-2-right-bottom遮罩
$(".li1").hover(function(){
    $(this).find(".ali1").stop().animate({"opacity":"0.8"},1000);
},function(){
    $(this).find(".ali1").stop().animate({"opacity":"0"},1000);
});
//main-2-right-bottom选项卡
$(".main-2-right-top li:eq(0)").click(function(){
    $(".main-2-right-bottom0").show().siblings("div").hide();
    $(this).css({"background":"#fff"}).siblings("li").css({"background":"#c2c2c2"});
});   $(".main-2-right-top li:eq(1)").click(function(){
    $(".main-2-right-bottom1").show().siblings("div").hide();
    $(this).css({"background":"#fff"}).siblings("li").css({"background":"#c2c2c2"});
});   $(".main-2-right-top li:eq(2)").click(function(){
    $(".main-2-right-bottom2").show().siblings("div").hide();
    $(this).css({"background":"#fff"}).siblings("li").css({"background":"#c2c2c2"});
});
//租房遮罩
$(".main-4-right li").hover(function(){
    $(this).find(".zaz").stop().animate({"opacity":"0.8"},1000)
},function(){
    $(this).find(".zaz").stop().animate({"opacity":"0"},1000)
});
//main-5竖拉特效
$(".main-5-right-left ul li:eq(0)").hover(function(){
    $(this).stop().animate({"height":"483px"},1000);
},function(){
    $(this).stop().animate({"height":"97"},1000);
});
$(".main-5-right-left ul li:eq(1)").hover(function(){
    $(this).stop().animate({"margin-top":"-97","height":"483px"},1000);
},function(){
    $(this).stop().animate({"margin-top":"0px","height":"97"},1000);
});
$(".main-5-right-left ul li:eq(2)").hover(function(){
    $(this).stop().animate({"margin-top":"-194","height":"483"},1000);
},function(){
    $(this).stop().animate({"margin-top":"0px","height":"97"},1000);
});
$(".main-5-right-left ul li:eq(3)").hover(function(){
    $(this).stop().animate({"margin-top":"-291","height":"483"},1000);
},function(){
    $(this).stop().animate({"margin-top":"0px","height":"97"},1000);
});
$(".main-5-right-left ul li:eq(4)").hover(function(){
    $(this).stop().animate({"margin-top":"-388","height":"483"},1000);
},function(){
    $(this).stop().animate({"margin-top":"0px","height":"107"},1000);
});
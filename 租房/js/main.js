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
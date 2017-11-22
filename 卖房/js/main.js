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
//表单验证
function checkName() {
    var a = document.getElementById("name").value;
    if (a.length >= 3) {
        document.getElementById("one").innerHTML = "正确";
    } else {
        document.getElementById("one").innerHTML = "用户名不符合规范";
    }
}
function checkPwd1() {
    var a = document.getElementById("pwd1").value;
    if (a == "") {
        document.getElementById("two").innerHTML = "不能为空";
    } else if (!isNaN(a)) {
        document.getElementById("two").innerHTML = "不能为纯数字";
    } else if (a.length < 6) {
        document.getElementById("two").innerHTML = "不能少于6位";
    } else if (a.length > 10) {
        document.getElementById("two").innerHTML = "不能多于10位";
    } else {
        document.getElementById("two").innerHTML = "正确";
    }
}
function checkPwd2() {
    var a = document.getElementById("pwd1").value;
    var b = document.getElementById("pwd2").value;
    if (a != b) {
        document.getElementById("three").innerHTML = "两次输入不一致";
    } else {
        document.getElementById("three").innerHTML = "正确";
    }
}
function checkId() {
    var a = document.getElementById("crd").value;
    var b = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
    if (b.test(a)) {
        document.getElementById("crd1").innerHTML = "正确";
    } else {
        document.getElementById("crd1").innerHTML = "错误";
    }
}
function checkphone() {
    var a = document.getElementById("phone").value;
    var b = /^1\d{10}$/;
    if (b.test(a)) {
        document.getElementById("phone1").innerHTML = "正确";
    } else {
        document.getElementById("phone1").innerHTML = "错误";
    }
}

function checkemail() {
    var a = document.getElementById("email").value;
    var b = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (b.test(a)) {
        document.getElementById("four").innerHTML = "正确";
    } else {
        document.getElementById("four").innerHTML = "错误";
    }
}
function checkAll() {
    var name = document.getElementById("name").value;//姓名
    var crd = document.getElementById("crd").value;//身份证号
    var email = document.getElementById("email").value;//邮箱
    if (name == "" || crd == "") {
        alert("姓名，手机号必填");
        return false;
    }
}
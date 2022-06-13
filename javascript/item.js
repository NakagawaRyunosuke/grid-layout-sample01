$(document).ready(function(){
    $("#itemImg").attr("src",sessionStorage.getItem("img"));
});

//メニューの表示・非表示
$(".menubtn").click(function(){
    if($("#menu").hasClass("hidden")){
        $("#menu").removeClass("hidden");
        $(".line").css("background-color","white");
    }else{
        $("#menu").addClass("hidden");
        $(".line").css("background-color","black");
    }
    $(this).toggleClass("active");
});

//メニューの非表示
$("#menu").click(function(){
    $("#menu").addClass("hidden");
    $(".line").css("background-color","black");
    $(".menubtn").toggleClass("active");
});

$("#title").click(function(){
    window.location.href = "../index.html";
});

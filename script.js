/*Đăng ký */
$(document).ready(function(){
    $("#js-Dangky_Dangnhap").click(function(){
        $("#js-modal").css("display","flex");
        
        $("#js-back").click(function(){
            $("#js-modal").css("display","none");
        });
        $("#js-confirm").click(function(){
            $("#js-modal").css("display","none");
        });
    });
});

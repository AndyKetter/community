import {request} from './common'; 
$(function () { 
    var username = $('.usr').val();//登录姓名
    var password = $('.psd').val();
    console.log()
    var validCode = "";//验证码
    var loginData = {
        username:"test",
        password:"0000",
        validCode:""
    };
    $('#JS_sub').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://192.168.1.254:9999/api/System/Login/SystemLogin",
            data: loginData,
            dataType: "json",
            success: function (response) {
                console.log(response)
            }
        });
    });
});

var data = {
    "role":"building",
    "role":["building","street","community"],
    "username":"andyketter",
    "nickname":"adfell",
    "id":""
}
 

var obj = {
    "building":"住建",
    "street":"街道",
    "community":"社区",
    "prepareGroup":"筹备组",
    "ownerCommittee":"业委会",
    "operation":"运营"
}
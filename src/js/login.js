import { request,CONFIG } from './common'; 

var mockData = {
    "IsSuccess": true,//是否登录成功
    "Message": "",//消息
    "Data": {
        "uguid":"6",//用户id
        "nickname":"莫含",//昵称
        "realname":"赵云",//真实姓名
        "roles":[{//角色列表
            "roleid":[1,2,3],//角色id
            "rolename":["building","ownerCommittee","community","operation","street","prepareGroup"],//角色名称
            "cmntyid":"89",//小区id
            "cmntyname":["保利麓谷","西兴花园","南岸晶都"],//小区名称
            "areaid":"90",//区域id
            "areaname":"长沙区"//区域名称
        }]
    },
    "Status": 100//成功 
};
$(function () { 
    var port = CONFIG.port;
    $('#JS_sub').on('click', function (e) {
        event.preventDefault();
        var username = $('.usr').val();//登录姓名
        var password = $('.psd').val();
        var validCode = "";//验证码
        var loginData = {
            username:username,
            password:password,
            validCode:validCode
        };
        var url = port+'api/System/Login/SystemLogin';
        var Data = mockData.Data;
        localStorage.setItem("userInfo",JSON.stringify(Data));//本地存储个人信息
        if (username == 'andyketter@qq.com' && password == 123456) {
            location.href = './admin-login.html';
        }
        // request(url,function(json){
        //     var Data = mockData.Data;
        //     localStorage.setItem("userInfo",JSON.stringify(Data));//本地存储个人信息
        //     location.href = './admin-login.html'; 
        // },'POST',loginData); 
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
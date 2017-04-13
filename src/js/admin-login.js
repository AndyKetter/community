import { renderData } from './common'; 

$(function () {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));//获取存在本地的用户信息
    renderData(userInfo,"userInfo","#content",true); 
});
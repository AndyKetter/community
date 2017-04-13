import { getUrlParam,renderData,getMenuList } from './common';
$(function () {
    getMenuList();//根据角色获取左侧栏手风琴列表
    var roles = getUrlParam('roles');
    var url = $('#progress').attr('href') + '?roles=' + roles;
    $('#progress').attr('href',url);

});
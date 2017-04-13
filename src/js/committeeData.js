import { getUrlParam,renderData,getMenuList } from './common';
$(function(){
    getMenuList();//根据角色获取左侧栏手风琴列表
    var roles = getUrlParam('roles');
    var url = $('#remarks').attr('href') + '?roles=' + roles;
    $('#remarks').attr('href',url);
    $('#data_5 .input-daterange').datepicker({
        keyboardNavigation: false,
        forceParse: false, 
        autoclose: true
    });
});

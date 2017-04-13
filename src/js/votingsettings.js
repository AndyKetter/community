import { getUrlParam,renderData,getMenuList } from './common';
$(function(){
    getMenuList();//根据角色获取左侧栏手风琴列表 
    $('#data_5 .input-daterange').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
    }); 
});

import { getUrlParam,renderData,getMenuList } from './common';
$(function () {
     getMenuList();//根据角色获取左侧栏手风琴列表 
     var roles = getUrlParam('roles');
     $('.linkUrl').each(function(index,ele){
         var url = $(this).attr('href') + '?roles=' + roles;
         $(this).attr('href',url);
     });
});
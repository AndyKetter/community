export var CONFIG = {
    port: "http://192.168.1.254:9999/"
};
export function request(url, callback, type = "GET", data = {}, dataType = "json") {
    $.ajax({
        type: type,
        url: url,
        data: data,
        dataType: dataType,
        success: function (response) {
            callback(response);
        }
    });
};
export function renderData(data, templateId, target, clear) {
    var html = template(templateId, data);
    if (clear) {
        $(target).html(html);
    } else {
        $(target).append(html);
    }
};
/** 
 * 获取指定的URL参数值 
 * URL:http://www.quwan.com/index?name=tyler 
 * 参数：paramName URL参数 
 * 调用方法:getParam("name") 
 * 返回值:tyler 
 */
export function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
export function getMenuList(){//根据角色获取左侧栏手风琴列表
    var roles = getUrlParam('roles');//获取roles参数
     if(roles == 'community'){//社区
        $('#side-menu').find('.side1').remove();
        $('#side-menu').find('.side2').remove();
        $('#side-menu').find('.side3').remove();
        $('#side-menu').find('.side4-2').remove();
        $('#side-menu').find('.side5').remove();
        $('#side-menu').find('.side7').remove();
        $('#side-menu').find('.side8').remove();
        $('#side-menu').find('.side9').remove();
        $('#side-menu').find('.side11').remove();
        $('#side-menu').find('.side12').remove();
        $('#side-menu').find('.side14').remove();
        $('#side-menu').find('.side15').remove();
     }
     if(roles == 'building'){//住建
        $('#side-menu').find('.side1').remove();
        $('#side-menu').find('.side2').remove();
        $('#side-menu').find('.side3').remove();
        $('#side-menu').find('.side4-1').remove();
        $('#side-menu').find('.side5').remove();
        $('#side-menu').find('.side7').remove();
        $('#side-menu').find('.side8').remove();
        $('#side-menu').find('.side9').remove();
        $('#side-menu').find('.side11').remove();
        $('#side-menu').find('.side12').remove();
        $('#side-menu').find('.side15').remove();
     }
     if(roles == 'street'){//街道
         $('#side-menu').find('.side1').remove();
        $('#side-menu').find('.side2').remove();
        $('#side-menu').find('.side3').remove();
        $('#side-menu').find('.side4-2').remove();
        $('#side-menu').find('.side5').remove();
        $('#side-menu').find('.side8').remove();
        $('#side-menu').find('.side9').remove();
        $('#side-menu').find('.side11').remove();
        $('#side-menu').find('.side12').remove();
        $('#side-menu').find('.side14').remove();
        $('#side-menu').find('.side15').remove();
     }
     if(roles == 'prepareGroup'){//筹备组   公告管理有疑问
        $('#side-menu').find('.side1').remove();
        $('#side-menu').find('.side2').remove();
        $('#side-menu').find('.side4').remove();
        $('#side-menu').find('.side5').remove();
        $('#side-menu').find('.side6').remove();
        $('#side-menu').find('.side7').remove();
        $('#side-menu').find('.side9-2').remove();
        $('#side-menu').find('.side10').remove();
        $('#side-menu').find('.side12').remove();
        $('#side-menu').find('.side13').remove();
        $('#side-menu').find('.side14').remove();
     }
     if(roles == 'operation'){//运营
        $('#side-menu').find('.side1').remove();
        $('#side-menu').find('.side2').remove();
        $('#side-menu').find('.side3').remove();
        $('#side-menu').find('.side4').remove();
        $('#side-menu').find('.side6').remove();
        $('#side-menu').find('.side7').remove();
        $('#side-menu').find('.side8').remove();
        $('#side-menu').find('.side9').remove();
        $('#side-menu').find('.side10').remove();
        $('#side-menu').find('.side11').remove();
        $('#side-menu').find('.side12').remove();
        $('#side-menu').find('.side14').remove();
        $('#side-menu').find('.side15').remove();
     }
     if(roles == 'ownerCommittee'){//业委会
        $('#side-menu').find('.side2').remove();
        $('#side-menu').find('.side3').remove();
        $('#side-menu').find('.side4').remove();
        $('#side-menu').find('.side5').remove();
        $('#side-menu').find('.side7').remove();
        $('#side-menu').find('.side13').remove();
        $('#side-menu').find('.side14').remove();
        $('#side-menu').find('.side15').remove();
     };
     $.each($('#side-menu>li').not('.nav-header').find('a'), function (indexInArray, valueOfElement) { 
         var hrefUrl = $(this).attr('href');
         var rolesUrl = hrefUrl+'?roles='+roles;
         if(hrefUrl!='#'){
            $(this).attr('href',rolesUrl);
         }
     });;
}
export var CONFIG = {
    port:" http://192.168.1.254:9999"
};
export function request(url,callback,type="GET",data={},dataType="json") {
    $.ajax({
            url: url,
            type: type,
            dataType: dataType,
            data: data
        })
        .done(obj => {
                callback(obj)
            }
        )
};
export function renderData(data,templateId,target,clear){
    var html = template(templateId,data);
		if (clear) 
			$(target).html(html);
		 else
		 	$(target).append(html);
};






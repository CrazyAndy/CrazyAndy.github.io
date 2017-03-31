$(document).ready(function() {
    pre_content = $("#jalpc_site_pv").html();
    $("#jalpc_site_pv").html(pre_content);
    $.ajax({
        type: "get",
        async: false,
        url: "https://api.baidu.com/json/tongji/v1/ReportService/getData",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "flightHandler",
        success: function(json) {
            var website_count = json.data;
            $("#jalpc_site_pv").html('<span class="navy">' + website_count + '</span>&nbsp;<span data-i18n="link.view">views</span>&nbsp;||&nbsp;' + pre_content);
        },
        error: function() {
            console.log('fail');
        }
    });
	var sendData = {"site_id":"31d4d3da408942182f35606f94a67f3d","method":"source/all/a","metrics":"pv_count","start_date":"20170301","end_date":"20170901"};
	$.ajax({
            type: 'post',
            url: 'https://api.baidu.com/json/tongji/v1/ReportService/getData',
            cache: false,
            data: JSON.stringify(sendData),
        	contentType: "application/json",
        	dataType:'json',
            success: function (data) {
                $("#jalpc_site_pv").html(data);
            }
        });
});

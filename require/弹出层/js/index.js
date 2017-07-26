requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});
require(['jquery', 'dialog'],function ($, dialog) {//引用jq，这里的jquery是给自己用的，对其他模块没有任何影响
    $('#btn').on('click', function () {
        var settings = {
            width: 400,
            height: 300,
            title: '我的弹出层',
            content: 'login.html'
        };
        dialog.open(settings);
    });
});
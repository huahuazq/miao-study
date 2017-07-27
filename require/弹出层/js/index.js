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
            content: 'login.html'// 为了方便没有直接把form表单写在这里，因为做项目是可能有很多input，所以可以把表单单独写到一个html里，然后在把html文件写在这里，引用到这里字体也会和这里一样，所以不会乱码
        };
        dialog.open(settings);
    });
});
// require(['jquery', 'dialog1'],function ($, Dialog) {
//     $('#btn').on('click', function () {
//         var settings = {
//             // width: 400,
//             // height: 300,
//             // title: '我的弹出层',
//             content: 'login.html'
//         };
//         var dialog = new Dialog(settings);
//         dialog.open();
//     });
// });
//模块中引用的jq和这里引用的jq作用不同互不影响，模块的jq是供模块使用的。
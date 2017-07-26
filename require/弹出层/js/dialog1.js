requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});
define(['jquery'], function ($) {
    //弹出层类
    function Dialog(settings) {
        this.defaulstSettings = {
            width: 500,
            height: 400,
            title: '弹出层',
            content: ''
        };
        this.$container
    }
    Dialog.prototype.open = function () {

    };
    return Dialog;
}
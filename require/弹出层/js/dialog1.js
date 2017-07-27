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
        $.extend(this.defaulstSettings, settings);
        this.$container = $('<div class="dialog-container">');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box">');
        this.$title = $('<div class="dialog-title">');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[x]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open = function () {
        this.$container.append(this.$mask).append(this.$box).appendTo(document.body);
        this.$box.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
        this.$box.css({
            width: this.defaulstSettings.width,
            height: this.defaulstSettings.height
        });
        this.$item.html(this.defaulstSettings.title);
        if(this.defaulstSettings.content.indexOf('.html') != -1){
            $(this.$content).load(this.defaulstSettings.content);
        }else{
            $(this.$content).html(this.defaulstSettings.content);
        }
        this.$close.on('click', function () {
            this.close();
        }.bind(this));//这里的this指的是this.$close，不是实例化对象，所以需要改变指针，这样function里的this都变成了bind后的this，改变后this指针为实例化对象，这样就可以调用实例化对象的方法了
    };
    Dialog.prototype.close = function () {
        this.$container.remove();
    };
    return Dialog;
});
requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});
define(['jquery'], function ($) {
    return {
        open: function (settings) {// 返回一个对象，对象里有一个方法open{}
            var defaulstSettings = {
                width: 500,// 这里的是默认值，index里的是设置的值
                height: 400,
                title: '弹出层',
                content: ''
            };
            $.extend(defaulstSettings, settings);//进行合并，以settings为准，所以是将settings合并到defaulstSettings上
            var html = '<div class="dialog-container">'
                + '<div class="dialog-mask"></div>'
                + '<div class="dialog-box">'
                + '<div class="dialog-title">'
                + '<div class="dialog-title-item">'+defaulstSettings.title+'</div>'
                + '<div class="dialog-title-close">[x]</div>'
                + '</div>'
                + '<div class="dialog-content"></div>'
                + '</div>'
                + '</div>';
            $(document.body).append(html);
            $('.dialog-box').css({// 插入到dom结构才能设置样式
                width: defaulstSettings.width,
                height: defaulstSettings.height
            });
            if(defaulstSettings.content.indexOf('.html') != -1){
                $('.dialog-content').load(defaulstSettings.content);//需要把index.js里的content: 'login.html'进行解析，把它解析成html文件再插入到弹出框里，如果不解析，插入到里面的就只是字符串login.html，利用load方法进行解析.有一种情况，如果content里不传入内容，那defaulstSettings.content里相当于传入了一个人空字符串喘，会有问题，弹出框的内容显示的会是open按钮，因为如果发现是空它就会加载自己，所以相当于content标签里又插入了一个index.html里的结构，所以为了让结果更完善最好在这里进行判断一下，如果不是空则会加载当前内容if(defaulstSettings.content!='')。但还有一种情况如果content里只传入了login时还需要加一句，判断当前是不是一个html文件，判断content: 'login.html'里的字符串是否包含后半部分的.html，如果indexOf('.html') != -1 表示的是包含，而如果是一个字符串那就把它当成一个内容放里，此时会弹出框显示的是login
            }else{
                $('.dialog-content').html(defaulstSettings.content);
            }
            $('.dialog-title-close').on('click', function () {
                $(this).parents('.dialog-container').remove();//parents从父元素开始一直往上找，直到找到根节点。
            });//如果写的是$('.dialog-container').remove();那么$('.dialog-container')开启多个弹出框时，点击关闭会全部都关闭，而我们想要的是开启多个弹出框，但关闭只关闭当前的那个，所以需要利用parents找到当前关闭按钮的父元素，父元素在网上找直到找到.dialog-container，然后关闭当前那个
        }
    };
});
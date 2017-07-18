/**
 * Created by hq on 2017/7/18.
 */
$(function () {
    var $imgs = $("#JS_imgWrap img");
    $imgs.each(function(index, elem){
        $(elem).css({
            zIndex : 5 - index
        });
    });
    var $menus = $('#menu a');
    var nowIndex = 0;
    $menus.on('mouseover',function () {
        nowIndex = $(this).index();
        changeImg();
    });
    setInterval(function () {
        nowIndex++;
        if(nowIndex == $imgs.length){
            nowIndex = 0;
        }
        changeImg();
    },1000);
    function changeImg() {
        $menus.eq(nowIndex).addClass("chos").siblings().removeClass("chos");
        $imgs.eq(nowIndex).stop().fadeIn().siblings().stop().fadeOut();
    }

    $('#inputSearch').on('focus',function () {
        if(this.value == this.defaultValue){
            this.value = '';
        }
    }).on('blur',function () {
        if(this.value == ''){
            this.value = this.defaultValue;
        }
    });


    $('#nav li').hover(function () {
        $(this).children('.jnNav').show();
    },function () {
        $(this).children(".jnNav").hide();
    });


    $(".promoted").append("<span class='hot'></span>");


    $('#jnBrandTab li').on('click',function () {
        $(this).addClass('chos').siblings().removeClass('chos');
        $('#jnBrandList').animate({
            left: -$('#jnBrandList li').innerWidth() * 4 * $(this).index()
        },1000);
    });

})

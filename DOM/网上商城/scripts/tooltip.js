function tooltip(selector){
    $(selector).hover(function(e){
        this.tip = $(this).attr("title")?$(this).attr("title"):$(this).html();
        if($(".tip").length == 0){//判断一下有没有叫tip的，判断下它的长度是否为0，为0就表示没有，没有就给它创建一个。else如果有就把当前的标签的内容改变一下。
            var $tooltip = $("<div class='tip'></div>").html(this.tip);//添加的标签里面的值应该是hover的标签里的值：this.tip = $(this).attr("title")
            $tooltip.appendTo($("body"));//因为不是每hover一次都要往body里添加一个新的，所以需要进行上面的判断。如果已经有一个div了那就把值赋过去，如果没有就添加一个div，要保证每次hover都只有一个div。
        }else{
            $(".tip").html(this.tip);
        }

        $(".tip").offset({//改变当前div的一个位置
            top: e.pageY + 10,
            left: e.pageX + 10
        });
        $(this).removeAttr("title");//去掉默认的title显示
    }, function(){
        //滑出时再把title加上
        $(this).attr("title", this.tip);
        $(".tip").remove();//滑出应该把tip去掉，移除
    }).on("mousemove", function(e){
        $(".tip").offset({
            top: e.pageY + 10,
            left: e.pageX + 10
        });
    });
}
requirejs.config({
    paths : {
        jquery: "jquery-1.11.2"
    }
});
define(['jquery'], function ($) {
   function Carousel(settings) {
       this.defaultSettings = {
           selector: document.body,
           imgArr: [],
           speed: 500,
           buttonStyle : "square",
           arrowsPos : "bottom"
       };
       $.extend(this.defaultSettings, settings);
       this.$container = $('<div class="carousel-container">');
       this.$imgs = $('<div class="carousel-imgs">');
       this.$nav = $('<ul class="carousel-nav">');
       this.$arrows = $('<div class="carousel-arrows">');
       this.$left = $('<div class="carousel-left">&lt;</div>');
       this.$right = $('<div class="carousel-right">&gt;</div>');
   }
   Carousel.prototype.init = function () {
       this.nowIndex = 0;
       this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows);
       this.$arrows.append(this.$left).append(this.$right);
       for(var i=0; i<this.defaultSettings.imgArr.length; i++) {
           this.$imgs.append("<img src='" + this.defaultSettings.imgArr[i] + "'>");
           this.$nav.append("<li>" + (i + 1) + "</li>");
       }
       $("img", this.$imgs).eq(0).addClass("selected");
       $("li", this.$nav).eq(0).addClass("selected");
       if(this.defaultSettings.buttonStyle == "circle"){
           $("li", this.$nav).css({
               borderRadius: "50%"
           }).html("");//内容为空
       }
       this.$left.addClass(this.defaultSettings.arrowsPos);
       this.$right.addClass(this.defaultSettings.arrowsPos);
       $(this.defaultSettings.selector).append(this.$container);
       $('li', this.$nav).on('mouseover', function (e) {
           this.nowIndex = $(e.target).index();
           changeImg.call(this);
       }.bind(this));
       this.$left.on('click', function () {
           this.nowIndex--;
           if(this.nowIndex == -1){
               this.nowIndex = this.defaultSettings.imgArr.length - 1;//这里的this指的是this.$left，而不是实例化对象，所以需要改变指针
           }
           changeImg.call(this);
       }.bind(this));
       this.$right.on('click', function () {
           this.nowIndex++;
           if(this.nowIndex == this.defaultSettings.imgArr.length){
               this.nowIndex = 0;
           }
           changeImg.call(this);
       }.bind(this));
       this.$container.hover(function () {
           clearInterval(this.timer);//this指的是this.$container，需要添加bind
       }.bind(this), function () {
           // this.timer = setInterval(function () {
           //     this.$right.trigger('click');//定时器里的this指的是window
           // }.bind(this), this.defaultSettings.speed);//在这里的this由于加了bind所以指向了this.$container，所以this.$right里的this就相当于变成了this.$container，这是不对的，所以需要在后面再加上一个改变指针
           play.call(this); //和上面一样由于play里的指针不对所以需要加上call
       }.bind(this));
       play.call(this);//这个同上
       function play() {
           this.timer = setInterval(function () {
               this.$right.trigger('click');//定时器里的this指的是window
           }.bind(this), this.defaultSettings.speed);
       }
       function changeImg() {
           //这里this指的是window，window下面没有nowIndex，由于这是函数声明所以不能在后面添加bind，所以可以在changeImg调用时在后面加上改变指针的方法，因为是调用所以应该用call，调用时就执行，这时候call(this)里的this就是changeImg里的this
           $('img', this.$imgs).eq(this.nowIndex).addClass('selected').siblings().removeClass('selected');
           $('li', this.$nav).eq(this.nowIndex).addClass('selected').siblings().removeClass('selected');
       }
   };
   return Carousel;
});

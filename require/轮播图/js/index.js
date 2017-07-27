require(["jquery-1.11.2", "carousel"], function ($, Carousel) {
    var imgs1 = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
    var setting1 = {
        selector: '#container',
        imgArr: imgs1,
        speed: 500,
        buttonStyle : "square",
        arrowsPos : "bottom"
    };
    var carousel1 = new Carousel(setting1);
    carousel1.init();

    var imgs2 = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
    var setting2 = {
        selector: '#container',
        imgArr: imgs2,
        speed: 500,
        buttonStyle : "circle",
        arrowsPos : "center"
    };
    var carousel2 = new Carousel(setting2);
    carousel2.init();
});
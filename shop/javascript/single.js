/**
 * Created by hq on 2017/7/7.
 */
(function () {
    var oSmallPic = document.getElementById("small-pic");
    var aSmallImgs = oSmallPic.getElementsByTagName("img");
    var oBigPic = document.getElementById("big-pic");
    var oBigImg = oBigPic.getElementsByTagName("img")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowIndex = 0;
    var oDrag = document.getElementById("drag");
    var oMask = document.getElementById("mask");
    var oMagnify = document.getElementById("magnify");
    var oMagnifyImg = oMagnify.getElementsByTagName("img")[0];
    var oSingle = document.getElementById("single");
    var oWrapper = oSingle.getElementsByClassName("wrapper")[0];
    for(var i=0; i<aSmallImgs.length; i++){
        aSmallImgs[i].index = i;
        aSmallImgs[i].onclick = function () {
            nowIndex = this.index;
            changeImg();
        };
    }
    oLeft.onclick = oRight.onclick = function () {
        if(this === oLeft){
            nowIndex--;
            if(nowIndex == -1){
                nowIndex = aSmallImgs.length - 1;
            }
        }else{
            nowIndex++;
            if(nowIndex == aSmallImgs.length){
                nowIndex = 0;
            }
        }
        changeImg();
    };
    function changeImg(){
        oBigImg.src = aSmallImgs[nowIndex].src;
        oMagnifyImg.src = aSmallImgs[nowIndex].src;
        for (var i=0; i<aSmallImgs.length; i++) {
            aSmallImgs[i].className = "";
        }
        aSmallImgs[nowIndex].className = "select";
        var left = 0;
        if(nowIndex == 0){
            left = 0;
        }else{
            left = 1;
        }
        animate(oSmallPic, {
            left: -(aSmallImgs[0].offsetWidth + 10) * left
        });
    }
    oMask.onmouseover = function(){
        oDrag.style.display = "block";
        oMagnify.style.display = "block";
    };
    oMask.onmouseout = function(){
        oDrag.style.display = "none";
        oMagnify.style.display = "none";
    };
    oMask.onmousemove = function(e){
        e = e || window.event;
        var left = e.pageX - oWrapper.offsetLeft - oDrag.offsetWidth / 2;
        var top = e.pageY - oSingle.offsetTop - oDrag.offsetHeight / 2;
        if(left <= 6){
            left = 6;
        }
        if(top <= 6){
            top = 6;
        }
        var maxRight = oBigPic.offsetWidth - oDrag.offsetWidth - 6;
        if(left >= maxRight){
            left = maxRight;
        }
        var maxBottom = oBigPic.offsetHeight - oDrag.offsetHeight - 6;
        if(top >= maxBottom){
            top = maxBottom
        }
        oDrag.style.left = left + "px";
        oDrag.style.top = top + "px";

        var scaleX = left / maxRight;
        var scaleY = top / maxBottom;
        oMagnifyImg.style.left = -scaleX * (oMagnifyImg.offsetWidth - oMagnify.offsetWidth) + "px";
        oMagnifyImg.style.top = -scaleY * (oMagnifyImg.offsetHeight - oMagnify.offsetHeight) + "px";
    };
})();
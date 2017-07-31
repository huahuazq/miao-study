/**
 * Created by hq on 2017/7/7.
 */
(function () {
    var oProduct = document.getElementById("product");
    var aAdd = oProduct.getElementsByTagName("button");
    var aSpan = oProduct.getElementsByTagName("span");
    var aNum = oProduct.getElementsByTagName("input");
    var aPrice = [];
    var oTotalPrice = document.getElementById("total-price");
    var oTotalNum = document.getElementById("total-num");
    var oClear = document.getElementById("clear-cart");
    for(var i=0; i<aSpan.length; i++){
        if(aSpan[i].className == "price"){
            aPrice.push(aSpan[i]);
        }
    }
    for(var i=0; i<aAdd.length; i++){
        aAdd[i].index = i;
        aAdd[i].onclick = function () {
            oTotalPrice.innerHTML = parseFloat(oTotalPrice.innerHTML)+ + aPrice[this.index].innerHTML * aNum[this.index].value;
            oTotalNum.innerHTML = parseInt(oTotalNum.innerHTML) + parseInt(aNum[this.index].value);
        }
    }
    oClear.onclick = function () {
        oTotalPrice.innerHTML = 0.00;
        oTotalNum.innerHTML = 0;
    }
})();
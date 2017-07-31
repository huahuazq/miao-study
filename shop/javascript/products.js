/**
 * Created by hq on 2017/7/7.
 */
(function () {
    var oChoose = document.getElementById("choose");
    var aClassify = oChoose.getElementsByClassName("classify");
    var aSubmenu = oChoose.getElementsByClassName("submenu");
    for(var i=0; i<aClassify.length; i++) {
        aClassify[i].index = i;
        aClassify[i].bFlag = false;
        aClassify[i].addEventListener("click", function () {
            if (this.bFlag) {
                aSubmenu[this.index] && animate(aSubmenu[this.index], {
                    height: 0
                });
            } else {
                aSubmenu[this.index] && animate(aSubmenu[this.index], {
                    height: 120
                });
            }
            this.bFlag = !this.bFlag;
        }, false);
    }
})();
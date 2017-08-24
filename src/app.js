/**
 * Author: txiejun
 * Contact:txiejun@126.com
 * Time: 2017/8/17 17:32
 */
//demo入口

$(function () {
    var selectedTab = null;
    $(".tab-item").on("click", function (evt) {
        if(evt.currentTarget!=selectedTab){
            if(selectedTab){
                $(selectedTab).removeClass("selected");
            }
            selectedTab = evt.currentTarget;
            $(selectedTab).addClass("selected");
        }
    })
})

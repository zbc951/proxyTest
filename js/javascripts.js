$(function(){
    $("label").change(function(){
        $(this).toggleClass("active");
        $(this).closest("li").toggleClass("active");
    })
})

$(function(){
    $(".leftSide li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})

$(function(){
    var mainList = $(".mainBox .bottom ul");
    var leftNav = $(".leftSide .bottom ul");
    var wh = window.innerHeight;

    mainList.css("height", (String(wh - 375) + "px"));
    $(window).resize(function () {
        var mainList = $(".mainBox .bottom ul");
        var wh = window.innerHeight;
        mainList.css("height", (String(wh - 375) + "px"));
    });
    leftNav.css("height", (String(wh - 192) + "px"));
    $(window).resize(function () {
        var leftNav = $(".leftSide .bottom ul");
        var wh = window.innerHeight;
        leftNav.css("height", (String(wh - 192) + "px"));
    });
});

function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }

    catch(e){ return false;}

}
$(function(){
   if(isMobile()){
        var mainList = $(".mainBox .bottom ul");
        var leftNav = $(".leftSide .bottom ul");
        var wh = window.innerHeight / 4;

        mainList.css("height", (String(wh) + "px"));
        leftNav.css("height", (String(wh) + "px"));

        $(".mainBox .wrap").css("border-width","5px");
   }
})
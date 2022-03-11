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
    var mainList2 = window.innerHeight;
    mainList.css("height", (String(mainList2 - 375) + "px"));
    $(window).resize(function () {
            var mainList = $(".mainBox .bottom ul");
            var mainList2 = window.innerHeight;
            mainList.css("height", (String(mainList2 - 375) + "px"));
    });

    var leftNav = $(".leftSide .bottom ul");
    var leftNav2 = window.innerHeight;
    leftNav.css("height", (String(leftNav2 - 192) + "px"));
    $(window).resize(function () {
            var leftNav = $(".leftSide .bottom ul");
            var leftNav2 = window.innerHeight;
            leftNav.css("height", (String(leftNav2 - 192) + "px"));
    });
});
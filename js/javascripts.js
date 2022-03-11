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
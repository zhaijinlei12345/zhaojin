(function () {
    $("#navul li").on("click", function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });



    $(".gotop").on("click", function(){
        var target;
        if(document.documentElement.scrollTop){//$("html).scrollTop()
            target = $("html");
        }else{
            target = $("body");
        }
        var timer = setInterval(function(){
            var iScrollTop = target.scrollTop();
            if(iScrollTop <= 0){
                clearInterval(timer);
            }
            target.scrollTop(iScrollTop-=50);
        }, 500);
    });


})();
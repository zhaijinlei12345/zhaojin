(function () {
    $("#navul li").on("click", function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    })

})();
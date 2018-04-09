require(["jquery-1.11.2", "carousel"], function($, Carousel){
    var imgs1 = ["images/01.jpg", "images/02.jpg","images/03.jpg","images/04.jpg"];
    var setting1 = {
        selector : "#Home_img",
        imgArr : imgs1,
        speed : 800,
        buttonStyle : "circle",//circle
        arrowsPos : "bottom"//center
    };

    var carousel1 = new Carousel(setting1);
    carousel1.init();
});
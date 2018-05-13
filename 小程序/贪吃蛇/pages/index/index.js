//index.js
//按下坐标
var startX=0;   
var startY=0;
//手指移动坐标；
 var moveX=0;
 var moveY=0;
//窗口宽高：
var width=0;
var height=0;
//移动位置与跟开始位置的差值
var X=0;
var Y=0;
//初始长度
var counts=4;
//蛇头的对象 
var snakehead={
  x:0,
  y:0,
  color:"#ff0000",
  w:20,
  h:20
}
//身体对象（数组）
var snakeBodys=[]; 
//食物数组
var foods=[];
//碰撞检测
var collideBol=true;
var direction=null;
var snakebdirection="right"
Page({

  data:{
    count: counts,
    refurbish:false
    
  },
  
  strat:function(e){
   startX=e.touches[0].x;
   startY = e.touches[0].y;
    
 },
  move:function(e){
    moveX = e.touches[0].x;
    moveY = e.touches[0].y;
    X = moveX - startX;
    Y = moveY - startY;
    if (Math.abs(X) > Math.abs(Y)&&X>0){
      direction="right";
      console.log("右");
    } else if (Math.abs(X) > Math.abs(Y)&& X<0){
      direction = "left";
      console.log("左");
    } else if (Math.abs(X) < Math.abs(Y) && Y > 0){
      direction = "bottom";
      console.log("下");
    } else if (Math.abs(X) < Math.abs(Y) && Y < 0){
      direction = "top";
      console.log("上");
    }
  },
  end:function(){
    snakebdirection = direction;
  },


   onLoad:function(){
     var frameunm=0;
    
     var context = wx.createCanvasContext('snake');
   
      function draw(obj){
        context.setFillStyle(obj.color);
        context.beginPath();
        context.rect(obj.x, obj.y, obj.w, obj.h);
        context.closePath;
        context.fill();
      }
      //碰撞函数
      function collide(obj1, obj2) {
        var l1 = obj1.x;
        var r1 = l1 + obj1.w;
        var t1 = obj1.y;
        var b1 = t1 + obj1.h;


        var l2 = obj2.x;
        var r2 = l2 + obj1.w;
        var t2 = obj2.y;
        var b2 = t2 + obj2.h;
        if (r1 > l2 && l1 < r2 && b1 > t2 && t1 < b2) {
          return true;
        } else {
          return false;
        }
      }
      var that = this;
      function animate(){
        frameunm++;
        if(frameunm%50==0){
          snakeBodys.push({
            x: snakehead.x,
            y: snakehead.y,
            color: "#00ff00",
            w: 20,
            h: 20
          });
        
          if (snakeBodys.length > counts) {
            if(collideBol){
              snakeBodys.shift();
            }else{
              collideBol = true;
            }
          
          } 
          switch (snakebdirection) {
            case "left":
              snakehead.x -= snakehead.w;
              console.log(snakehead.x);
              break;
            case "right":
              snakehead.x += snakehead.w;
              console.log(snakehead.x);
              break;
            case "top":
              snakehead.y -= snakehead.h;
              console.log(snakehead.y);
              break;
            case "bottom":
              snakehead.y += snakehead.h;
              console.log(snakehead.y);
              break;
           } 
      
         }
        
     
          //蛇头绘制
          draw(snakehead);

         //蛇身绘制
        for(var i=0;i<snakeBodys.length;i++){
          var sankebody=snakeBodys[i];
              draw(sankebody);
          }
          //绘制食物
          for(var i=0;i<foods.length;i++){
              var foodobj=foods[i];
              draw(foodobj);
              if (collide(snakehead,foodobj)){
                collideBol = false;
                foodobj.reset();
                counts++;
                that.setData({
                  count: counts
                })
                console.log("heid");
                
              }
          }
          wx.drawCanvas({
               canvasId:'snake',
            actions:context.getActions()
         });
           
          var die = requestAnimationFrame(animate);
         if (snakehead.x < 0 || snakehead.y < 0 || snakehead.x == width || snakehead.y> height) {
           console.log("死亡");
           cancelAnimationFrame(die);
           wx.showModal({
             title: '机会只有一次',
             content: 'Sorry，挂了-_-',
             success: function (res) {
               if (res.confirm) {
               
               } else if (res.cancel) {
              
               }
             }
           })

         }
      } 
       function rand(min,max){
          return parseInt(Math.random()*(max-min))+min;
       };
      //构造食物对象
        function Food(){
        this.x = rand(0,width);
        this.y = rand(0,height);
        var w= rand(10,20);
        this.w=w;
        this.h=w; 
        this.color ="rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")"
       this.reset=function(){
         this.x = rand(0, width);
         this.y = rand(0, height);
         this.color = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")"
       }
      }

       wx.getSystemInfo({
         success: function (res) {
            width= res.windowWidth;
            height = res.windowHeight;
            for (var i=0;i<20;i++){
              var foodobj = new Food();
              foods.push(foodobj);
            }
            animate(); 
         
         } 
       })
       
    
   },
    
})

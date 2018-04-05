requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
 
define(["jquery"], function($) {
    //弹出层类
    function Dialog(settings){
      this.defaulstSettings={
           width:500,
           height:400,
           title:"我的弹出层",
           content:""
      };
      $.extend(this.defaulstSettings,settings);
      this.$container=$('<div class="dialog-container"></div>');
      this.$mask=$('<div class="dialog-mask"></div>');
      this.$box=$('<div class="dialog-box"></div>');
      this.$title=$('<div class="title"></div>');
      this.$item=$('<div class="title-item">'+this.defaulstSettings.title+'</div>');
      this.$close=$('<div class="title-close">[X]</div>');
      this.$content=$('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open=function () {
         this.$container.append(this.$mask).append(this.$box).appendTo(document.body);
         this.$box.append(this.$title).append(this.$content);
         this.$title.append(this.$item).append(this.$close);
         this.$box.css({
             width:this.defaulstSettings.width,
             height:this.defaulstSettings.height
         });
        if(this.defaulstSettings.content.indexOf(".html")!=-1){
          this.$content.load(this.defaulstSettings.content);
        }else {
            this.$content.html(this.defaulstSettings.content);
        };
        // var _this=this;
        // this.$close.on("click",function () {
        //      this.$container.hide("slow",function () {
        //        this.$container.remove();
        //     }.bind(this))
        // }.bind(this));
        this.$close.on("click",function () {
                this.close();
        }.bind(this));
    };
    Dialog.prototype.close=function () {
        this.$container.hide("slow",function () {
            this.$container.remove();
        }.bind(this))
    };
    return Dialog;
















         return{
           open:function(settings){
              var defaulstSettings={
                  width:500,
                  height:400, 
                  title:"我的弹出层",
                  content:""

              };
              $.extend(defaulstSettings,settings);
              var html = '<div class="dialog-container">'  
            +'<div class="dialog-mask"></div>'
               +'<div class="dialog-box">'
                   +'<div class="title">'
                       +' <div class="title-item">'+defaulstSettings.title+'</div>'
                       +'<div class="title-close">[X]</div>'
                   +'</div>'
                  +' <div class="dialog-content"></div>'
               +'</div> '   
            +'</div>';

            $(document.body).append(html);


            $(".dialog-box").css({
                 width:defaulstSettings.width, 
                 height:defaulstSettings.height
            });
                 if(defaulstSettings.content.indexOf(".html")!=-1){
                     $(".dialog-content").load(defaulstSettings.content);
                 }else {
                     $(".dialog-content").html(defaulstSettings.content);
                 }
                 $(".title-close").on("click",function () {

                       $(this).parents(".dialog-container").hide("slow",function () {
                           $(this).parents(".dialog-container").remove();
                       })
                 })
          
           
           }

         };
      
});
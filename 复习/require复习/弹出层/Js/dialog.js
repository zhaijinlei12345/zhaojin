requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
 
define(["jquery"], function($) {
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
           
                $(".dialog-content").load(defaulstSettings.content);
          
           
           }

         };
      
});
<template>
  <div class="top250">
    <div class="movie-img">
      <img :src="img" alt="">
    </div>
    <div class="movie-title">
      <span>{{title}}</span>
      <p>
        <span>
          
        </span>
         {{desc}}
        {{year}} (平均{{avg}}分)
      </p>
    </div>
   </div>
</template>
<script>

export default {
  name: 'Movie',
  props:['title','avg','desc','year','img'],
  data () {
    return {
    }
    
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
     .top250{
    
      padding: 0.4rem;
      margin: 0.4rem 0;
       
     }
     .movie-title{
       float: left; 
       margin-left:0.6rem; 
       width: 4.0rem;
       border-bottom: 1px #ccc solid;

      
     }  
   .movie-img{
       float: left;
       height: 0.8rem;
       width: 0.8rem;
     }  
      .movie-img img{
        width: 100%;
        height: 100%;
      }
     
</style>

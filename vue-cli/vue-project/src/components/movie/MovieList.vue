<template>
  <div class="top250">
    <div class="movie-img">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="movie-title">
      <span>{{title}}</span>
      <p>
        <span v-for="a in desc">{{a}} </span>
        {{year}} (平均{{avg}}分)
      </p>
    </div>
   </div>
</template>
<script>

export default {
  name: 'Movie',
  props:['title','avg','desc','year'],
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

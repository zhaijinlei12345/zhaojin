<template>
  <div class="footer" :style="{background:FColor}">
    <ul>
      <li><router-link to="/movie">电影</router-link></li>
      <li><router-link to="/music">音乐</router-link></li> 
      <li><router-link to="/book">读书</router-link></li>
      <li><router-link to="/photo">图片</router-link></li>
    </ul>
   </div>
</template>

<script>
export default {
  props:['FColor'],
  data (){
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
       .footer{
         height: 1rem;
         color: white;
         position: fixed;
         bottom: 0;
         width: 100%;

       }
       .footer ul{
          display: flex;
          
       }
       .footer li{
         text-align: center;
         line-height: 1rem;
         flex:  1;
       }
       .footer li a{
         color: #ccc;
       }
        .footer li a.router-link-active{
          color: #fff;
        }
</style>

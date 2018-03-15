<template>
  <div class="footer">
    <ul>
      <li>电影</li>
      <li>音乐</li> 
      <li>读书</li>
      <li>图片</li>
    </ul>
   </div>
</template>

<script>
export default {
  name: 'Movie',
  data () {
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
         background: rgb(33, 150, 243);
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
          color: #fff;
         flex:  1;
       }
</style>

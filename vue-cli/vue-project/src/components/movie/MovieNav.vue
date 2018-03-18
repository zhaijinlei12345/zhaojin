<template>
  <div class="nav">
    <ul>
      <li><router-link to="/movie/top250">Top250</router-link></li>
      <li><router-link to="/movie/hot">正在热映</router-link></li> 
      <li><router-link to="/movie/coming">即将上映</router-link></li>
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
       .nav{
         height: 1rem;
         background: rgb(33, 150, 243);
         color: white;
         position: fixed;
         top: 1rem;
         width: 100%;

       }
       .nav ul{
          display: flex;
          
       }
       .nav li{
         text-align: center;
         line-height: 1rem;
         flex:  1;
       }
      .nav li a{
         color: #ccc;
       }
        .nav li a.router-link-active{
          color: #fff;
        }
</style>

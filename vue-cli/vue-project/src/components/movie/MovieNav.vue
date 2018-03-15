<template>
  <div class="nav">
    <ul>
      <li>top250</li>
      <li>正在热映 </li> 
      <li>即将上映</li>
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
          color: #fff;
         flex:  1;
       }
</style>

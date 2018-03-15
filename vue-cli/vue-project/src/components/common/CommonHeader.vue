<template>
  <div class="header">
    <button>首页</button>
    <h2>movie</h2>
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
       .header{
         height: 1rem;
         background: rgb(33, 150, 243);
         display: flex;
         color: white;
         position: fixed;
         top: 0;
         width: 100%;

       }
       .header button{
          width: 1rem;
          height: 1rem;
          color: white;
          background: none;
           border:none;
          
       }
       .header h2{
         text-align: center;
         line-height: 1rem;
         flex:  1;
         text-indent: -1rem;
       }
</style>

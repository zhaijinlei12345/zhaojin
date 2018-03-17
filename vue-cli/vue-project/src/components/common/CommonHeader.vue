<template>
  <div class="header" :style="{background:bgColor}">
    <button>首页</button>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props:['title','bgColor'],
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

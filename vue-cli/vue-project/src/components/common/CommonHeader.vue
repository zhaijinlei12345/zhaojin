<template>
  <div class="header" :style="{background:bgColor}">
      <slot name="title">
        <button @click="back">{{nav}}</button>
      </slot>

    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props:['title','bgColor','nav'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    back(){
//      history.go(-1);
      this.$router.go(-1);
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

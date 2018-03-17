<template>
       <div>
         <button @click="btn">change</button>
       </div>


</template>


<script>
    export default{
     methods:{
         btn(){
            this.$emit('change','123456');  
         }
     }
    }

  

</script>

<style>

</style>

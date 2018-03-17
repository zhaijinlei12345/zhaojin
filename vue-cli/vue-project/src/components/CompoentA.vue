<template>
       <div>
         
         {{$store.state.count}}
          {{count}} 
          {{count2}}
          <button @click="add(10)">add</button>
          <button @click="reduce">reduce</button>
          <button @click="addAction">+</button>
           <button @click="reduceAction">-</button>
        <!-- <button @click="$store.commit('add',10)">add</button>
         <button @click="$store.commit('reduce')">reduce</button> -->
       </div>

</template>


<script> 
import ComB from "./CompoentB"
import ComC from "./CompoentC"
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default{
        data(){
           return {
          c:''
           }
        },
         methods: {
             ...mapMutations(["add","reduce"]),
             ...mapActions(["addAction","reduceAction"])
         },
        // computed:{
        //  count(){
        //      return this.$store.state.count;
        //  }
        // },  
        // computed:mapState({
        //     count:state=>state.count
        // }) ,
        computed:{ 
            ...mapState(["count"]), 
            ...mapGetters(["count2"])
            },
        
    components:{
      ComB,
      ComC
     }
    }

  

</script>

<style>

</style>

<template>
<div class="detail">
  <common-header title="Photo" bgColor="#c20c0c" nav="<"></common-header>
  <!--{{$route.params.index}}-->
  <v-touch class="photo-detail" :style="{background:bg}" @swipeleft="left"  @swiperight="right">
  </v-touch>
</div>
</template>
<script>
  import CommonHeader from "../common/CommonHeader"
  import {mapState} from 'vuex';
  import Axios from 'axios'
  export default {
    name: 'Photo',
    data(){
      return{
          index:this.$route.params.index
      }
    }, 
    computed:{
        bg(){
            return "url("+this.$store.state.photoData[this.index].src+") no-repeat center / contain #000"
        },
      ...mapState(["photoData"])
    },
    methods: {
      left(){
            this.index++;
        if(this.$store.state.photoData.length==this.index){
            this.index=0;
        }
         
        } ,
         
     
      right(){
          this.index--;
         if(this.index=='-1'){
           this.index=(this.$store.state.photoData.length-1);
         }
         
         
      }

    },
    components:{
      CommonHeader
    } 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .photo-detail{
     position: absolute;
     top: 1rem;
     bottom: 0;
     width: 100%;

  }

</style>



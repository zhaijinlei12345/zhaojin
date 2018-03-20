<template>
<div class="detail">
  <common-header title="Photo" bgColor="#c20c0c" nav="<"></common-header>
  <!--{{$route.params.index}}-->
  <div class="photo-detail">
    <img :src="photoData[index].src" alt="">
  </div>
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
      ...mapState(["photoData"])
    },
    components:{
      CommonHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .photo-detail{
    margin-top: 3rem;
  }

</style>



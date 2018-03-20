<template>
  <div class="photo">
    <common-header title="Photo" bgColor="#c20c0c" nav="返回"></common-header>
     <ul class="photo-list">
       <li v-for="(photo,index) in photoData" :key="index">
         <router-link :to="'/photo/detail/'+index">
         <img :src="photo.src" alt="加载失败">
         </router-link>
       </li>
     </ul>

   <common-footer FColor="#c20c0c"></common-footer>
   </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import {mapState,mapActions} from 'vuex';
import Axios from 'axios'
export default {
  name: 'Photo',
     data(){
      return{

      }
     },
  computed:{
    ...mapState(["photoData"])
  },
  methods: {
    ...mapActions(["setphotoData"])
  },
    mounted(){
    Axios.get('/static/photo-data.json')
      .then((res)=>{
        this.setphotoData(res.data.photoData);
      })
    },
  components:{
     CommonHeader,
     CommonFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.photo-list{
  margin: 1rem 0;
  overflow: hidden;
}
  .photo-list li{
    width: 50%;
    float: left;

  }
</style>

<template>
  <div class="music-list">
    <ul class="albums">
      <li v-for="obj in musicList" :key="obj.id">
      <router-link :to="'/music/player/'+obj.id">
       <img :src="obj.bg" alt="">
       </router-link>
      </li>
    </ul>

   </div>
</template>
<script>
import Axios from 'axios'
export default {
  data(){
    return {
      musicList:[]
    }
  },
  mounted(){
    Axios.get('/static/musiclist.json')
    .then((res)=>{
      this.musicList=res.data.albums;
    })
  },
  name: 'Music',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .albums{
     position: absolute;
     top: 1rem;
     bottom: 1rem;
     width: 100%;
   }
   .albums li{
     width: 50%;
     height: 33.33333333%;
     float: right;

   }
   .albums li img{
       width: 100%;
       height: 100%;
   }

</style>

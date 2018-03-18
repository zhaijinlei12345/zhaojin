<template>
  <div class="music">
    <common-header title="Music" bgColor="rgb(0, 150, 136)"></common-header>
      <router-view></router-view>
    <common-footer FColor="rgb(0, 150, 136)"></common-footer>
   </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
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
 
  components:{
     CommonHeader,
     CommonFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

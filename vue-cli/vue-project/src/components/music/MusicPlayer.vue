<template>
    <div class='player'>
        <a-player :music="musicList" :narrow="false" :autoplay="true"
        :mutex="true" theme="#ff0000" listMaxheight="513px" v-if="isShow">
        </a-player>
        <!-- {{$route.params.id}} -->
    </div>
</template>
<script>
import Axios from "axios"
import APlayer from "vue-aplayer"
 export default {
  data(){
      return {
          musicData: [],
//          music: {
//          "title":"刚好遇见你",
//          "author":"李玉刚",
//          "src": "http://m2.music.126.net/qv3RI4K7ABKJ0TyAdb3taw==/3250156397064860.mp3",
//           "pic": "http://p4.music.126.net/lDyytkTaPYVTb1Vpide6AA==/18591642115187138.jpg",
//           "lrc":"刚好遇见你-李玉刚.lrc"
//       },
          musicList: [],
          isShow   : false
      }
  },
  mounted(){
      Axios.get('/static/music-data.json')
      .then((res)=>{
          this.musicData = res.data.musicData;
          for(var i=0;i< this.musicData.length;i++){
              var obj        = new Object();
                  obj.title  = this.musicData[i].title;
                  obj.author = this.musicData[i].author;
                  obj.url    = this.musicData[i].src;
                  obj.pic    = this.musicData[i].musicImgSrc;
                  obj.lrc    = this.musicData[i].lrc;
                  this.musicList.push(obj);
          }
          console.log(this.musicList);
          this.isShow = true;
      });
  },
  components:{
      APlayer
  }

}
</script>
<style>
    .player{
        margin-top: 1rem;
    }
</style>

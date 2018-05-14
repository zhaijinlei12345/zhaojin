<template>
    <div class='player'>
      <a-player v-if="isShow" :autoplay="true" :music="songs" :showlrc="3" :mutex="true"></a-player>
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
             songs: [],
          isShow   : false
      }
  },
  mounted() {
    Axios.get("/static/music-data.json")
      .then(res => {
        let list = res.data.musicData;
        list.forEach(element => {
          this.songs.push({
            title: element.title,
            author: element.author,
            url: element.src,
            pic: element.musicImgSrc,
            lrc: '/static/' + element.lrc
          });
        });
        console.log(this.songs);
        this.isShow = true;
      })
      .catch();
  },
//  mounted(){
//      Axios.get('/static/music-data.json')
//      .then((res)=>{
//          this.musicData = res.data.musicData;
//          for(var i=0;i< this.musicData.length;i++){
//                 var obj     = new Object();
//                  obj.title  = this.musicData[i].title;
//                  obj.author = this.musicData[i].author;
//                  obj.url    = this.musicData[i].src;
//                  obj.pic    = this.musicData[i].musicImgSrc;
//                  obj.lrc    = "/static/"+this.musicData[i].lrc;
//                  this.musicList.push(obj);
//          }
//          this.isShow = true;
//          console.log(this.musicList);
//      });
//  },
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

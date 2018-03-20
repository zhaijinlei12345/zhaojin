<template>
    <div class='player'>
        <a-player :music="music" :narrow="false" :autoplay="true"
        :mutex="true"  v-if="isShow">
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
          musicList: [],
         music   :
           {

             title: '我们（Cover 杨清柠&王乐乐）',
             author: '锦零／凤九',
             url: 'path/to/music.mp3',
             pic: 'https://p4.music.126.net/4zCLh5OcpB8Hb2woMjSs3Q==/109951162978917893.jpg',
             lrc: 'path/to/music.lrc'
           },
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
                  obj.lrc    = "/static/"+this.musicData[i].lrc;
                  this.musicList.push(obj);
          }
          this.isShow = true;
          console.log(this.musicList);
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

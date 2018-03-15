<template>
  <div class="movie">
    <common-header></common-header>
    <movie-nav></movie-nav>
    <div class="list">
      <movie-list v-for="obj in movieList" :title="obj.title"
       :year="obj.year" :avg="obj.avg" :desc="obj.desc"
      ></movie-list>
       
    </div>
    
   <common-footer></common-footer>
   </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import MovieNav from "./MovieNav"
import MovieList from "./MovieList"
export default {
  name: 'Movie',
  data () {
    return {
       movieList:[
        {
          title:"霸王北极",
          year:1994,
          avg:9.6,
          desc: [
            "同行",
            "爱情",
            "悬疑"
          ]
        },  
         {
          title:"唐人街探案",
          year:2015,
          avg:9.6,
          desc: [
            "犯罪",
            "暴力",
            "悬疑"
          ]
        },
         {
          title:"霸王防脱",
          year:2005,
          avg:9.6,
          desc: [
            "成龙",
            "惊悚",
            "Duang"
          ]
        }    
      ]
    
    }
     
  },
  components:{
     CommonHeader,
     CommonFooter,
     MovieNav,
     MovieList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list{
      margin-top: 2rem;
     }   
</style>

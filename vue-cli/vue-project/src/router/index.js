import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Movie from '@/components/movie/Movie'
import  Music from '@/components/music/Music'
import  Book from '@/components/book/Book'
import  Photo from '@/components/photo/Photo'
import componentA from '@/components/CompoentA'
import  MovieTop250 from '@/components/movie/MovieTop250'
import  MovieHot from '@/components/movie/MovieHot'
import  MovieComing from '@/components/movie/MovieComing'
import  Albums  from '@/components/music/MusicList'
import  Player  from '@/components/music/MusicPlayer'
import PhotoDetail from '@/components/photo/PhotoDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/A',
      component: componentA
    },
    {
      path: '/',
       redirect:'/movie/top250'
    },

    {
      path:'/movie',
      redirect:'/movie/top250',
      component: Movie,
      children:[
        {path:'/movie/top250',component:MovieTop250},
        {path:'/movie/hot',component:MovieHot},
        {path:'/movie/coming',component:MovieComing}
      ]

    },
    {
      path:'/music',
      redirect:'/music/music_albums',
      component: Music,
      children:[
        {path:'/music/music_albums',component:Albums},
        {path:'/music/player/:id',component:Player}
      ]
    },
    {
      path:'/book',
      component: Book
    },
    {
      path:'/photo',
      component:Photo
    },
    {
      path:'/photo/detail/:index',
      component:PhotoDetail
    }

  ]
})

<template>
  <div class="book">
    <common-header title="Book" bgColor="#6ea920" nav="返回"></common-header>
     <swipe class="my-swipe">
       <swipe-item class="slide1"></swipe-item>
       <swipe-item class="slide2"></swipe-item>
       <swipe-item class="slide3"></swipe-item>
       <swipe-item class="slide4"></swipe-item>
     </swipe>
     <common-footer FColor="#6ea920"></common-footer>
 </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Axios from 'axios'
import {Swipe,SwipeItem} from "vue-swipe"
export default {
  name: 'Book',

  components:{
     CommonHeader,
     CommonFooter,
     Swipe,
     SwipeItem
  }
}
</script>

<style>
@import "../../assets/css/vue-swipe.css";
.my-swipe{
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top:1rem;
}


.slide1 {
  background: url("http://p4.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg");
  color: #fff;
}

.slide2 {
  background:url("http://omratag7g.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg");
  color: #000;
}

.slide3 {
  background: url( "http://p4.music.126.net/lDyytkTaPYVTb1Vpide6AA==/18591642115187138.jpg");
  color: #fff;
}
.slide4 {
  background: url( "http://omratag7g.bkt.clouddn.com/%E6%9D%8E%E5%81%A5.jpg");
  color: #fff;
}
</style>

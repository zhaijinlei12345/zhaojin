<template>
  <div class="book"> 
    <common-header title="Book" bgColor="#6ea920"></common-header>
     <swipe class="my-swipe">
       <swipe-item class="slide1"></swipe-item>
       <swipe-item class="slide2"></swipe-item>
       <swipe-item class="slide3"></swipe-item>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/vue-swipe.css";
.my-swipe{
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top:1rem;
}
  
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>

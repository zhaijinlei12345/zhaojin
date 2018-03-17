<template>
  <div class="book">
    <common-header title="Book" bgColor="#6ea920"></common-header>
   <common-footer FColor="#6ea920"></common-footer>
   </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Axios from 'axios'
export default {
  name: 'Book',
 
  components:{
     CommonHeader,
     CommonFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>

<template>
  <div class="photo">
    <common-header title="Photo" bgColor="#c20c0c"></common-header>
   <common-footer FColor="#c20c0c"></common-footer>
   </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Axios from 'axios'
export default {
  name: 'Photo',
 
  components:{
     CommonHeader,
     CommonFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>

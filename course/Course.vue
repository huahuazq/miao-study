<template>
  <div id="course">
   <common-header></common-header>
    <ul class="nav">
      <li class="select"><router-link to="/course/class" >正在上课（0）</router-link></li>
      <li><router-link to="/course/waiting">等待上课（0）</router-link></li>
      <li><router-link to="/course/finish">已结束（0）</router-link></li>
    </ul>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonFooter from '@/components/common/CommonFooter'
  export default {
    data () {
      return {

      }
    },
    components:{
        CommonHeader,
        CommonFooter,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .nav{
   display: flex;
   height: 1rem;
   position: fixed;
   top: 1rem;
   width: 100%;
 }
  .nav li{
    height: 1rem;
    flex: 1;
    text-align: center;
    line-height: 1rem;
  }
  li a{
    color: #000;
  }
  li a{
    padding: 0;
  }
  .nav .select a{
    border-bottom: 1px solid #00B7FF;
  }
  .select a{
    color: #00B7FF;
  }
</style>

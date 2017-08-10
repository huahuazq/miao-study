<template>
  <div id="details">
    <common-header></common-header>
    <div class="details-teacher">
      <img src="../../assets/img/teaImg/t2.jpg" alt="">
      <div class="details-img">
        <img src="../../assets/img/teaImg/t2.jpg" alt="">
      </div>
      <div class="details-msg">
        <p>宋姗&nbsp;<span>女</span></p>
        <p>东北林业大学&nbsp;<span>硕士</span></p>
        <p>教师是个良心和责任心并存的职业</p>
      </div>
      <div class="img">
        <img src="../../assets/img/21icn_qrc56.png" alt="">
      </div>
    </div>
    <div class="details-information">
      <p class="selected">基本信息</p>
      <div class="description">
        <p class="teach">授课年级：&nbsp;</p><span>一年级二年级三年级四年级五年级六年级七年级八年级九年级高一高二高三</span>
        <p>擅长科目：&nbsp;英语、物理</p>
        <p>活动范围：&nbsp;道里区、南岗区、道外区、香坊区</p>
      </div>
    </div>
    <div class="details-introduce">
      <p class="selected">自我介绍</p>
      <div class="description">
        <p>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：硕士</p>
        <p>毕业院校：</p>
        <p>专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业：</p>
        <p>个人简介：<span></span></p>
        <p>教育经历：<span></span></p>
      </div>
    </div>
    <div class="details-honor">
      <p class="selected">个人荣誉</p>
      <div class="honor-description">
        <div class="left">
          <p>教师资格证</p>
          <p>2016.6.1</p>
        </div>
        <div class="right">
          <img src="" alt="">
        </div>
      </div>
      <div class="honor-description">
        <div class="left">
          <p>教师资格证</p>
          <p>2016.6.1</p>
        </div>
        <div class="right">
          <img src="" alt="">
        </div>
      </div>
      <div class="honor-description">
        <div class="left">
          <p>教师资格证</p>
          <p>2016.6.1</p>
        </div>
        <div class="right">
          <img src="" alt="">
        </div>
      </div>
      <div class="honor-description">
        <div class="left">
          <p>教师资格证</p>
          <p>2016.6.1</p>
        </div>
        <div class="right">
          <img src="" alt="">
        </div>
      </div>
    </div>
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
 .details-img img{
   width: 1.5rem;
   height: 1.5rem;
   border-radius: 50%;
   float: left;
   margin-left: 0.2rem;
   margin-right: 0.2rem;
 }
  .details-msg{
    margin-top: 0.2rem;
    height: 1.5rem;
  }
 .description{
   width: 6.2rem;
 }
  .description p{
    padding-left: 0.1rem;
    line-height: 0.5rem;
    text-align: left;
  }
  .img{
    height: 0.5rem;
    width: 0.5rem;
    float: right;
    margin-top: -1.5rem;
    margin-right: 0.1rem;
  }
  .teach{
    float: left;
  }
  .selected{
    color: #008200;
    height: 0.8rem;
    background: #ccc;
    line-height: 0.8rem;
    padding-left: 0.4rem;
  }
  .honor-description{
    height: 1rem;
    border-bottom: 1px solid #ccc;
    /*margin-bottom: 1.1rem;*/
  }
  .left{
    padding-left: 0.1rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
</style>

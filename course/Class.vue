<template>
  <div class="course">
     <input type="text" value="请登录" class="btn">
     <p>您还未登录，请登录后查看</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .course{
    text-align: center;
  }
 .btn{
   height: 0.8rem;
   width: 2.5rem;
   margin-top: 4rem;
   background: #ccc;
   color: #fff;
   outline: none;
   border: 0;
   border-radius: 0.2rem;
   text-align: center;
 }
  .course p{
    margin-top: 0.4rem;
  }
</style>

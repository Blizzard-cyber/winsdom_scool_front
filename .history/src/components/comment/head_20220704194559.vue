<template>
<div class="main">
    <div class="index flex-col">
      <div class="index-nav flex-row">  
        <ul class="index-nav-ul flex-row flex-space-between">
          <div class="logo">
          <img src="../../../static/img/logo1.png" alt="">
          </div>
          <li class="index-nav-li">
            <router-link :to="{path:'/Info'}" class="index-nav-a">学生信息</router-link>
          </li>
          <li class="index-nav-li">
            <router-link :to="{path:'/'}"><span class="index-nav-a">退出</span></router-link>
          </li>
          
        </ul>
      </div>
   
    </div>
  </div>
 


</template>

<script>
let self;
export default {
  data() {
    return {
      
    };
  },
  created() {
    self = this;
  },
  methods: {
    
}}
</script>

<style scoped>
.logo{
  width: 100px;
  height: 100px;
  margin-top: 20px;
}
</style>

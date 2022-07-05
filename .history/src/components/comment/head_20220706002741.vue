<template>
<div class="main">
    <div class="index flex-col">
      <div class="index-nav flex-row">  
        <ul class="index-nav-ul flex-row flex-space-between">          
          <img src="../../../static/img/logo2.png" alt="">
          <li class="index-nav-li">
            <router-link :to="{path:'/Info'}" class="index-nav-a">学生信息</router-link>
          </li>
          <li class="index-nav-li">
            <router-link @click.native="deletecookie" :to="{path:'/Login'}"><span class="index-nav-a">退出</span></router-link>
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
    deletecookie: function () {
      
    
}}
</script>

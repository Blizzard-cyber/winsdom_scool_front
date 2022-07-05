<template>
<div class="main">
    <div class="index flex-col">
      <div class="index-nav flex-row">  
        <ul class="index-nav-ul flex-row flex-space-between">          
          <img src="../../../static/img/logo2.png" alt="">
          <li class="index-nav-li">
            <router-link :to="{path:'/Login'}"><span class="index-nav-a">登录</span></router-link>
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
   
  }
}
</script>

<template>
<div class="main">
  <div class="top-bg flex-col flex-x-center flex-y-center">
    <div class="index flex-col">
      <div class="index-nav flex-row">
        <el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <ul class="index-nav-ul flex-row flex-space-between">
          <img src="../../../static/img/logo.png" alt="">
          <li class="index-nav-li">
            <router-link :to="{path:'/First'}" class="index-nav-a">学生信息</router-link>
          </li>
          <li class="index-nav-li">
            <router-link :to="{path:'/ContactUs'}"><span class="index-nav-a">退出</span></router-link>
          </li>
        </ul>
        </el-row>
      </div>
   
    </div>
  
  </div>
</div>

</template>

<script>
let self;
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  },
  created() {
    self = this;
  },
  methods: {
    fn1() {
      this.show1 = true;
    },
    fn11() {
      this.show1 = false;
    },
    fn2() {
      this.show2 = true;
    },
    fn22() {
      this.show2 = false;
    },
    fn3() {
      this.show3 = true;
    },
    fn33() {
      this.show3 = false;
    },
    fn4() {
      this.show4 = true;
    },
    fn44() {
      this.show4 = false;
    },
    fn5() {
      this.show5 = true;
    },
    fn55() {
      this.show5 = false;
    }
  }
};
</script>


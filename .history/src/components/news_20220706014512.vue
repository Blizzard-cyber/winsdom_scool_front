<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
      <!--头部-->
      <div>
      <div v-if="login">
        <my-head/>
      </div>
      <div v-else>
        <unlogin-head/>
      </div>
      </div>
      <!--位置显示区-->
      <div class="location flex-row flex-left flex-y-center ">
        <span class="location-inner flex-row flex-space-between">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          
        </span>
      </div>
      <div class="photonews flex-col flex-y-center flex-x-center">
        <div class="flex-col">
          <p class="photonews-title-1">越秀区区委王焕清书记慰问我校教师</p>
          <span class="flex-row">
            <p class="photonews-title-2">发表时间：2017-09-13</p>&nbsp;&nbsp;
            <p class="photonews-title-2">作者：七中宣传组</p>&nbsp;&nbsp;
            </span>
        </div>
        <div class="photonews-inner flex-col flex-x-center">
          <p class="flex-col photonews-inner-txt photonews-inner-img"> 教师节前夕，越秀区区委王焕清书记携同赖志鸿常务副区长、区教育局陈军书记、区教育局教育督导室黄志平科长慰问我校教师代表，特级教师、教研室陈利主任。</p>
          <img src="../../static/img/photo1.png" alt="" class="photonews-inner-img">
          <img src="../../static/img/photo2.png" alt="" class="photonews-inner-img">
          <img src="../../static/img/photo3.png" alt="" class="photonews-inner-img">
          <p class="flex-col photonews-inner-txt flex-left photonews-inner-img">曾校向王书记介绍近几年学校基建和办学情况</p>
          <img src="../../static/img/photo4.png" alt="" class="photonews-inner-img">
          <p class="flex-col photonews-inner-txt photonews-inner-img">王书记对七中的发展给予密切关注和高度重视，携同班子成员了解原越秀区教育局场地交付使用情况，为七中的后续发展保驾护航</p>
          <img src="../../static/img/photo5.png" alt="" class="photonews-inner-img">
          <p class="flex-col photonews-inner-txt photonews-inner-img">物轻情意重，区政府教育局对老师的关心，对学校发展的关注让教师节更添暖意。</p>
        </div>
      </div>
      <!--底部-->
      <my-bottom/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false
    }
  },
  mounted() {
     if( this.$cookie.get('ID')){
      this.login = true;
    }
  }
}
</script>

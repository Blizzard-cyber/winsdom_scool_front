<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
      <!--头部-->
      <my-head/>
      <!--轮播图-->
      <div class="block">
        <el-carousel height="350px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
    </div>
      <div class="news flex-row flex-space-between">
      </div>
      <!--学校公告，招聘招生-->
      <div class="show flex-row flex-left flex-space-between">
        <div class="flex-col flex-left">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>焦点新闻</span>
              <el-button style="float: right; padding: 3px 0" type="text">More</el-button>
            </div>
            <el-row>
              <el-col :span="11" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                 
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <div style="padding: 14px;">
                   <router-link :to="{path:'/Inside'}" class="flex-row flex-space-between" ></router-link>
                    <span>好吃的汉堡</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          <!-- <div class="show-notice flex-row flex-space-between">
            <img src="../../static/img/triangle.png" alt="">
            <div class="show-notice-inner flex-col flex-space-between"  >
              <span v-for="item in items2">
                <router-link :to="{path:'/Inside'}" class="flex-row flex-space-between" >
                <p>{{item.message}}</p>
                <p>2022-07-10</p>
              
              </router-link>
              </span>
            </div>
          </div> -->
        </el-card> 
        </div>
        <!--招聘招生-->
        <div class="flex-col flex-left flex-space-between">
           <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>重点新闻</span>
              <el-button style="float: right; padding: 3px 0" type="text">M</el-button>
            </div>
          <div class="show-invite flex-row flex-space-between">
            <img src="../../static/img/triangle.png" alt="">

            <div class="show-invite-inner flex-col flex-space-between" >
              <span v-for="item in items3">
                <router-link :to="{path:'/Inside'}" class="flex-row flex-space-between" >
                <p>{{item.message}}</p>
                <p>2017-07-10</p>
              </router-link>
              </span>
              
            </div>
          </div>
          </el-card>  
        </div>
      </div>
      
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
           <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <img src="../../static/img/br.png" alt="">
      
      <my-bottom/>
    </div> 
   </div>
</template>

<script>
  export default {
    data(){
      return{
        items2:[
          {message:'2017高一分班公布'},
          {message:'高一新生取得住宿资格名单'},
           {message:'2017高一新生住宿特别通知'},
          {message:'培“培英计划”广州培道遂志班通知道校训'},
           {message:'2017培道高一新生住宿申请'},
          {message:'2017高一新生报到分组名单'},
          {message:'遂志班招生简章'}
        ],
        items3:[
          {message:'校长简介'},
          {message:'东山钟灵，培道毓秀'},
           {message:'A Brief Introduction To...'},
          {message:'培道校训'},
           {message:'广州培道教学理念————个性、...'},
          {message:'校园歌曲《培道艳》'},
          {message:'2017年越秀区初中体育特长生招生方案'},
        ]
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .block{
    margin-top: 20px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width:100%;
  }
   .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
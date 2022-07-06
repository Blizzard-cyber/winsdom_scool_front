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
      <!--轮播图-->
      <div class="block">
        <el-carousel height="350px">
          <el-carousel-item v-for="item in src1" :key="item">
            <el-image :src=item></el-image>
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
              
              <el-button @click="jumpimgmore" style="float: right; padding: 3px 0" type="text">More</el-button>
            </div>
            <el-row>
              <el-col :span="11" v-for="(item, index) in items0" :key="item" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                 
                  <img src=item.image class="image">
                   
                  <div style="padding: 14px;">
                  
                      <router-link :to="{path: '/News', query:
                        {
                        id: item.id,
                      }}" class="flex-row flex-space-between" >{{item.headline}}</router-link>
                      
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
              <el-button  @click="jumptextmore" style="float: right; padding: 3px 0" type="text">More</el-button>
            </div>
          <div class="show-invite flex-row flex-space-between">
            <img src="../../static/img/triangle.png" alt="">

            <div class="show-invite-inner flex-col flex-space-between" >
              <span v-for="item in items3">
               <router-link :to="{
                    path: '/News',
                  query:
                {
                        id: item.id,
                      }}" class="flex-row flex-space-between" >
                <span>{{item.headline}}</span>
                <!-- <p>{{item}}</p> -->
                
              </router-link>
              </span>
              
            </div>
          </div>
          </el-card>  
        </div>
      </div>
      
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in src2" :key="item">
          <el-image :src=item.img @click.native="jumpNotice(item.id)"></el-image>
          </el-carousel-item>
        </el-carousel>
        <img src="../../static/img/br.png" alt="">
      
      <my-bottom/>
    </div> 
   </div>
</template>

<script>
export default {
  data() {
    return {
      items0: [],
      items1: [],
      src1: [],
      src2:[],
      login: false,
      items2:[],
      items3: [
      ]
    }
  },
  mounted() {
    
    if (this.$cookie.get('ID')) {
      this.login = true;
    }
    this.getnews();
    this.getnotice();
  },
  methods: {
    jumpimgmore() {
      this.$router.push({ path: '/PhotoNews' })
    },
    jumptextmore() {
      this.$router.push({ path: '/LatestInformation' })
    },
    jumpNotice(noticeid) {
      this.$router.push({
        path: '/Notice', query: {
          id: noticeid
        }
      })
    },
    getnews() {
      let url = 'http://127.0.0.1:8080/news/'
      this.$axios.get(url).then(res => {
       
        let imgnews = [];
        for (let i = 0; i < res.data.length; i++) {
          let newstitle = res.data[i].headline;
          let newsimage = res.data[i].image;
          // imgnews[i]['message'] = newstitle;
          // imgnews[i]['image'] = newsimage;
          // // console.log(imgnews)
          // if (i < 2){
          //   this.items2.push(imgnews[i]);
          //   console.log(this.items2)
          // }
          this.src1.push(newsimage)
          if (i <= 7) {
            this.items3.push(res.data[i])
          }
          if(i<2){
            this.items0.push(res.data[i])
            
          }
          
        }
      }
      )
    },
    getnotice() {
    let url = 'http://127.0.0.1:8080/notice/'
      this.$axios.get(url).then(res => {
        this.scr2 = res.data;
        console.log(this.scr2)
        // for (let i = 0; i < res.data.length; i++) {
        
        //   // let noticeimage = res.data[i].img;
        //   // this.src2.push(noticeimage)
        // }
      }
      )
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
    width:98%;
    height: 100%;
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
  .el-image {
    width: 100%;
    height: 100%;
  }
</style>
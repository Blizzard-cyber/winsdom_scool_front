<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
      <!--头部-->
      <my-head/>
      <div class="list flex-row flex-left flex-space-between">
        
        <div class="list-right flex-col">
          <div class="list-right-title flex-row flex-y-center">
            <span class="list-right-title-inner">您当前的位置：最新资讯</span>
          </div>
          <div class="list-right-inner ">
            <div class="list-right-inner-words   flex-col flex-space-around ">
              <div v-for="item in items">
                <router-link :to="{path:'/Inside'}">
                  <span class="list-right-inner-words1 flex-row flex-space-between">
                    <p>{{item.message}}</p>
                    <p>2017-07-10</p>
                  </span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="list-right-bottom flex-row flex-right flex-x-center flex-y-center">
            <ul class="flex-row flex-right flex-x-center">
              <li class="list-right-bottom-li">首页</li>
              <li class="list-right-bottom-li">上一页</li>
              <li class="list-right-bottom-li">下一页</li>
              <li class="list-right-bottom-li">末页</li>
            </ul>
            <span>页码：1/8</span>
          </div>
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
        items: [{
            message: '2017年中考喜报'
          },
          {
            message: '2017年高考喜报'
          },
          {
            message: '2016届广州市越秀区初中毕业班工作一等奖'
          },
          {
            message: '2016年中考喜报'
          },
          {
            message: '化学科喜讯'
          },
          {
            message: '化学科喜报'
          },
          {
            message: '体育科喜讯'
          },
          {
            message: '数学科喜讯'
          },
          {
            message: '化学科喜报'
          },
          {
            message: '团委喜报'
          },
          {
            message: '政治科喜报'
          },
          {
            message: '开学典礼校长讲话'
          },
          {
            message: '数学科喜报'
          },
          {
            message: '信息学奥赛喜报'
          },
          {
            message: '2016年无偿献血-流淌的生命'
          },
          {
            message: '物理科喜报'
          },
          {
            message: '体育科喜报'
          },
          {
            message: "澳门培道中学师生参观交流活动"
          }
        ]
      }
    }
  }

</script>

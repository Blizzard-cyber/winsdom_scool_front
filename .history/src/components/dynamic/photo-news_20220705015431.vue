<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
      <!--头部-->
      <my-head/>
      <!-- <div class="list flex-row flex-left flex-space-between"> -->
      <div class="location flex-row flex-left flex-y-center ">
        <span class="location-inner flex-row flex-space-between">
          <p>您当前的位置：</p>
          <p>校园动态 >> 焦点新闻</p>
        </span>
      </div>
      <div id="news">
		<el-card
			shadow="hover"
			:body-style="{ padding: '20px 0px' }"
			v-for="(news, index) in newsData"
			:key="index"
		>
			<div class="newsBox">
				<div>
					<el-image
						:src="news.imgUrl"
						fit="cover"
						:lazy="true"
						class="newsImg"
					></el-image>
				</div>
				<div class="newsText">
					<el-link href="#">
						<p class="p1">{{ news.title }}</p>
					</el-link>
					<p class="p2">{{ news.content }}</p>
				</div>
			</div>
		</el-card>
	</div>
        <!-- <div class="list flex-col">
          <div class="list-right-title flex-row flex-y-center"><span class="list-right-title-inner">您当前的位置：图片新闻</span></div>
          <div class="list-right-inner">
            <div class="list-right-inner-words   flex-col flex-space-around ">
              <div v-for="item in items">
            <router-link :to="{path:'/Inside'}" >
            <span class="list-right-inner-words1 flex-row flex-space-between" ><p>{{item.message}}</p><p>2017-07-10</p></span>
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
        </div> -->
      
      <!--底部-->
      <my-bottom/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

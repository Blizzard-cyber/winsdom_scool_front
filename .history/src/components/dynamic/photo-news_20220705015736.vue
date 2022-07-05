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
newsData: [
				{
					imgUrl: require("../../assets/news-1.jpg"),
					title: "打破职称界限 激发办学活力",
					content:
						"2019年，长香理工大学甲批各类教育规划课职9项，同比上年增长了12%;数学改革课题申报69项，同比上年增长了8%:申报各类科研项目997项，同比上年增长了11%;新增科研立项538项，同比上年增长了49%...",
				},
				{
					imgUrl: require("../..//assets/news-2.jpg"),
					title: "在江西高质量跨越式发展中发挥科技创新生力军作用",
					content:
						"6月29日，省委副书记叶建春来校调研。他强调，要深入学习贯彻习近平总书记关于教育的重要论述，充分发挥科技学科人才综合优势，聚焦行业前沿与产业发展，强化科研攻关，深化校企合作。",
				},
				{
					imgUrl: require("../..//assets/news-3.jpg"),
					title: "同庆百年华诞 汇聚奋进力量",
					content:
						"同庆百年华诞，共铸历史伟业。6月29日上午，我校召开庆祝中国共产党成立100周年暨“七一”表彰大会，表彰“两优一先”集体和个人，向“光荣在党五十年”的老党员颁发纪念章，并举行新党员代表集中佩戴党徽、入党宣誓活动...",
				},
				{
					imgUrl: require("../..//assets/news-4.jpg"),
					title: "激活“神经末梢”，强健“肌体细胞”",
					content:
						"6月30日上午，校党委书记柳和生以《激活“神经末梢”，强健“肌体细胞”》为题，为全校二级党组织书记、副书记、组织员和基层党支部书记讲授“七一”专题党课。他强调，党支部书记是党的最基层组织的领头人，是党支部一班人的“班长”、支部的主心骨，是党员队伍的带头人。",
				},
			],
    }
  }
}
</script>

<style scoped>
#news >>> .el-card {
	background-color: inherit;
}
.el-card:hover {
    padding: 6px 20px;
}
.newsBox {
	display: flex;
	flex-direction: row;
}
.newsImg {
	width: 120px;
	height: 100px;
}
.newsText {
	margin-left: 20px;
	height: inherit;
}
.newsText .p1 {
	margin: 0px;
	font-weight: 500;
	font-size: 20px;
}
.newsText .p2 {
  width:650px;
	margin-bottom: 0px;
	font-size: 14px;
	line-height: 26px;
	color: #909399;
	overflow: hidden;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	-webkit-box-orient: vertical;
}
</style>

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
       <div class="location flex-row flex-left flex-y-center ">
        <span class="location-inner flex-row flex-space-between">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>重点新闻</el-breadcrumb-item>
          </el-breadcrumb>
        </span>
      </div>
  <div id="notice">
		<el-card
			shadow="hover"
			:body-style="{ padding: '12px 0px' }"
			v-for="(news, index) in newsData"
			:key="index"
		>
			<div class="newsBox">
				<div class="newsText">
					<el-link href="#/News">
						<p class="p1">{{ news.title }}</p>
					</el-link>
					<p class="p2">{{ news.content }}</p>
				</div>
			</div>
		</el-card>
	</div>
      <!-- <div class="list flex-row flex-left flex-space-between">
        
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
			login: false,
			newsData: [
				{
					title: "关于50周年校庆专题网站正式发布的通知",
					content:
						"全体师生、广大校友：2021年9月，学校将迎来50周年华诞，为更好地反映校庆系列重大活动安排和工作动态，展现学校的精神特质和文化内涵，营造浓厚的校庆氛围，宣传部会同网信中心、档案馆、各学院制作了“华东交通大学50周年校庆专题网站”，于校庆倒计时100天之际正式上线，对外发布。",
				},
				{
					title: "第552期孔目湖讲坛（心理学与我——用理论指导实践）",
					content:
						"【主讲人简介】魏超，武汉理工大学教授，硕士生导师，国家精品在线开放课程教学名师，美国北卡罗来纳大学教堂山分校访问学者， BCC全球生涯教练，全国万名优秀创新创业导师人才库首批入库导师，全国首批KAB大学生创业指导讲师、全国首批职业生涯规划骨干教师、湖北省创业师资培训师、国家二级心理咨询师、人力资源管理师、职业咨询师，全国创业指导课程教学大赛三等奖，",
				},
				{
					title: "第551期孔目湖讲坛（中国传统饮食文化与传播）",
					content:
						"【主讲人简介】潘祥辉，南京大学新闻传播学院教授，博士生导师、华夏传播研究会副会长，福建省“闽江学者”讲座教授。主要研究方向为古典传播学、传播考古学等，主持国家社科基金2项，教育部课题2项，省部级课题5项，出版《媒介演化论——历史制度主义视野下的中国媒介制度变迁研究》《组织再造：媒介社会学的中国视角》以及《华夏传播新探——一种跨文化比较视角》等著作3本。",
				},
				{
					title: "关于征集华东交通大学50周年校庆标语的公告",
					content:
						"全体师生、校友及各界人士：2021年9月，华东交通大学将迎来建校50周年华诞，为更好地展现学校的精神气质和文化内涵，营造良好的校庆氛围，现面向广大师生校友及社会各界人士征集50周年校庆标语。",
				},
				{
					title: "关于开展建校50年来“感动花椒人物” 评选活动的公告",
					content:
						"为展现学校建校50年来筚路蓝缕、筑梦百年的光辉历程，以及典型人物的先进事迹和宝贵精神，进一步凝聚和激励全校师生和广大校友为实现“百年交大梦”不懈奋斗，学校决定举办“感动花椒人物”评选活动，现将有关事项通知如下。",
				},
			],
		}
	},
	mounted() {
		if (this.$cookie.get('ID')) {
			this.login = true;
		};
		this.getData();
	},
	 methods: {
	getdata() {
	  this.$axios
		.get("http://127.0.0.1:8080/news/")
		.then(res => {
			let data = res.data;
			for (let i = 0; i < 5; i++) {
				this.newsData.push(data[i]);
			}
		  console.log(res.data);
		});
	},
	toDetail(item) {
	  this.$router.push({
		path: "/newsDetail",
		query: {
		  id: item.id
		}
	  });
	}
  }
}

</script>

<style scoped>
#notice >>> .el-card {
	background-color: inherit;
}
.el-card:hover {
	padding-left: 20px;
	padding-right: 20px;
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
  width: 750px;
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

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
      <!-- <div class="list flex-row flex-left flex-space-between"> -->
      <div class="location flex-row flex-left flex-y-center ">
        <span class="location-inner flex-row flex-space-between">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>焦点新闻</el-breadcrumb-item>
          </el-breadcrumb>
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
						:src="news.image"
						fit="cover"
						:lazy="true"
						class="newsImg"
					></el-image>
				</div>
				<div class="newsText">
					<el-link @click.native="deliver(news.id)">
						<p class="p1">{{ news.headline }}</p>
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
		login:false,
newsData: [
			],
    }
	},
  mounted() {
     if( this.$cookie.get('ID')){
      this.login = true;
	  };
	  this.getdata();
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
	  },
	deliver(sid) {
			this.$router.push({
				path: "/News",
				query: {
					id: sid
				}
			});
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

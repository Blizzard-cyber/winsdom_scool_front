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
            <el-breadcrumb-item>焦点新闻</el-breadcrumb-item>
          </el-breadcrumb>
          
        </span>
      </div>
      <div class="photonews flex-col flex-y-center flex-x-center">
        <div class="flex-col">
          <p class="photonews-title-1">{{tabledata.headline}}</p>
          <span class="flex-row">
            <p class="photonews-title-2">发表时间：{{tabledata.time}}</p>&nbsp;&nbsp;
            <p class="photonews-title-2">作者：{{tabledata.author}}</p>&nbsp;&nbsp;
            </span>
        </div>
        <div class="photonews-inner flex-col flex-x-center">
          <p class="flex-col photonews-inner-txt photonews-inner-img">
            {{tabledata.content}}
          </p>
          <img src="src" alt="" class="photonews-inner-img">
          
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
      src: '',
      params:'',
      login: false,
      tabledata:[]
    }
  },
  mounted() {
     if( this.$cookie.get('ID')){
      this.login = true;
    }
    this.params = this.$route.query.id;
    console.log(this.params);
    this.getdata();
  },
  methods: {
    getdata() {
      this.$axios.get('http://127.0.0.1:8080/news/' + this.params).then(res => {
        this.tabledata = res.data;
        this.src= res.data.image
        console.log(res.data);
      })
    }
  }
}
</script>

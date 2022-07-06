<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <login-head/>
     <el-page-header @back="goBack" content="个人信息"></el-page-header>
    <div class="container">
  		<slot></slot>
  	  <div class="banner">
  	    <div class="avator"><img src="../../../static/img/logolo.png" alt=""></div>
  	    <div class="info">
  	      <h5 class="hello">Hello</h5>
  	      <h1>{{info.name}}</h1>
  	      <h6 class="text_hidden">{{info.job}}</h6>
  	      <ul>
  	        <li  class="text_hidden"><b>学院：</b> <span>{{info.college}}</span></li>
  	        <li  class="text_hidden"><b>专业：</b> <span>{{info.major}}</span></li>
  	        <li  class="text_hidden"><b>手机号码：</b> <span>{{info.phone}}</span></li>
  	        
  	      </ul>
  	    </div>
  	    <el-button type="primary" @click="open">修改手机号</el-button>
  	  </div>
  	</div>  
         <el-divider></el-divider>  
      <my-bottom/>
      </div>
   </div>
</template>

<script>

    export default {
        name: "Personal",
  data() {
    return {
         info: {
      }
    };
  },
  mounted(){
    this.getInfo();
  },
  methods: {
    goBack() {
      this.$router.replace('/Info')
    },
    getInfo() {
       let cookie_id = this.$cookie.get('ID');
      let cookie_password = this.$cookie.get('password');
      console.log(cookie_id)
      console.log(cookie_password)
      let url = 'http://127.0.0.1:8080/student/'+cookie_id+'/'+cookie_password;
      this.$axios.post(url).then(res => {
        this.info = res.data;
        console.log(this.info)
       }).catch(err => {
        console.log(err)
      });
      
    },
  
    open() {
      this.$prompt('请输入新手机号码', '修改手机号', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern:  /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
        inputErrorMessage: '格式不正确'
      }).then(({ value }) => {
        this.$axios.post('http://127.0.0.1:8080/student/' + this.$cookie.get('ID'),
       prams:{
          phone: value
        }).then(res => {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.getInfo();
        }).catch(err => {
          console.log(err)
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消修改'
        });
      });
    }, 
  }       
 }
</script>

<style scoped>
	.el-page-header{
    margin-top: 20px;
  }
	.container{width:100%;height:600px;position: relative;margin-left:100px}
	.banner{max-width: 1200px;padding: 10% 0;margin: 0 auto;}
	.avator{float:left;width: 40%;text-align: center;position: relative;z-index: 10;}
	.avator img{width: 74%;border: 5px solid rgba(255, 255, 255, 0.68);}
	.info{float:right;width: 60%;text-align: left;margin-top: -20px;}
	.info .hello{position:relative;display:inline-block;padding: 4px 16px;font-size: 16px;color:#fff;background-color: #03a9f4;font-family: 'Overlock', cursive;vertical-align: top; box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}
	/*小三角*/
	.info .hello:after{position: absolute;width: 0;height: 0;left:6px;bottom:-4px;content: '';border-style: solid;border-width: 6px 6px 0 6px;border-color: #03a9f4 transparent;}
	h1{font-size: 34px;font-family: 'Overlock', cursive;}
	h6{margin-top: 6px;font-size:14px;font-family: 'Overlock', cursive;color: #C7C7C7;letter-spacing: 4px;}
	.info ul{margin-top: 10px;border-top: 1px solid #fff;}
	.info ul li{font-size: 20px;margin-top: 26px;}
	.info b{display:inline-block;font-family: 'Overlock', cursive;margin-right: 10px;}
	.info ul li span:hover{color: #03a9f4;}
	#particles-js{position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;}
  .el-button{margin-top: 50px;margin-right: 400px;}
</style>

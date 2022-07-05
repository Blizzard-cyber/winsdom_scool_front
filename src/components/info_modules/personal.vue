<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
    <div class="container">
  		<slot></slot>
  	  <div class="banner">
  	    <div class="avator"><img src="../../../static/img/logolo.png" alt=""></div>
  	    <div class="info">
  	      <h5 class="hello">Hello</h5>
  	      <h1>{{info.name}}</h1>
  	      <h6 class="text_hidden">{{info.job}}</h6>
  	      <ul>
  	        <li  class="text_hidden"><b>出生年月</b> <span>{{info.birth}}</span></li>
  	        <li  class="text_hidden"><b>电子邮箱</b> <span>{{info.email}}</span></li>
  	        <li  class="text_hidden"><b>手机号码</b> <span>{{info.phone}}</span></li>
  	        <li  class="text_hidden"><b>联系地址</b> <span>{{info.address}}</span></li>
  	        <li  class="text_hidden"><b>个人网站</b> <span>{{info.website}}</span></li>
  	      </ul>
  	    </div>
  	    <el-button type="primary" @click="open">修改信息</el-button>
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
      	"name": "张三",
      	"job": "Zhang Shan",
      	"birth": "19XX-10-08",
      	"email": "6958XXX46@qq.com",
      	"phone": "1772798XXXX",
      	"address": "深圳市罗湖区xxx",
      	"website": ""
      }
    };
  },
  methods: {
         
      open() {
        this.$prompt('请输入新联系方式', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的联系方式是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    
            // handleClick(tab, event) {
            //     console.log(tab, event);
            // },
            // initCourses(classId) {
            //     this.getRequest('/web/student/courses?classId=' + classId).then(resp => {
            //         console.log(resp.data);
            //         this.coursesList = resp.data;
            //         for (let j = 0; j < this.coursesList.length; j++) {
            //             if (this.coursesList[j].status === 1) {
            //                 this.coursesList[j].status = '必修';
            //             } else if (this.coursesList[j].status === 2) {
            //                 this.coursesList[j].status = '选修';
            //             } else if (this.coursesList[j].status === 3) {
            //                 this.coursesList[j].status = '公选';
            //             }
            //         }
            //     })
            // },
            // initStudents() {
            //     this.getRequest('/web/student/personalInfo').then(resp => {
            //         this.studentInfo = resp.data;
            //         if (this.studentInfo.avatar === '') {
            //             this.avatarUrl = require('../../assets/user_pic_middle.gif');
            //         }
            //         this.initCourses(this.studentInfo.classes.id);
            //     })
            // }
        },
    }
</script>

<style scoped>
	
	.container{width:100%;height:600px;position: relative;margin-left:100px}
	.banner{max-width: 1200px;padding: 10% 0;margin: 0 auto;}
	.avator{float:left;width: 40%;text-align: center;position: relative;z-index: 10;}
	.avator img{width: 74%;border: 5px solid rgba(255, 255, 255, 0.68);}
	.info{float:right;width: 60%;text-align: left;margin-top: -80px;}
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
  .el-button{margin-top: 10px;}
</style>

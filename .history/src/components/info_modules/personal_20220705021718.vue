<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
            <div style="margin-left: 30%;margin-right: 30%">
                <el-card class="box-card">
                    <el-row>
                        <div>
                            <div>
                                <el-image class="identification_photo" :src="this.avatarUrl" alt="" style="margin-left: 40%;margin-right: 40%"/>
                            </div>
                        </div></el-row>
                   
                    <div class="Info">
                        <div style="margin-top: 20px">姓名：{{studentInfo.name}}</div>
                        <div style="margin-top: 20px" >学号：{{studentInfo.id}}</div>
                        <div style="margin-top: 20px">性别：{{studentInfo.sex}}</div>
                        <div style="margin-top: 20px">年龄：{{studentInfo.age}}</div>
                        <div style="margin-top: 20px">电话：{{studentInfo.phoneNum}}</div>
                        <div style="margin-top: 20px">email：{{studentInfo.email}}</div>
                        <div style="margin-top: 20px">身份证号：{{studentInfo.idCard}}</div>
                        <div style="margin-top: 20px">民族：{{studentInfo.nation}}</div>
                        <el-button type="primary" @click="open">修改联系方式</el-button>
                    </div>
                </el-card>
            </div>
             <my-bottom/>
            </div>
            </div>
</template>

<script>
    export default {
        name: "Personal",
  data() {
    return {
      studentInfo: [
        {
          id: "1",
          name: "2",
          sex: "3",
          age: "4",
          phoneNum: "5",
          email: "6",
          idCard: "7",
          nation: "8"
        }
      ],
      avatarUrl: '../../../static/img/code2.jpg'
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
    .activeName{
        width: 100%;
        height: 100%;
    }

    .box-card {
        width: 500px;
        height: 100%;
        text-align: center;
    }


    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .identification_photo{
        width: 120px;
        height: 140px;
        margin-left: 160px;
    }
    .Info{
        width: 100%;
        height: 100%;
        margin-left: 100px;
       
    }
    .el-button{
        margin-top: 30px;
        margin-left: -200px;
        display: inline-block;
    }
</style>
<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
            
           
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


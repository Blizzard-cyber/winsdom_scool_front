<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <login-head/>
      <el-page-header @back="goBack" content="课程情况"></el-page-header>
     <div class="block1">
    <Table border height="500" :columns="columns" :data="data"></Table>
    </div>
    <!-- <div class="block2" style="padding: 10px; background: #f8f8f9;width: 100%;">
          <el-button type="text" @click="handleSummary">点击查看总学分为:</el-button> 
         <span>总学分：{{totol}}</span>
    </div> -->
    <my-bottom/>
    </div>
   </div>
</template>
<script>

export default {
  
  data() {
    return {
      totol: 0,
      columns: [
        {
          title: '课程代码',
          key: 'cid',
          sortable: true
        },
        {
          title: '课程名称',
          key: 'name'
        },
        {
          title: '课程类别',
          key: 'type',
          filters: [
            {
              label: '通用英语',
              value: '通用英语'
            },
            {
              label: '核心通识课',
              value: '核心通识课'
            },
            {
              label: '数学与自然科学基础课',
              value: '数学与自然科学基础课'
            },
            {
              label: '学科基础课(必修)',
              value: '学科基础课(必修)'
            },
            {
              label: '学院要求课',
              value: '学院要求课'
            },
            {
              label: '本专业选修课',
              value: '本专业选修课'
            }
          ],
          filterMethod(value, row) {
            return row.type.indexOf(value) > -1;
          }
        },
        {
          title: '学分',
          key: 'credit',
          filters: [
            {
              label: '0.5',
              value: '0.5'
            },
            {
              label: '1',
              value: '1'
            },
            {
              label: '2',
              value: '2'
            },
            {
              label: '3',
              value: '3'
            },
            {
              label: '3.5',
              value: '3.5'
            },
            {
              label: '4',
              value: '4'
            },
            {
              label: '5',
              value: '5'
            },
            {
              label: '6',
              value: '6'
            }
          ],
          filterMethod(value, row) {
            return row.cridts.indexOf(value) > -1;
          }
        },
        {
          title: '成绩',
          key: 'grade',
          filters: [
            {
              label: '<60',
              value: 1
            },
            {
              label: '60-90',
              value: 2
            },
            {
              label: '>=90',
              value: 3
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.remark < 60;
            } else if (value === 2) {
              return row.reamrk >= 60 && row.remark < 90;
            }
            else if (value === 3) {
              return row.remark >= 90;
            }
          }
        },
        // {
        //   title: '补考成绩',
        //   key: 're_exam',
        //   filters: [
        //     {
        //       label: '<60',
        //       value: 1
        //     },
        //     {
        //       label: '>=60',
        //       value: 2
        //     },
        //   ],
        //   filterMultiple: false,
        //   filterMethod(value, row) {
        //     if (value === 1) {
        //       return row.re_exam < 60;
        //     } else if (value === 2) {
        //       return row.re_exam >= 60;
        //     }

        //   }
        // },
        // {
        //   title: '重修成绩',
        //   key: 're_study',
        //   filters: [
        //     {
        //       label: '<60',
        //       value: 1
        //     },
        //     {
        //       label: '>=60',
        //       value: 2
        //     },
        //   ],
        //   filterMultiple: false,
        //   filterMethod(value, row) {
        //     if (value === 1) {
        //       return row.re_exam < 60;
        //     } else if (value === 2) {
        //       return row.re_exam >= 60;
        //     }

        //   }
        // },
        {
          title: '课程状态',
          key: 'state'
        },
        {
          title: '备注',
          key: 'remark'
        },
      ],
      data: [],
      
    }
  },
  mounted() {
    this.getdata();
  },
  methods: {
    goBack() {
      this.$router.replace('/Info')
    },
    getdata() {
      let cookie_id = this.$cookie.get("ID")
      
      let url = 'http://127.0.0.1:8080/study/' + cookie_id;
      
      this.$axios.get(url).then(res => {
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++){
          let course = res.data[i].course;
          console.log(course);
          course['grade'] = res.data[i].grade;
          course['state'] = res.data[i].state;
          console.log(course);
          //console.log(course+'grade:'+res.data.grade+'state:'+res.data.state)
          this.data.push(course);
        }
       
      })
    }
    // handleSummary() {
    //   const sums = 0;
    //   columns.forEach((column, index) => {
    //     if(column.key==='cridts'){
    //       sums[column.key] = this.data.reduce((total, row) => {
    //         return total + parseFloat(row[column.key]);
    //       }, 0);
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>
.block1{
  margin-top: 30px;
  margin-bottom: 30px;
}
.el-page-header{
    margin-top: 20px;
  }
</style>
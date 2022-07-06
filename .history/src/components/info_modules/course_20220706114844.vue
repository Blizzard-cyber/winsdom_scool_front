<template>
<div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <login-head/>
      <el-page-header @back="goBack" content="课程情况"></el-page-header>
     <div class="block1">
    <Table border height="400" :columns="columns" :data="data"></Table>
    </div>
    <div class="block2" style="padding: 10px; background: #f8f8f9;width: 100%;">
         <!-- <el-button type="text" @click="handleSummary">点击查看总学分为:</el-button> -->
         <span>总学分：{{totol}}</span>
    </div>
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
          key: 'cname'
        },
        {
          title: '课程类别',
          key: 'ctype',
          filters: [
            {
              label: '第一类',
              value: '英语'
            },
            {
              label: '第二类',
              value: '语文'
            },
            {
              label: '第三类',
              value: '数学'
            },
            {
              label: '第四类',
              value: '化学'
            },
            {
              label: '第五类',
              value: '物理'
            },
            {
              label: '第六类',
              value: '生物'
            }
          ],
          filterMethod(value, row) {
            return row.ctype.indexOf(value) > -1;
          }
        },
        {
          title: '学分',
          key: 'cridts',
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
          key: 'remark',
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
        {
          title: '补考成绩',
          key: 're_exam',
          filters: [
            {
              label: '<60',
              value: 1
            },
            {
              label: '>=60',
              value: 2
            },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.re_exam < 60;
            } else if (value === 2) {
              return row.re_exam >= 60;
            }

          }
        },
        {
          title: '重修成绩',
          key: 're_study',
          filters: [
            {
              label: '<60',
              value: 1
            },
            {
              label: '>=60',
              value: 2
            },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.re_exam < 60;
            } else if (value === 2) {
              return row.re_exam >= 60;
            }

          }
        },
        {
          title: '备注',
          key: 'other'
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
      let cookie_id = this.cookie.get("ID")
      let url='http://127.0.0.1:8080/study/'+cookie_id;
      this.$axios.get(url).then(res => {
        for(let i=0;i<res.data.length;i++){
          this.data = res.data.course;
          
        }
        this.data = res.data;
        this.totol = 0;
        for (let i = 0; i < this.data.length; i++) {
          this.totol += parseFloat(this.data[i].cridts);
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
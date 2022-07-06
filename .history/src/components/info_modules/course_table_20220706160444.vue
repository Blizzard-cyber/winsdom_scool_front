<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <login-head/>
     <el-page-header @back="goBack" content="课程表"></el-page-header>
     <div class="box">
      <div class="box-title1"> 
      <el-dropdown size="small" split-button type="primary"  @command="handleCommand">
        切换学期
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="2020-2021 1">2020-2021 1</el-dropdown-item>
          <el-dropdown-item command="2020-2021 2">2020-2021 2</el-dropdown-item>
          <el-dropdown-item command="2021-2022 1">2021-2022 1</el-dropdown-item>
          <el-dropdown-item command="2021-2022 2">2021-2022 2</el-dropdown-item>
          <el-dropdown-item command="2022-2023 1">2022-2023 1</el-dropdown-item>
          <el-dropdown-item command="2022-2023 2">2022-2023 2</el-dropdown-item>
          <el-dropdown-item command="2023-2024 1">2023-2024 1</el-dropdown-item>
          <el-dropdown-item command="2023 2024 2">2023-2024 2</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      <!-- <div class="box-title2">
      <el-dropdown size="small" split-button type="primary" @command="handleCommand">
        选择教学周
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">第一周</el-dropdown-item>
          <el-dropdown-item command="b">第二周</el-dropdown-item>
          <el-dropdown-item command="c">第三周</el-dropdown-item>
          <el-dropdown-item command="d">第四周</el-dropdown-item>
          <el-dropdown-item command="e">第五周</el-dropdown-item>
          <el-dropdown-item command="f">第六周</el-dropdown-item>
          <el-dropdown-item command="g">第七周</el-dropdown-item>
          <el-dropdown-item command="h">第八周</el-dropdown-item>
          <el-dropdown-item command="i">第九周</el-dropdown-item>
          <el-dropdown-item command="j">第十周</el-dropdown-item>
          <el-dropdown-item command="k">第十一周</el-dropdown-item>
          <el-dropdown-item command="l">第十二周</el-dropdown-item>
          <el-dropdown-item command="m">第十三周</el-dropdown-item>
          <el-dropdown-item command="n">第十四周</el-dropdown-item>
          <el-dropdown-item command="o">第十五周</el-dropdown-item>
          <el-dropdown-item command="p">第十六周</el-dropdown-item>
          <el-dropdown-item command="q">第十七周</el-dropdown-item>
          <el-dropdown-item command="r">第十八周</el-dropdown-item>
          <el-dropdown-item command="s">第十九周</el-dropdown-item>
          <el-dropdown-item command="t">第二十周</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div> -->
        <el-table
          :data="tableData"
          style="width: 100%"
          >
        <el-table-column
          prop="info"
          label="节次/周次"
          width="125"
          align="center">
        </el-table-column>
       <el-table-column
          prop="mon"
          label="星期一"
          width="125"
           align="center">
        </el-table-column>
        <el-table-column
          prop="thu"
          label="星期二"
          width="125"
           align="center">
        </el-table-column>
        <el-table-column
          prop="wes"
          label="星期三"
          width="125"
           align="center">
        </el-table-column>
        <el-table-column
          prop="fur"
          label="星期四"
          width="125"
           align="center">
        </el-table-column>
        <el-table-column
          prop="fri"
          label="星期五"
          width="125"
           align="center">
        </el-table-column>
        <el-table-column
          prop="sta"
          label="星期六"
          width="125"
           align="center">
        </el-table-column>
        <el-table-column
          prop="sun"
          label="星期日"
          width="125"
           align="center">
        </el-table-column>
      </el-table>
      </div>
    <div class="block">
        <el-table
          :data="tableData_info"
          border
          style="width: 100%">
          <el-table-column
            prop="index"
            label="序号"
            width="125"
            align="center">
          </el-table-column>
          <el-table-column
            prop="cid"
            label="课程代码"
            width="125"
            align="center">
          </el-table-column>
          <el-table-column
            prop="cname"
            label="课程名称"
            width="125"
            align="center">
          </el-table-column>
          <el-table-column
            prop="cridts"
            label="学分"
            width="125"
            align="center">
          </el-table-column>
          <el-table-column
            prop="teacher"
            label="教师"
            width="125"
            align="center">
            </el-table-column>
          <el-table-column
            prop="title"
            label="职称"
            width="125"
            align="center">
          </el-table-column>
          <el-table-column
            prop="textbook"
            label="教材"
            width="125"
            align="center">
            <template slot-scope="scope">
                            <a @click="cancelDialog(scope.row)" style="color:blue;cursor:pointer">1</a>
                        </template>
          </el-table-column>
          <el-table-column
            prop="other"
            label="备注"
            width="123"
            align="center">
          </el-table-column>
        </el-table>
      </div>
      <my-bottom/>
    </div>
   </div>
</template>

<style>
.el-page-header{
    margin-top: 20px;
  }
.box-title1{
  display: inline-block;
  align-items: center;
  margin-left: -850px;
  margin-top: 30px;
}
/* .box-title2{
  display: inline-block;
  align-items: center;
  margin-left: -850px;
  margin-top: 30px;
} */
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.el-table{
  width: 100%;
  margin-bottom: 50px;
  margin-top: 10px;
}
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          info: '第一大节',
          mon: '王小虎',
          thu: '上海市普陀区金沙江路 1518 弄',
          wes: '上海市普陀区金沙江路 1517 弄',
          fur: '上海市普陀区金沙江路 1519 弄',
          fri: '上海市普陀区金沙江路 1520 弄',
          sta: '上海市普陀区金沙江路 1521 弄',
          sun: '上海市普陀区金沙江路 1522 弄'

        }, {
          info: '第二大节',
          
        }, {
          info: '第三大节',
          
          }, {
            info: '第四大节',
          },
        {
          info: '第五大节',
          
          },
        {
          info: '第六大节',
          
          }],
        tableData_info: [{
          index: '1',
          cid: 'C001',
          cname: '高等数学',
          cridts: '3',
          teacher: '张三',
          title: '教授',
          textbook: '《高等数学》',
          other: '无'
        },
        {
          index: '2',
          cid: 'C002',
          cname: '高等数学',
          cridts: '3',
          teacher: '李四',
          title: '教授',
          textbook: '《高等数学》',
          other: '无'
        },
        {
          index: '3',
          cid: 'C003',
          cname: '高等数学',
          cridts: '3',
          teacher: '王五',
          title: '教授',
          textbook: '《高等数学》',
          other: '无'
        },
        {
          index: '4',
          cid: 'C004',
          cname: '高等数学',
          cridts: '3',
          teacher: '赵六',
          title: '教授',
          textbook: '《高等数学》',
          other: '无'
        },
        {
          index: '5',
          cid: 'C005',
          cname: '高等数学',
          cridts: '3',
          teacher: '孙七',
          title: '教授',
          textbook: '《高等数学》',
          other: '无'
        }]
      }
  },
  
  methods: {
      goBack() {
      this.$router.replace('/Info')
    },
      handleCommand(command) {
        this.$message('学期切换到' + command);
      }
    }
  }
</script>

<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     <div class="box">
      <div class="box-title1"> 
      <el-dropdown size="small" split-button type="primary"  @command="handleCommand">
        切换学期
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">2020-2021 1</el-dropdown-item>
          <el-dropdown-item command="b">2020-2021 2</el-dropdown-item>
          <el-dropdown-item command="c">2021-2022 1</el-dropdown-item>
          <el-dropdown-item command="d">2021-2022 2</el-dropdown-item>
          <el-dropdown-item command="e">2022-2023 1</el-dropdown-item>
          <el-dropdown-item command="f">2022-2023 2</el-dropdown-item>
          <el-dropdown-item command="g">2023-2024 1</el-dropdown-item>
          <el-dropdown-item command="h">2023-2024 2</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      <div class="box-title2">
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
      </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
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
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
      <my-bottom/>
    </div>
   </div>
</template>

<style>
.box-title1{
  display: inline-block;
  align-items: center;
  margin-left: -750px;
  margin-top: 50px;
}
.box-title2{
  display: inline-block;
  align-items: center;
  margin-left: 20px;
}
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
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
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
          
        }]
      }
  },
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>

<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     <div class="box">
      <el-dropdown @command="handleCommand">
        
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="b">狮子头</el-dropdown-item>
          <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      
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
      <my-bottom/>
    </div>
   </div>
</template>

<style>
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
  margin-top: 50px;
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

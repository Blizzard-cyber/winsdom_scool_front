<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     <div class="box">
        <el-table
          :data="tableData"
          style="width: 100%"
          al
          :row-class-name="tableRowClassName">
       <el-table-column
          prop="mon"
          label="星期一"
          width="150">
        </el-table-column>
        <el-table-column
          prop="thu"
          label="星期二"
          width="150">
        </el-table-column>
        <el-table-column
          prop="wes"
          label="星期三"
          width="150">
        </el-table-column>
        <el-table-column
          prop="fur"
          label="星期四"
          width="150">
        </el-table-column>
        <el-table-column
          prop="fri"
          label="星期五"
          width="150">
        </el-table-column>
        <el-table-column
          prop="sta"
          label="星期六"
          width="150">
        </el-table-column>
        <el-table-column
          prop="sun"
          label="星期日"
          width="150">
        </el-table-column>
      </el-table>
        </div>
      <my-bottom/>
    </div>
   </div>
</template>

<style>
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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>

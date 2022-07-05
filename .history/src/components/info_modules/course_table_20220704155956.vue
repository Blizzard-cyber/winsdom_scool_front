<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     <div class="box">
        <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
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

<script>
export default {

}
</script>

<style>

</style>
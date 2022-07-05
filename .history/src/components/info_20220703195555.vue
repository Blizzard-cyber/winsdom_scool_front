   <template>
   <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     
     <div class="cards">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-card shadow="hover">
             <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
               </div>
              <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
             </div>
             </el-card>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">

            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">

            </div>
          </el-col>
        </el-row>
     </div>

   </div>
   </div>
  </template>

 <script>

  export default {
    name: "Info",
    data() {
        return {};
    },
    method: {},
    
}
  </script>


<style>
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
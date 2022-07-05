   <template>
   <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     
     <div class="cards">
        <el-row :gutter="30">
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
           <el-card shadow="hover" :body-style="{ height: '100px' }">
             <div slot="header" class="clearfix">
              <span>个人信息</span>
              <el-button style="float: right; padding: 3px 0" type="text">进入</el-button>
               </div>
              <div class="text item">
              查询个人信息详情
             </div>
           </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ height: '100px' }">
             <div slot="header" class="clearfix">
              <span>课程情况</span>
              <el-button style="float: right; padding: 3px 0" type="text">进入</el-button>
             </div>
             <div class="text item">
              查询学生个人选课情况、学分和成绩情况
             </div>
           </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ height: '100px' }">
             <div slot="header" class="clearfix">
              <span>个人信息</span>
              <el-button style="float: right; padding: 3px 0" type="text">进入</el-button>
               </div>
              <div class="text item">
              查询个人信息详情
             </div>
           </el-card>
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
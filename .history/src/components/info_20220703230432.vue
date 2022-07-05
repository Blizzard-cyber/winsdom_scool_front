  <template>
   <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     <div class="cards">
        <el-row :gutter="50" >
          <el-col v-for="item in items" :span="8">
           <el-card shadow="hover" :body-style="{ height: '100px' }">
             <div slot="header" class="clearfix">
              <span>{{item.title}}</span>
              <el-button @click=""   style="float: right; padding: 3px 0" type="text">进入</el-button>
             </div>
              <div class="text item">
              <span>{{item.message}}</span>
              </div>
           </el-card>
          </el-col>
        </el-row>
     </div>
     <my-bottom/>
   </div>
   </div>
  </template>

 <script>

  export default {
    name: "Info",
    data() {
        return {
          items:[
            {title:'个人信息',message:'查询个人信息详情'},
            {title:'课程情况',message:'查询学生个人选课情况，学分和成绩情况'},
            {title:'课程表',message:'查询学生课程表'},
            {title:'我的成绩',message:'查询学生在校期间成绩详情'},
            {title:'考试安排',message:'查询学期考试课程安排'},
            {title:'毕业设计',message:'查询学生毕业设计情况'},
            {title:'学费缴纳信息',message:'查询学生缴费、欠费情况'},
            {title:'缴费报考信息',message:'查询学生学费、报考费信息'},
            {title:'实验室开放时间',message:'查询实验室开放时间'},
          ],
          items_row: [1, 2, 3],
          items_col: [1, 2, 3]
        };
    },
    method: {},
    
}
  </script>


<style>
 /* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  } */
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
  .el-card {
    border-radius: 4px;
    background: #fff;
    border: 1px solid #ebeef2;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 20px 0 20px;
    padding: 0;
  }
</style>
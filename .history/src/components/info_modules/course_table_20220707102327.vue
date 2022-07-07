<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <login-head/>
     <el-page-header @back="goBack" content="课程表"></el-page-header>
     <div class="box">
      <span>当前学期为{{this.semester}}</span>
      <div class="box-title1"> 
      <el-dropdown size="small" split-button type="primary"  @command="handleCommand">
        切换学期
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command=" 1">2020-2021 1</el-dropdown-item>
          <el-dropdown-item command="2">2020-2021 2</el-dropdown-item>
          <el-dropdown-item command="3">2021-2022 1</el-dropdown-item>
          <el-dropdown-item command="4">2021-2022 2</el-dropdown-item>
          <el-dropdown-item command="5">2022-2023 1</el-dropdown-item>
          <el-dropdown-item command="6">2022-2023 2</el-dropdown-item>
          <el-dropdown-item command="7">2023-2024 1</el-dropdown-item>
          <el-dropdown-item command="8">2023-2024 2</el-dropdown-item>
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
            prop="cid"
            label="课程代码"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="课程名称"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="type"
            label="课程类型"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="credit"
            label="学分"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="teacher"
            label="教师"
            width="100"
            align="center">
            </el-table-column>
          <el-table-column
            prop="title"
            label="职称"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="classroom"
            label="教室"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="week"
            label="上课周期"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="textbook"
            label="教材"
            width="100"
            align="center">
            <!-- <template slot-scope="scope">
                            <a @click="cancelDialog(scope.row)" style="color:blue;cursor:pointer">{{scope.row.textbook}}</a>
                        </template> -->

            <template slot-scope="scope">
              <div>
                 <a @click="drawer=true" style="color:blue;cursor:pointer">{{scope.row.textbook}}</a>
                <Drawer :closable="false" width="640" v-model="drawer">
                  <P :style="pStyle">教材信息</p>
                  <div class="demo-drawer-profile">
                    <Col span="24">
                        ISBN: Aresn
                    </Col>
                    <Col span="24">
                        书名: aresn@aresn.com
                    </Col>
                    <Col span="24">
                        作者: BeiJing
                    </Col>
                    <Col span="24">
                        出版时间: China
                    </Col>

                    <Col span="24">
                        出版时间: May 14, 1991
                    </Col>
                    <Col span="24">
                        版本: <a href="https://dev.iviewui.com" target="_blank">https://dev.iviewui.com</a>
                    </Col>

            </div>
            <Divider />
            </Drawer>
            </div>
              
             </template> 
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注"
            width="98"
            align="center">
          </el-table-column>
        </el-table>
      </div>
      <my-bottom/>
    </div>
   </div>
</template>

<style>
 .demo-drawer-profile{
        font-size: 14px;
    }
    .demo-drawer-profile .ivu-col{
        margin-bottom: 12px;
    }
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
       book:[],
        semester:1,
        drawer: false,
        pStyle: {
         fontSize: '24px',
         color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          display: 'block',
          marginBottom: '16px'
                },
        tableData: [{
          info: '第一大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
        },
          {
            info: '第二大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
          {
            info: '第三大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
          {
            info: '第四大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
          {
            info: '第五大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
          {
            info: '第六大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
        ],
        tableData_info: []
      }
  },
  mounted() {
    this.gettableData();
    this.gettableinfo();
    
  },
  methods: {
    initdata() {
      this.tableData= [{
          info: '第一大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
        },
          {
            info: '第二大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
          {
            info: '第三大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
          {
            info: '第四大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
          {
            info: '第五大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
          {
            info: '第六大节',
          mon: '',
          thu: '',
          wes: '',
          fur: '',
          fri: '',
          sta: '',
          sun: '',
          },
        ],
        this.tableData_info= []
      
      },
    
    getweek(num, course) {
      console.log(num);
      console.log(course);
      console.log(this.tableData[0]);
      if (num === '1') {
        this.tableData[0]['mon'] = course.coursename+'\n'+course.classroom;
      }
      else if(num=== '2'){
        this.tableData[1]['tue'] = course.coursename+'\n'+course.classroom;
      }
      else if(num=== '3'){
        this.tableData[2]['wed'] = course.coursename+'\n'+course.classroom;
      }
      else if(num=== '4'){
        this.tableData[3]['thu'] = course.coursename+'\n'+course.classroom;
      }
      else if(num=== '5'){
        this.tableData[4]['fri'] = course.coursename+'\n'+course.classroom;
      }
      else if(num=== '6'){
        this.tableData[5]['sat'] = course.coursename+'\n'+course.classroom;
      }
      else if(num=== '7'){
        this.tableData[6]['sun'] = course.coursename+'\n'+course.classroom;
      }
    },
   
    gettableData() {
      let cookie_id = this.$cookie.get('ID');
      let coursetable=[]
      this.$axios.get('http://127.0.0.1:8080/courseTable/' + cookie_id + '/' + this.semester).then(res => {

        for (let i = 0; i < res.data.length; i++) {
          let course = {};
          //console.log(course);
          course['coursename'] = res.data[i].course.name;
          course['classroom'] = res.data[i].course.classroom;
          let section = [];
          let str = res.data[i].courseTime.sections;
          let arr = str.split(';')
          for (let j = 0; j < arr.length; j++){
            let srr = arr[j].split(':')
            ;
            section.push(srr);
            
          }
          course['sections'] = section;
         
          //console.log(course+'grade:'+res.data.grade+'state:'+res.data.state)
          coursetable.push(course);
         // console.log(coursetable)
        }
        //console.log(coursetable)
        
        for (let index = 0; index < coursetable.length; index++) {
          let stutime = coursetable[index].sections
          //console.log(stutime)
          //console.log(coursetable[index])//同一节课不同时间
          for (let i = 0; i < stutime.length; i++) {
           
            if (stutime[i][1] === '1-2') {
              this.getweek(stutime[i][0], coursetable[index]);
            }
            else if (stutime[i][1] === '3-4') {
              this.getweek(stutime[i][0], coursetable[index]);
            }
            else if (stutime[i][1] === '5-6') {
              this.getweek(stutime[i][0], coursetable[index]);
            }
            else if (stutime[i][1] === '7-8') {
              this.getweek(stutime[i][0], coursetable[index]);
            }
            else if (stutime[i][1] === '9-10') {
              this.getweek(stutime[i][0], coursetable[index]);
            }
            else {
              this.getweek(stutime[i][0], coursetable[index]);
            }
          }
        }
        
      })
//console.log(this.tableData)
    },
    gettableinfo() {
      let cookie_id = this.$cookie.get('ID');
      let coursetable = []
      this.$axios.get('http://127.0.0.1:8080/courseTable/' + cookie_id + '/' + this.semester).then(res => {
        for (let i = 0; i < res.data.length; i++){
          //console.log(res.data[i].course)
          let course = res.data[i].course;
          course['teacher'] = res.data[i].teacher.name;
          course['title'] = res.data[i].teacher.title;
          course['week'] = res.data[i].courseTime.weeks;
          if (res.data[i].textbook) {
            course['textbook'] = res.data[i].textbook.name;
           course['textbook_id']=res.data[i].textbook.id;
            //console.log(this.book)
          }
          this.tableData_info.push(course);
        }
        gettextbook();
      })
    },
    gettextbook() {
      for (let i = 0; i < this.tableData_info.length; i++) {
        if (this.tableData_info[i].textbook_id) {
          this.$axios.get('http://localhost:8080/courseTable/textbook/' + this.tableData_info[i].textbook_id).then(res => {
            this.book.push(res.data);
          })
        }
        else {
          this.book.push('');
        }
      }
    },
    
      goBack() {
      this.$router.replace('/Info')
    },
      handleCommand(command) {
        this.$message('学期切换到' + command);
        this.semester = command;
        this.initdata();
        this.gettableData();
        this.gettableinfo();
    }
    // cancelDialog(scope) {
    //   this.$message('确定取消吗？');
    //   }
     }
  }
</script>

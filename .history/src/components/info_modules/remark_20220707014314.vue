<template>
    <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
      <!--头部-->
      <login-head/>
      <el-page-header @back="goBack" content="我的成绩"></el-page-header>
        
        <el-container class="hr-container" v-loading="loadingFlag">
            <el-card class="hr-card" v-for="(user,index) in users" :key="index">
                <div slot="header" class="clearfix">
                    <span>{{user.name}}</span>
                    <!-- <el-button style="float: right; padding: 3px 0;color: #e30007;" type="text"
                               icon="el-icon-delete" @click="deleteUser(user)"></el-button> -->
                    <!--<el-button style="float: right; padding: 3px; color: #1890ff;" type="text"
                               icon="el-icon-edit" @click="dialogForm(user)"></el-button>-->
                </div>
                <div>
                    <div class="img-container">
                        <img :src="scrimg" :alt="user.name" :title="user.name" class="userface-img">
                    </div>
                    <div class="userinfo-container">
                        <div>课程代码：{{user.cid}}</div>
                        <div>考试科目：{{user.name}}</div>
                        <div>学分：{{user.credit}}</div>
                        <div>成绩：{{user.grade}}</div>
                        
                        <!-- <div>用户角色：
                            <el-tag type="success" style="margin-right: 4px" v-for="(role,indexj) in user.roles"
                                    :key="indexj" closable :disable-transitions="false" @close="handleClose(user, role)">{{role.description}}
                            </el-tag>
                            <el-popover
                                    placement="right"
                                    title="角色列表"
                                    @show="showPop(user)"
                                    @hide="hidePop(user)"
                                    width="200"
                                    trigger="click">
                                <el-select v-model="selectedRoles" multiple placeholder="请选择">
                                    <el-option
                                            v-for="(r,indexk) in exceptRoles"
                                            :key="indexk"
                                            :label="r.description"
                                            :value="r.id">
                                    </el-option>
                                </el-select>
                                <el-button slot="reference" icon="el-icon-more" type="text"></el-button>
                            </el-popover>
                        </div> -->
                        
                    </div>
                </div>
            </el-card>

        </el-container>
        
        <!-- <el-pagination background @current-change="handlePageChange" layout="prev, pager, next"
                       :page-size="8" :total="total" style="display: flex;justify-content: center"
                       :current-page.sync="currPage"></el-pagination> -->
     <my-bottom/>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Lab",
        data() {
            return {
                scrimg:"../../../static/img/logolo.png",
                loadingFlag: false,
                currPage: 1,
                keywords: '',
                dialogFormVisible: false,
                total: 0,
                currUser: [],
                users: [],
                allroles: [],
                selectedRoles: [],
                exceptRoles: [],
            }
        },
        mounted() {
            // this.initUsers(1, 8);
            this.initAlldata();
        },
    methods: {
            goBack() {
                    this.$router.replace('/Info')
                    },
            doSearch() {
                //this.initUsers(1, 8);
        },
        initAlldata() { 
             let cookie_id = this.$cookie.get("ID")
            let url = 'http://127.0.0.1:8080/study/' + cookie_id;
                
            this.$axios.get(url).then(res => {
                console.log(res.data)
            for (let i = 0; i < res.data.length; i++){
                let course = res.data[i].course;
                console.log(course);
                course['grade'] = res.data[i].grade;
                console.log(course);
                    //console.log(course+'grade:'+res.data.grade+'state:'+res.data.state)
                this.users.push(course);
        }
       
      })
        },
            // deleteUser(user) {
            //     let currUser = JSON.parse(window.localStorage.getItem('user'));
            //     if (currUser.id === user.id) {
            //         this.$message.warning('不能删除自己');
            //         return;
            //     }
            //     this.$confirm('是否永久删除【' + user.name + '】的信息？', '提示', {
            //         confirmButtonText: '确定',
            //         cancelButtonText: '取消',
            //         type: 'warning'
            //     }).then(() => {
            //         this.deleteRequest("/web/system/user/" + user.id).then(resp => {
            //           if (resp) {
            //               this.initUsers(1, 8);
            //           }
            //         });
            //     }).catch(() => {
            //         this.$message({
            //             type: 'info',
            //             message: '已取消删除'
            //         });
            //     });
            // },
            // initUsers(pageNum, pageSize) {
            //     this.loadingFlag = true;
            //     this.getRequest("/web/user/?keywords=" + this.keywords + '&pageNum=' + pageNum + '&pageSize=' + pageSize).then(resp => {
            //         this.loadingFlag = false;
            //         if (resp) {
            //             this.users = resp.data.list;
            //             this.total = resp.data.total;
            //         }
            //         for (let i = 0; i < this.users.length; i++) {
            //             if (this.users[i].avatar === '') {
            //                 this.users[i].avatar = require('../../assets/user_pic_middle.gif');
            //             }
            //         }
            //     });
            // },
            // initAllRoles() {
            //     this.getRequest("/web/user/allRoles").then(resp => {
            //         if (resp) {
            //             this.allroles = resp.data;
            //         }
            //     });
            // },
            // enabledChange(user) {
            //     this.getRequest('/web/user/changeEnabled?uid=' + user.id + '&enabled=' + user.enabled).then(resp => {
            //         if (resp) {
            //             console.log(resp);
            //         }
            //     });
            // },
            // showPop(user) {
            //     this.exceptRoles = [];
            //     console.info(this.allroles);
            //     let notExist = true;
            //     for (let i = 0; i < this.allroles.length; i++) {
            //         notExist = true;
            //         for (let j = 0; j < user.roles.length; j++) {
            //             if (user.roles[j].id === this.allroles[i].id) {
            //                 notExist = false;
            //                 break;
            //             }
            //         }
            //         if (notExist) {
            //             this.exceptRoles.push(this.allroles[i]);
            //         }
            //     }
            // },
            //hidePop(user) {
            //     if (this.selectedRoles.length !== 0) {
            //         let roleId = [];
            //         let userId = user.id;
            //         let form = new FormData();
            //         for (let i = 0; i < this.selectedRoles.length; i++) {
            //             roleId.push(this.selectedRoles[i]);
            //         }
            //         form.append('userId', userId);
            //         form.append('roleId', roleId);
            //         this.postRequest("/web/user/addRoles", form).then(resp => {
            //             if (resp) {
            //                 //处理user.roles添加role的信息，刷新当前页面
            //                 this.initUsers(this.currPage, 8);
            //             }
            //         });
            //         //最后将selectedRoles清空
            //         this.selectedRoles = [];
            //     }
            //},
            /*dialogForm(user) {
                this.dialogFormVisible = true;
                this.currUser = JSON.parse(JSON.stringify(user))
            },*/
             //handleClose(user, role) {
            //     //处理角色被删除
            //     this.deleteRequest("/web/userDeleteRole/" + user.id + "/" + role.id).then(resp => {
            //         if (resp) {
            //             let newRoles = [];
            //             for (let i = 0; i < user.roles.length; i++) {
            //                 if (user.roles[i].id === role.id) {
            //                     console.info('删除该用户角色信息....' + role.name);
            //                 } else {
            //                     newRoles.push(user.roles[i]);
            //                 }
            //             }
            //             user.roles = newRoles;
            //         }
            //     });
             //},
            /*updateUser(user){
                //修改用户信息
                console.log('修改成功');
                console.log(user);
                this
                this.dialogFormVisible = false;
            },
            cancelUpdate() {
                this.$message.info('已取消修改');
                this.dialogFormVisible = false;
            },*/
             handlePageChange(val) {
            //     this.initUsers(val, 8);
             },
        }
    }
</script>

<style>
.el-page-header{
    margin-top: 20px;
  }
    .userinfo-container div {
        font-size: 20px;
        color: #409eff;
    }

    .userinfo-container {
        margin-top: 20px;
    }

    .img-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .userface-img {
        width: 72px;
        height: 72px;
        border-radius: 72px;
    }

    .hr-container {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .hr-card {
        width: 350px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .el-card{
        width: 300px;
    }
</style>

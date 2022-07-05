<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <login-head/>
     <el-page-header @back="goBack" content="毕业设计"></el-page-header>
      <div class="block1">
        <Col span="24">
            <Card>
                <p slot="title">毕设题目</p>
                <span>毕设要求</span>
            </Card>
        </Col>
    </div>
    <div class="block2">
        <Col span="24">
            <Card>
                <p slot="title">指导老师</p>
                <span>老师要求及通知</span>
            </Card>
        </Col>
    </div>
     <div class="block3">
        <Col span="24">
            <Card>
                <span>最终得分：</span>
            </Card>
        </Col>
    </div>
      <my-bottom/>
    </div>
   </div>
</template>

<script>
export default {
    data() {
        item: [
            {

            }
        ]
    },
    methods: {
        goBack() {
            this.$router.replace('/Info')
        },
        getInfo() {
            let cookie_id = this.$cookie.get('ID');
            let cookie_password = this.$cookie.get('password');
            console.log(cookie_id)
            console.log(cookie_password)

        }
    }
}
</script>

<style>
.el-page-header{
    margin-top: 20px;
  }
.block1{
    margin-top: 20px;
    margin-bottom: 10px;
}
.block2{
    margin-top: 20px;
    margin-bottom: 10px;
}
</style>
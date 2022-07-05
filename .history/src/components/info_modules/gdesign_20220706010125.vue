<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
     <el-page-header @back="goBack" content="个人信息"></el-page-header>
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
}
}
</script>

<style>
.block1{
    margin-top: 20px;
    margin-bottom: 10px;
}
.block2{
    margin-top: 20px;
    margin-bottom: 10px;
}
</style>
<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <login-head/>
     <el-page-header @back="goBack" content="毕业设计"></el-page-header>
      <div class="block1">
        <Col span="24">
            <Card>
                <p slot="title">毕设题目:{{items.gdesignInfo.title}}</p>
                <span>毕设要求:{{items.gdesignInfo.demand}}</span>
            </Card>
        </Col>
    </div>
    <div class="block2">
        <Col span="24">
            <Card>
                <p slot="title">指导老师:{{items.teacher.name}}</p>
                <!-- <span>老师要求及通知</span> -->
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
        return {
            items: {}
        }
    },
    mounted() {
        this.getInfo()
    },
    methods: {
        goBack() {
            this.$router.replace('/Info')
        },
        getInfo() {
            let cookie_id = this.$cookie.get('ID');
            this.$axios.get('http://127.0.0.1:8080/gdesign/' + cookie_id).then(response => {
                this.items = response.data;
                console.log(this.items);
            })

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
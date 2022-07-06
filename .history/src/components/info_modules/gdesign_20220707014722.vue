<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <login-head/>
     <el-page-header @back="goBack" content="毕业设计"></el-page-header>
      <div class="block">
        <Col span="24">
            <Card>
                <p slot="title">毕设题目:{{items.gdesignInfo.title}}</p>
                <span>毕设要求:{{items.gdesignInfo.demand}}</span>
            </Card>
        </Col>
    </div>
    <div class="block">
        <Col span="24">
            <Card>
                <p slot="title">指导老师:{{items.teacher.name}}</p>
                <span>指导老师职称:{{items.teacher.title}}</span>
                <!-- <span>老师要求及通知</span> -->
            </Card>
        </Col>
    </div>
     <div class="block">
        <Col span="24">
            <Card>
                <span>最终得分：{{items.grade}}</span>
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
            this.$axios.get('http://127.0.0.1:8080/gdesign/' + cookie_id).then(response =>
            if(response.data) {
                this.items = response.data.data
            }
            )
            {
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
.block{
    margin-top: 20px;
    margin-bottom: 10px;
    width: 800px;
    margin-left: 100px;
}

</style>
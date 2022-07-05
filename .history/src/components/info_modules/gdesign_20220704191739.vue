<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
      <div class="block1">
        <Col span="24">
            <Card>
                <p slot="title">毕设题目</p>
                <span>毕设要求</span>
            </Card>
        </Col>
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
.block1{
    margin-top: 20px;
    margin-bottom: 10px;
}
</style>
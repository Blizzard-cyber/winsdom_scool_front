<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
     <my-head/>
      <div class="block1">
        <Row>
        <Col span="11">
            <Card>
                <p slot="title">The standard card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <p slot="title">Disable card with hover shadows</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
    </Row>
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

</style>
<template>
    <el-empty>
  <el-button type="primary" @click="goback">按钮</el-button>
</el-empty>
</template>
<script>
export default {
    data() {
        return {
            items: {}
        }
   
    },
    methods: {
        goBack() {
            this.$router.replace('/Info')
        },
        getInfo() {
            let cookie_id = this.$cookie.get('ID');
            this.$axios.get('http://
}
</script>

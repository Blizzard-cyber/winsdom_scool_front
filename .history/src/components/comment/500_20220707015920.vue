<template>
<el-empty>
  <el-button type="primary" @click="goback">回到上一页</el-button>
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
    }
}
</script>

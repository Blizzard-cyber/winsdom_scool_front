<template>
  <h1>test</h1>
</template>

<script>
export default {
    name: 'Info',
    props: {
        info: {
        type: Object,
        required: true
        }
    },
    data() {
        return {
        isOpen: false
        }
    },
    methods: {
        toggle() {
        this.isOpen = !this.isOpen
        }
    }

}
</script>

<style>

</style>
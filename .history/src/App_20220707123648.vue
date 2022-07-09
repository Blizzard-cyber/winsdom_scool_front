<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Alert } from 'view-design';

export default {
  name: 'app',
  mounted() {
    let cookie_id = this.$cookie.get('ID');
    alert({
      message: '欢迎回来，' + cookie_id,
      type: 'success'
    })
  }
}
</script>

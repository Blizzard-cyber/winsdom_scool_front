// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import '../static/css/main.css'
import '../static/js/jquery-3.2.1.min'

import SchedulingTable from "@lanserdi/scheduling-table"
VUE.use(SchedulingTable)


Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
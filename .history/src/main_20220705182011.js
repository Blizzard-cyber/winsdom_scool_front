// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import '../static/css/main.css'
import '../static/js/jquery-3.2.1.min'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from 'axios';
import VueAxios from "vue-axios";
import jsCookie from 'js-cookie';

Vue.prototype.$cookie = jsCookie; 
Vue.use(VueAxios, axios)
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
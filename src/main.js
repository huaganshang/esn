import 'src/asset/css/reset';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/';
import routes from './router/';
import axios from 'axios';
import http from './config/http';
import 'src/asset/libs/flexible/flexible.debug';

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

Vue.prototype.$http = axios;

new Vue({
    store,
    router
}).$mount('#app');

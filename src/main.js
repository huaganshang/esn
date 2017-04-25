import './asset/css/reset';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/';
import routes from './router/';
import axios from 'axios';
import http from './config/http';
import './asset/libs/flexible/flexible.debug';

Vue.prototype.$http = axios;

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    next();
});

new Vue({
    store,
    router
}).$mount('#app');

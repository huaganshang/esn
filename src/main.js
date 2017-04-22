import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/';
import routes from './router/';
import './style/css/normalize';

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

new Vue({
    store,
    router
}).$mount('#app');

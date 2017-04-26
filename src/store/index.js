import Vue from 'vue';
import Vuex from 'vuex';

import user from './userinfo/';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: user
    }
})

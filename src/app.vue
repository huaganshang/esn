<style scoped>

</style>

<template>
    <div>
        <app-header title="审批">
            <div slot="left">
                <span v-on:click="goBack">返回</span>
                <span class="header-close" v-show="showClose">关闭</span>
            </div>
            <div slot="right">...</div>
        </app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from 'app_component/header/header';
export default {
    data(){
        return {
            showClose: false
        }
    },
    components: {
        AppHeader,
    },
    methods: {
        goBack: function(){
            this.$router.back(-1);
        },
    },
    watch: {
        '$route': function(to, from) {
            if(to.path === '/'){
                this.showClose = true;
            }
        }
    },
    created(){
        console.log(`当前环境：${__ENV__}`);
        //获取用户信息
        this.$http.get('https://api.growingio.com/v2/9b676ca07803bdc0/web/pv').then((res) => {
            res = {
                code: 0,
                data: {
                    username: 'huaganshang',
                    token: 'e018e62a63eb9a5089af5ab9d5304de5',
                }
            };
            this.$store.dispatch('update_userinfo', {
                userinfo: res.data
            });
        }).catch((error) => {
            console.log(error);
        });
    },
    mounted(){
        setTimeout(function(){
            console.log(`用户名为：${this.$store.getters.getUserInfo.username}`)
            console.log(`token为：${this.$store.getters.getToken}`)
            console.log(`用户名为：${this.$store.state.user.userinfo.username}`)
            console.log(`token为：${this.$store.state.user.userinfo.token}`)
        }.bind(this), 1000);
    }
};
</script>

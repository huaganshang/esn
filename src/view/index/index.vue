<style>

</style>

<template>
    <div>
        <common-header title="登录">
            <router-link slot="left" to="/">返回</router-link>
        </common-header>
        <div>
            {{msg}}
        </div>
    </div>
</template>

<script>
import header from 'YY_component/header';
export default {
    data() {
        return {
            msg: 'hello'
        }
    },
    components:{
        'common-header' : header
    }
};
</script>

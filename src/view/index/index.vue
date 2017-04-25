<style scoped lang="postcss">
.selector{
    width: 375px;
    height: 64px;
    font-size: 28px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: flex;
    border-radius: 4px;
}
</style>

<template>
    <div>
        <app-header title="登录">
            <router-link slot="left" to="/">返回</router-link>
            <h1 slot="center">日志日志日志日志日志日志</h1>
            <div slot="right">...</div>
        </app-header>
        <div class="selector">
            {{msg}}
        </div>
    </div>
</template>

<script>
import header from 'app_component/header';
export default {
    data() {
        return {
            msg: 'hello'
        }
    },
    components:{
        'app-header' : header
    }
};
</script>

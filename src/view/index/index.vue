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
        <common-header title="登录">
            <router-link slot="left" to="/">返回</router-link>
        </common-header>
        <div class="selector">
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

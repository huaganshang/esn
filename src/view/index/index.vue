<style scoped lang="postcss">
.selector{
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
        <app-header title="审批">
            <div slot="left">返回</div>
            <div slot="right">...</div>
        </app-header>
        <div class="selector">
            {{msg}}
        </div>
    </div>
</template>

<script>
import AppHeader from 'app_component/header/header';
export default {
    data() {
        return {
            msg: 'hello'
        }
    },
    components:{
        AppHeader,
    }
};
</script>

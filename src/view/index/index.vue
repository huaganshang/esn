<style scoped lang="postcss">
div{
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>

<template>
    <div>
        <router-link to="detail">{{msg}}</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '点击我跳转'
        }
    },
    mounted(){
        //
    }
};
</script>

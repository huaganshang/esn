<style scoped lang="postcss">
h3{
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>

<template>
    <div>
        <h3 v-text="msg"></h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'detail'
        }
    },
    mounted(){
        //
    }
};
</script>

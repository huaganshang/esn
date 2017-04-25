<style scope lang="postcss">
.header{
    color: #fff;
    height: .9rem;
    display:flex;
    background: #24292e;
    justify-content: center;
    align-items: center;
    padding: 0 .10rem;
    font-size: 14px;
}
.item{
    flex: 1;
}
.left{
    text-align: left;
}
.center{
    flex: 2;
    text-align: center;
}
.right{
    text-align: right;
}
.item a{
    color: #fff;
    text-decoration: none;
}
</style>

<template>
    <div class="header">
        <div class="item left">
            <slot name="left">返回</slot>
        </div>
        <div class="item center">
            <slot name="center">审批</slot>
        </div>
        <div class="item right">
            <slot name="right">...</slot>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
        this.$http.get('https://api.growingio.com/v2/9b676ca07803bdc0/web/pv').then(function(res){
            // console.log(11, res);
        }).catch(function(error){
            // console.log(22, error);
        });
    }
};
</script>

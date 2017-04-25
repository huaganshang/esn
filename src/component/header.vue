<style scope lang="postcss">
.header{
    color: #fff;
    height: 90px;
    display: flex;
    background: #24292e;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
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
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.right{
    text-align: right;
}
.item a{
    color: #fff;
    text-decoration: none;
}
[data-dpr='2'] *{
    font-size: 24px;
}
[data-dpr='3'] *{
    font-size: 36px;
}
</style>

<template>
    <div class="header">
        <div class="item left">
            <slot name="left"></slot>
        </div>
        <div class="item center">
            <slot name="center"></slot>
        </div>
        <div class="item right">
            <slot name="right"></slot>
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

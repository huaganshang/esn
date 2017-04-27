<style scoped lang="postcss">
.header{
    color: #fff;
    height: 90px;
    display: flex;
    background: #24292e;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
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
    width:100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.right{
    text-align: right;
}
.header-close{
    padding-left: 10px;
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
            <slot name="center">
                <span v-text="title"></span>
            </slot>
        </div>
        <div class="item right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: '标题'
        },
    },
    data(){
        return {

        }
    },
};
</script>

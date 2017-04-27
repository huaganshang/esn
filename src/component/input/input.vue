<template>
<div>
<input class="app-input" v-if="type === 'text'" :placeholder="placeholder" v-model="value" :disabled="disabled" />
<textarea class="app-input" v-else :placeholder="placeholder" v-model="value" :disabled="disabled"></textarea>
</div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {

        }
    },
    mounted() {
        console.log(this.value);
    }
}
</script>

<style scoped lang="postcss">
.app-input{
    width: 100%;
    line-height: 1.5;
    border: 1px solid #d7dde4;
    border-radius: 6px;
    color: #657180;
    background: #fff;
    padding: 6px;
    cursor: text;
    outline: none;
    font-weight: 300;
    box-sizing: border-box;
}
input.app-input{
    height: 64px;
}
textarea.app-input{
    max-width: 100%;
    height: auto;
    min-height: 128px;
    vertical-align: bottom;
}
::-webkit-input-placeholder{
    color: #c3cbd6;
}
</style>

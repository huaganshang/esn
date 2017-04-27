<template>
<button :class="classes" :disabled="disabled">
    <span><slot></slot></span>
</button>
</template>

<script>
import cx from 'classnames'
export default {
    props: {
        className: {
            type: String,
            default: 'app-button'
        },
        type: {
            type: String,
            default: ''
        },
        shape: {
            type: String,
            default: ''
        },
        long: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },

    },
    computed: {
        classes() {
            return cx({
                [this.className]: !!this.className,
                [`${this.className}-${this.type}`]: !!this.type,
                [`${this.className}-long`]: !!this.long,
                [`${this.className}-circle`]: !!this.shape,
            })
        }
    }
}
</script>

<style scoped lang="postcss">
.app-button{
    margin: 0;
    height: 64px;
    line-height: 64px;
    padding: 0 30px;
    display: inline-block;
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    outline: none;
    font-weight: 300;

    color: #657180;
    background: #f7f7f7;
    border-color: #d7dde4;
}
.app-button-primary{
    color: #fff;
    background: #39f;
    border-color: #39f;
}
.app-button-success{
    color: #fff;
    background: #0c6;
    border-color: #0c6;
}
.app-button-warning{
    color: #fff;
    background: #f90;
    border-color: #f90;
}
.app-button-error{
    color: #fff;
    background: #f30;
    border-color: #f30;
}
.app-button-long{
    width: 100%;
}
.app-button[disabled]{
    color: #c3cbd6;
}
.app-button-icon-only{
    border-radius: 50%;
}
.app-button-circle{
    border-radius: 32px;
}
</style>

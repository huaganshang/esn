<style scoped lang="postcss">
.button button{
    margin: 4px 0;
}
.input input, .input .textarea{
}
</style>

<template>
<div>
    <div class="button">
        <app-button>默认按钮</app-button>
        <app-button disabled>disabled</app-button>
        <app-button type="primary">信息按钮</app-button>
        <app-button type="success">成功按钮</app-button>
        <app-button type="warning">警告按钮</app-button>
        <app-button type="error">错误按钮</app-button>

        <app-button type="primary" shape="circle">圆角按钮</app-button>
    </div>
    <div class="input">
        <app-input type="text" v-model="value" placeholder="请输入..." style="width: 500px;"></app-input>
        <app-input type="textarea" v-model="value" placeholder="禁用的输入框" disabled></app-input>
        <app-input type="textarea" v-model="value" placeholder="请输入..." style="width: 500px;"></app-input>
    </div>
</div>
</template>

<script>
import AppButton from 'app_component/button/button';
import AppInput from 'app_component/input/input';
export default {
    data() {
        return {
            value: ''
        }
    },
    components: {
        AppButton,
        AppInput
    },
    mounted() {
        //
    }
};
</script>

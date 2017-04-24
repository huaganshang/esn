<style>
.header{font-size: 14px;}
</style>

<template>
    <div class="header">
        {{msg}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'Hello Word.'
        }
    },
    mounted(){
        this.$http.get('https://api.growingio.com/v2/9b676ca07803bdc0/web/pv').then(function(res){
            console.log(11, res);
        }).catch(function(error){
            console.log(22, error);
        });
    }
};
</script>

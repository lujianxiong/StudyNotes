<!-- 首页组件 -->
<!-- 模板里面写HTML代码 -->
<template>
    <!-- 所有的内容都要被根节点包含起来，一般都是用div作为根节点 -->
    <div id="home">

        <v-header></v-header>
        <br>
        <hr>

        <v-life v-if="flag"></v-life>
        <br>
        <br>
        <br>

        <button @click="flag = !flag">挂载、卸载life组件</button>

    </div>

</template>

<script>
    // 引入头部组件
    import Header from './Header.vue';

    import Life from './Lify.vue';


    export default{
        data(){
            return {
                msg:'我是一个首页组件',
                flag:true
            }
        },
        methods: {
            run(){
                alert(this.msg);
            }
        },components: {
            'v-header':Header,
            'v-life':Life
        }
    }

</script>

<style lang="scss" scoped>

        h2{
            color:red;
        }

</style>

<!-- 让h2样式只在home页面生效：
        第一种方式：在子组件中div给一个id，在style部分，给样式套上#id{}

        第二种方式：给style标签添加一个属性scoped （scoped局部作用域）


-->

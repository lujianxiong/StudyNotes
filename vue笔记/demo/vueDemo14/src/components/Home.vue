<template>
    <div id="home">
        首页组件

        <button @click="getData">请求数据</button>

    </div>

</template>

<script>


    import Axios from 'axios';

    export default{
        data(){
            return {
                msg:'我是一个首页组件',
                flag:true
            }
        },
        methods: {
            getData(){
                var api = '';
                axios.get(api).then((response) => {    //使用箭头函数可以避免this指向的问题
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
                
            }
        },
        mounted(){  //生命周期函数
            this.getData();

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

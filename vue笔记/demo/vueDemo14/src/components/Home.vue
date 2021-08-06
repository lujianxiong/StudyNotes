<template>
    <div id="home">
        
        
        <v-header :title="title" :homemsg="msg" :run="run" :home="this"></v-header>

        首页组件

    </div>

</template>

<script>
/**
 * 父组件给子组件传值：
 *     1、父组件在调用子组件的时候 绑定动态属性
 *         <v-header :title="title"></v-header>
 *     2、在子组件里面通过props中接受父组件传过来的数据
 *         props: ['title']
 * 
 * 父组件不仅可以给子组件传值还可以传方法：
 * 
 * 
 * 父组件还可以将当前父组件的实例给传过去
 * 
 * 
 * 除了上面props传递数据 props: ['title']，还可以通过props验证传过来的数据的合法性
 *     props:{
            'title':String,
            'homemsg':String,
            'run':Function,
            'home':Object
        }
 * 
 */ 
    import Header from './Header.vue';

    export default{
        data(){
            return {
                msg:'我是一个首页组件',
                title:'首页123'
            }
        },
        components:{
            'v-header':Header
        },
        methods:{
            run(data) {
                alert('我是home组件的run方法，接收到子组件传的参数：'+data);
            }
        }

    }

</script>

<style lang="scss" scoped>



</style>
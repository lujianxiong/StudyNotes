<template>
    <div>
        <h2>我是一个头部组件Header -- {{title}} -- {{homemsg}}</h2>

        <button @click="run('123')">执行父组件的run方法</button>
        <br>

        <button @click="getParent()">获取父组件的数据和方法</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg:'子组件的msg'
            }
        },
        methods:{
            getParent(){
                // alert(this.title);
                // alert(this.home.title);
                this.home.run();
            }

        },
        // props: ['title','homemsg','run','home']
        props:{
            'title':String,
            'homemsg':String,
            'run':Function,
            'home':Object
        }
    }
</script>
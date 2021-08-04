<template>
    <div id="life">
        生命周期函数的演示    --{{msg}}

        <br>

        <button @click='setMsg'>改变msg</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:'我是一个生命周期函数的组件'
            }
        },
        methods:{
            setMsg(){
                this.msg = '我是改变后的数据';
            }

        },
        beforeCreate(){
            console.log("实例创建之前 -- beforeCreate()函数...");
        },
        created(){
            console.log("实例创建完成 -- created()函数...");
        },
        beforeMount(){
            console.log("模板编译之前 -- beforeMount()函数...");
        },
        mounted(){    //请求数据、操作dom，放在mounted里面，这个必须要记住（放在其他地方会出问题，比如请求数据放在created中，请求了数据但时还没编译，更新数据会导致模板编译多次。）
            console.log("模板编译完成 -- mounted()函数...");
        },
        beforeUpdate(){
            console.log("数据更新之前 -- beforeUpdate()函数...");
        },
        updated(){
            console.log("数据更新完毕 -- updated()函数");
        },
        beforeDestroy(){    //页面销毁的时候要保存一些数据，就可以监听这个销毁前的生命周期函数，在这里面做一些操作
            console.log("实例销毁之前 -- beforeDestroy()函数");
        },
        destroyed(){
            console.log("实例销毁完成 -- destroyed()函数");
        }
    }
</script>
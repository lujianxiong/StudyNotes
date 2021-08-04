<template>
    <div id="home">
        首页组件

        <button @click="getData">请求数据</button>

    </div>

</template>

<script>
/**
*  vue请求数据：
*      ·vue-resource：  vue官方提供的vue的一个插件
*          第一步【安装】：进项目目录，执行命令 cnpm install vue-resource --save 去安装它  【注意：这里加--save是为了将这个模块写入package.json】
*          第二步【引入】：需要在main.js中引入: "import VueResource from 'vue-resource';"
*          第三步【use】：在main.js中写： Vue.use(VueResource);
*          第四步【使用】：在组件的一个方法中：
*              this.$http.get(地址).then(function(response){
*                      
*              },function(error){
*                  
*              }); 
*              也可以用ES6的箭头函数简化地写：
*              this.$http.get(地址).then(response => {
*                      
*              },error => {
*                  
*              });
*
*      ·axios：是一个第三方插件，不仅可以在vue中用，还可以在node.js中用，React中用
*          第一步【安装】：进入项目目录下，执行命令：cnpm install axios --save 去安装它
*          第二步【使用】：哪里用就在哪里引入，
*
*      ·fetch-jsonp    //这个先不管。
*/

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

<template>
  <div id="app">
    
    <!-- 虽然h2这个样式是在子组件中定义的，但是在根组件引用同样会生效 -->
    <!-- <h2>这是一个根组件</h2>

    {{msg}} -->

    <!-- 3、在模板中使用 -->
    <v-home></v-home>

    <hr>
    <br>

    <v-news></v-news>



  </div>

</template>

<script>
/** vue的生命周期函数/钩子函数:
 *       组件挂载、组件更新、组件销毁时触发的一系列方法 就叫做生命周期函数。
 * 
*/

// 1、引入组件
import Home from './components/Home';
import News from './components/News';

import storage from './model/storage';

export default {
  name: 'app',

  // 2、挂载组件
  components: {  //前面的组件名称不能和html标签名重复
    'v-home':Home,
    'v-news':News
  },

  data () {
    return {
      msg:'你好，vue'
    }
  },
  mounted(){
    console.log("我是一个生命周期函数")
  }

}
</script>

<style lang="scss">


</style>

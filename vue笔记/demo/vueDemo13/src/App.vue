<template>
  <div id="app">
    
    <v-home></v-home>

    <hr>
    <br>

    <v-news></v-news>


  </div>

</template>

<script>

import Home from './components/Home';
import News from './components/News';

import storage from './model/storage';

export default {
  name: 'app',

  components: {
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

<template>
  <div id="app">
    
    <v-home></v-home>


  </div>

</template>

<script>
import Home from './components/Home';

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

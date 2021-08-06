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
    'v-home':Home
  },

  data () {
    return {
      msg:'你好，vue'
    }
  }

}
</script>

<style lang="scss">


</style>

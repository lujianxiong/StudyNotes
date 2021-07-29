<template>
  <div id="app">

    <!-- 双向数据绑定 -->

    <h2>{{msg}}</h2>

    <input type="text" v-model="msg"/> <br>

    <button v-on:click="getMsg()">获取表单数据</button> <br>

    <button v-on:click="setMsg()">设置表单数据</button> <br>

    <hr><br>

    <!-- 通过ref实现获取dom节点 -->
    <input type="text" ref="userInfo" /> <br>
    <button v-on:click="getInputValue()">获取表单数据</button> <br><br>

    <div ref="box">我是一个box</div>




  </div>
</template>

<script>
export default {
  /**
  双向数据绑定 MV VM
  M：model
  V：VIEW
  MVVM：model的改变会影响视图view,view视图会反过来影响model

  双向数据绑定必须在表单里面使用！！！
  input就是一个最简单的表单
   */

  name: 'app',
  data () {
    return {
      msg: '古力娜扎yyds'
    }
  },
  methods:{
    getMsg(){
      alert(this.msg);
    },

    setMsg(){
      this.msg = "老色枇";
    },

    getInputValue(){
        //vue获取dom节点(通过$refs获取)
        console.log(this.$refs.userInfo);
        
        alert(this.$refs.userInfo.value);


         this.$refs.box.style.background='red';  //原生js的dom操作
        
    }

  }
}
</script>

<style lang="scss">

</style>

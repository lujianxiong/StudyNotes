<template>
  <div id="app">


    <button v-on:click="run1()">执行方法的第一种写法</button>

    <button @click="run2">执行方法的第二种写法</button>
    <br>

    <button @click="getMsg">获取data中msg的数据</button>

    <br><br><br>

    <button @click="requestData">请求数据</button>

    <ul>
      <li v-for="(item,key) in list" :key="key">
        {{key}}----{{item}}
      </li>
    </ul>

    <br><br><br>

    <button data-id="999" @click="eventFunction($event)">事件对象</button>



    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[],
    }
  },
  methods:{
    run1:function(){
      alert('这是一种方式');
    },
    
    //ES6方法的简写方式，即去掉:function
    run2(){
      alert('这是另一种方式');
    },
    getMsg(){
      alert(this.msg)
    },
    requestData(){
      for(var i=0; i<10; i++){
        this.list.push('我是第'+i+'条数据');
      }
    },
    eventFunction(e){
      console.log(e);

      //e.srcElement   即当前的dom节点
      
      //通过事件对象获取dom节点，设置背景颜色
      e.srcElement.style.background = 'red';

      //获取自定义属性的值
      console.log(e.srcElement.dataset.id);

      //通过dom节点getAttribute
      console.log(e.srcElement.getAttribute('data-id'));


    }
  }
}
</script>

<style>

</style>

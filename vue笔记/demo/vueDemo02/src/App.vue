<template>
  <div id="app">

    <h2>{{msg}}</h2>
    <br>

    <div :title='title'>鼠标移上来看一下</div>
    <br>

    <!-- 绑定属性src -->
    <img :src="url"/>
    <br>

    <!-- 绑定HTML:（v-html） -->
    <div v-html="h"></div>

    <!-- 绑定数据：（v-text，其实{{}}就是v-text的简写） -->
    <div v-text="msg"></div>
    <br>

    <div v-bind:class="{'red':flag}">
      我是一个div
    </div>
    <br>

    <div :class="{'red':flag,'blue':!flag}">
      我是另一个div
    </div>
    <br>


    <!-- 绑定属性class：v-bind:class="" -->
    <br>
    <br>

    循环list，让第一个数据高亮显示
    <ul>
      <li v-for="(item,key) in list" :class="{'red':key==0,'blue':key==1}" :key="key">
        {{key}}------{{item}}
      </li>
    </ul>

    
    <!-- 什么时候需要绑定属性?当class=""中有数据是从data中取的时候 -->
    <div class="box">
      我是一个div
    </div>
    <br>
    <br>

    <!-- 绑定属性style：v-bind:style="" -->
    <div class="box" :style="{'width':boxWidth+'px'}">
      我是另一个div
    </div>


    <br>
    <br>

    <input type="text" v-model="msg" />

    <br>
    <br>
    <br>

    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '你好Vue！',
      title:'古力娜扎yyds',
      url:'https://pic3.zhimg.com/80/v2-62847ee28770b725d0593ee348ec4f5d_720w.jpg?source=1940ef5c',
      h:'<h2>我是h2呀</h2>',
      flag: false,
      list:[
        '111',
        '222',
        '333'
      ],
      boxWidth:500,

    }
  }
}
</script>

<style lang="scss">
  .red{
    color:red;
  }
  .blue{
    color:blue;
  }
  
  .box{

    height:100px;
    
    width:100px;

    background:red;
  }



</style>

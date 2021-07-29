<template>
  <div id="app">

  <input type="text" v-model="todo" @keyup.enter="add" />

  <button @click="add">增加</button>

  <br><hr>

  <h2>进行中</h2>
  <ul>
    <li v-for="(item,key) in list" v-if="!item.checked">
      <input type="checkbox" v-model="item.checked" @change="saveList"/> {{key}}-{{item.title}}------- <button @click="del(key)">删除</button>
    </li>
  </ul>

  <br><br><br>

  <h2>已完成</h2>
  <ul>
    <li v-for="(item,key) in list" v-if="item.checked">
      <input type="checkbox" v-model="item.checked" @change="saveList"/> {{key}}-{{item.title}}------- <button @click="del(key)">删除</button>
    </li>
  </ul>
    
  </div>
</template>

<script>
/**
 * 定义清单的项为一个对象
 * 
 * 
 */

import storage from './model/storage';

export default {
  name: 'app',
  data () {
    return {
      todo:'',
      list:[
        {
          title:'heiheihei',
          checked:true,
        },
        {
          title:'hahaha',
          checked:false,
        },
      ],

    }
  },
  methods:{
      add(){
        this.list.push({
          title:this.todo,
          checked:false,
        });  //todo前面要加this才行
        this.todo = '';
        // localStorage.setItem('list',JSON.stringify(this.list));
        storage.set('list',this.list);
      },
      del(index){
        this.list.splice(index,1);
        // localStorage.setItem('list',JSON.stringify(this.list));
        storage.set('list',this.list);
      },
      saveList(){
        // localStorage.setItem('list',JSON.stringify(this.list));
        storage.set('list',this.list);
      }
  },
  mounted(){  //生命周期函数（vue页面刷新就会触发的方法）
    // var list = JSON.parse(localStorage.getItem('list'));
    var list = storage.get('list');
    if(list){  //如果list存在，则赋给this.list
      this.list = list;
    }
  }
}
</script>

<style lang="scss">


</style>

<template>
  <div id="app">

  <input type="text" v-model="todo" @keyup.enter="add" />

  <button @click="add">增加</button>

  <br><hr>

  <h2>进行中</h2>
  <ul>
    <li v-for="(item,key) in list" v-if="!item.checked">
      <input type="checkbox" v-model="item.checked"/> {{item.title}}------- <button @click="del(key)">删除</button>
    </li>
  </ul>

  <br><br><br>

  <h2>已完成</h2>
  <ul>
    <li v-for="(item,key) in list" v-if="item.checked">
      <input type="checkbox" v-model="item.checked"/> {{item.title}}------- <button @click="del(key)">删除</button>
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
      },
      del(index){
        this.list.splice(index,1);
      }
  }
}
</script>

<style lang="scss">


</style>

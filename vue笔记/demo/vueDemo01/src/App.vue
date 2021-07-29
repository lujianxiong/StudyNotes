<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <br>
    这是一个根组件 
    <br>
    <h3>{{obj.name}}</h3>
    <br>
    <hr>
    <br>

    <ul>
      <li v-for="(index,item) in list" :key="index"> 
          {{item}}
      </li>
    </ul>

    <br>
    <hr>
    <br>

    <ul>
      <li v-for="item in list2">
          {{item.title}}
      </li>
    </ul>

     <br>
    <hr>
    <br>

    <ul>
      <li v-for="item in list3">
          {{item.cate}}

          <ol>
            <li v-for="content in item.list">
              {{content.title}}
            </li>
          </ol>
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '你好Vue！',
      obj:{
        name:'Daxiong'
      },
      list:['1','2','3'],
      list2:[
        {'title':'中国'},
        {'title':'美国'},
        {'title':'法国'}
      ],
      list3:[
        {
          "cate":"国内新闻",
          "list":[
            {"title":"汶川大地震"},
            {"title":"全国各地持续高温"}
          ]
        },
        {
          "cate":"国际新闻",
          "list":[
            {"title":"美国疫情爆发"},
            {"title":"美国大选举行"}
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">


</style>

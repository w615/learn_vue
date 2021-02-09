<template>
  <div class="action">
    {{this.$store.state.value_1}}
    <button @click="valueCount">加一</button>
    <p>state.value:{{$store.state.user.value}}</p>
    <div>
      {{$store.getters.sub}}
    </div>
    <button @click='modifyState'>修改属性</button>
  </div>
</template>

<script>
// import {mapActions} from 'vuex';
import { mapGetters } from 'vuex';
  export default {
    methods: {
      valueCount() {
        this.$store.dispatch('valueNum',[1,2,3])
      },
      modifyState() { // //当模块有命名空间时，调用的是模块的根模块
        // this.$store.commit('modify-value','testvalue')
        // this.$store.commit('user/modify-value','testvalue');
        this.$store.dispatch('tick','action');
        this.$store.dispatch('user/tick','1');

      }
    },
    mounted(){
    console.log(this.$store,37);
    console.log(this.$store.state.user.value,40);
    // 调用uesr/getter/userInfo()
    console.log(this.$store.getters['user/userInfo'],33);
  },
//     var obj1= {
//     a:1,
//     b:2
//   } 
//    var obj2= {
//     c:3,
//     d:4
//   }
computed: {
  ...mapGetters(['sub'])
},
// 以下两种方法等价且不会修改原对象
// var newObj1 = Object.assign({},obj1,obj2)
// console.log(newObj1);
// var newObj2 = {...obj1,...obj2}
// console.log(newObj2);
    
  }
</script>

<style  scoped>
.action{
  width:300px;
  height: 300px;
  border: 1px solid black;
}
</style>
<template>
  <div class="profile">
    数据:{{num}}
        {{$store.state.message}}
        <!-- {{this.userName}} -->
        <button @click="num">合计</button>
      
  </div>
</template>

<script>
import {mapState} from 'vuex';
  export default {
    name:'profile', 
    data(){
      return{
        arr: [1,2,3,4,5],
        number: [14,17,999,200,18,15,13,12,9,8,5],
        count:[1,2,3,4,5],
        str : '12345',

      }
    },
    // computed: {
    //   message() {
    //     return this.$store.state.message;
    //   },
    //   userName() {
    //     return this.$store.state.userName;
    //   }
    // },
    // computed :mapState(['message','userName']),
    // computed:mapState({
    //   message:'message',
    //   name:'userName',
    //   count1:(state)=>{
    //     return  state.value_1 + state.value_2
    //   }
    // }),
    // computed: {
    //   num(){ 
    //     let tmp = 0;
    //     this.count.forEach((item)=>tmp+=item);
    //     return tmp;
    //   }
    // },
    // 合并两个方法
    // computed : Object.assgin(
    //   { num(){ 
    //     let tmp = 0;
    //     this.count.forEach((item)=>tmp+=item);
    //     return tmp;
    //   }},
    //     mapState({
    //     message:'message',
    //     name:'userName',
    //     count1:(state)=>{
    //       return  state.value_1 + state.value_2
    //     }
    //   }),
    // ),
      computed : {
        num(){ 
        let tmp = 0;
        this.count.forEach((item)=>tmp+=item);
        return tmp;
        },  
        ...mapState({
        message:'message',
        name:'userName',
        count1:(state)=>{
          return  state.value_1 + state.value_2
        }
      }),
    },
//       var obj1= {
//     a:1,
//     b:2
//   } 
//    var obj2= {
//     c:3,
//     d:4
//   }
// 以下两种方法等价且不会修改原对象
// var newObj1 = Object.assign({},obj1,obj2)
// console.log(newObj1);
// var newObj2 = {...obj1,...obj2}
// console.log(newObj2);

    created(){
      // console.log(43,`全局状态下相加${this.count1}`);
      // console.log(this.$store,56);
      // map  
      let newstr= Array.prototype.map.call(this.str, function(x) {  //同时利用了call()方法
      return x;
      }).reverse().join(',');
      console.log(newstr,60);
      // forEach
      this.count.forEach((element,index,) => {
          console.log(element,index,26); // 打开控制台 查看
      });
      console.log(17);
      const res = this.number.map((i)=>{
        if( i < 100 ){
          return i 
        }
        // return i
      })
      console.log(res,21);
    },
    methods:{
      
    }
  }

</script>

<style  scoped>
.profile{
  margin-left:20px;
}
/*
//     特点： 无返回值  不可break 
//     forEach((currentValue,index,arr)=>{})方法用于调用数组的每个元素，并将元素传递给回调函数。 
//     currentValue 当前元素
//       index 当前元素的索引值 
//       arr   前元素所属的数组对象
//       使用forEach可以跳过空元素，
//       var arr = [1, 2, 3, 5, , 6, 7, 8, 9];
//         arr.forEach(function(item, index) {
//             console.log(item, index);
//         })
//       使用forEach复制数组的方法 (全部复制，不跳过空元素，)
//       var arr = [2, 4, 6, , 8, 3, 2];
//       var arr1 = [];
//       arr.forEach(function(item, index) {
//           arr1[index] = item;
//       })
//       console.log(arr1);

//     */  /*
//   特点： 有返回值 不可break
//     map(currentValue,index,arr) 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
//     currentValue 当前元素
//     index 当前元素的索引值 
//     arr   前元素所属的数组对象
// var str = '12345';
// Array.prototype.map.call(str, function(x) {  //同时利用了call()方法
// return x;
// }).reverse().join('');

//   */  

/*
// forEach()返回值是undefined，不可以链式调用 map()返回一个新数组，原数组不会改变,由于有返回值所以可以实现链式调用 

// */  
</style>
 
<template>
  <div class="profile">
    <p>forEach 和 map 的区别</p>
    <!-- 数据:{{ num }} -->
    {{ $store.state.message }}
    <!-- {{this.userName}} -->
    <!-- <button @click="num">合计</button> -->
    <button @click="aryFlat(ary)">
      点击扁平化数组
    </button>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "profile",
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
      number: [14, 17, 999, 200, 18, 15, 13, 12, 9, 8, 5],
      count: [1, 2, 3, 4, 5],
      str: "12345",
      ary: [1, 2, [3, 4], [5, [6, 7]]],
    };
  },
  created() {
    // ----------实现continueb
    var arr1 = [1, 2, 3, 4, 5];
    arr1.forEach(function(item) {
      if (item === 3) {
        // 跳过数组等于3;
        return;
      }
      console.log(item);
    });
    // forEach
    this.count.forEach((element, index) => {
      console.log(element, index, 114); // 打开控制台 查看
    });
    // ------实现break
    try {
      var array = ["first", "second", "third", "fourth"]; // 执行到第3次，结束循环
      array.forEach(function(item) {
        if (item == "third") {
          throw new Error("EndIterative");
        }
        // alert(item); // first,sencond
      });
    } catch (e) {
      if (e.message != "EndIterative") throw e;
    }
    // 推荐文章 https://www.zhihu.com/collection/309204735
    //     最应该使用的 every/some
    // 在需要 break 的场景下, 我们可以使用 every 或者 some, 也比较推荐这种方式.

    // every 和 some 的用法如下, 它们会根据返回值来判断是否继续迭代, 能够完美满足我们的需求.
    // every 在碰到 return false 的时候, 中止循环.
    // some 在碰到 return true 的时候, 中止循环.
    var arr = [1, 2, 3, 4, 5];
    arr.some(function(v) {
      if (v === 3) {
        return true; //
      }
      console.log(v, 95);
    });
    var a = [1, 2, 3, 4, 5];
    a.some(function(item) {
      console.log(item); // 输出：1,2
      if (item === 2) {
        return true;
      } else {
        return false;
      }
    });
    // map用法 逆序
    let newstr = Array.prototype.map
      .call(this.str, (x) => {
        //同时利用了call()方法
        return x;
      })
      .reverse()
      .join(",");
    console.log(newstr, 60);

    const res = this.number.map((i, index, arr) => {
      if (index == 1) {
        // 判断条件
        // 执行逻辑
        console.log("数组下标为1");
        return arr[1];
      }
    });
    console.log(res, 142);
    // const res = this.item.map((i,index) => {
    //   if (i[index] ===1) {
    //     // 判断条件
    //     // 执行逻辑
    //     return i[1].ColumnSocre;
    //   }
    // });
    // console.log(res, 132);
    // console.log(43, `全局状态下相加${this.count1}`);
    // console.log(this.$store, 56);
  },
  methods: {
    aryFlat(ary) {
      console.log(ary, 167);
      return ary.reduce((pre, cur) => {
        console.log(pre);
        return pre.concat(Array.isArray(cur) ? this.aryFlat(cur) : cur);
      });
    },
  },
};
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
// computed: {
//   num() {
//     let tmp = 0;
//     this.count.forEach((item) => (tmp += item));
//     return tmp;
//   },
//   ...mapState({
//     message: "message",
//     name: "userName",
//     count1: (state) => {
//       return state.value_1 + state.value_2;
//     },
//   }),
// },
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
</script>

<style scoped>
.profile {
  margin-left: 20px;
}
/*
//    特点： 无返回值  不可break 
      网址：https://www.runoob.com/jsref/jsref-foreach.html 
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
//       console.log(arr1)

forEach(): 没有返回值，本质上等同于 for 循环，对每一项执行 function 函数。
forEach 是改变原数组。;
  如何实现break
  try {
        var array = ["first","second","third","fourth"];        // 执行到第3次，结束循环
        array.forEach(function(item,index){
            if (item == "third") {
                throw new Error("EndIterative");
            }
            alert(item);// first,sencond
        }); 
    } catch(e) { 
        if(e.message!="EndIterative") throw e; 
    };
  如何实现continue
  var arr = [1,2,3,4,5];
  var num = 3;
  arr.some(function(v){
      if(v == num) {
          return;  // 
      }
      console.log(v);
  });
---------------------------
  var arr = [1,2,3,4,5]; 
  var num = 3; 
  arr.every(function(v){
      if(v == num) {
          return false;
      }else{ 
          console.log(v); 
          return true;
      }
  });
-----------------------------------


//     */ /*
Array.reduce
function flatten(ary) {
return ary.reduce((pre, cur) => {
return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
})
}
let ary = [1, 2, [3, 4], [5, [6, 7]]]
console.log(ary.MyFlat(Infinity))
----------------------------
let result = [];
let fn = function(ary) {
for(let i = 0; i < ary.length; i++) }{
let item = ary[i];
if (Array.isArray(ary[i])){
fn(item);
} else {
result.push(item);
}
}
}
while (ary.some(Array.isArray)) {
ary = [].concat(...ary);
}
//   特点： 有返回值 不可break  即map是返回一个新数组，原数组不变，    https://www.runoob.com/jsref/jsref-map.html
map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组元素顺序依次处理元素。

注意： map() 不会对空数组进行检测。

注意： map() 不会改变原始数组
//     map((currentValue,index,arr)=>{}) 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
//     currentValue 当前元素
//     index 当前元素的索引值 
//     arr   前元素所属的数组对象
//   */

/*

// */
</style>

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
    this.$router.push({
      name:'/profile',
      // query:{
      //   id:123
      // }
      params:{
        id:123 
      }

    })
    console.log(this.$route.params.id,28);
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
        return arr[i];
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
        pre.concat(Array.isArray(cur) ? this.aryFlat(cur) : cur);
        return  pre
      },[]);
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

    // created(){
    //   // console.log(43,`全局状态下相加${this.count1}`);
    //   // console.log(this.$store,56);
    //   // map  
    //   let newstr= Array.prototype.map.call(this.str, function(x) {  //同时利用了call()方法
    //   return x;
    //   }).reverse().join(',');
    //   console.log(newstr,60);
    //   // forEach
    //   this.count.forEach((element,index,) => {
    //       console.log(element,index,26); // 打开控制台 查看
    //   });
    //   console.log(17);
    //   const res = this.number.map((i)=>{
    //     if( i < 100 ){
    //       return i 
    //     }
    //     // return i
    //   })
    //   console.log(res,21);
  // }

</script>

<style scoped>
.profile {
  margin-left: 20px;
}
</style>

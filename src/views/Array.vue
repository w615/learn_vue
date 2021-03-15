<template>
  <div class="array">
    learn Array methods
    <!-- REDECU  -->
    <p>{{ arr }}</p>
    <p>转化之后的数组：{{ listArr }}</p>
    <button @click="flatten(arr)">
      点击把多维数组转化为一维数组
    </button>
    <!-- ------------------------------------------------ -->
    <p>{{ ar }}</p>
    <p>转化之后的去重：{{ arr1 }}</p>
    <button @click="unique(ar)">
      数组去重
    </button>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "Array",
  data() {
    return {
      arr: [1, 2, [3, 4], [5, [6, 7]]],
      ar: [1, 3, 3, 4, 5, 8, 8, 9, 100, 100, 102, 101],
      listArr: "",
      arr1: "",
    };
  },
  created() {},
  methods: {
    // 多维数组转化为一维数组 递归 ＋ reduce
    // flatten(ary) {
    //   return ary.reduce((pre, cur) => {
    //     return (this.listArr = pre.concat(
    //       Array.isArray(cur) ? this.flatten(cur) : cur
    //     ));
    //   }, []);
    // },
    // Array.indexOf(cur)  如果在数组中没找到指定元素则返回 -1。
    // unqiue(arr) {
    //   return arr.reduce((pre, cur) => {
    //     pre.indexOf(cur) === -1 && pre.push(cur);
    //     return (this.arr1 = pre);
    //   }, []);
    // },
    // 1 数组扁平化
    // function flatten(ary) {
    // return ary.reduce((pre, cur) => {
    // return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    // },[])
    // }
    // var arr = [1, 2, [3, 4], [5, [6, 7]]]
    // console.log(flatten(ary),21)

    // function flatten(arr){
    //     return arr.reduce((pre,cur)=>{
    //         return pre.concat( Array.isArray(cur) ? flatten(cur) :cur)
    //     },[])
    // }

    // var arr = [1, 3, 3, 4, 5,8,8,9,100,100,102,101];
    //一句话数组去重 reduce  Array.indexOf
    // 初始值, 或者计算结束后的返回值 previous   , currentItem :当前元素
    // var arr2 = arr.reduce((previous, currentItem)=> {
    //     // console.log(JSON.parse(JSON.stringify(previous)),15);
    //     // console.log(previous,16);
    //     previous.indexOf(currentItem) === -1 && previous.push(currentItem);
    //     return  previous
    //     }, []);
    // console.log(arr2);
    // reduce 用法
    // var numbers = [65, 44, 12, 4];
    // function getSum(total, num) {
    //     console.log(total,26);
    //     return total + num;
    // }
    // function myFunction() {
    //     document.getElementById("demo").innerHTML = numbers.reduce((total,num)=>{
    //         // console.log(total,31);
    //         return total + num;
    //     },100);
    // }
    // myFunction()
    // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    // reduce() 可以作为一个高阶函数，用于函数的 compose
    // function unique(arr) {
    //         return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
    //     }

    // 2reduce  ＋ includes
    // var arr = [1, 2, [3, 4], [5, [6, 7]]]
    // var arr = [1, 3, 3, 4, 5,8,8,9,100,100,102,101];
    // function unique(arr){
    //     return arr.reduce((prev,cur)=>{
    //         console.log(prev,65,cur);
    //         prev = prev.includes(cur)? prev : [...prev,cur]
    //         return prev;

    //     },[])
    // }

    // console.log(222,unique(arr));
    // var a= [1,2,3,4]
    // var b = [...a,5]
    // console.log(...b);
    // var newArr =  arr1.map((item) => {
    //     return item * 2;
    // })
    // console.log(newArr);

    //排序去重
    // var arr = [1, 1, '1'];
    // function noRepeat(arr) {
    //     var res = [];
    //     var sortedArr = arr.concat().sort();
    //     var last;
    //     for (var i = 0; i < sortedArr.length; i++) {
    //         // 如果是第一个元素或者相邻的元素不相同
    //         if (!i || last !== sortedArr[i]) {
    //             res.push(sortedArr[i])
    //         }
    //         last = sortedArr[i]; // 记录上一个值
    //     }
    //     return res;
    // }

    //  3  filter 去重   var arr = [1, 3, 3, 4, 5,8,8,9,100,100,102,101];
    //  filter 为true  就返回  为false  就跳过
    // function dau(arr){
    //     return arr.filter((item)=>{
    //         return item >99
    //     })
    // }
    // console.log( dau(arr),85);
    //     function unique(arr) {
    //         return arr.filter(function (item, index, arr) {
    //             //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素  array.indexOf(searchvalue,start)
    //             //indexOf(item, start) start 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索。
    //             console.log(item,index);
    //             console.log(arr.indexOf(item, 0) === index,83);
    //             return arr.indexOf(item, 0) === index;
    //         });
    // }
    // console.log(  unique( arr),94);

    // Map  var arr = [1, 3, 3, 4, 5,8,8,9,100,100,102,101];
    // function unique(arr) {
    //         let map = new Map();
    //         let array = new Array();  // 数组用于返回结果
    //         for (let i = 0; i < arr.length; i++) {
    //             if (map.has(arr[i])) {  // 如果有该key值
    //                 map.set(arr[i], true);
    //                 // map[arr[i]] =true;
    //             } else {
    //                 // map[arr[i]] = false;
    //                 map.set(arr[i], false);   // 如果没有该key值
    //                 array.push(arr[i]);
    //             }
    //         }
    //         return array;
    //     }
    //     console.log( unique(arr))

    // es5 双层for 循环解决
    // function unique(arr){
    //         //第一次循环拿到每一个数组的值 根据下标
    //         for(var i =0;i<arr.length;i++){
    //             for(var j=i+1;j<arr.length;j++){
    //                 //如果第i个和后面的任意一个相等
    //                 if(arr[i]===arr[j]){
    //                     arr.splice[j,1];
    //                     j--;
    //                 }
    //             }
    //         }
    //         return arr;
    //     }
    //es6  set数据结构 ...Set(arr)  [...new Set('ababbc')].join('')
    // ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
    // Array.from(object, mapFunction, thisValue)
    // from() 方法用于通过拥有length属性的对象   或可迭代的对象来返回一个数组。
    // 如果对象是数组返回 true，否则返回 false。
    // Array.from方法可以将 Set 结构转为数组
    // function unique(arr){
    //     return Array.from(new Set(arr))
    // }
    // console.log( unique(arr))
    // const s = new Set();
    // [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
    //     for (let i of s) {
    //     console.log(i);
    //     }
    // 上面代码通过add()方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。
    // typeOf 数组去重
    // -----------------------------149行到162行有问题
    // function unique(arr){
    //     //先判断传入的是否为数组
    //     if(!Array.isArray(arr)){
    //         throw new Error('输入的不是一个数组类型')
    //     }
    //     //新建一个空数组用来储存
    //     var array = [];
    //     for(var i = 0; i<arr.length;i++){
    //         if(!array.typeof(arr[i]) === -1){
    //             array.push(arr[i])
    //         }
    //     }
    // }
    // --------------------------------------
    //Array.includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false数组去重
    // function unique(arr){
    //     if(!Array.isArray(arr)){
    //         throw new Error("请输入正确的数组");
    //         return false;
    //     }
    //     var array = [];
    //     for(var i = 0;i<arr.length;i++){
    //         if (!array.includes(arr[i])) {
    //             array.push(arr[i])
    //         }
    //     }
    //     return array;
    // }
    // console.log( unique(arr))
    //sort去重
    // function unique(arr) {
    //     if (!Array.isArray(arr)) {
    //         console.log('type error!')
    //         return;
    //     }
    //     arr = arr.sort()
    //     var array = [arr[0]];
    //     console.log(JSON.parse(JSON.stringify(array)));
    //     for (var i = 1; i < arr.length; i++) {
    //         if (arr[i] !== arr[i - 1]) {
    //             array.push(arr[i]);
    //         }
    //     }
    //     return array.sort((a,b)=>{
    //         return a-b
    //     });
    // }
    // console.log( unique(arr));
    // [...new Set(arr)];
    unique(arr) {
      console.log(42);
      return arr.reduce((pre, cur) => {
        pre = pre.includes(cur) ? pre : [...pre, cur];
        return (this.arr1 = pre);
      }, []);
    },
  },
  //      网址：https://www.runoob.com/jsref/jsref-foreach.html
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
  //   forEach(): 没有返回值，本质上等同于 for 循环，对每一项执行 function 函数。
  //   forEach 是改变原数组。;

  computed: {},
  /*




  */
};
</script>

<style lang="scss" scoped></style>

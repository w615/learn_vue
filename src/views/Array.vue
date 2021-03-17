
<template>
  <div>
    <div class="block">
      <span class="demonstration">设置默认时间</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        @change="setTime"
        placeholder="选择日期时间"
        default-time="12:00:00"
      >
      </el-date-picker>
    </div>

    <div class="block">
      <span class="demonstration">结束时间</span>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00"
      >
      </el-date-picker>
    </div>

    <div class="array">
      learn Array methods
      <p>{{ arr }}</p>
      <p>转化之后的数组：{{ listArr }}</p>
      <button @click="flatten(arr)">点击把多维数组转化为一维数组</button>
      <p>{{ ar }}</p>
      <p>转化之后的去重：{{ arr1 }}</p>
      <button @click="unique(ar)">数组去重</button>
    </div>
  </div>
</template>

<script>
// import getThreeYear from "../utils/getThreeYears"
export default {
  name: "Array",
  data() {
    return {
      arr: [1, 2, [3, 4], [5, [6, 7]]],
      ar: [1, 3, 3, 4, 5, 8, 8, 9, 100, 100, 102, 101],
      listArr: "",
      arr1: "",
      pickerOptions: {

          shortcuts: [
      {
            text: '三年后',
            onClick(picker) {
              console.log(63,picker);
              this.year= null;    
              const date = new Date();
                if( this.year%4==0&&this.year%100!=0||this.year%400==0){
                 date.setTime(date.getTime() + 3600 * 1000 * 24 * 365 * 3 +3600 * 1000 * 24);
                }else{
                 date.setTime(date.getTime() + 3600 * 1000 * 24 * 365 * 3);
                }
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 365*3);
              picker.$emit('pick', date);
            }
          }]
        },
      value1: "",
      value2: "",
    };
  },
  created() {
    // this.ar.forEach((item, index, ar) => {
    //   console.log(item + 10, index, ar, 26);
    // });

    //  Array.map((item,index,arr)=>{})
    // const res = this.ar.map((item)=>{
    //   return item +10
    // })
    // console.log(res);
  },
  methods: {
    setTime(){
      const ifRUNyear  = this.value1.getFullYear();
      const date = new Date();
      if(ifRUNyear % 4 == 0 && ifRUNyear % 100 != 0||ifRUNyear % 400 == 0){
        date.setTime(date.getTime() + 3600 * 1000 * 24 * 365 * 3 );
      }else{
      date.setTime(date.getTime() + 3600 * 1000 * 24 * 365 * 3 + 3600 * 1000 * 24)          
      this.value2 = date;
    }
  },
    // 多维数组转化为一维数组 递归 ＋ reduce
    // flatten(ary) {
    //   return ary.reduce((pre, cur) => {
    //     return (this.listArr = pre.concat(
    //       Array.isArray(cur) ? this.flatten(cur) : cur
    //     ));
    //   }, []);
    // },
    // Array.indexOf(cur)  如果在数组中没找到指定元素则返回 -1。
    //   unqiue(arr) {
    //     return arr.reduce((pre, cur) => {
    //       pre.indexOf(cur) === -1 && pre.push(cur);
    //       return (this.arr1 = pre);
    //     }, []);
    //   },
    unique(arr) {
      console.log(42);
      return arr.reduce((pre, cur) => {
        pre = pre.includes(cur) ? pre : [...pre, cur];
        return (this.arr1 = pre);
      }, []);
    },
  },
  computed: {},

  /* reduce filter pop cancat push ....
forEach 和 map 区别 
 Array.forEach((item,index,arr)=>{},) 没有返回值，操作的原数组，
 Array.map((item,index,arr)=>{}) 有返回值的，原数组不发生改变的，

 没有返回值，
 本质上等同于 for 循环，
 对每一项执行 function 函数。
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
       使用forEach复制数组的方法 (全部复制，不跳过空元素，)
      var arr = [2, 4, 6, , 8, 3, 2];
      var arr1 = [];
      arr.forEach(function(item, index) {
          arr1[index] = item;
      })
      console.log(arr1)

  // 如何实现continue
  var arr = [1,2,3,4,5];
  var num = 3;
  arr.some(function(v){
      if(v == num) {
          return;  // 
      }
      console.log(v);
  });
// ---------------------------
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
/*
Array.reduce
 flatten(ary) {
return ary.reduce((pre, cur) => {
return pre.concat(Array.isArray(cur) ? this.flatten(cur) : cur);
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
 特点： 有返回值 不可break  即map是返回一个新数组，原数组不变，
     https://www.runoob.com/jsref/jsref-map.html
map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
map() 方法按照原始数组元素顺序依次处理元素。
注意： map() 不会对空数组进行检测。
注意： map() 不会改变原始数组
// map((currentValue,index,arr)=>{}) 方法返回一个新数组，
数组中的元素为原始数组元素调用函数处理后的值。
//     currentValue 当前元素
//     index 当前元素的索引值 
//     arr   前元素所属的数组对象

  */
};
</script>

<style lang="scss" scoped></style>

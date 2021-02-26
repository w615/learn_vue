<template>
  <div class="array">
    learn Array methods
    <p>{{ arr }}</p>
    <p>转化之后的数组：{{ listArr }}</p>
    <button @click="flatten(arr)">点击把多维数组转化为一维数组</button>
    <p>{{ ar }}</p>
    <p>转化之后的去重：{{ arr1 }}</p>
    <button @click="unique(ar)">数组去重</button>
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
  /*




  */
};
</script>

<style lang="scss" scoped></style>

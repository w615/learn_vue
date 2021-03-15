<template>
  <div class="refs">
    <h1>我是通过父组件通过ref 向子组件传值的案例</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "ref",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    setMsg(val) {
      this.msg = val;
    },
  },
  beforeCreate() {
    console.log("ref子组建的创建前");
  },

  //一旦加载就开始等待监听这个事件，并且执行一个回调函数的方法
  created() {
    console.log("ref组件的创建");
  },
  beforeMount() {
    console.log("ref组件的挂载前");
  },
  mounted() {
    console.log("ref组件的挂载");
  },
  beforeUpdate() {
    console.log("ref组件的更新前");
  },
  updated() {
    console.log("ref组件的更新");
  },
  beforeDestroy() {
    console.log("ref组件的销毁前");
  },
  destroyed() {
    console.log("ref组件的销毁");
  },
};
</script>

<style>
.refs {
  border: 1px solid black;
}
</style>

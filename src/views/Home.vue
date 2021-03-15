<template>
  <div class="home">
    <div>首页区域</div>
    {{ $store.state.message }}
    <SetBus msg="父组件传值到子组件进行显示" @emitEvent="dosomething" />
    <Ref ref="home"></Ref>
    <button @click="toVal">点击此按钮触发事件向子组件 ref.vue 传值</button>
    <NextTick />
    <Other />
    <div></div>
  </div>
</template>

<script>
import SetBus from "@/components/setBus.vue";
import Ref from "../components/ref.vue";
import NextTick from "../components/nextTick";
import Other from "./Other.vue";

export default {
  name: "Home",
  components: {
    SetBus,
    Ref,
    NextTick,
    Other,
  },
  data() {
    return {
      msg: "这是父组件data中定义的",
    };
  },
  beforeCreate() {
    console.log("父组建的创建前");
  },

  //一旦加载就开始等待监听这个事件，并且执行一个回调函数的方法
  created() {
    this.$eventBus.$on("dobus", (value) => {
      console.log(value);
    });
    console.log(this.$store, 33);
    console.log("父组件的创建");
  },
  beforeMount() {
    console.log("父组建的挂载前");
  },
  mounted() {
    console.log("父组建的挂载");
  },
  beforeUpdate() {
    console.log("父组建的更新前");
  },
  updated() {
    console.log("父组建的更新");
  },
  beforeDestroy() {
    console.log("父组建的销毁前");
  },

  watch: {},
  methods: {
    dosomething(value) {
      console.log("接收到了", value, 123);
    },
    toVal() {
      this.$refs.home.setMsg(this.msg);
    },
  },
  destroyed() {
    console.log("父组建的销毁");
    // 必须注销此事件 否则会造成内存泄漏
    this.$eventBus.$off("dobus");
  },
};
</script>

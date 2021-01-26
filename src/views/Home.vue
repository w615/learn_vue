<template>
  <div class="home">
    <div>首页区域</div>
    <HelloWorld msg="父组件传值到子组件进行显示"   @emitEvent="dosomething"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
    }
  },
  //一旦加载就开始等待监听这个事件，并且执行一个回调函数的方法
  created() {
    this.$eventBus.$on("dobus", (value)=> {console.log(value);})
  },
  watch: {

  },
  methods: {
    dosomething(value){
      console.log("接收到了");
      console.log(value,123);
    }
  }
};
</script>

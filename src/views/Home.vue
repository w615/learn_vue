<template>
  <div class="home"  >
    <div>首页区域</div>
  
    <SetBus msg="父组件传值到子组件进行显示"   @emitEvent="dosomething"/>
    <Ref  ref= "home"></Ref>
    <button @click= 'toVal'>点击此按钮触发事件向子组件 ref.vue 传值</button>
    <NextTick/>
  </div>
</template>

<script>
import SetBus from "@/components/setBus.vue";
import Ref  from '../components/ref.vue' ;
import NextTick  from '../components/nextTick' ;


export default {
  name: "Home",
  components: {
    SetBus,
    Ref,
    NextTick
  },
  data() {
    return {
      msg:'这是父组件data中定义的'
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
      console.log("接收到了",value,123);
    },
    toVal() {
      this.$refs.home.setMsg(this.msg)
    }
  },
  destroyed() {
    // 必须注销此事件 否则会造成内存泄漏
    this.$eventBus.$off('dobus')
  }
};
</script>

<template>
  <div class="refs">
    <h1>我是通过父组件通过ref 向子组件传值的案例</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name:'ref',
  data(){
    return{
      msg:''
    }
  },
  methods :{
    setMsg(val) {
      this.msg = val
    }
  }
}

</script>

<style>
.refs{
  border:1px solid black
}
</style>
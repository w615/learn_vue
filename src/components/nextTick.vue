<template>
  <section>
    <h1 ref="hello">{{ value }}</h1>
    <button @click="get">点击</button>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        value: 'Hello World ~'
      };
    },
    methods: {
      get() {
        this.value = '你好啊';
        console.log(this.$refs['hello'].innerText);
        this.$nextTick(() => {
          console.log(this.$refs.hello.innerText);
        });
      }
    },
    mounted() {
      console.log(333);
      console.log(this.$refs['hello']);
      this.$nextTick(() => {
        console.log(444);
        console.log(this.$refs['hello']);
      });
    },
    created() {
      console.log(111);
      this.$nextTick(() => {
        console.log(222);
        console.log(this.$refs['hello']);
      });
    }
  }
</script>
<style  scoped>
button{
  cursor: pointer;
}

</style>
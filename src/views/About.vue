<template>
  <div class="about">
    <h1>This is an about page</h1>
      <h3> {{ obj.a }} </h3>  
      <h3> {{ obj.b }} </h3>
      <h3> {{ obj.c }} </h3>
    <br>
    <button @click="add">点我+1</button>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      obj: {
        a: 1,
        b: 2
      }
    };
  },
  watch: {
    obj: {
      handler: function(newV) {
        console.log("我发生变化了", newV ,24);
      }
    }
  },
  methods: {
    add() {
      this.obj.c = 3
      this.obj.c ++;
      console.log("我被添加了", this.obj);
    }
  }
};
</script>

<style>
.about {
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  bottom: 0;
  background: #aceff0;
}
</style>

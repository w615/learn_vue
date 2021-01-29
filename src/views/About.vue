<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-learnDirective = "color">
      <h3> 我是a的值 :{{ obj.a }} </h3>  
      <h3> 我是b的值 :{{ obj.b }} </h3>
      <h3> 我是c的值 :{{ obj.c }} </h3>
    <button @click="add">点我+1</button>
  </div>
</template>

<script>

export default {
  name: "About",
  data() {
    return {
      color:'red',
      obj: {
          a: 1,
          b: 2,
        // c: 3  //在 data  中声明之后 为响应式数据 在初始化的时候就被加入了 getter  和  setter
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
  mounted() {
 
  },
  /*
      不支持异步，当computed内有异步操作时无效，无法监听数据的变化
      多个属性改变导致一个属性变化使用computed:{}  支持缓存，只有依赖数据发生改变，才会重新进行计算
  */
  computed: {

  },
  methods: {
    add() {
      this.obj.c = 3
      this.obj.c +=1;
      console.log("我被添加了", this.obj);
      console.log( this.$delete);
      console.log(this.obj.a);
      // vue.$delete(target,"key") 用法删除某个对象下的 某个键值对
      this.$delete(this.obj,"a")
      console.log(this.obj.a);
    }
  }
};
</script>

<style>
.about {
  position: absolute;
  left: 0;
  right: 0;
  top: 300px;
  bottom: 0;
  background: #aceff0;
}
</style>

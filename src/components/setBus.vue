<template>
  <div class="hello">
    <button  @click = "click">获取新增的属性</button>
    <button  @click = "emitEvent">点击发射事件</button>
    <button @click= "carEmit">点击用$bus 发射事件</button>
    <h1>{{ msg }} -- {{ city }}</h1>
    <h2>{{goods.stock}}</h2>
    <h2>{{goods.price}}</h2>
    <h2>{{goods.title}}</h2>
    <h2>{{goods.imgAlt}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    city: {
      type: String,
      default: "未来"
    }
  },
  data() {
    return {
      goods:{
        stock:1000,
        imgAlt:''
      }
    };
  },
  // 创建组件在一瞬间，一般伴随数据请求
  created() {
    // 假如imgAlt 是请求来的数据。直接在界面使用因为是没有定义的 那么此时不是响应式的，因为我们提前在data 定义了这个字段 所以变成了响应式的，
    this.imgAlt = "图片"
  },
  //挂载实例 操作dom 需要在此声明周期之后
  mounted() {
    // this.$set(this.goods,"imgAlt",'假如我在data里没有定于goods.imgAlt: , 那么就需要在 mounted 之后 使用$set 为新增的key 添加 get set 方法 从而让其成为响应式的')
    this.$set(this.goods,"price",99)
    // this.obj = "新增的"
    // this.goods.price = 99
    // this.$set(this.obj,"price","价格")
    console.log(this.$eventBus,36);
  },
  methods: {
    click() {
      // this.goods.title = "没有捕获的对象属性不能出现"
      this.$set(this.goods,"title","通过$set把新增属性挂载在原型上") 
    },
    emitEvent() {
      this.$emit("emitEvent",this.goods.stock)
    },
    carEmit() {
      this.$eventBus.$emit("dobus","事件中心原理:因为实例拥有构造函数和原型的所有方法")
    }
  }
};
</script>
<style scoped>
.hello{
  background: #ccc;
  position: absolute;
  bottom:0;
  top:300px;
  left:0;
  right:0
}
</style>

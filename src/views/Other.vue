<template>
  <div class="Box">
    <h3>父组件</h3>
    <div class="slotBox">
      what is a slot ?
      <p>
        插槽就是子组件中的提供给父组件使用的一个占位符，用
        表示，父组件可以在这个占位符中填充任何模板代码
      </p>
      <Slot>
        <div slot="nameSlot" style="border:1px solid red; width:240px">
          我是具名插槽（红色边框）
        </div>
        ------------------
        <div slot="nameSlot2" slot-scope="value" style="border:1px solid blue">
          我是带有传值的作用域插槽（蓝色边框）:<br />
          <p v-for="(item, index) in value.stu" :key="index">
            姓名：{{ item.name }} 性别：{{ item.sex }} 年龄：{{ item.age }}
          </p>
        </div>
        <div
          style="border:1px solid pink ;
              width:300px;"
        >
          匿名插槽
        </div>
      </Slot>
    </div>
  </div>
</template>

<script>
import Slot from "../components/slot.vue";
export default {
  name: "Other",
  components: {
    Slot,
  },
};
</script>

<style lang="scss" scoped>
.Box {
  position: relative;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  background: #aecff2;

  .slotBox {
    width: 500px;
    height: 500px;
    border: 1px solid orange;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>

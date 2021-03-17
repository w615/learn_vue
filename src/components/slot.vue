<template>
  <div class="sonSlot">
    给父组件提供占位符的子组件
    <slot name="nameSlot"></slot>
    <slot name="nameSlot2" :stu="arr"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "slot",
  components: {},
  data() {
    return {
      arr: [
        { name: "张三", sex: "男", age: 18 },
        { name: "李四", sex: "男", age: 28 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sonSlot {
  height: 300px;
  border: 15px solid green;
}
</style>

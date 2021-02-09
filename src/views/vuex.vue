<template>
  <div class= "vuex">
    <input type="text" v-model="value">
      {{this.$store.state.message}}
        <!-- <button @click='modifyAction'>修改仓库数据</button> -->
        <button @click='modifyMsg(value)'>修改仓库数据</button>
        <div>
          {{this.$store.state.userName}}
          <input type="text" placeholder="name" v-model="newName">
          <!-- <button @click="changeName">修改仓库userName</button> -->
          <button @click="modifyName(newName)">修改仓库userName</button>
        </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';  //  了解 不用
  export default {
    name:'vuex',
    data(){
      return {
        value:'',
        newName:'',
      }
    },
    methods: {
        modifyAction() {
        // error methods to change state
        // this.$store.state.message = '王东闯'
        // fweiyide  mutations change state
        this.$store.commit('modifyMsg',this.value)
      },
      changeName() {
        this.$store.commit('modifyName',this.newName)
      },
      ... mapMutations(['modifyMsg','modifyName','valueCount']),

    },
    // 将this.$store.commit('modifyName',this.newName) 的操作转为了组件的this.modifyName
    // methods:)
  }
</script>

<style  scoped>
.vuex{
  position:absolute;
  top:200px;
  bottom: 10px;
  left:0;
  right: 0;
  background: #ccc;
}


</style>
<template>
  <div>
    vuex 辅助函数
    <p>userValue:{{this.userValue}}</p>
    <button @click = " btnMutations">修改userValue</button>
    <button  @click = "btnActions">执行userTick</button>
  <p>{{this.userInfo}}</p> 
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions} from  'vuex';
  export default {
    computed:{
      ...mapState({
        userValue:(state)=>state.user.value,
        userTick:(state)=>state.user.title
      }),
      ...mapGetters({
        userInfo:'user/userInfo',
      }),
    },
    methods: {
      ...mapMutations({
        modifyValue:'user/modify-value'
      }),
      ...mapActions({
        modifyAction:'user/tick'
      }),
      btnMutations(){
        this.modifyValue('hello')
      },
      btnActions() {
        this.modifyAction(10)
      }
    }
  }
</script>

<style  scoped>

</style>
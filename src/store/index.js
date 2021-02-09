import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import goods from "./modules/goods";

Vue.use(Vuex);

export default new Vuex.Store({
  // 全局状态
  state: {
    value: 20,
    title: "主页",
    message: "vueX learn ",
    userName: "wdc615",
    value_1: 12,
    value_2: 18,
  },
  // 相当于全局的计算属性 ，只有get  没有对应的set
  getters: {
    sub(state, getters) {
      console.log(state, getters);
      console.log(state.value_1);
      return 10;
    },
  },
  // 所有操作全局状态的方法
  mutations: {
    modifyMsg(state, payload) {
      console.log("modifyAction执行了");
      console.log(payload, 16);
      state.message = payload;
    },
    modifyName(state, payload) {
      console.log("modifyName....");
      console.log(payload, 20);
      state.userName = payload;
    },
    valueChange(state) {
      state.value_1++;
    },
    "modify-value"(state, payload) {
      console.log("root modify run....");
      console.log(state, payload);
      state.value += payload;
    },
  },
  // 异步操作只能写在actions 里面
  actions: {
    valueNum(context, ...rest) {
      setInterval(() => {
        context.commit("valueChange");
      }, 1000);
      console.log(context);
      console.log(rest, 31);
    },
    tick({ commit, state }, payload) {
      console.log(commit, payload);
      console.log("tick running");
      console.log(state, 58);
      setInterval(() => {
        commit("modify-value", payload);
      }, 1000);
    },
  },
  // 整个模块
  modules: {
    user,
    goods,
  },
});
// const store = new Vuex.Store({});
// export default store;

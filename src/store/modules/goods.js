export default {
  namespaced: true, //当模块有命名空间时，调用的是模块的根模块
  state: {
    value: "goods",
  },
  getters: {},
  mutations: {
    "modify-value"(state, payload) {
      console.log("goods modify run....");
      console.log(state, payload);
    },
  },
  actions: {},
};

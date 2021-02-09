export default {
  namespaced: true, //当模块有命名空间时，调用的是模块的根模块
  state: {
    value: "goods",
    title: "商品",
  },
  getters: {
    goods(...rest) {
      console.log(rest, 8);
      return "goods test";
    },
  },
  mutations: {
    "modify-value"(state, payload) {
      console.log("goods modify run....");
      console.log(state, payload);
      state.value = payload;
    },
  },
  actions: {
    tick(...rest) {
      console.log(rest);
      console.log("tick running");

      setInterval(() => {}, 1000);
    },
  },
};

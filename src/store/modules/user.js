export default {
  namespaced: true,
  state: {
    value: "user",
  },
  getters: {},
  mutations: {
    "modify-value"(state, payload) {
      console.log("user modify run....");
      console.log(state, payload);
    },
  },
  actions: {},
};

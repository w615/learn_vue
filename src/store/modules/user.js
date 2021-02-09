export default {
  namespaced: true,
  state: {
    value: "20",
    title: "999",
  },
  getters: {
    userInfo(...rest) {
      console.log(rest, 9);
      return "test user";
    },
  },
  mutations: {
    "modify-value"(state, payload) {
      console.log("user modify run....");
      console.log(state, payload);
      state.value = payload;
    },
  },
  actions: {
    tick(context, payload) {
      console.log(context, payload);
      console.log("tick running");
      let tmp = 0;
      setInterval(() => {
        context.commit("modify-value", (tmp = payload + tmp));
      }, 1000);
    },
  },
};

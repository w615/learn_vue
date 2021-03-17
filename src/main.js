import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./Permission"; // permission control

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// if (process.env.NODE_ENV == "development") {
//   Vue.config.devtools = true;
// } else {
//   Vue.config.devtools = false;
// }
Vue.config.devtools = true;

Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue();
// 定义一个全局的自定义指令
Vue.directive("learnDirective", {
  //  bind: function () {}, 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
  bind: function(el) {
    el.style.paddingLeft = "5px";
    el.style.border = "2px solid #aecf00"; // 此时第一次触发dom
  },
  //   inserted: function () {},
  inserted: function(el, binding) {
    console.log(el, 12);
    console.log(13, binding);
    el.style.color = binding.value;
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import router from "./router/index.js";

console.log(router.match,3);
// 路由前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  console.log(to, 5);
  console.log(from, 6);
  next();
});
console.log(router,10);

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    meta: { title: "主页", affix: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { title: "关于", affix: true },
  },
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/profile.vue"),
    meta: { title: "个人中心", affix: true },
  },
  {
    path: "/vuex",
    name: "vuex",
    component: () => import(/* webpackChunkName: "vuex" */ "../views/vuex.vue"),
    meta: { title: "vuex", affix: true },
  },
  {
    path: "/vuexAction",
    name: "vuexAction",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "vuex" */ "../views/vuexAction"),
    meta: { title: "vuexAction", affix: true },
  },
  {
    path: "/vuexAll",
    name: "vuexAll",
    component: () => import(/* webpackChunkName: "vuex" */ "../views/vuexAll"),
    meta: { title: "vuexAll", affix: true },
  },
  {
    path: "/other",
    name: "Other",
    component: () => import(/* webpackChunkName: "vuex" */ "../views/Other"),
    meta: { title: "Other", affix: true },
  },
  {
    path: "/list",
    name: "List",
    component: () => import(/* webpackChunkName: "vuex" */ "../views/List"),
    meta: { title: "List", affix: true },
  },
  {
    path: "/cars",
    name: "Cars",
    component: () => import(/* webpackChunkName: "vuex" */ "../views/Cars"),
    meta: { title: "Cars", affix: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
});

export default router;

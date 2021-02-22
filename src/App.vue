<template>
  <div id="app">
    <div id="nav">
      <!-- router-link  replace 设置不可后退的连接  tag属性 把默认转化的a标签转化为为 tag指向的标签   tag='button'-->
      <!-- router-link-active    active-class='active'-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/profile">profile</router-link> |
      <router-link to="/vuexAction">vuexAction</router-link> |
      <router-link to="/vuex">vuex</router-link> |
      <router-link to="/vuexAll">vuex辅助函数</router-link> |
      <router-link to="/other">其他</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

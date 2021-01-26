# learn_vue_set

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# vue 中 set 和 \$set 的区别？

在这之前呢 我们先了解一下 vue.\$set,和 vue.set 是什么 作用？

![img](C:\Users\V_DONG~1\AppData\Local\Temp\企业微信截图_1611644771482.png)

我们都知道 Vue 的双向绑定是通过 Object.defineProperty 这个 API 实现的，这个 api 主要接受三个参数 Object.defineProperty(obj, prop, descriptor)，这个 API 就是直接在一个对象上定义一个新 property ，或者修改一个对象的现有 property ，并返回此对象。

在第三个参数 descriptor 中，我们可以给传入的 property 设置 getter setter 方法，这样就可以在 getter 的时候收集依赖 在 setter 的时候去告诉依赖我更新了。具体是怎么收集依赖的，怎么分发事件的这个先不管，我们现在就知道了 vue 实现双向绑定是通过给对象的每一个属性设置 getter setter 方法，来收集依赖 实现双向绑定的就行了。那为什么不能监听到上面例子当中 newKey 的变化呢？

是因为在 vue 实例初始化的时候， 上面 Object.defineProperty 的方法 给 data 中的每一个属性都加了 getter setter 方法，也就是说 上面例子中的 oldKey， 都已经有了 getter setter 方法，而我们通过点击事件加上去的 newKey 没有 getter setter 方法，所以 Vue 就不知道 newKey 变化，视图 也就不会更新。

第一： 使用，

第二：面试

先说面试中，面试常见的问法：

第一种问法： 假如此时有一个数据，在控制台或者是代码中出现了，但是此时在界面却无法展示，你有什么解决办法？

那么此时问的就是数据的双向绑定原理，新增了一个键值对，但是其不是响应式的，也就是没有提前在 data 中定义，那么此时数据的改变在界面上是无法呈现的，

那么此时有两种解决方法，

第一：当我们知道了这个 key 值之后，我们可以提前在 data 中声明，然后我们可以在获取到这个值之后 ，执行 this.key = key，那么此时我们在界面中使用这个数据的时候就是响应式的了；

第二：vue.$set  ，如下图 在点击的时候 通过$set 添加上 getter setter 方法

第二种问法 很直接：vue.set 和 vue.\$set 有什么区别?

从 vue 源码可以知道 vue.set 和 vue.\$set 都是引用了 set 方法，

vue.set 是挂载在了 vue 的构造函数上，而 vue.\$set 挂载在了 vue 的原型上，

Vue.$set(target,key ,val) 接受三个参数，在方法中定义一个点击事件，通过$set 把这个键值上赋予 getter 和 setter 方法；

示例代码 github : https://github.com/w615/learn_vue.git

我会把后期遇到的问题持续的在这个 demo 上展示，

如有有问题也可以 添加微信：CXXY615907

![image-20210126110818963](C:\Users\v_dongcwang\AppData\Roaming\Typora\typora-user-images\image-20210126110818963.png)

![image-20210126100937481](C:\Users\v_dongcwang\AppData\Roaming\Typora\typora-user-images\image-20210126100937481.png)

我们看一下 vue 中 set 的源码:

这个分析在掘金等知名社区都有分析我就不过多叙述了，有兴趣的自行查阅

![image-20210126110542347](C:\Users\v_dongcwang\AppData\Roaming\Typora\typora-user-images\image-20210126110542347.png)

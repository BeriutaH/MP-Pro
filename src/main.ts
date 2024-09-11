// import './assets/main.css'
// 引入实例化上下文的api方法createApp
import { createApp } from 'vue'
// 引入element ui
import ElementPlus from 'element-plus'
// 引入element ui的样式
import 'element-plus/dist/index.css'
// import { createPinia } from 'pinia'
// 引入App组件
import App from './App.vue'
// 引入路由器
import router from './router'
//引入仓库
import stores from './stores'
// 创建app
const app = createApp(App)

// app.use(createPinia())
app.use(stores)
app.use(router) // 注册路由器
app.use(ElementPlus) // 使用element-ui
// 挂载
app.mount('#app')

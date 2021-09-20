import { createApp } from 'vue'
import App from './App.vue'
import elementPlus from './plugins/element-plus'
import router from './router/index'
import { store, key } from './store'

// 加载全局样式
import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(elementPlus, { size: 'small', zIndex: 2000 })

// 自动注册全局组件
const modules = import.meta.globEager('./components/**/index.ts')
for (const path in modules) {
  app.use(modules[path].default)
}

app.mount('#app')

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { require_ } from "@/utils/tool.js";

const app = createApp(App)

app.config.globalProperties.$require_ = require_;
app.use(ElementPlus)
app.use(router)
app.mount('#app')

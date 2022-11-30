import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// import { ElPagination } from 'element-plus'
// import 'element-plus/theme-chalk/index.css'
// import lang from 'element-plus/lib/locale/lang/zh-cn'
// import locale from 'element-plus/lib'



axios.defaults.baseURL = "/api"


// 使用中文语言
// locale.use(lang)

createApp(App).use(store).use(router).use(VueAxios, axios).use(ElementPlus, { locale }).mount('#app')
// createApp(App).use(store).use(router).use(VueAxios, axios).use(ElPagination, { locale }).mount('#app')

import { createApp } from 'vue'
import App from './App.jsx'
import router from './router'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'
import './style/global.css'
import 'normalize.css'
import WUI from './Layout/index'
createApp(App).use(router).use(Varlet).use(WUI).mount('#app')
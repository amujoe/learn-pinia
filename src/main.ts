import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index.js'
import { createPinia } from 'pinia' 

const app = createApp(App)
app.use(Router)
app.use(createPinia())
app.mount('#app')

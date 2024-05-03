import { createApp } from 'vue'
import naive from 'naive-ui'
import { router } from './router'
import App from './App.vue'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
// main.ts
import 'uno.css'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)
app.use(router)
app.use(naive)
app.mount('#app')

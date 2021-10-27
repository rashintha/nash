import { createApp } from 'vue'
import App from './vue/App.vue'

import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from './routes/routes'

const app = createApp(App)
app.use(router)
app.mount('#app')

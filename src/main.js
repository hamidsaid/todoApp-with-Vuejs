import { createApp } from 'vue'
import App from './App.vue'
//import the router file we created in index.js to use it
import router from './router'

createApp(App).use(router).mount('#app')

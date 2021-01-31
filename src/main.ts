import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BackgroundImage from './components/BackgroundImage.vue'

createApp(App)
  .use(store)
  .use(router)
  .component('BackgroundImage', BackgroundImage)
  .mount('#app')

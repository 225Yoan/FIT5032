import { createApp } from 'vue'
import App from './App.vue'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'body.p-dark'
    }
  }
})

createApp(App).mount('#app')

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import UI from '@/components/UI'
import Directives from '@/directives'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import axios from 'axios'


// axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/'
const app = createApp(App)

UI.forEach((UIComponent) => {
    app.component(UIComponent.name, UIComponent)
})

Directives.forEach((Directive) => {
    app.directive(Directive.name, Directive)
})

// console.log(router.options.routes)

app
    // .use(axios)
    .use(store)
    .use(router)
    .use(autoAnimatePlugin)
    .mount('#app')

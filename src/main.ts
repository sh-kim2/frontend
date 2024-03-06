import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './interceptors/axios'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import gAuth from 'vue3-google-login'

const app = createApp(App)

app.use(gAuth, {
    clientId: '794115904748-pvvn2gbc4vo2tq2s1rkag91tnqq6qjsu.apps.googleusercontent.com'
})

app
    .use(store)
    .use(router)
    .mount('#app')


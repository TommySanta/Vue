import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

// createApp(App).use(router).mount('#app')

var app= createApp(App)
app.config.globalProperties.$filters = {

    mayuscula(dato){
        return (dato.toUpperCase());
    },
    getNumeroDoble(numero){
        return numero*2;

    }
}

app.use(router).mount('#app')
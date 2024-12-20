import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

const app = createApp(App)

app.config.globalProperties.$filters = {
    parImpar(value) {
        return `<span style="color: ${value % 2 === 0 ? 'green' : 'red'}">${value}</span>`;
    },
    getOperacion(numero, i) {
        return `<tr><td>${numero} x ${i}</td>`;
    },
    getMultiplicacion(numero, i) {
        return `<td>${this.parImpar(numero * i)}</td></tr>`;
    }
}

app.use(router).mount('#app')
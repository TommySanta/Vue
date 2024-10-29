<template>
    <div>
        <h1>Collatz</h1>
        <input type="number" v-model.number="numero" placeholder="Ingrese un número" />
        <button @click="calcularCollatz">Calcular</button>
        <div v-html="html"></div>
    </div>
</template>

<script>
export default {
    name: "CollatzComponent",
    data() {
        return {
            numero: null,
            html: ""
        };
    },
    methods: {
        calcularCollatz() {
            const secuencia = this.metodoCollatz(this.numero);
            this.html = secuencia
                .map(num => this.$filters.parImpar(num))
                .join(' ');
            
        },
        metodoCollatz(numero) {
            let secuencia = [];
            while (numero !== 1) {
                secuencia.push(numero);
                numero = numero % 2 === 0 ? numero / 2 : numero * 3 + 1;
            }
            secuencia.push(1);
            return secuencia;
        }
    }
}
</script>

<style scoped>
@import './../assets/css/estilos.css';
</style>

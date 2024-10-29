<template>
    <div>
        <h1 style="color: brown;">
            Numeros Padre
        </h1>
        <h2>La suma de los números es: {{ numeros }}</h2>
        <button @click="crearBotones">
            Nuevo Número
        </button>
        
        <ul v-for="(numero, index) in botones" :key="index">
            <HijoNumero :numero="numero" v-on:sumarNumeroPadre="sumarNumeros"/>
        </ul>
    </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';

export default {
    name: "PadreNumeros",
    components: {
        HijoNumero
    },
    data() {
        return {
            numeros: 0,
            botones: []
        };
    },
    methods: {
        crearBotones() {
            const nuevoNumero = Math.floor(Math.random() * 100) + 1;
            this.botones.push(nuevoNumero);
        },
        sumarNumeros(valor) {
            this.numeros += valor;
        }
    }
};
</script>

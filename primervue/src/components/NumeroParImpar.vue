<template>
    <div>
        <h1>
            Practica Par Impar
        </h1>
        <label>Introduzca un número:</label>
        <input type="number" v-model="numero" />

        <!-- Uso de propiedad computada -->
        <h2 v-html="getParImparComputed"></h2>

        <!-- Uso de directivas -->
        <h2 v-if="numero % 2 === 0 && numero !== 0" style="color: blue;">
            Par
        </h2>
        <h2 v-else-if="numero % 2 !== 0" style="color: purple;">
            Impar
        </h2>
        <h2 v-else style="color: black;">
            Cero
        </h2>

        <!-- Uso de método -->
        <button @click="getParImparMethod">Evaluar</button>
        <div v-html="html"></div>
    </div>
</template>

<script>
export default {
    name: "NumeroParImpar",
    computed: {
        // Propiedad computada 
        getParImparComputed() {
            if (this.numero === 0) {
                return "<h2 style='color: black;'>Cero</h2>";
            } else if (this.numero % 2 === 0) {
                return "<h2 style='color: blue;'>Par</h2>";
            } else {
                return "<h2 style='color: purple;'>Impar</h2>";
            }
        }
    },
    methods: {
        // Método para evaluar par/impar
        getParImparMethod() {
            if (this.numero === 0) {
                this.html = "<h2 style='color: black;'>Cero</h2>";
            } else if (this.numero % 2 === 0) {
                this.html = "<h2 style='color: blue;'>Par</h2>";
            } else {
                this.html = "<h2 style='color: purple;'>Impar</h2>";
            }
        }
    },
    data() {
        return {
            numero: 0,
            html: ""
        };
    }
}
</script>

<style>
    @import './../assets/css/estilos.css';
</style>

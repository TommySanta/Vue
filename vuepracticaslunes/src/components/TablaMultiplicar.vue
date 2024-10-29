<template>
    <div>
        <h1>Tabla de multiplicar</h1>
        <input type="number" v-model.number="numero" placeholder="Ingrese un número" />
        <button @click="crearTabla">Calcular</button>
        <div v-html="html"></div>
        <br>
        <hr>
        
        <div v-if="tabla">
            <h2>Parte dos con directivas</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Multiplicación</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 10" :key="i">
                        <td>{{ numero }} x {{ i }}</td>
                        <td>{{ numero * i }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div v-if="tabla">
            <h2>Parte tres con Filters</h2>
            <div v-html="auxhtml"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data() {
        return {
            numero: null,
            html: "",
            tabla: false,
            auxhtml: ""
        };
    },
    methods: {
        crearTabla() {
            if (this.numero !== null && this.numero !== 0) {
                let resultado = "<table border='1'><thead><tr><th>Multiplicación</th><th>Resultado</th></tr></thead><tbody>";
                for (let i = 1; i <= 10; i++) {
                    resultado += `<tr><td>${this.numero} x ${i}</td><td>${this.$filters.parImpar(this.numero*i)}</td></tr>`;
                }
                resultado += "</tbody></table>"; 
                this.html = resultado;
                this.tabla = true;
                this.crearTablaFilter();
            } else {
                this.html = "<p>Por favor, ingrese un número válido.</p>";
            }
        },
        crearTablaFilter() {
            let resultado = "<table border='1'><thead><tr><th>Multiplicación</th><th>Resultado</th></tr></thead><tbody>";
            for (let i = 1; i <= 10; i++) {
                resultado += this.$filters.getOperacion(this.numero, i) + this.$filters.getMultiplicacion(this.numero, i);
            }
            resultado += "</tbody></table>"; 
            this.auxhtml = resultado;
        }
    }
}
</script>

<style>
    @import './../assets/css/estilos.css';
</style>

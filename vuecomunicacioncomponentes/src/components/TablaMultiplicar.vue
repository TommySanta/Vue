<template>
    <div>
        <h1>Tabla de multiplicar de {{ numero }}</h1>
        <div v-if="tabla">
            <h2>Resultados</h2>
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
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    props: ['numero'],
    computed: {
        tabla() {
            return this.numero != null;
        }
    }
};
</script>

<style>
table {
    width: 50%;
    margin-top: 20px;
}
</style>

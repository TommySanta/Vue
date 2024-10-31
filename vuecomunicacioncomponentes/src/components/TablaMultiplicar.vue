<template>
    <div>
        <h1>Tabla multiplicar {{ numero }}</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="html"></tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    watch: {
        '$route.params.numero'(nextVal, oldVal) {
            if (oldVal !== nextVal) {
                this.generarTabla();
            }
        }
    },
    data() {
        return {
            html: "",
            numero: 0
        };
    },
    methods: {
        generarTabla() {
            this.numero = parseInt(this.$route.params.numero);
            let aux = "";
            for (let i = 1; i <= 10; i++) {
                const op = `${this.numero} * ${i}`;
                const res = this.numero * i;
                aux += "<tr>";
                aux += `<td>${op}</td>`;
                aux += `<td>${res}</td>`;
                aux += "</tr>";
            }
            this.html = aux;
        }
    },
    mounted() {
        this.generarTabla();
    }
};
</script>
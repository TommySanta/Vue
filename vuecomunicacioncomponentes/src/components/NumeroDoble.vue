<template>
    <div>
        <h1>Numero Doble</h1>
        <h3>{{ mensaje }}</h3>
        <h3>El doble es: {{ doble }}</h3>
        <button @click="redirectToHome()">Home</button>
    </div>
</template>

<script>
export default {
    name: "NumeroDoble",
    data() {
        return {
            mensaje: ""
        }
    },
    methods: {
        redirectToHome() {
            this.$router.push("/");
        }
    },
    mounted() {
        console.log("Param " + this.$route.params.numero)
        let paramNumero = this.$route.params.numero;
        if (paramNumero == "") {
            console.log("Sin parámentros");
            this.mensaje = "Sin parámatros en Routing";
        }
        else {
            this.mensaje = "Parámetro recibido: " + paramNumero;
            let valor = parseInt(this.$route.params.numero);
            this.doble = valor * 2;
        }
    },

    watch:
    {
        '$route.params.numero'(nextVal, oldVal) {
            //Solamente debemos realizar las acciones con un if
            if (nextVal != oldVal) {
                this.mensaje = "Esto ha cambaido!! " + this.$route.params.numero;
                this.$route.params.numero;
                let valor = parseInt(this.$route.params.numero);
                this.doble = valor * 2;
            }
        }
    }

}

</script>

<style></style>
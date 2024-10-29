<template>
    <div>
        <li style="color: blue; list-style: none;">
            <h1>Número: {{ this.numero }}</h1>
            <button @click="emitirNumero">Sumar {{ numero }}</button>
        </li>
    </div>
</template>

<script>
export default {
    name: "HijoNumero",
    props: ["numero"],
    methods: {
        emitirNumero() {
            this.$emit("sumarNumeroPadre", this.numero);
        }
    }
};
</script>

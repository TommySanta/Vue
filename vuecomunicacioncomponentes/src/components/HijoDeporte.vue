<template>
    <div>
        <li style="color: yellowgreen; list-style: none;">
            {{ nombredeporte }}
            <button @click="seleccionarFavorito()">Seleccionar favorito</button>
        </li>
    </div>
</template>
<script>
export default {
    name: "HijoDeporte",
    props: ["nombredeporte"],
    methods: {
        seleccionarFavorito()
        {
            console.log("Soy el hijo");
            //Debemos realizar la llamada al padre
            //Se hace mediante string
            this.$emit("seleccionarFavoritoParent", this.nombredeporte);
        }
    },
    mounted()
    {
        console.log(this.nombredeporte);
    }
}
</script>
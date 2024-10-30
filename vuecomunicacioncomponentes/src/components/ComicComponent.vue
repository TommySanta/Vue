<template>
    <div>
        <h2>{{ comic.titulo }}</h2>
        <button @click="seleccionarFavorito()">
            Seleccionar favorito
        </button>
        <button @click="deleteComic()">
            Eliminar
        </button>
        <p>{{ comic.descripcion }}</p>
        <img :src="comic.imagen"/>
        <h4 :class="{
            rojo: comic.year <=2000,
            verde: comic.year >2000
        }">
        Año: {{ comic.year }}
        </h4>
    </div>
</template>

<script>
export default {
    name: "ComicComponent",
    props: ["comic","index"],
    methods: {
        seleccionarFavorito(){
            this.$emit("seleccionarFavorito",this.comic)
        },
        deleteComic(){
            this.$emit("deleteComic",this.index)
        }
    }
};
</script>
<style>
@import '../assets/css/estiloscomic.css';
</style>
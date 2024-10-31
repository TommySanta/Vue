<template>
    <div>
        <ul id="menu">
            <li><router-link to="/">Home</router-link> |</li>
            <li><router-link to="/deportes">Deportes</router-link> |</li>
            <li v-for="(numero, index) in numeros" :key="index">
                <router-link :to="`/tabla/${numero}`">Tabla de {{ numero }}</router-link> |
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MenuTablaMultiplicar",
    data() {
        return {
            numeros: [] 
        };
    },
    mounted() {
        for (let i = 0; i < 5; i++) { 
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            this.numeros.push(numeroAleatorio);
        }
    }
};
</script>

<style>
ul#menu {
    list-style: none;
}

li {
    display: inline;
}
</style>

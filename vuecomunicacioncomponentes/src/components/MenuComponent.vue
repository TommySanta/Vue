<template>
    <div>
        <ul id="menu">
            <li><router-link to="/">Home</router-link> |</li>
            <li><router-link to="/deportes/14">Deportes</router-link> |</li>
            <li><router-link to="/doble">Numero Doble sin</router-link> |</li>
            <li><router-link to="/doble/77">Numero Doble 77</router-link> |</li>
            <li v-for="(numero, index) in numeros" :key="index">
                <router-link :to="`/doble/${numero}`">Doble {{ numero }}</router-link> |
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MenuComponent",
    data() {
        return {
            numeros: [17, 25, 42, 100],
        };
    },
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
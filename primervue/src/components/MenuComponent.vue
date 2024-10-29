<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link> |
            </li>
            <li>
                <router-link to="/musica">Musica</router-link> |
            </li>
            <li>
                <router-link to="/cine">Cine</router-link> |
            </li>
            <li>
                <router-link to="/ciclo">Ciclo de vida</router-link> |
            </li>
            <li>
                <router-link to="/directiva">Directiva</router-link>  |
            </li>
            <li>
                <router-link to="/propiedad">Propiedad Conmmutada</router-link>  |
            </li>
            <li>
                <router-link to="/numeros">Numeros impar / par</router-link>   |
            </li>
            <li>
                <router-link to="/filters">Metodo filters</router-link> |
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
    ul#menu li {
        display: inline
    }
</style>

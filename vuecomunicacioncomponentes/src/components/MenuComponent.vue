<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link> |
            </li>
            <li>
                <router-link to="/deportes">Deportes</router-link> |
            </li>
            <li>
                <router-link to="/doble">Numero Doble Sin</router-link> |
            </li>
            
            <li>
                <router-link to="/doble/55">Numero Doble</router-link> |
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

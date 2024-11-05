<template>
    <div>
        <h1>Departamentos</h1>
        <ul class="list-">
            <li class="list-group-item">
                ID: {{ $route.params.id }}
            </li>
            <li class="list-group-item">
                Nombre: {{ $route.params.nombre }}
            </li>
            <li class="list-group-item">
                Localidad: {{ $route.params.localidad }}
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name: "DetailsDepartamento",
    data() {
        return {
            departamentos: [],
            status: false
        }
    },
    mounted() {
        
    }
}
</script>
<style></style>
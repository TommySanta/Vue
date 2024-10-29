<template>
    <div>
        <h1>
            Metodo filters
        </h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                Numer: {{ num }},
                ______Doble: {{ $filters.getNumeroDoble(num) }}
            </li>
        </ul>
        <ul>
            <li v-for="nombre in nombres" :key="nombre">
                {{ nombre }},
                -------{{ $filters.mayuscula(nombre) }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "MetodoFilters",
    data() {
        return {
            numeros: [2,5,3,6,7,233,55,32],
            nombres : ["Andrei", "Javier Jesus", "Manu","Tomas"]
        }
    }
}
</script>
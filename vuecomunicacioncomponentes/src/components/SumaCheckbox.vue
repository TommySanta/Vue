<template>
    <div>
        <h1>Suma Checkbox</h1>

        <button @click="addCheckbox()">
            Agregar Checkbox
        </button>

        <div class="checkbox-container">
            <div v-for="(checkbox, index) in checkboxSeleccionados" :key="index" class="checkbox-item">
                <label>
                    <input
                        type="checkbox"
                        :value="checkbox.value"
                        v-model="checkbox.checked"
                        @change="sumarCheckbox"
                    />
                    {{ checkbox.value }}
                </label>
            </div>
        </div>
        <br />
        <h2>La suma seleccionada es: {{ suma }}</h2>
    </div>
</template>

<script>
export default {
    name: "SumaCheckbox",
    data() {
        return {
            checkboxSeleccionados: [],
            suma: 0,
        };
    },
    methods: {
        addCheckbox() {
            const nuevoCheckbox = Math.floor(Math.random() * 100) + 1;
            this.checkboxSeleccionados.push({ value: nuevoCheckbox, checked: false });
        },
        sumarCheckbox() {
            this.suma = this.checkboxSeleccionados
                .filter(checkbox => checkbox.checked)
                .reduce((acc, curr) => acc + curr.value, 0); 
        }
    }
};
</script>

<style>
.checkbox-container {
    display: flex;
    flex-wrap: wrap;
}

.checkbox-item {
    margin-right: 15px;
}
</style>

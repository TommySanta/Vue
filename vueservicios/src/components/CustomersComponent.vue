<template>
    <div>
        <h1>Servicios API Customers</h1>
        
        <div>
            <input v-model="searchId" placeholder="Buscar por ID" />
            <button @click="buscarpersona(searchId)">Buscar</button>
        </div>

        <div v-if="searchedCustomer">
            <h2>Resultado de Búsqueda</h2>
            <table border="1" style="width: 100%; text-align: left; margin-top: 20px;">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>City</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ searchedCustomer.companyName }}</td>
                        <td>{{ searchedCustomer.contactName }}</td>
                        <td>{{ searchedCustomer.city }}</td>
                        <td>{{ searchedCustomer.id }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <table border="1" style="width: 100%; text-align: left; margin-top: 20px;">
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>City</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <td>{{ customer.companyName }}</td>
                    <td>{{ customer.contactName }}</td>
                    <td>{{ customer.city }}</td>
                    <td>{{ customer.id }}</td>
                </tr>
            </tbody>
        </table>

        
    </div>
</template>

<script>
import axios from 'axios';
import Global from './Global';

export default {
    name: "CustomersComponent",
    data() {
        return {
            customers: [],
            searchedCustomer: null, 
            searchId: '' 
        }
    },
    methods: {
        buscarpersona(id) {
            if (!id) {
                console.warn("Por favor, ingresa un ID para buscar.");
                this.searchedCustomer = null; 
                return;
            }

            let request = `customers/${id}`;
            let url = Global.urlApiCustomers + request;

            axios.get(url).then(response => {
                console.log("Leyendo servicio para buscar persona");
                if (response.data.customer) {
                    this.searchedCustomer = response.data.customer; 
                } else {
                    console.warn("Cliente no encontrado");
                    this.searchedCustomer = null;
                }
            }).catch(error => {
                console.error("Error al obtener datos: ", error);
                this.searchedCustomer = null;
            });
        }
    },
    mounted() {
        let request = "customers";
        let url = Global.urlApiCustomers + request;
        
        axios.get(url).then(response => {
            console.log("Leyendo servicio");
            console.log(response.data.results);
            this.customers = response.data.results;
        }).catch(error => {
            console.error("Error al obtener datos: ", error);
        });
    }
}
</script>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}
</style>

import axios from "axios";
import Global from "../Global";

export default class ServiceDepartamentos{
    getDepartamentos(){
        return new Promise (function(resolve){
            let departamentos = [];
            let request= "api/departamentos";
            let url= Global.urlApiDepartamentos + request;
            axios.get(url).then(response => {
                console.log("Leyendo departamentos");
                departamentos = response.data;
                resolve(departamentos);
            })
        })
    } 

    insertDepartamento(departamento){
        return new Promise(function(resolve){
            let request="api/departamentos";
            let url = Global.urlApiDepartamentos + request;
            axios.post(url, departamento).then(response => {
                resolve(response)
            })
        })
    }

    findDepartamento(id){
        return new Promise(function(resolve){
            let request="api/departamentos/"+ id;
            let url = Global.urlApiDepartamentos + request;
            let departamento = {};
            axios.get(url, id).then(response => {
                departamento=response.data;
                resolve(departamento);
            })
        })
    }
    updateDepartamento(departamento){
        return new Promise(function(resolve){
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos + request;
            axios.put(url, departamento).then(response =>{
                resolve(response);
            })
        })
    }
    deleteDepartamento(id){
        return new Promise(function(resolve){
            let request = "api/departamentos/" + id;
            let url = Global.urlApiDepartamentos + request;
            axios.delete(url).then(Response =>{
                console.log("Delete");
                resolve(Response);
            })
        })
    }
}
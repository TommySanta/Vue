import axios from "axios";
import Global from "./Global";

export default class ServiceCoches{
    getCoches = new Promise (function(resolve){
        let coches = [];
        let request = "webresources/coches";
        let url = Global.urlApiCoches + request;
        axios.get(url).then(Response => {
            console.log("Leyendo servicio");
            coches = Response.data;
            resolve(coches);
        })
    })
}
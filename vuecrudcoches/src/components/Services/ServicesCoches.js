import Global from "../Global";

export default class ServiceCoches {

    getCoches() {
        let request = "api/Coches";
        let url = Global.urlApiCoches + request;
        
        return new Promise(function(resolve, reject) {
            //Se que el fetch da una promesa pero para aconstumbrarme ausarlas en otras
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log("Leyendo coches");
                    console.log(data);
                    resolve(data);
                })
                .catch(error => {
                    console.error("Error al obtener coches:", error);
                    reject(error);
                });
        });
    }

    insertCoches(coche) {
        let request = "api/Coches/InsertCoche";
        let url = Global.urlApiCoches + request;
        
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(coche)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    findCoches(id) {
        let request = "api/Coches/FindCoche/" + id;
        let url = Global.urlApiCoches + request;
        
        return new Promise(function(resolve, reject) {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    updateCoches(coche) {
        let request = "api/Coches/UpdateCoche";
        let url = Global.urlApiCoches + request;
    
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(coche)
            })
            .then(response => {
                if (!response.ok) throw new Error("Error al actualizar coche");

                resolve(); 
            })
            .catch(error => reject(error));
        });
    }

    deleteCoches(id) {
        let request = "api/Coches/DeleteCoche/" + id;
        let url = Global.urlApiCoches + request;
        
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: "DELETE"
            })
            .then(data => {
                console.log("Delete");
                resolve(data);
            })
            .catch(error => reject(error));
        });
    }
}

import Global from "../Global";

export default class ServiceSeries {
    
    // Método para obtener todas las series
    getSeries() {
        let request = "api/Series"; 
        let url = Global.urlApiSeriesPersonajes + request;

        return new Promise(function(resolve, reject) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Leyendo series");
                    console.log(data);
                    resolve(data);
                })
                .catch(error => {
                    console.error("Error al obtener series:", error);
                    reject(error);
                });
        });
    }

    // Método para obtener una serie por ID
    getSerieById(id) {
        let request = `api/Series/${id}`;
        let url = Global.urlApiSeriesPersonajes + request;

        return new Promise(function(resolve, reject) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Leyendo serie");
                    console.log(data);
                    resolve(data);
                })
                .catch(error => {
                    console.error("Error al obtener la serie:", error);
                    reject(error);
                });
        });
    }

    // Método para obtener los personajes de una serie por ID
    getPersonajesBySerieId(idSerie) {
        let request = `api/Series/PersonajesSerie/${idSerie}`;
        let url = Global.urlApiSeriesPersonajes + request;

        return new Promise(function(resolve, reject) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Leyendo personajes de la serie");
                    console.log(data);
                    resolve(data);
                })
                .catch(error => {
                    console.error("Error al obtener personajes de la serie:", error);
                    reject(error);
                });
        });
    }
}

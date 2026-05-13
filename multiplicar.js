function generarTablas(){

    let contenedor = document.getElementById("contenedorTabla");

    let numero = parseInt(document.getElementById("numero").value);

    if(isNaN(numero)){

        contenedor.innerHTML = "<h2>Ingresa un número válido</h2>";

        return;
    }

    let contenido = "";
    contenido += "<table class='tabla'>";
    for(let i = 1; i <= 10; i++){
        contenido += "<tr>";
        contenido += "<td>" + numero + " x " + i + "</td>";
        contenido += "<td>=</td>";
        contenido += "<td>" + (numero * i) + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";
    contenedor.innerHTML = contenido;
}
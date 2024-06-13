// Evento que carga la función automáticamente

window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";

    // Evento que permite cambiar el objeto onchange
    document.getElementById("stadium").onchange = function(e){
        // Variable que guarda el destino del valor seleccionado por el usuario
        let n = e.target.value;

        // Expresiones que guardan las imágenes de los estadios y la información de cada uno...
        let imagen = "<img src='img/combo/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='estadio' />";
        let text = [
            "Ciudad: Al Rayyan - Capacidad: 60,000 espectadores",
            "Ciudad: Al Khor City - Capacidad: 60,000 espectadores",
            "Ciudad: Al Wakrah - Capacidad: 40,000 espectadores",
            "Ciudad: Al Doha - Capacidad: 40,000 espectadores",
            "Ciudad: Al Rayyan - Capacidad: 40,000 espectadores",
            "Ciudad: Al Doha - Capacidad: 45,416 espectadores",
            "Ciudad: Al Doha - Capacidad: 80,000 espectadores",
            "Ciudad: Al Doha - Capacidad: 40,000 espectadores"
        ];
        // Salida de las imágenes y los textos informativos
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n - 1];
    };
}

// Función del botón Reiniciar
document.getElementById("btn-clean").onclick = function(){
    document.getElementById("").innerHTML = "<img src='img/logo.png' class='img-fluid rounded' alt='logo' />";
    // Limpia los textos informativos de los estadios
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("stadium").innerHTML = "";
};
function menu() {
    let seleccion = document.getElementById('opciones').value;



    //usamos switch de js para elegir las opciones deseadas
    //window.open() es un metodo al que se pasa una url para abrir en una nueva ventana
    //window.location.href = "servicios.html" ejecuta la pagina web directamente;

    switch (seleccion) {
        case 'A':
            Swal.fire({
                icon: "success",
                title: "Retrato",
                text: "Un momento por favor...",
                showConfirmButton : false,
                timer: 2000,
            }).then(() => {
                window.location.href = "retrato.html";
            });
            return;

        case 'B':
            Swal.fire({
                icon: "success",
                title: "Bodas",
                text: "Un momento por favor...",
                showConfirmButton : false,
                timer: 2000,
            }).then(() => {
                window.location.href = "boda.html";
            });
            return;

        case 'C':
            Swal.fire({
                icon: "success",
                title: "Paisajes",
                text: "Un momento por favor...",
                showConfirmButton : false,
                timer: 2000,
            }).then(() => {
                window.location.href = "paisaje.html";
            });
            return;
    }

}
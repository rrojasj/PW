// Función para revelar lightbox y agregar reproducción automática de YouTube
function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //adicionar el autoplay URL
    document.getElementById(video_id).src = video + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
}
// Ocultar la caja y eliminar la reproducción automática de YouTube
function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //remover el autoplay URL
    var cleaned = video.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}

//variable de arreglo
let micarrusel = {};
let foto = 0;
let total = 0;

//arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [{ imageurl: "imgs/pw_e1_about_services_carousel_1.webp", titulo: "Asesorías" },
    { imageurl: "imgs/pw_e1_about_services_carousel_2.webp", titulo: "Mantenimiento" },
    { imageurl: "imgs/pw_e1_about_services_carousel_3.webp", titulo: "Escuela de manejo" }
];


//funcion que permite cambiar las imagenes (anterior y siguiente)
let cambiar = function(mas) {
    //almacena la cantidad total de imagenes
    total = micarrusel.length;
    //almacena la proxima foto
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        //tiene la cantidad total de imagenes
        foto = total;
    }

    //instrucciones que apuntan a cada imagen y titulo que brinda cada logotipo
    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;
}
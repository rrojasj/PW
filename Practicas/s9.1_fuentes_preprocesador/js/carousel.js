//variable de arreglo
let micarrusel = {};
let foto = 0;
let total = 0;

//arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [{ imageurl: "imagenes/1.png", titulo: "Logo #1" },
    { imageurl: "imagenes/2.png", titulo: "Logo #2" },
    { imageurl: "imagenes/3.png", titulo: "Logo #3" },
    { imageurl: "imagenes/4.png", titulo: "Logo #4" },
    { imageurl: "imagenes/5.png", titulo: "Logo #5" }
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
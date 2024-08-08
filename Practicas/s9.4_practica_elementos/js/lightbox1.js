//obtener el modal
var modal = document.getElementById("modal-lb");

//obtener la imagen y agregarla dentro del modal - 
//Usar el texto alternativo "alt" como subtítulo

//imagen
var img = document.getElementById("myImg");
//contenido
var modalImg = document.getElementById("img01");
//titulo 
var captionText = document.getElementById("caption");


//al dar clic a la foto en pequeño 
img.onclick = function() {
    //desplegar la foto
    modal.style.display = "block";
    //apunta el contenido del modal
    modalImg.src = this.src;
    //asigna el ALT debabo de la imagen
    captionText.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal
var cerrar = document.getElementsByClassName("close")[0];

//cuando el usuario hace clic en <span> (x), cierre el modal
cerrar.onclick = function() {
    modal.style.display = "none";
}
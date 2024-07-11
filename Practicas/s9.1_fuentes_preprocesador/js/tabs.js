/*

La función toma dos parámetros: evt (evento) y info (información).
Dentro de la función, se declaran tres variables: i, tabcontent y tablinks.
Se obtienen todos los elementos con la clase "tabcontent" y se almacenan en la variable tabcontent. 
Estos elementos representan el contenido de cada pestaña.
Se itera sobre todos los elementos en tabcontent y se establece su estilo de visualización como "none", lo que los oculta a todos.
Luego, se obtienen todos los elementos con la clase "tablinks" y se almacenan en la variable tablinks. 
Estos elementos representan los enlaces o botones que activan cada pestaña.
Se itera sobre todos los elementos en tablinks y se reemplaza la clase "active" en su nombre de clase por una cadena vacía, 
lo que desactiva todos los enlaces o botones.
Después de eso, se muestra el contenido de la pestaña correspondiente al elemento con el ID especificado por info estableciendo 
su estilo de visualización como "block".
Finalmente, se agrega la clase "active" al enlace o botón actualmente activo mediante la propiedad className,
lo que resalta visualmente la pestaña activa.

*/





//recibe el controlador de eventos y el ID de cada contenido
function opciones(evt, info) {
  
  //*declaracion de variables
  //i controla el for
  //tabcontent controla el contenido de los TABS
  //tablinks controla los enlaces de los TABS
  var i, tabcontent, tablinks;

  // Obtener todos los elementos con class = "tabcontent" y ocúltelos
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Apunta a todos los elementos con class = "tablinks" y elimine la clase "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Apunta a todos los elementos con class = "tablinks" y elimine la clase "active". 
  //Muestre la pestaña actual y agregue una clase "activa" al botón que abrió la pestaña.
  document.getElementById(info).style.display = "block";
  evt.currentTarget.className += " active";
}
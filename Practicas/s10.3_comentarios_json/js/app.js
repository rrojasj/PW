//asignaciones ID
const listaTweets = document.querySelector('#lista-comentarios');
const formulario = document.querySelector('#form');

//variable de arreglo vacío, no contiene ningún elemento en este momento.
let tweets = [];

//llamada a al funcion eventListerners
eventListeners();


//cargas de funciones
function eventListeners() {
    //funcion que permite enviar los comentarios al formulario
    formulario.addEventListener('submit', agregarTweet);
    //funcion que permite borrar comentarios
    listaTweets.addEventListener('click', borrarTweet);


    //contenido cargado
    //sirve para realizar acciones cuando el DOM ha terminado de cargar y se encuentra listo.
    document.addEventListener('DOMContentLoaded', () => {
        //localStorage.getItem('tweets') permite obtener la información almacenada en la clave 'tweets' del almacenamiento localStorage. 
        //JSON.parse() permite convertir la cadena JSON nuevamente en un arreglo de JavaScript y lo asigna a la variable tweets. 
        //si no hay nada almacenado en el localStorage bajo la clave 'tweets', se establece tweets como un arreglo vacío [].
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        //cargamos la funcion que permite crear contenido de la caja de comentarios
        crearHTML();
    });
}



//añadir comentarios del formulario
function agregarTweet(e) {
    //evitar que el evento predeterminado (como enviar un formulario y recargar la página) ocurra. 
    //es utilizado en formularios para evitar recargas innecesarias.
    e.preventDefault();
    // leer el valor del textarea
    //obtiene el contenido del elemento con el id "tweet". 
    //leer el valor del textarea donde los usuarios pueden escribir su tweet.
    const tweet = document.querySelector('#tweet').value;

    //validación para asegurarse de que el tweet no esté vacío.
    if (tweet === '') {
        Swal.fire({
            icon: 'error',
            title: 'Atención usuario',
            text: 'NO EXISTEN COMENTARIOS'
        });
        return;
    }

    //crear un objeto que representa un tweet con un identificador único y su contenido, y luego lo añade al arreglo tweets
    //el valor de Date.now() se utiliza para asignar un identificador único a cada tweet
    const tweetObj = {
            id: Date.now(),
            //el contenido del tweet, que se obtiene previamente del textarea y se almacena en la variable tweet.
            texto: tweet
        }
        //agrega el objeto tweetObj al arreglo tweets utilizando la sintaxis de propagación (...). 
        //es una técnica que se utiliza para crear un nuevo arreglo que contiene todos los elementos del arreglo original tweets, más el nuevo objeto tweetObj al final.
    tweets = [...tweets, tweetObj];

    //una vez agregado, mandamos renderizar el contenido de cuadro de comentariosL
    crearHTML();
    //reiniciar el formulario
    formulario.reset();
}



//cargar funcion crearHTML (contenido de la caja de comentarios)

function crearHTML() {
    //carga la funcion limpiar 
    limpiarHTML();
    //esta línea comprueba si el arreglo tweets tiene una longitud mayor a cero, lo que significa que hay al menos un tweet almacenado en él. 
    //si se cumple esta condición, el código dentro del bloque de if se ejecutará.
    if (tweets.length > 0) {
        //si el arreglo tweets tiene al menos un tweet, se ejecutará un ciclo forEach. El método forEach() se utiliza para recorrer cada elemento del arreglo tweets 
        //y realizar una acción para cada elemento.En este caso, se utiliza una función de flecha para definir lo que se hará con cada tweet.
        tweets.forEach(tweet => {
            //crear boton de eliminar
            const botonBorrar = document.createElement('a');
            //buscar la clasa borrar-tweet en la hoja de estilo llamada custom.css
            botonBorrar.classList = 'borrar-tweet';
            //innerText devuelve el contenido de texto de un elemento 
            botonBorrar.innerText = 'X';

            //crear elemento y añadirle el contenido a la lista
            const li = document.createElement('li');

            //añadir el texto
            li.innerText = tweet.texto;

            //añadir el botón de borrar al tweet
            li.appendChild(botonBorrar);

            //añadir un atributo único...
            li.dataset.tweetId = tweet.id;

            // añade el comentario a la lista
            listaTweets.appendChild(li);
        });
    }
    //cargar la funcion llamada que permite agregar los comentarios al localstorage
    sincronizarStorage();
}



// eliminar el comentario del DOM
function borrarTweet(e) {
    //evitar el comportamiento predeterminado del evento. Esto es especialmente útil en este caso si se utiliza un botón dentro de un formulario, 
    //para que el formulario no se envíe y la página no se recargue al hacer clic en el botón.
    e.preventDefault();
    //e.target.parentElement.dataset.tweetId para obtener el ID del tweet que se va a borrar. e.target hace referencia al elemento que desencadenó el evento, 
    //y parentElement accede al elemento padre del botón(el elemento que contiene toda la información del tweet, como un div o un artículo).
    //luego, dataset.tweetId obtiene el valor del atributo data - tweet - id, que almacena el ID del tweet como un atributo personalizado en el elemento.
    const id = e.target.parentElement.dataset.tweetId;
    //el metodo filter ecorre cada elemento del arreglo tweets y, en este caso, conserva solo aquellos tweets cuyo id no coincide con el id del tweet a borrar.
    //esto efectivamente elimina el tweet con el ID especificado del arreglo tweets.
    tweets = tweets.filter(tweet => tweet.id != id);
    //carga la funcion
    crearHTML();
}


//guarda el arreglo tweets en el almacenamiento local del navegador, para que los tweets se mantengan incluso después de que el usuario actualice o cierre la página.
//utilizar localStorage.setItem() para almacenar la información en el almacenamiento local.
//el método JSON.stringify() toma un objeto o arreglo de JavaScript y lo transforma en una cadena de texto con formato JSON. 
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


//eliminar los comentarios del campo textarea
//eliminar todos los elementos hijos del elemento con el identificador listaTweets.
//si hay elementos HTML dentro del elemento con el id "listaTweets", esta función los eliminará uno por uno hasta que no queden más hijos.
function limpiarHTML() {
    //el método firstChild se utiliza para obtener el primer hijo del elemento con el id "listaTweets". 
    //el ciclo while se ejecutará siempre que haya un primer hijo en listaTweets. Esto significa que mientras haya elementos hijos en listaTweets, el ciclo se repetirá.
    //si el elemento tiene hijos, esto devolverá el primer hijo. Si no tiene hijos, firstChild será null.
    while (listaTweets.firstChild) {
        //en cada iteración del ciclo, la función removeChild() se utiliza para eliminar el primer hijo del elemento listaTweets. 
        //importante eliminar el primer hijo en cada iteración, ya que si no se hace, el ciclo no avanzará y se convertiría en un bucle infinito.
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
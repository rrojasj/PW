window.onload = function(){
    document.getElementById('foto').onchange = function(e) {

        // Guardar el destino o valor de la foto en una variable
        raza = e.target.value;

        // Variable que almacena la foto utilizando la expresión que busca la imagen seleccionada en la carpeta imgs
        var imgRaza = "url('imgs/pw_t3_reto4_" + raza + ".png')";

        // Envía la foto al lugar respectivo - Al "id" llamado "fotoPerro"
        // La variable imgRaza almacenó la imagen elegida por el usuario
        document.getElementById("fotoPerro").style.backgroundImage = imgRaza;
    }
}

let opcSeleccionada = document.querySelector('select');

opcSeleccionada.addEventListener('change', activarPerro);

function obtenerPerro(){
    let razaSeleccionada = opcSeleccionada.value;

    // Si el valor seleccionado NO es una raza se limpia el espacio descripcion (párrafo)
    // if(razaSeleccionada != "beagle" || razaSeleccionada != "poodle" || razaSeleccionada != "bulldog" || razaSeleccionada != "corgi" || razaSeleccionada != "border_collie" || razaSeleccionada != "german_shepherd" || razaSeleccionada != "golden_retriever" ) {
    //     descripcion.innerHTML = "";
    // }

    if (razaSeleccionada === 'beagle') {
        descripcion.innerHTML = "Los Beagles son una raza de perros pequeños y amigables, conocidos por su excelente sentido del olfato y su energía inagotable. Originalmente criados para la caza, tienen un fuerte instinto de rastreo. Los Beagles son inteligentes, curiosos y sociales, lo que los hace excelentes mascotas familiares. Curiosamente, su sentido del olfato es tan agudo que son frecuentemente utilizados en aeropuertos para detectar contrabando. Además, los Beagles tienen una característica distintiva: sus orejas largas ayudan a captar más aromas del suelo.";
    } else if (razaSeleccionada === 'poodle') {
        descripcion.innerHTML = "Los Poodles, o Caniches, son conocidos por su inteligencia, elegancia y habilidades de aprendizaje rápido. Originarios de Alemania, fueron utilizados inicialmente para la caza acuática. Existen en tres tamaños: estándar, miniatura y toy. Los Poodles son hipoalergénicos, lo que los hace ideales para personas con alergias. Curiosamente, su corte de pelo distintivo tiene raíces prácticas, diseñado para proteger sus órganos vitales en aguas frías. Además, son famosos por destacarse en competiciones de obediencia y agilidad.";
    } else if (razaSeleccionada === 'bulldog') {
        descripcion.innerHTML = "Los Bulldogs son una raza robusta y de apariencia única, conocida por su cara arrugada y su andar pesado. Originarios de Inglaterra, fueron criados para el deporte de la tauromaquia, de ahí su nombre. A pesar de su aspecto intimidante, los Bulldogs son afectuosos, leales y buenos con los niños. Curiosamente, son excelentes compañeros de hogar debido a su naturaleza tranquila. Tienen una esperanza de vida de 8 a 10 años y requieren cuidados especiales debido a su estructura facial.";
    } else if (razaSeleccionada === 'corgi') {
        descripcion.innerHTML = "Los Corgis, especialmente conocidos por las variedades Pembroke y Cardigan, son pequeños perros de pastoreo originarios de Gales. Conocidos por sus patas cortas y cuerpos largos, son ágiles y enérgicos. Los Corgis tienen una personalidad amigable y cariñosa, y son excelentes compañeros de familia. Curiosamente, la Reina Isabel II ha tenido más de 30 Corgis durante su reinado. Son conocidos por su inteligencia y habilidad para aprender trucos rápidamente. Además, sus orejas erectas y expresivos ojos les dan una apariencia siempre alerta y curiosa.";
    } else if (razaSeleccionada === 'border_collie') {
        descripcion.innerHTML = "Los Border Collies son considerados una de las razas de perros más inteligentes y enérgicas. Originarios de la frontera entre Escocia e Inglaterra, fueron criados para pastorear ovejas. Son conocidos por su impresionante capacidad de aprendizaje y su habilidad para ejecutar órdenes complejas. Los Border Collies destacan en deportes caninos y competiciones de agilidad. Curiosamente, pueden aprender hasta 1,000 palabras y comandos. Necesitan mucho ejercicio y estimulación mental para mantenerse felices y saludables. Su mirada intensa, conocida como 'el ojo', es una herramienta esencial para controlar el ganado.";
    } else if (razaSeleccionada === 'german_shepherd') {
        descripcion.innerHTML = "Los German Shepherds, o Pastores Alemanes, son conocidos por su inteligencia, lealtad y versatilidad. Originarios de Alemania, fueron criados inicialmente para el pastoreo y la protección de rebaños. Son populares en roles de trabajo como perros policía, de búsqueda y rescate, y de asistencia. Los German Shepherds son altamente entrenables y destacan en competiciones de obediencia y agilidad. Curiosamente, tienen una estructura física fuerte y ágil, con un sentido del olfato excepcional. Además, su temperamento equilibrado los convierte en excelentes mascotas familiares y protectores confiables.";
    } else if (razaSeleccionada === 'golden_retriever') {
        descripcion.innerHTML = "Los Golden Retrievers son una raza popular por su naturaleza amigable, inteligencia y lealtad. Originarios de Escocia, fueron criados para recuperar presas durante la caza. Son conocidos por su pelaje dorado y su disposición afectuosa, lo que los hace excelentes mascotas familiares. Los Golden Retrievers son altamente entrenables y sobresalen en tareas como perros guía, de terapia y de búsqueda y rescate. Curiosamente, son grandes nadadores debido a sus patas palmeadas. Además, tienen una boca suave, lo que les permite llevar objetos delicados sin dañarlos.";
    } else {
        descripcion.innerHTML = "";
        var elementosPerro = document.getElementsByClassName('active');
        for (var i=0; i < elementosPerro.length; i++){
            elementosPerro[i].classList.add('d-none');
        }
    }

}

/** 
 * @name activarPerro
 * @description Remueve la clase d-none del div para que se muestre la sección agregando la clase "active"
 * */
function activarPerro(){
    var elementosPerro = document.getElementsByClassName('active');
    for (var i=0; i < elementosPerro.length; i++){
        elementosPerro[i].classList.remove('d-none');
    }
    
    obtenerPerro();

}
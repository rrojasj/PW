// Carga la función que incova el botón Calcular y luego ejecuta la función evaluación
document.querySelector('#btnCalcular').addEventListener('click', evaluacion);

// Carga la función llamada evaluación
function evaluacion() {
    char = document.querySelector('#charla').value;

    error_radio = validar_radio();

    if (char == "" || error_radio == true) {
        Swal.fire ({
            title: 'Atención',
            imageUrl: 'images/error.png',
            width: 450,
            height: 200,
            iconColor: '#FFF',
            position: 'center',
            confirmButtonColor: '#c82b2b',
            color: '000',
            html: '<br><br>Tiene campos vacíos.<br><br>Contestar todas las preguntas',
        })
    } else {
        // Asignación o apuntar a todos los radios que han sido seleccionados en cada variable
        preg1 = document.querySelector('#pregunta1 input[type=radio]:checked').value;
        preg2 = document.querySelector('#pregunta2 input[type=radio]:checked').value;
        preg3 = document.querySelector('#pregunta3 input[type=radio]:checked').value;
        preg4 = document.querySelector('#pregunta4 input[type=radio]:checked').value;
        preg5 = document.querySelector('#pregunta5 input[type=radio]:checked').value;

        // Convertir a enteros las variables de cada pregunta para poder hacer los cálculos
        numres1 = parseInt(preg1);
        numres2 = parseInt(preg2);
        numres3 = parseInt(preg3);
        numres4 = parseInt(preg4);
        numres5 = parseInt(preg5);

        // Cálculos matemáticos
        // El rubro malo tiene un valor 1pt
        // El rubro regular tiene un valor 2pts
        // El rubro bueno tiene un valor 3pts
        // El rubro muy bueno tiene un valor 4pts
        // El rubro excelente tiene un valor 5pts
        // Se suman los rubros otorgados de cada pregunta y se hacen los cálculos matemáticos

        ptnSubTotal = numres1 + numres2 + numres3 + numres4 + numres5;
        console.log(ptnSubTotal);

        ptnTotal = ptnSubTotal / 25;

        porcFinal = ptnTotal * 100;

        // Resultado desplegable
        Swal.fire ({
            title: 'Evaluación obtenida: ' + porcFinal + '%',
            icon: 'info',
            iconColor: '#FFF',
            color: '#FFF',
            position: 'center',
            confirmButtonColor: '#c82b2b',
            html: '<br><br>Calificación brindada a la charla: ' + char,
        })
    };
}

// Validación de los radios usando la función flecha JS
let validar_radio = () => {
    let error = false;
    let error_radio = false;

    let inpRadio1 = document.querySelector('#pregunta1 input[type=radio]:checked').value;
    let inpRadio2 = document.querySelector('#pregunta2 input[type=radio]:checked').value;
    let inpRadio3 = document.querySelector('#pregunta3 input[type=radio]:checked').value;
    let inpRadio4 = document.querySelector('#pregunta4 input[type=radio]:checked').value;
    let inpRadio5 = document.querySelector('#pregunta5 input[type=radio]:checked').value;
    // Operador desigual (!=*)
    if(!inpRadio1 || !inpRadio2 || !inpRadio3 || !inpRadio4 || !inpRadio5) {
        error = true;
        error_radio = true;
    } else {
        error_radio = false;
    }
    return error_radio;
}

// Función limpiar todos los radios y el campo input del nombre de la charla
function btnLimpiar() {
    document.getElementById('charla').value = "";
    document.getElementById('a').checked = false;
    document.getElementById('b').checked = false;
    document.getElementById('c').checked = false;
    document.getElementById('d').checked = false;
    document.getElementById('e').checked = false;
    document.getElementById('f').checked = false;
    document.getElementById('g').checked = false;
    document.getElementById('h').checked = false;
    document.getElementById('i').checked = false;
    document.getElementById('j').checked = false;
    document.getElementById('k').checked = false;
    document.getElementById('l').checked = false;
    document.getElementById('m').checked = false;
    document.getElementById('n').checked = false;
    document.getElementById('o').checked = false;
    document.getElementById('p').checked = false;
    document.getElementById('q').checked = false;
    document.getElementById('r').checked = false;
    document.getElementById('s').checked = false;
    document.getElementById('t').checked = false;
    document.getElementById('u').checked = false;
    document.getElementById('v').checked = false;
    document.getElementById('w').checked = false;
    document.getElementById('x').checked = false;
    document.getElementById('y').checked = false;
    document.getElementById('z').checked = false;

}
document.addEventListener('DOMContentLoaded', function() {
    const buscadorForm = document.getElementById('buscadorForm');
    const cedulaInput = document.getElementById('cedula');
    const resultadoContainer = document.getElementById('resultado');

    // Carga de la biblioteca de eventos submit
    buscadorForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Trim para eliminar espacios en blanco al inicio y al final
        const cedula = cedulaInput.value.trim();

        // Verifica si el campo de cédula está vacío
        if (cedula.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingresa una cédula antes de buscar'
            });
        } else {
            // Verifica si el valor ingresado no es un número
            if (isNaN(cedula)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'La cédula ingresada no es válida.'
                });
            }
            // Cargar la función validar cédula 
            else if (validarCedula(cedula)) {
                // Cargar la función que muestra los empleados por cédula
                mostrarInformacionEmpleado(cedula);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'La cédula ingresada no es válida.'
                });
            }
        }
    });

    // Función validar campo cédula

    function validarCedula(cedula) {
        // Verifica si la cédula tiene exactamente 9 digitos numéricos
        return /^\d{9}$/.test(cedula);
    }

    // Función que permite almacenar los datos de los empleados
    function mostrarInformacionEmpleado(cedula) {
        const empleados = {
            '112810910': {nombre: 'Pablo Miranda', jornada: 'Diurna', salario: '$1500', foto: '../imagenes/usuario1.jpg', descripcion: 'Diseñador Web'},
            '112810911': {nombre: 'Karla Castro', jornada: 'Nocturna', salario: '$3500', foto: '../imagenes/usuario2.jpg', descripcion: 'Diseñador UI/UX'},
            '112810912': {nombre: 'Oscar Soto', jornada: 'Diurna', salario: '$1600', foto: '../imagenes/usuario3.jpg', descripcion: 'Programador Web'},
            '112810913': {nombre: 'Rebeca Suarez', jornada: 'Mixta', salario: '$1400', foto: '../imagenes/usuario4.jpg', descripcion: 'Diseñadora gráfica'},
            '112810914': {nombre: 'Pablo Coto', jornada: 'Nocturna', salario: '$1300', foto: '../imagenes/usuario5.jpg', descripcion: 'Analista de sistemas'},
        };
        // Condicional que permite validar si el usuario existe
        if (empleados[cedula]) {
            const empleado = empleados[cedula];
            // Cargar función que muestra el resultado final de la búsqueda
            mostrarResultado(empleado);
        } else {
            wal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El usuario no existe.'
            });
        }
    }

    // Función que muestra el resultado final de la búsqueda
    function mostrarResultado(empleado) {
        // Permite crear contenido HTML
        resultadoContainer.innerHTML =  
        `<div class="card" style="width: 18rem;">
	        <img src="imagenes/${empleado.foto}" class="card-img-top" alt="Foto del empleado">
            <div class="card-body">
                <h5 class="card-title">${empleado.nombre}</h5>
                <p class="card-text">Descripción: ${empleado.descripcion}</p>
                <p class="card-text">Jornada: ${empleado.jornada}</p>
                <p class="card-text">Salario: ${empleado.salario}</p>
            </div>
        </div>`
    }
    /* Cierre del evento principal */
})

function borrar() {
    document.getElementById('cedula').value = "";
    document.getElementById('resultado').value = "";
}
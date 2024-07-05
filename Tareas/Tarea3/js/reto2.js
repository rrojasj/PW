function convertirDolares(){

    var montoDolares = document.getElementById('montoDs').value;
    var tipoCambio = document.getElementById('tipoCambioDs').value;

    var valid = validarCampos(montoDolares, tipoCambio);
    
    if(valid){
        var totalCambio = montoDolares * tipoCambio;

        Swal.fire({
            icon: 'success',
            title: 'Tipo de Cambio',
            html: 'Dólares: <strong>$' + montoDolares + '</strong><br>' +
                  'Tipo de cambio en colones: <strong>₡' + formatNumber(totalCambio) + '</strong>',
            showConfirmButton: true,
            confirmButtonText: 'Cerrar'
        }).then((result) => {
            if (result.isConfirmed) {
                limpiarDatos();
            }
        });
    } else {
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Campos vacios. Intentar de nuevo por favor.',
        })
    }

}

function convertirColones(){

    var montoColones = document.getElementById('montoCs').value;
    var tipoCambio = document.getElementById('tipoCambioCs').value;

    var valid = validarCampos(montoColones, tipoCambio);
    
    if(valid){
        var totalCambio = montoColones / tipoCambio;

        Swal.fire({
            icon: 'success',
            title: 'Tipo de Cambio',
            html: 'Colones: <strong>$' + montoColones + '</strong><br>' +
                  'Tipo de cambio en dólares: <strong>₡' + formatNumber(totalCambio) + '</strong>',
            showConfirmButton: true,
            confirmButtonText: 'Cerrar'
        }).then((result) => {
            if (result.isConfirmed) {
                limpiarDatos();
            }
        });
    } else {
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Campos vacios. Intentar de nuevo por favor.',
        })
    }
}

/**
 * @name validarNumeros 
 * @description Valida que el campo solo tenga números, en caso contrario el campo se vacía automáticamente 
 * @returns Integer
 */ 
function validarNumeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos
    
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
         out += string.charAt(i);
    
    //Retornar valor filtrado
    return out;
} 

/** 
 * @name validarCampos
 * @description Verifica que los el total de los campos necesario estén llenos y define si es falso o verdadero
 * @params montoMoneda, tipoCambio
 * @returns boolean
 * */
function validarCampos(montoMoneda, tipoCambio) {
    var valid = true;

    if (montoMoneda === "" || tipoCambio === ""){
        valid = false;
    } 

    return valid;
}

/** 
 * @name formatNumber
 * @description Formatea diferentes montos y retorna un valor en String pero con el formato requerido
 * @params num
 * @returns String
 * */
function formatNumber(num) {
    return parseFloat(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** 
 * @name limpiarDatos
 * @description Limpia todos los datos donde haya información previamente ingresada
 * */
function limpiarDatos(){
    document.getElementById('montoDs').value = "";
    document.getElementById('tipoCambioDs').value = "";
    document.getElementById('montoCs').value = "";
    document.getElementById('tipoCambioCs').value = "";
}
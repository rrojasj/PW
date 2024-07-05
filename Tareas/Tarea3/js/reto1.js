
/**
 * @name Numeros 
 * @description Valida que el campo solo tenga números, en caso contrario el campo se vacía automáticamente 
 * @returns Integer
 */ 
function Numeros(string){
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
 * @var numFact
 * @description Variable global que va a ser el consecutivo de la factura y aumenta al generar una nueva factura.
 */
var numFact; 
// Inicializo numFact desde localStorage o configurar en 1000 si no existiera
if (localStorage.getItem('numFact')) {
    numFact = parseInt(localStorage.getItem('numFact'));
} else {
    numFact = 1000;
    localStorage.setItem('numFact', numFact);
}

/**
 * @var totalVentas
 * @description Variable global que va a llevar la sumatoria de todas las ventas agregadas a la tabla.
 */
var totalVentas; 
// Inicializo totalVentas desde localStorage o configurar en 0
if (localStorage.getItem('totalVentas')) {
    totalVentas = parseFloat(localStorage.getItem('totalVentas'));
} else {
    totalVentas = 0;
    localStorage.setItem('totalVentas', totalVentas);
}


/**
 * @name obtenerTotal
 * @description Obtiente el subtotal y lo muestra en el campo de Total en la sección de "Información general"
 * @returns object
 */
function obtenerTotal() {
    
    var precioNum;

    var option = document.getElementById('sltConsola').value;
    var cantidad = document.getElementById('cantidad').value;
    
    if (option == 'PlayStation®4'){
        precioNum = 171270;
    } else if (option == 'PlayStation®5'){
        precioNum = 233031;
    } else if (option === "Xbox Series X"){
        precioNum = 251196;
    } else if (option === "Xbox Series S"){
        precioNum = 181131;
    } else if (option === "Nintendo Switch"){
        precioNum = 154662;
    } else if (option === "Nintendo Switch OLED"){
        precioNum = 176979;
    }
    
    var subtotal = cantidad * precioNum;
    
    document.getElementById('totalPorConsolas').value = subtotal;

    return {subtotal: subtotal, option: option, cantidad: cantidad, precioUnid: precioNum};
}

/** 
 * @name formatDate
 * @description Obtiene la fecha formateada de acuerdo a lo que se necesita 
 * @returns String
 * */
function formatDate() {
    var meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth(); // mes es devuelto como un número entre 0 y 11

    var mesTexto = meses[mes];
    var año = fecha.getFullYear();

    // Formatear la fecha como DD de MM, YYYY
    var fechaFormateada = dia + " de " + mesTexto + ", " + año;

    return fechaFormateada;
}

/** 
 * @name generarFactura
 * @description Genera la factura y muestra los detalles en los campos respectivos y el botón de imprimir 
 * */
function generarFactura(){

    var nombreCliente = document.getElementById('nombre').value;
    var apellidoCliente = document.getElementById('apellido').value;
    var nombreCompleto = nombreCliente + " " + apellidoCliente;
    var fechaFormateada = formatDate();

    var totalResults = obtenerTotal();

    //
    var valid = validarCampos(nombreCliente, apellidoCliente);

    if(valid){
        activarFactura();


        document.getElementById('numFactura').innerHTML = numFact;
        document.getElementById('diaCompra').innerHTML = fechaFormateada;
        document.getElementById('nombreCompleto').innerHTML = nombreCompleto;
    
        document.getElementById('articuloCompra').innerHTML = totalResults.option;
        document.getElementById('cantidadConsolas').innerHTML = totalResults.cantidad;
        document.getElementById('precioUnidad').innerHTML = totalResults.precioUnid;
    
        var totalIVA = calcularIVA(totalResults.subtotal);
        var totalServicio = calcularServ(totalResults.subtotal);
        var totalFactura = calcularTotalFact(totalResults.subtotal, totalIVA, totalServicio);
    
        document.getElementById('subtotal').innerHTML = "₡" + formatNumber(totalResults.subtotal);
        document.getElementById('iva').innerHTML = "₡" + formatNumber(totalIVA);
        document.getElementById('servicio').innerHTML = "₡" + formatNumber(totalServicio);
        document.getElementById('totalFactura').innerHTML = "₡" + formatNumber(totalFactura);

        agregarDatosTabla(numFact, fechaFormateada, nombreCompleto, totalResults.option, totalResults.cantidad, formatNumber(totalFactura));

        incrementNumFact();
        sumarVentas(totalFactura);
        
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
 * @name incrementNumFact
 * @description Incrementa el número de factura y se guarda en localStorage
 * */
function incrementNumFact() {
    numFact++;
    localStorage.setItem('numFact', numFact);
}

/** 
 * @name sumarVentas
 * @description Incrementa el número de factura y se guarda en localStorage
 * */
function sumarVentas(totalFactura) {
    totalVentas = totalVentas + totalFactura;
    localStorage.setItem('totalVentas', totalVentas);
    document.getElementById('totalVentas').innerHTML = "₡" + formatNumber(totalVentas);
}

function cargarDatosTabla() {
    // Obtener los datos desde localStorage
    let tableData = JSON.parse(localStorage.getItem('tablaCompras')) || [];

    // Recorrer los datos y agregue cada fila a la tabla en el DOM
    tableData.forEach(row => {
        var datosTabla = "<td>" + row.numFact + "</td><td>" + row.fecha + "</td><td>" + row.cliente + "</td><td>" + row.opcionArticulo + "</td><td>" + row.cant + "</td><td>" + "₡" + row.totalFactura + "</td>";
        var agregar = document.createElement("tr");
        agregar.innerHTML = datosTabla;
        document.getElementById('tablaCompras').appendChild(agregar);
    });
}

/** 
 * @name validarCampos
 * @description Verifica que los el total de los campos necesario estén llenos y define si es falso o verdadero
 * @params nombre, apellido
 * @returns boolean
 * */
function validarCampos(nombre, apellido) {
    var valid = true;

    var option = document.getElementById('sltConsola').value;
    var cantidad = document.getElementById('cantidad').value;

    if (nombre === "" || apellido === "" || option === "" || cantidad === ""){
        valid = false;
    } 

    return valid;
}

/** 
 * @name calcularIVA
 * @description Calcula el monto total del impuesto IVA
 * @params subtotal
 * @returns number
 * */
function calcularIVA(subtotal){
    var porcIVA = 0.13;
    var totalImpuesto = porcIVA * subtotal;

    return parseFloat(totalImpuesto.toFixed(2));
}

/** 
 * @name calcularServ
 * @description Calcula el monto del porcentaje por el servicio
 * @params subtotal
 * @returns number
 * */
function calcularServ(subtotal){
    var porcServ = 0.05;
    var totalServicio = porcServ * subtotal;

    return parseFloat(totalServicio.toFixed(2));
}

/** 
 * @name calcularServ
 * @description Calcula el monto total de la factura
 * @params subtotal, totalIva, totalServ
 * @returns number
 * */
function calcularTotalFact(subtotal, totalIva, totalServ){

    var totalFactura = subtotal + totalIva + totalServ;

    return totalFactura.toFixed(2);
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
 * @name activarFactura
 * @description Remueve la clase d-none del div para que se muestre la sección agregando la clase "active"
 * */
function activarFactura(){
    var elementosFact = document.getElementsByClassName('active');
    for (var i=0; i < elementosFact.length; i++){
        elementosFact[i].classList.remove('d-none');
    }
}

/** 
 * @name imprimirFactura
 * @description Permite que el usuario pueda tener la opción de impresión de factura y solo esa sección
 * */
function imprimirFactura(divId){
    var imprimirContenido = document.getElementById(divId).innerHTML;
    var contenidoOriginal = document.body.innerHTML;

    document.body.innerHTML = imprimirContenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;

    limpiarDatosPrincipales();

}

/** 
 * @name limpiarDatos
 * @description Limpia todos los datos donde haya información previamente ingresada
 * */
function limpiarDatos() {
    //asigna 1 al campo numero
    num = 1;
    //recarga la pagina web
    location.reload();
    //borra el contenido de los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("sltConsola").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("totalPorConsolas").value = "";
    document.getElementById("primerNombre").value = "";
    document.getElementById("numFactura").value = "";
    document.getElementById("diaCompra").value = "";

    document.getElementById("nombreCompleto").value = "";
    document.getElementById("articuloCompra").value = "";
    document.getElementById("cantidadConsolas").value = "";
    document.getElementById("precioUnidad").value = "";
    document.getElementById("subtotal").value = "";
    document.getElementById("iva").value = "";
    document.getElementById("servicio").value = "";
    document.getElementById("totalFactura").value = "";

    //borra los registros de la tabla
    // document.getElementById("tabla").innerHTML = "";

    //Le agrega la clase d-none al div de la factura
    var elementosFact = document.getElementsByClassName('active');
    for (var i=0; i < elementosFact.length; i++){
        elementosFact[i].classList.add('d-none');
    }
}

/** 
 * @name limpiarDatosPrincipales
 * @description Limpia todos los datos donde el usuario ingresa los datos.
 * */
function limpiarDatosPrincipales() {

    //Le agrega la clase d-none al div de la factura
    var elementosFact = document.getElementsByClassName('active');
    for (var i=0; i < elementosFact.length; i++){
        elementosFact[i].classList.add('d-none');
    }
}

/** 
 * @name limpiarTabla
 * @description Limpia todos los datos que se encuentran almacenados en localStorage relacionados a tablaCompras
 * */
function limpiarTabla() {

    localStorage.clear();
    location.reload();
}

/** 
 * @name agregarDatosTabla
 * @description Agrega datos específicos a la tabla para ir teniendo un control de las compras
 * @params numFact, fecha, cliente, opcionArticulo, cant, totalFactura
 * */
function agregarDatosTabla(numFact, fecha, cliente, opcionArticulo, cant, totalFactura) {
    // Obtener datos existentes de localStorage o inicialízarlos como una matriz vacía
    let tableData = JSON.parse(localStorage.getItem('tablaCompras')) || [];

    // Crear un nuevo objeto de fila
    const newRow = { numFact, fecha, cliente, opcionArticulo, cant, totalFactura };

    // Agregar la nueva fila a los datos existentes
    tableData.push(newRow);

    // Guardar los datos actualizados en localStorage
    localStorage.setItem('tablaCompras', JSON.stringify(tableData));

    // Guardar los datos actualizados en localStorage
    var datosTabla = "<td>" + numFact + "</td><td>" + fecha + "</td><td>" + cliente + "</td><td>" + opcionArticulo + "</td><td>" + cant + "</td><td>" + "₡" + totalFactura + "</td>";
    var agregar = document.createElement("tr");
    agregar.innerHTML = datosTabla;
    document.getElementById('tablaCompras').appendChild(agregar);
}

/** 
 * @name cargarDatosTabla
 * @description Obtiene los datos previamente almacenados en localstorage para mostrarlos cada vez que se ingresa a la tabla
 * */
function cargarDatosTabla() {
    // Obtener los datos desde localStorage
    let tableData = JSON.parse(localStorage.getItem('tablaCompras')) || [];

    // Recorrer los datos y agregue cada fila a la tabla en el DOM
    tableData.forEach(row => {
        var datosTabla = "<td>" + row.numFact + "</td><td>" + row.fecha + "</td><td>" + row.cliente + "</td><td>" + row.opcionArticulo + "</td><td>" + row.cant + "</td><td>" + "₡" + row.totalFactura + "</td>";
        var agregar = document.createElement("tr");
        agregar.innerHTML = datosTabla;
        document.getElementById('tablaCompras').appendChild(agregar);
    });
}

// Llamar a la función para cargar datos cuando se carga la ventana
window.onload = cargarDatosTabla;

function crearNuevaCompra() {
    //asigna 1 al campo numero
    num = 1;
    //recarga la pagina web
    location.reload();
    //borra el contenido de los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("sltConsola").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("totalPorConsolas").value = "";
    document.getElementById("primerNombre").value = "";
    document.getElementById("numFactura").value = "";
    document.getElementById("diaCompra").value = "";

    document.getElementById("nombreCompleto").value = "";
    document.getElementById("articuloCompra").value = "";
    document.getElementById("cantidadConsolas").value = "";
    document.getElementById("precioUnidad").value = "";
    document.getElementById("subtotal").value = "";
    document.getElementById("iva").value = "";
    document.getElementById("servicio").value = "";
    document.getElementById("totalFactura").value = "";

    //borra los registros de la tabla
    // document.getElementById("tabla").innerHTML = "";

    //Le agrega la clase d-none al div de la factura
    var elementosFact = document.getElementsByClassName('active');
    for (var i=0; i < elementosFact.length; i++){
        elementosFact[i].classList.add('d-none');
    }
}
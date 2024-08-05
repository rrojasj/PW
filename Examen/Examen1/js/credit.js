//activa la funcion al cargar la pagina web
window.onload = function() {
    //funcion que permite elegir la foto
    document.getElementById('foto').onchange = function(e) {
        //guarda el destino o valor de la foto en una variable 
        n = e.target.value;
        //expresion en variable que busca las fotos dentro de la carpeta imagenes JPG
        var archivo = "url('../imgs/pw_e1_credit_" + n + ".png')";
        //envia la foto al lugar respectivo (id llamado resultado)
        //la variable archivo almaceno la imagen elegida por el usuario
        document.getElementById("resultado").style.backgroundImage = archivo;
    }
}

// querySelector permite elegir el selector llamado select del form
let seleccionar = document.querySelector('select');

// addEventListener es un listado de eventos (biblioteca) que lista al evento 'change' y carga la función llamada elegir

seleccionar.addEventListener('change', elegir);

function elegir(){
    activarTipoCredito();
    /** Variable que lleva el valor seleccionado por el usuario */
    let eleccion = seleccionar.value;

    if (eleccion == 'convencional'){
        title.innerHTML = 'Crédito Convencional',
        descripcion.innerHTML = 'El crédito automotriz convencional es el más antiguo y el más frecuente de todos, ofrecido por entidades financieras y por las concesionarias en las que compras el vehículo.';
        attribute1.innerHTML = "Pago inicial entre 10-40% del valor."
        attribute2.innerHTML = "Cuotas fijas y tasa de interés conocida.";
        attribute3.innerHTML = "Propiedad del vehículo al finalizar pagos.";
        
    } else if (eleccion == 'inteligente'){
        title.innerHTML = 'Crédito Inteligente',
        descripcion.innerHTML = 'El crédito inteligente puede ser una buena alternativa para aquellas personas que buscan renovar el vehículo de manera frecuente. Cuando optas por el crédito inteligente, estarás escogiendo las siguientes características:';
        attribute1.innerHTML = "Renovación frecuente del vehículo.";
        attribute2.innerHTML = "Adaptación a tus necesidades cambiantes.";
        attribute3.innerHTML = "Flexibilidad y control sobre el auto.";
    } else if (eleccion == 'leasing'){
        title.innerHTML = 'Leasing o arrendamiento automotriz',
        descripcion.innerHTML = 'El leasing es un contrato de arrendamiento automotriz, generalmente dirigido a empresas, y cumple con estas características:';
        attribute1.innerHTML = "Cuotas mensuales por uso, no por propiedad."
        attribute2.innerHTML = "Opción de compra, renovación o devolución al final.";
        attribute3.innerHTML = "Beneficio tributario: no pagan IVA y cuotas como gastos.";    
    } else if (eleccion == 'flexible'){
        title.innerHTML = 'Crédito Flexible',
        descripcion.innerHTML = 'El crédito flexible permite ajustar las cuotas según tu capacidad de pago. Es decir, puedes pagar cuotas más bajas en ciertos periodos e, incluso, posponer algunos pagos.';
        attribute1.innerHTML = "Ajuste de cuotas según capacidad de pago."
        attribute2.innerHTML = "Posibilidad de posponer algunos pagos.";
        attribute3.innerHTML = "Plazo de financiamiento personalizado.";
    }
}

/** 
 * @name activarTipoCredito
 * @description Obtiene los elementos hijos que contienen la clase active y remueve la clase d-none del div para que se muestre en la sección
 **/
function activarTipoCredito(){
    var elementosFact = document.getElementsByClassName('active');
    for (var i=0; i < elementosFact.length; i++){
        elementosFact[i].classList.remove('d-none');
    }
}

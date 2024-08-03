//activa la funcion al cargar la pagina web
window.onload = function() {
    //funcion que permite elegir la foto
    document.getElementById('credit-options').onchange = function(e) {
        //guarda el destino o valor de la foto en una variable 
        n = e.target.value;
        //expresion en variable que busca las fotos dentro de la carpeta imagenes JPG
        var imgFile = "url('imgs/pw_e1_credit_" + n + ".png')";
        //envia la foto al lugar respectivo (id llamado resultado)
        //la variable archivo almaceno la imagen elegida por el usuario
        console.log(imgFile);
        document.getElementById("output-img").style.backgroundImage = imgFile;
    }
}

// querySelector permite elegir el selector llamado select del form
let selection = document.querySelector('select');
selection.addEventListener('change', showSelection);

function showCreditInfo() {
    var creditElements = document.getElementsByClassName('active');
    for (var i=0; i < creditElements.length; i++){
        creditElements[i].classList.remove('d-none');
    }
}

function hideCreditInfo() {
    var creditElements = document.getElementsByClassName('active');
    for (var i=0; i < creditElements.length; i++){
        creditElements[i].classList.add('d-none');
    }
}

function showSelection(){
    /** Variable que lleva el valor seleccionado por el usuario */
    let decision = selection.value;

    if (decision.toLowerCase() === 'convencional'){
        description.innerHTML = 'El crédito automotriz convencional es el más antiguo y el más frecuente de todos, ofrecido por entidades financieras y por las concesionarias en las que compras el vehículo.';
        attribute1.innerHTML = "Pago inicial entre 10-40% del valor."
        attribute2.innerHTML = "Cuotas fijas y tasa de interés conocida.";
        attribute3.innerHTML = "Propiedad del vehículo al finalizar pagos.";
        
    } else if (decision === 'inteligente'){
        description.innerHTML = 'El crédito inteligente puede ser una buena alternativa para aquellas personas que buscan renovar el vehículo de manera frecuente. Cuando optas por el crédito inteligente, estarás escogiendo las siguientes características:';
        attribute1.innerHTML = "Renovación frecuente del vehículo.";
        attribute2.innerHTML = "Adaptación a tus necesidades cambiantes.";
        attribute3.innerHTML = "Flexibilidad y control sobre el auto.";
    } else if (decision === 'leasing'){
        description.innerHTML = 'El leasing es un contrato de arrendamiento automotriz, generalmente dirigido a empresas, y cumple con estas características:';
        attribute1.innerHTML = "Cuotas mensuales por uso, no por propiedad."
        attribute2.innerHTML = "Opción de compra, renovación o devolución al final.";
        attribute3.innerHTML = "Beneficio tributario: no pagan IVA y cuotas como gastos.";    
    } else if (decision === 'flexible'){
        description.innerHTML = 'El crédito flexible permite ajustar las cuotas según tu capacidad de pago. Es decir, puedes pagar cuotas más bajas en ciertos periodos e, incluso, posponer algunos pagos.';
        attribute1.innerHTML = "Ajuste de cuotas según capacidad de pago."
        attribute2.innerHTML = "Posibilidad de posponer algunos pagos.";
        attribute3.innerHTML = "Plazo de financiamiento personalizado."; 
    } else if (decision === 'ninguno'){
        description.innerHTML = '';
        attribute1.innerHTML = ""
        attribute2.innerHTML = "";
        attribute3.innerHTML = "";
        hideCreditInfo();
    }

    showCreditInfo();
}


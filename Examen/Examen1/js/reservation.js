import { allCars, newCars, usedCars } from "./cars-data.js";

/** 
 * @description Función que hace que al cargar la página se muestre el auto y su información requerida
 * */
window.addEventListener('load', () => {

    var urlParams = new URLSearchParams(window.location.search);
    var idAutoValue = urlParams.get('page');

    getCarReservationInfo(idAutoValue);
    getReservationValues(idAutoValue);

    window.sendReservationFormData = sendReservationFormData;
    window.calculateTotalAmount = calculateTotalAmount;

});

/********** Función: Acordeón **********/
document.querySelectorAll('.accordion-title-rs').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      const content = item.nextElementSibling;

      parent.classList.toggle('active');

      // Cerrar otros elementos del acordeón
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== parent) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
});

/********** Función: Obtener los valores por defecto de Leasing **********/
export function getReservationValues(idAuto) {

    // Get all input element IDs
    var totalPrice = getCarprice(idAuto);
    var formattedPrice = convertPrice(totalPrice);
    console.log(formattedPrice);
    var totalPriceInput = document.getElementById('rs-form-subtotal');

    totalPriceInput.value = formattedPrice;   
}

export function calculateTotalAmount(){

    var subtotal = document.getElementById('rs-form-subtotal').value;
    var cuotaInicial = document.getElementById('rs-form-initial-payment').value;

    var discountApplied = getDiscountValue(cuotaInicial);
    var discountInput = document.getElementById('rs-form-discount');
    discountInput.value = discountApplied + "%";

    var totalAmountInput = document.getElementById('rs-form-total-amount');
    var totalAmount = getTotalAmount(subtotal, discountApplied);

    var numTotal = parseFloat(totalAmount);
    
    var formattedAmount = convertPrice(numTotal);
    totalAmountInput.value = formattedAmount.toString();
}

function convertPrice(amount) {
    var usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    var formattedPrice = usDollar.format(amount);

    return formattedPrice
}

/********** Función: Obtener la imagen del auto seleccionado **********/
export function getCarReservationInfo(idAuto){

    /********* Variables de elementos en el HTML *********/
    var brandContainer = document.getElementById('quote-car-brand');
    var modelContainer = document.getElementById('quote-car-model');
    var priceContainer = document.getElementById('quote-car-price');
    var yearContainer = document.getElementById('quote-car-year');
    var milesContainer = document.getElementById('quote-car-miles');
    var colorContainer = document.getElementById('quote-car-color');
    var typeContainer = document.getElementById('quote-car-type');
    var traccionContainer = document.getElementById('quote-car-drivetrain');
    var transmisionContainer = document.getElementById('quote-car-transmision');
    var imageContainer = document.getElementById('quotation-img-div');
    
    /********* Variables globales *********/
    var marca = document.getElementById('quote-car-brand');
    var modelo = document.getElementById('quote-car-model');
    var annio = document.getElementById('quote-car-year');
    var precio = document.getElementById('quote-car-price');
    var millas = document.getElementById('quote-car-miles');
    var color = document.getElementById('quote-car-color');
    var tipo = document.getElementById('quote-car-type');
    var traccion = document.getElementById('quote-car-drivetrain');
    var transmision = document.getElementById('quote-car-transmision');
    var quotationImage = document.getElementById('quotation-img');
    
    for(var i = 0; i < allCars.length; i++) {
        if(allCars[i].idAuto === idAuto){
            marca = allCars[i].marca;
            modelo = allCars[i].modelo;
            annio = allCars[i].annio;
            precio = allCars[i].precio;
            millas = allCars[i].millas;
            color = allCars[i].color;
            tipo = allCars[i].tipo;
            traccion = allCars[i].traccion;
            transmision = allCars[i].transmision;
            quotationImage = allCars[i].imgSrc

            break;
        }
    }

    // Image
    imageContainer.innerHTML = `
        <img id="quotation-img" src="imgs/${quotationImage}" alt="Auto a cotizar">
    `

    // Price format in US Dollars
    var usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    var formattedPrice = usDollar.format(precio);

    // Mileage format with comma
    var formattedMileage = (millas.toLocaleString());

    brandContainer.textContent = marca;
    modelContainer.textContent = modelo;
    priceContainer.textContent = formattedPrice;
    yearContainer.textContent = annio;
    milesContainer.textContent = formattedMileage;

    // Lista
    typeContainer.textContent = tipo;
    colorContainer.textContent = color;
    traccionContainer.textContent = traccion;
    transmisionContainer.textContent = transmision;
}

/********** Función: Obtener el precio del auto actual **********/
function getCarprice(idAuto){

    var totalPrice;

    // Get the price value
    for (var i = 0; i < allCars.length; i++) {
        if (allCars[i].idAuto === idAuto) {
            totalPrice = allCars[i].precio;
            break;
        }
    }
    return totalPrice;
}

/********** Función: Verificar que los campos de leasing requeridos estén completos **********/
export function validateReservationInputs() {

    var allValid = true; // Assume all fields are valid initially

    // Get all input elements and the select element
    var fields = [
        { id: 'form-name', name: 'Nombre' },
        { id: 'form-lastname1', name: 'Primer Apellido' },
        { id: 'form-lastname2', name: 'Segundo Apellido' },
        { id: 'form-email', name: 'Email' }, // updated ID
        { id: 'ls-form-precio', name: 'Precio' },
        { id: 'ls-form-cuota-inicial', name: 'Cuota Inicial' },
        { id: 'buying-option-select', name: 'Método de compra' },
        { id: 'ls-form-plazo', name: 'Plazo en meses' }
    ];

    fields.forEach(field => {
        var input = document.getElementById(field.id);

        // Check if the input was found
        if (!input) {
            console.error(`Element with ID '${field.id}' not found.`);
            allValid = false;
            return;
        }

        // Check if the field is empty or has the default option selected
        if (input.tagName === 'SELECT') {
            // For select elements, check if the selected value is the default option
            if (input.value === 'Seleccione una opción:' || input.value === '') {
                input.classList.add('missing-required');
                allValid = false;
            } else {
                input.classList.remove('missing-required');
            }
        } else {
            // For other input elements, check if the value is empty
            if (input.value.trim() === '') {
                input.classList.add('missing-required');
                allValid = false;
            } else {
                input.classList.remove('missing-required');
            }
        }
    });

    return allValid;
}

/********** Función: Obtener el descuento de acuerdo al monto del auto **********/
function getDiscountValue(initialPayment) {

    var discountValue;

    if(initialPayment >= 5000 && initialPayment < 8000){
        discountValue = 2;
    } else if (initialPayment >= 8000 && initialPayment < 11000) {
        discountValue = 3;
    } else if (initialPayment >= 11000) {
        discountValue = 5;
    } else {
        discountValue = 0;
    }
    return discountValue;
}

/********** Función: Obtener el monto total con descuento aplicado **********/
function getTotalAmount(price, discount) {
    var totalDiscounted = price - (price*(discount/100));

    return totalDiscounted;
}

/********** Función: Send Leasing form **********/
// Cuenta: robjimn13@gmail.com
export function sendReservationFormData() {
    // Get form data
    var nombre = document.getElementById('form-name').value;
    var apellido1 = document.getElementById('form-lastname1').value;
    var apellido2 = document.getElementById('form-lastname2').value;
    var email = document.getElementById('form-email').value;
    var telefono = document.getElementById('form-tel').value;
    var precioTotal = document.getElementById('ls-form-precio').value;
    var cuotaMensual = document.getElementById('ls-form-cuota-mensual').value;
    var valorResidual = document.getElementById('ls-form-valor-residual').value;
    var plazo = document.getElementById('ls-form-plazo').value;
    
    // Get additional car data
    var carBrand = document.getElementById('quote-car-brand').innerText;
    var carModel = document.getElementById('quote-car-model').innerText;
    var carPrice = document.getElementById('quote-car-price').innerText;
    var carYear = document.getElementById('quote-car-year').innerText;
    var carMiles = document.getElementById('quote-car-miles').innerText;
    var carType = document.getElementById('quote-car-type').innerText;
    var carColor = document.getElementById('quote-car-color').innerText;
    var carDrivetrain = document.getElementById('quote-car-drivetrain').innerText;
    var carTransmission = document.getElementById('quote-car-transmision').innerText;
    
    // Need conversions
    var metodoCompra = document.getElementById('buying-option-select').value;
    metodoCompra = metodoCompra.charAt(0).toUpperCase() + metodoCompra.slice(1);
    
    var cuotaInicial = document.getElementById('ls-form-cuota-inicial').value;
    var formattedPrice = convertPrice(cuotaInicial);

    // Data parameters
    var dataParameters = {
        nombre: nombre,
        apellido_1: apellido1,
        apellido_2: apellido2,
        email: email,
        telefono: telefono,
        metodo_compra: metodoCompra,
        precio_total: precioTotal,
        cuota_inicial: formattedPrice,
        valor_residual: valorResidual,
        plazo: plazo,
        cuota_mensual: cuotaMensual,
        car_brand: carBrand,
        car_model: carModel,
        car_price: carPrice,
        car_year: carYear,
        car_miles: carMiles,
        car_type: carType,
        car_color: carColor,
        car_drivetrain: carDrivetrain,
        car_transmission: carTransmission
    }

    emailjs.send('service_g9qtbu8', 'template_zd6ixz8', dataParameters, 'IWfVemPdMsYaXb9cz')
    .then(function(response) {
        console.log('Success:', response);
        cleanInputs
        Swal.fire({
            icon: 'success',
            title: 'Cotización enviada',
            html: 'Se han enviado los detalles solicitados.<br>Verifique su correo electrónico.',
            customClass: {
                confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
            }
        }).then((result) => {
            if(result.isConfirmed) {
                window.location.reload();
                cleanInputs();
            }
        })
    }, function(error) {
        console.log('Error:', error);
    });
}

/********** Función: Limpiar los datos del formulario **********/
function cleanInputs () {
    var nombre = document.getElementById('form-name');
    var apellido1 = document.getElementById('form-lastname1');
    var apellido2 = document.getElementById('form-lastname2');
    var email = document.getElementById('form-email');
    var telefono = document.getElementById('form-tel');
    var metodoCompra = document.getElementById('buying-option-select');

    // Leasing
    var lsPlazo = document.getElementById('ls-form-plazo');
    var lsCuotaInicial = document.getElementById('ls-form-cuota-inicial');
    var lsCuotaMensual = document.getElementById('ls-form-cuota-mensual');

    // Financiamiento
    var fnPlazo = document.getElementById('fn-form-plazo');
    var fnCuotaInicial = document.getElementById('fn-form-cuota-inicial');
    var fnCuotaMensual = document.getElementById('fn-form-cuota-mensual');

    // General
    nombre.value = "";
    apellido1.value = "";
    apellido2.value = "";
    email.value = "";
    telefono.value = "";
    metodoCompra.value = "Método de compra:"
    
    // Leasing
    lsPlazo = "Seleccione:"
    lsCuotaInicial.value = "";
    lsCuotaMensual.value = "";

    // Financiamiento
    fnPlazo = "Seleccione:"
    fnCuotaInicial.value = "";
    fnCuotaMensual.value = "";

    // var precioTotal = document.getElementById('ls-form-precio');
    // var valorResidual = document.getElementById('ls-form-valor-residual');


}
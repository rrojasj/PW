import { allCars } from "./cars-data.js";

/********** Función: Obtener la imagen del auto seleccionado **********/
export function getCarQuotationInfo(idAuto){

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

/********** Función: Obtener en formato de tipo de moneda $  **********/
export function convertPrice(amount) {
    var usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    var formattedPrice = usDollar.format(amount);

    return formattedPrice
}

/********** Función: Obtener el precio del auto actual **********/
export function getCarprice(idAuto){

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

/********** Función: Obtener el descuento de acuerdo al monto del auto **********/
export function getDiscountValue(subtotal) {

    var discountValue;

    if(subtotal >= 10000 && subtotal < 20000){
        discountValue = 5;
    } else if (subtotal >= 20000 && subtotal < 30000) {
        discountValue = 7.5;
    } else if (subtotal >= 30000) {
        discountValue = 11;
    }
    return discountValue;
}

/********** Función: Obtener el monto total con descuento aplicado **********/
export function getTotalAmount(price, discount) {
    var totalDiscounted = price - (price*(discount/100));

    return totalDiscounted;
}

/********** Función: Obtener el valor residual - aleatorio ya que eso varía **********/
export function getResidualPerc() {
    const min = 5;
    const max = 20;
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomValue;
}

/********** Función: Obtener la Tasa de interés de acuerdo al plazo seleccionado **********/
export function getInteresRate(term){
    var numTerm = Number(term);
    var intRate;
    if (numTerm == 24 || numTerm == 36){
        intRate = 11.8;
    } else if (numTerm == 48 || numTerm == 60){
        intRate = 13.2;
    }
    return intRate;
}

/********** Función: Limpiar los datos del formulario **********/
export function cleanInputs () {
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

/********** Section: Validar que el correo electrónico esté correcto **********/
function validateEmail(email) {
    // Expresión regular para validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Verifica si el email coincide con la expresión regular
    if (emailRegex.test(email)) {
      return true; // El email es válido
    } else {
      return false; // El email no es válido
    }
}
const emailInput = document.getElementById('form-email');
const emailErrorMessage = document.getElementById('email-error');
emailInput.addEventListener('blur', function() {
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
        emailErrorMessage.textContent = 'Ingrese un correo válido.';
        emailErrorMessage.style.display = 'block';
    } else {
        emailErrorMessage.style.display = 'none';
    }
});

/********** Section: Validar que el formato del teléfono esté correcto **********/
const phoneNumberInput = document.getElementById('form-tel');
const phoneNumberErrorMessage = document.getElementById('phone-number-error');

/********** Función: Formatea el Número de teléfono **********/
phoneNumberInput.addEventListener('input', function() {
    let phoneNumber = this.value.replace(/\D/g, '');

    // Add the hyphen after the 4th digit
    if (phoneNumber.length > 4) {
        phoneNumber = phoneNumber.slice(0, 4) + '-' + phoneNumber.slice(4);
    }

    // Update the input value with the formatted phone number
    this.value = phoneNumber;
});

/********** Función: Valida y notifica si el campo está incorrecto **********/
phoneNumberInput.addEventListener('blur', function() {
    let phoneNumber = this.value.replace(/\D/g, '');

    if (phoneNumber.length !== 8) {
        phoneNumberErrorMessage.textContent = 'Número inválido. Debe ser de 8 dígitos.';
    } else {
        phoneNumberErrorMessage.textContent = '';
    }
});

/********** Función: Verifica cambios en el input - Select **********/
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('input', function() {
        if (this.tagName === 'SELECT') {
            // For select elements
            if (this.value !== 'Seleccione una opción:' && this.value !== '') {
                this.classList.remove('missing-required');
            }
        } else {
            // For input elements
            if (this.value.trim() !== '') {
                this.classList.remove('missing-required');
            }
        }
    });
});


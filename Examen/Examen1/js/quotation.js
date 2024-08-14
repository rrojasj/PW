import { allCars, newCars, usedCars } from "./cars-data.js";

/********** Función: Muestra el auto y su información requerida **********/
window.addEventListener('load', () => {

    var urlParams = new URLSearchParams(window.location.search);
    var idAutoValue = urlParams.get('page');

    getCarQuotationInfo(idAutoValue);
    getLeasingValues(idAutoValue);
    getCashPaymentValues(idAutoValue);
    getFinancingValues(idAutoValue);
    showBuyingOption(idAutoValue);

    window.calculateLsMonthlyRate = calculateLsMonthlyRate;
    window.calculateFnMonthlyRate = calculateFnMonthlyRate;
    window.sendLeasingFormData = sendLeasingFormData;
    window.sendCPFormData = sendCPFormData;
    window.sendFinancingFormData = sendFinancingFormData;

    const button = document.getElementById('send-data-fn-btn');
    button.disabled = true;

});

// Select: ls-form-plazo
document.getElementById('ls-form-plazo').addEventListener('change', function() {
    var selectedTerm = document.getElementById('ls-form-plazo').value;

    var interestInput = document.getElementById('ls-form-tasa-interes');

    if (selectedTerm != "Seleccione:"){
        var intRate = getInteresRate(selectedTerm);    
        interestInput.value = intRate+"%";
    } else {
        interestInput.value = ''
    }
    
})

// Select: fn-form-plazo
document.getElementById('fn-form-plazo').addEventListener('change', function() {
    var selectedTerm = document.getElementById('fn-form-plazo').value;

    var interestInput = document.getElementById('fn-form-tasa-interes');

    if (selectedTerm != "Seleccione:"){
        var intRate = getInteresRate(selectedTerm);    
        interestInput.value = intRate+"%";
    } else {
        interestInput.value = ''
    }
})

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

/********** Función: Verifica cambios en el input de cuota inicial Ls **********/
var inputCuotaInicial = document.getElementById('ls-form-cuota-inicial');
inputCuotaInicial.addEventListener('change', function() {
    if (inputCuotaInicial.value == '') {
        document.getElementById('ls-form-cuota-mensual').value = '';
    }
})

/********** Función: Verifica cambios en el input de cuota inicial Fn **********/
var inputCuotaInicial = document.getElementById('fn-form-cuota-inicial');
var sendFnFormBtn = document.getElementById('send-data-fn-btn');
inputCuotaInicial.addEventListener('change', function() {
    if (inputCuotaInicial.value == '') {
        document.getElementById('fn-form-cuota-mensual').value = '';
        sendFnFormBtn.disabled = true;
    }
})


/********** Función: Obtener la imagen del auto seleccionado **********/
var buyingOption = document.getElementById('buying-option-select');
buyingOption.addEventListener('change', showBuyingOption);

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

/********** Función: Obtener los valores por defecto de Leasing **********/
export function showBuyingOption(idAuto){
    var option = buyingOption.value;
    
    var sectionLeasing = document.getElementById('section-leasing');
    var sectionCashPayment = document.getElementById('section-cash-payment');
    var sectionCredit = document.getElementById('section-financing');

    if (option === 'leasing') {
        sectionLeasing.classList.remove('d-none');
        sectionCashPayment.classList.add('d-none');
        sectionCredit.classList.add('d-none');
    } else if (option === 'contado'){
        sectionLeasing.classList.add('d-none');
        sectionCashPayment.classList.remove('d-none');
        sectionCredit.classList.add('d-none');
    } else if (option === 'financiamiento'){
        sectionLeasing.classList.add('d-none');
        sectionCashPayment.classList.add('d-none');
        sectionCredit.classList.remove('d-none');
    } else {
        sectionLeasing.classList.add('d-none');
        sectionCashPayment.classList.add('d-none');
        sectionCredit.classList.add('d-none');
    }
}

/********** Función: Acordeón **********/
document.querySelectorAll('.accordion-title').forEach(item => {
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

function convertPrice(amount) {
    var usDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    var formattedPrice = usDollar.format(amount);

    return formattedPrice
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

/********** Función: Obtener la Tasa de interés de acuerdo al plazo seleccionado **********/
function getInteresRate(term){
    var numTerm = Number(term);
    var intRate;
    if (numTerm == 24 || numTerm == 36){
        intRate = 11.8;
    } else if (numTerm == 48 || numTerm == 60){
        intRate = 13.2;
    }
    return intRate;
}

/********** Función: Obtener el valor residual - aleatorio ya que eso varía **********/
function getResidualPerc() {
    const min = 5;
    const max = 20;
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomValue;
}

/********** Función: Obtener el descuento de acuerdo al monto del auto **********/
function getDiscountValue(subtotal) {

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
function getTotalAmount(price, discount) {
    var totalDiscounted = price - (price*(discount/100));

    return totalDiscounted;
}

/********** Función: Obtener los valores por defecto de Leasing **********/
export function getLeasingValues(idAuto) {

    // Get all input element IDs
    var totalPrice = getCarprice(idAuto);
    var formattedPrice = convertPrice(totalPrice);
    var totalPriceInput = document.getElementById('ls-form-precio');

    // Get the residual value
    var residualValueInput = document.getElementById('ls-form-valor-residual');
    var residualValue = getResidualPerc();

    totalPriceInput.value = formattedPrice;
    residualValueInput.value = residualValue+"%";
}

/********** Función: Obtener los valores por defecto de Contado **********/
function getCashPaymentValues(idAuto) {

    // Get all input element IDs
    var totalPrice = getCarprice(idAuto);
    var formattedPrice = convertPrice(totalPrice);
    var totalPriceInput = document.getElementById('cp-form-subtotal');
    totalPriceInput.value = formattedPrice;

    var discountApplied = getDiscountValue(totalPrice);
    var discountInput = document.getElementById('cp-form-discount');
    discountInput.value = discountApplied + "%";

    var totalAmount = getTotalAmount(totalPrice, discountApplied);
    console.log(typeof(totalAmount));
    var totalAmountInput = document.getElementById('cp-form-total-amount');
    var formattedAmount = convertPrice(totalAmount);
    totalAmountInput.value = formattedAmount;
}

/********** Función: Obtener los valores por defecto de Financing **********/
export function getFinancingValues(idAuto) {

    // Get all input element IDs
    var totalPrice = getCarprice(idAuto);

    var formattedPrice = convertPrice(totalPrice);
    var totalPriceInput = document.getElementById('fn-form-precio');


    totalPriceInput.value = formattedPrice;
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

/********** Función: Notifica que cuota inicial solo números - Leasing **********/
const numberInputLs = document.getElementById('ls-form-cuota-inicial');
const numberErrorLs = document.getElementById('ls-number-error');
numberInputLs.addEventListener('keypress', function(event) {
    // Obtener el código de la tecla presionada
    const keyCode = event.keyCode || event.which;

    // Permitir solo dígitos
    if (keyCode < 48 || keyCode > 57) {
        // Prevenir que se muestre el carácter en el input
        event.preventDefault();

        // Mostrar el mensaje de error
        numberErrorLs.textContent = 'Solo números.';
    } else {
        // Ocultar el mensaje de error
        numberErrorLs.textContent = '';
    }
});

/********** Función: Notifica que cuota inicial solo números - Financing **********/
const numberInputFn = document.getElementById('fn-form-cuota-inicial');
const numberErrorFn = document.getElementById('fn-number-error');
numberInputFn.addEventListener('keypress', function(event) {
    // Obtener el código de la tecla presionada
    const keyCode = event.keyCode || event.which;

    // Permitir solo dígitos
    if (keyCode < 48 || keyCode > 57) {
        // Prevenir que se muestre el carácter en el input
        event.preventDefault();

        // Mostrar el mensaje de error
        numberErrorFn.textContent = 'Solo números.';
    } else {
        // Ocultar el mensaje de error
        numberErrorFn.textContent = '';
    }
});

/********** Función: Verificar que los campos de leasing requeridos estén completos **********/
export function validateLeasingInputs() {

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
            if (input.value === 'Seleccione:' || input.value === '') {
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

/********** Función: Verificar que los campos de leasing requeridos estén completos **********/
export function validateCPInputs() {

    var allValid = true; // Assume all fields are valid initially

    // Get all input elements and the select element
    var fields = [
        { id: 'form-name', name: 'Nombre' },
        { id: 'form-lastname1', name: 'Primer Apellido' },
        { id: 'form-lastname2', name: 'Segundo Apellido' },
        { id: 'form-email', name: 'Email' }
    ];

    fields.forEach(field => {
        var input = document.getElementById(field.id);

        // Check if the input was found
        if (!input) {
            console.error(`Element with ID '${field.id}' not found.`);
            allValid = false;
            return;
        }

        if (input.value.trim() === '') {
            input.classList.add('missing-required');
            allValid = false;
        } else {
            input.classList.remove('missing-required');
        }
    });

    return allValid;
}

/********** Función: Verificar que los campos de leasing requeridos estén completos **********/
export function validateFinancingInputs() {

    var allValid = true; // Assume all fields are valid initially

    // Get all input elements and the select element
    var fields = [
        { id: 'form-name', name: 'Nombre' },
        { id: 'form-lastname1', name: 'Primer Apellido' },
        { id: 'form-lastname2', name: 'Segundo Apellido' },
        { id: 'form-email', name: 'Email' },
        { id: 'fn-form-precio', name: 'Precio' },
        { id: 'fn-form-cuota-inicial', name: 'Cuota Inicial' },
        { id: 'buying-option-select', name: 'Método de compra' },
        { id: 'fn-form-plazo', name: 'Plazo en meses' }
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
            if (input.value === 'Seleccione:' || input.value === '') {
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

/********** Función: Calcula la cuota mensual **********/
export function calculateLsMonthlyRate() {
    var precioTotal = document.getElementById('ls-form-precio').value;
    var cuotaInicial = document.getElementById('ls-form-cuota-inicial').value;
    var plazo = document.getElementById('ls-form-plazo').value;
    var tasaInteres = document.getElementById('ls-form-tasa-interes').value;
    var valorResidual = document.getElementById('ls-form-valor-residual').value;
    var cuotaMensInput = document.getElementById('ls-form-cuota-mensual');

    // Remove % sign from Tasa Interés
    tasaInteres = tasaInteres.slice(0, -1);
    var numTasaInt = parseFloat(tasaInteres) / 100;

    // Remove % sign from Valor Residual
    valorResidual = valorResidual.slice(0, -1);
    var numValorResidual = parseFloat(valorResidual) / 100;

    // Remove unnecessary symbols
    var strPrecioTotal = precioTotal.replace(/[$,]/g, "");
    var numPrecioTotal = parseFloat(strPrecioTotal);
    var numPlazo = parseFloat(plazo);
    var numCuotaInicial = parseFloat(cuotaInicial);

    // Console Logs de prueba
    // console.log('Cuota inicial: ' + numCuotaInicial);
    // console.log('Tipo de dato de la cuota: ' + typeof(numCuotaInicial));
    // console.log('Precio del auto: ' + numPrecioTotal);
    // console.log('Tipo de dato del precio: ' + typeof(numPrecioTotal));

    var valid = validateLeasingInputs();

    if (valid) {
        
        if(numPrecioTotal > numCuotaInicial) {
            var tasaPerMens = numTasaInt / 12;
    
            var cuotaMensual = (numPrecioTotal - numCuotaInicial) / ((1 - (1 + tasaPerMens) ** -numPlazo) / tasaPerMens);
    
            var usDollar = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            
            var monthlyPayment = usDollar.format(cuotaMensual);
    
            var sendLsDataBtn = document.getElementById('send-ls-data-btn');
            if (sendLsDataBtn) {
                console.log('Si entró!')
                sendLsDataBtn.removeAttribute('disabled');
            } else {
                console.log('No entró! Pellísquese!')
            }
    
            cuotaMensInput.value = monthlyPayment;
    
            Swal.fire({
                icon: 'success',
                title: 'Cuota Mensual',
                html: 'Se ha calculado la cuota mensual.<br>Puede solicitar la información por email.',
                customClass: {
                    confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
                }
            });
    
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Información',
                text: 'La cuota inicial debe ser menor al precio total',
                customClass: {
                  confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('ls-form-cuota-inicial').value = '';
                }
            });
        }
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Información',
            text: 'Debe llenar todos los campos requeridos',
            customClass: {
                confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
            }
        });
    }
}

/********** Función: Calcula la cuota mensual **********/
export function calculateFnMonthlyRate() {
    var precioTotal = document.getElementById('fn-form-precio').value;
    var cuotaInicial = document.getElementById('fn-form-cuota-inicial').value;
    var plazo = document.getElementById('fn-form-plazo').value;
    var tasaInteres = document.getElementById('fn-form-tasa-interes').value;
    var cuotaMensInput = document.getElementById('fn-form-cuota-mensual');

    // Remove % sign from Tasa Interés
    tasaInteres = tasaInteres.slice(0, -1);
    var numTasaInt = parseFloat(tasaInteres) / 100;

    // Remove unnecessary symbols
    var strPrecioTotal = precioTotal.replace(/[$,]/g, "");
    var numPrecioTotal = parseFloat(strPrecioTotal);
    var numPlazo = parseFloat(plazo);
    var numCuotaInicial = parseFloat(cuotaInicial);

    var valid = validateFinancingInputs();

    if (valid) {

        if(numPrecioTotal > numCuotaInicial) {

            // Cuota Mensual = (Monto del Préstamo x Tasa de Interés Anual) / (1 - (1 + Tasa de Interés Anual)^(-Plazo en Meses))
            var cuotaMensual = ((numPrecioTotal - numCuotaInicial)*(numTasaInt))/(1-(1+numTasaInt)**(-numPlazo));

            var usDollar = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            
            var monthlyPayment = usDollar.format(cuotaMensual);

            var sendDataBtn = document.getElementById('send-data-fn-btn');
            if (sendDataBtn) {
                console.log('Si entró!')
                sendDataBtn.removeAttribute('disabled');
            } else {
                console.log('No entró! Pellísquese!')
            }

            cuotaMensInput.value = monthlyPayment;

            Swal.fire({
                icon: 'success',
                title: 'Cuota Mensual',
                html: 'Se ha calculado la cuota mensual.<br>Puede solicitar la información por email.',
                customClass: {
                    confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
                }
            });
        
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Información',
                text: 'La cuota inicial debe ser menor al precio total',
                customClass: {
                  confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('ls-form-cuota-inicial').value = '';
                }
            });
        }

    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Información',
            text: 'Debe llenar todos los campos requeridos',
            customClass: {
                confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
            }
        });
    }
}

/********** Función: Send Leasing form **********/
// Cuenta: robjimn13@gmail.com
export function sendLeasingFormData() {
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

    if(cuotaInicial){
        emailjs.send('service_g9qtbu8', 'template_leasing', dataParameters, 'IWfVemPdMsYaXb9cz')
        .then(function(response) {
            console.log('Success:', response);
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
                    // cleanInputs();
                }
            })
        }, function(error) {
            console.log('Error:', error);
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Importante',
            text: 'Para solicitar la cotización por correo debe calcular la cuota mensual.',
            customClass: {
                confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
            }
        });
    }
}

/********** Función: Send Cash payment form **********/
// Cuenta: robjimn13@gmail.com
export function sendCPFormData() {

    var valid = validateCPInputs();

    if (valid) {
        // Get form data
        var nombre = document.getElementById('form-name').value;
        var apellido1 = document.getElementById('form-lastname1').value;
        var apellido2 = document.getElementById('form-lastname2').value;
        var email = document.getElementById('form-email').value;
        var telefono = document.getElementById('form-tel').value;
        var subtotal = document.getElementById('cp-form-subtotal').value;
        console.log(subtotal);
        console.log(typeof(subtotal));
        var descuento = document.getElementById('cp-form-discount').value;
        var total = document.getElementById('cp-form-total-amount').value;
        
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

        var metodoCompra = document.getElementById('buying-option-select').value;
        metodoCompra = metodoCompra.charAt(0).toUpperCase() + metodoCompra.slice(1);


        // Data parameters
        var dataParameters = {
            nombre: nombre,
            apellido_1: apellido1,
            apellido_2: apellido2,
            email: email,
            telefono: telefono,
            subtotal: subtotal,
            metodo_compra: metodoCompra,
            descuento: descuento,
            monto_total: total,
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

        emailjs.send('service_g9qtbu8', 'template_6ibnq1k', dataParameters, 'IWfVemPdMsYaXb9cz')
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
                    // cleanInputs();
                }
            })
        }, function(error) {
            console.log('Error:', error);
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Información',
            text: 'Debe llenar todos los campos requeridos',
            customClass: {
                confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
            }
        });
    }
}

/********** Función: Send Financing form **********/
// Cuenta: rrojasj@ucenfotec.ac.cr
export function sendFinancingFormData() {
    // Get form data
    var nombre = document.getElementById('form-name').value;
    var apellido1 = document.getElementById('form-lastname1').value;
    var apellido2 = document.getElementById('form-lastname2').value;
    var email = document.getElementById('form-email').value;
    var telefono = document.getElementById('form-tel').value;
    var precioTotal = document.getElementById('fn-form-precio').value;
    var cuotaMensual = document.getElementById('fn-form-cuota-mensual').value;
    var plazo = document.getElementById('fn-form-plazo').value;
    
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
    
    var cuotaInicial = document.getElementById('fn-form-cuota-inicial').value;
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

    emailjs.send('service_ycxgca3', 'template_financing', dataParameters, 'nNPY8_FeU2vhukBjB')
    .then(function(response) {
        console.log('Success:', response);
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
                // cleanInputs();
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
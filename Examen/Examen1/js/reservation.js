import { allCars, newCars, usedCars } from "./cars-data.js";
import * as generalFunctions from './general-functions.js';


/** 
 * @description Función que hace que al cargar la página se muestre el auto y su información requerida
 * */
window.addEventListener('load', () => {

    var urlParams = new URLSearchParams(window.location.search);
    var idAutoValue = urlParams.get('page');

    getCarReservationInfo(idAutoValue);
    getReservationValues(idAutoValue);

    window.confirmReservation = confirmReservation;
    window.calculateReservationBalance = calculateReservationBalance;
    window.viewReservations = viewReservations;

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

/********** Función: Verifica cambios en el input de cuota inicial Fn **********/
var inputCuotaInicial = document.getElementById('form-rs-payment');
var sendFnFormBtn = document.getElementById('reserve-btn');
inputCuotaInicial.addEventListener('change', function() {
    if (inputCuotaInicial.value == '') {
        document.getElementById('rs-form-discount').value = '';
        document.getElementById('rs-form-balance').value = '';
        sendFnFormBtn.disabled = true;
    }
})

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

/********** Función: Obtener los valores por defecto de Leasing **********/
export function getReservationValues(idAuto) {

    // Get all input element IDs
    var totalPrice = generalFunctions.getCarprice(idAuto);
    var formattedPrice = generalFunctions.convertPrice(totalPrice);
    console.log(formattedPrice);
    var totalPriceInput = document.getElementById('rs-form-subtotal');

    totalPriceInput.value = formattedPrice;   
}

/********** Section: Validar que el formato del cédula esté correcto **********/
const cedulaInput = document.getElementById('form-rs-id');
const cedulaErrorMessage = document.getElementById('error-rs-id');

/********** Función: Formatea el Número de cédula **********/
cedulaInput.addEventListener('input', function() {
    var cedula = this.value.replace(/\D/g, '');

    if (cedula.length > 1) {
        cedula = cedula.slice(0, 1) + '-' + cedula.slice(1);
    }
    if (cedula.length > 6) {
        cedula = cedula.slice(0, 6) + '-' + cedula.slice(6);
    }
    if (cedula.length > 11) {
        cedula = cedula.slice(0, 11);
    }
    this.value = cedula;
});

/********** Función: Valida y notifica si el campo está incorrecto **********/
cedulaInput.addEventListener('blur', function() {
    var cedula = this.value.replace(/\D/g, '');

    if (cedula.length !== 9) {
        cedulaErrorMessage.textContent = 'ID inválido';
    } else {
        cedulaErrorMessage.textContent = '';
    }
});

/********** Section: Validar que el formato del teléfono esté correcto **********/
const phoneNumberInput = document.getElementById('form-rs-phone');
const phoneNumberErrorMessage = document.getElementById('error-rs-phone');

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
        phoneNumberErrorMessage.textContent = 'Inválido! Debe ser de 8 dígitos.';
    } else {
        phoneNumberErrorMessage.textContent = '';
    }
});

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
const emailInput = document.getElementById('form-rs-email');
const emailErrorMessage = document.getElementById('error-rs-email');
emailInput.addEventListener('blur', function() {
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
        emailErrorMessage.textContent = 'Ingrese un correo válido.';
        emailErrorMessage.style.display = 'block';
    } else {
        emailErrorMessage.style.display = 'none';
    }
});

/********** Section: Validar que el checkbox esté chequeado **********/
const acknowledgeCheckbox = document.getElementById('acknowledge-checkbox');
acknowledgeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        this.classList.remove('missing-required');
    } else {
        this.classList.add('missing-required');
    }
});

/********** Función: Verificar que los campos de leasing requeridos estén completos **********/
export function validateReservationInputs() {

    var allValid = true;
    var fields = [
        { id: 'form-rs-id', name: 'Número de cédula' },
        { id: 'form-rs-name', name: 'Nombre completo' },
        { id: 'form-rs-phone', name: 'Nombre completo' },
        { id: 'form-rs-email', name: 'Email' },
        { id: 'form-rs-payment', name: 'Monto de reservación' },
        { id: 'acknowledge-checkbox', name: 'Checkbox', type: 'checkbox' }
    ];
    fields.forEach(field => {
        var input = document.getElementById(field.id);
        if (!input) {
            console.error(`Element with ID '${field.id}' not found.`);
            allValid = false;
            return;
        }
        if (field.type === 'checkbox') {
            if (!input.checked) {
                input.classList.add('missing-required');
                allValid = false;
            } else {
                input.classList.remove('missing-required');
            }
        } else if (input.tagName === 'SELECT') {
            if (input.value === 'Seleccione una opción:' || input.value === '') {
                input.classList.add('missing-required');
                allValid = false;
            } else {
                input.classList.remove('missing-required');
            }
        } else {
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

export function calculateReservationBalance(){

    var valid = validateReservationInputs();

    if (valid){
        var subtotal = document.getElementById('rs-form-subtotal').value;
        const carTotalValue = parseFloat(subtotal.replace(/[^0-9.-]+/g, ""));
    
        var rsInitialPayment = document.getElementById('form-rs-payment').value;

        if(carTotalValue > rsInitialPayment) {

            console.log("Precio total del auto: " + carTotalValue);

            var discountApplied = generalFunctions.getDiscountValue(rsInitialPayment, "rs");
            console.log("Descuento que se aplica: " + discountApplied);

            var discountInput = document.getElementById('rs-form-discount');
            discountInput.value = discountApplied + "%";

            var discountAppliedAmount = generalFunctions.getTotalAmount(carTotalValue, discountApplied);

            var totalBalance = discountAppliedAmount - rsInitialPayment;
        
            var balanceInput = document.getElementById('rs-form-balance');
            
            var formattedAmount = generalFunctions.convertPrice(totalBalance);
            balanceInput.value = formattedAmount.toString();       
            
            document.getElementById('reserve-btn').removeAttribute('disabled');
            
            Swal.fire({
                icon: 'success',
                title: 'Información',
                html: 'Saldo calculado<br>Al reservar se enviará la información por email.',
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

/********** Función: Limpiar los datos del formulario **********/
function cleanRSInputs () {
    var cedula = document.getElementById('form-rs-id');
    var nombre = document.getElementById('form-rs-name');
    var telefono = document.getElementById('form-rs-phone');
    var email = document.getElementById('form-rs-email');
    var montoReserva = document.getElementById('form-rs-payment');
    var descuento = document.getElementById('rs-form-discount');
    var saldo = document.getElementById('rs-form-balance');

    // General
    cedula.value = "";
    nombre.value = "";
    telefono.value = "";
    email.value = "";
    montoReserva.value = "";
    descuento.value = "";
    saldo.value = "";
}

/********** Función: Send reservation form **********/
// Cuenta: robjimn13@gmail.com
export function confirmReservation() {

    var valid = validateReservationInputs();

    if(valid){
        // Get form data
        var cedula = document.getElementById('form-rs-id').value;
        var nombre = document.getElementById('form-rs-name').value;
        var email = document.getElementById('form-rs-email').value;
        var telefono = document.getElementById('form-rs-phone').value;
        var subtotal = document.getElementById('rs-form-subtotal').value;
        var montoReservacion = document.getElementById('form-rs-payment').value;
        var descuento = document.getElementById('rs-form-discount').value;
        var saldo = document.getElementById('rs-form-balance').value;

        
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
        
        var formattedPrice = generalFunctions.convertPrice(montoReservacion);

        var urlParams = new URLSearchParams(window.location.search);
        var idAutoValue = urlParams.get('page');

        var newReservationForm = {
            cedula: cedula,
            nombre: nombre,
            email: email,
            telefono: telefono,
            subtotal: subtotal,
            monto_reserva: formattedPrice,
            descuento: descuento,
            saldo: saldo,
            car_brand: carBrand,
            car_model: carModel,
            car_year: carYear,
            car_miles: carMiles,
            car_type: carType,
            car_color: carColor,
            car_drivetrain: carDrivetrain,
            car_transmission: carTransmission
        }

        var newReservationLS = {
            cedula: cedula,
            nombre: nombre,
            email: email,
            telefono: telefono,
            car_brand: carBrand,
            car_model: carModel,
            subtotal: subtotal,
            monto_reserva: formattedPrice,
            descuento: descuento,
            saldo: saldo,
        }

        pushReservationLS(newReservationLS);
        cleanRSInputs();

        emailjs.send('service_ycxgca3', 'template_reservation', newReservationForm, 'nNPY8_FeU2vhukBjB')
        .then(function(response) {
            console.log('Success:', response);
            Swal.fire({
                icon: 'success',
                title: 'Cotización enviada',
                html: 'Se ha completado la reserva.<br>Verifique su correo electrónico.',
                customClass: {
                    confirmButton: 'custom-confirm-btn car-forms-btn car-actions-btn btn btn-outline-secondary'
                }
            }).then((result) => {
                if(result.isConfirmed) {
                    window.location.reload();
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

/********** Función: Agregar la nueva reserva a LocalStorage **********/
function pushReservationLS (newReservation) {

    var reservationsInfoJSON = localStorage.getItem('reservationsDataLS');
    var reservationsInfoJS = JSON.parse(reservationsInfoJSON);

    reservationsInfoJS.push(newReservation);

    var updatedReservationsJS = JSON.stringify(reservationsInfoJS);

    localStorage.setItem('reservationsDataLS', updatedReservationsJS);

    console.log(localStorage.getItem('reservationsDataLS'));

}

/********** Función: Redirecciona a la pégina de reservas **********/
export function viewReservations() {
    Swal.fire({
      title: 'Redireccionando...',
      html: `
        <div class="loading-spinner">
          <div class="spinner"></div>
          <span>Cargando...</span>
        </div>
      `,
      icon: 'info',
      timer: 3000,
      showConfirmButton: false
    }).then(() => {
      window.location.href = "reservations-current.html";
    });
}



// New upcoming Feature
// removeAutoDataCars(idAutoValue);
// window.location.href = "buy.html";
// function removeAutoDataCars (idAuto) {
    
//     var indexToRemove = newCars.findIndex(obj => obj.idAuto === idAuto);

//     if (indexToRemove !== -1) {
//         allCars.splice(indexToRemove, 1);
//         console.log("Auto eliminado de la lista de todos los autos!")
//     }

//     if (indexToRemove !== -1) {
//         newCars.splice(indexToRemove, 1);
//         console.log("Auto eliminado de la lista de Autos nuevos!")
//     } else {
//         indexToRemove = usedCars.findIndex(obj => obj.idAuto === idAuto);
//         if (indexToRemove !== -1) {
//             usedCars.splice(indexToRemove, 1);
//             console.log("Auto eliminado de la lista de Autos usados!")
//         }   
//     }
// }
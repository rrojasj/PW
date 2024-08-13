
'use extrict';

window.addEventListener('load', init, false);


/********** Sección: Suscripción **********/
/** 
 * @name init
 * @description Se encarga de validar y verificar que la información de suscripción esté correcta y envía el correo y las alertas correspondientes.
 **/
function init() {
    let name = document.getElementById('subscriptionName');
    let email = document.getElementById('subscriptionEmail');
    let btnEnviar = document.getElementById('btnEnviar');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = subscriptionEmail.value;

        if (email === '') {
            alerta.textContent = 'Favor ingresar un correo electrónico';
            alerta.classList.add('red-alert-msg');
            alerta.classList.remove('green-alert-msg');
            setTimeout(function() {
                alerta.textContent = '';
                alerta.classList.remove('red-alert-msg');
                cleanInputs();
            }, 3000); // Eliminar el mensaje de alerta después de 3 segundos
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Favor ingresar un correo electrónico válido';
            alerta.classList.add('red-alert-msg');
            alerta.classList.remove('green-alert-msg');
            setTimeout(function() {
                alerta.textContent = '';
                alerta.classList.remove('red-alert-msg');
                cleanInputs();
            }, 3000); // Eliminar el mensaje de alerta después de 3 segundos
        } else {
            alerta.textContent = 'Su registro fue exitoso';
            alerta.classList.add('green-alert-msg');
            alerta.classList.remove('red-alert-msg');
            setTimeout(function() {
                alerta.textContent = '';
                alerta.classList.remove('green-alert-msg');
                cleanInputs();
            }, 3000); // Eliminar el mensaje de alerta después de 3 segundos
;
            // 1. Service ID
            // 2. Template ID
            // 3. Form Values
            // 4. API Key
            emailjs.sendForm("service_ycxgca3","template_7836u5w", '#subscriptionForm','nNPY8_FeU2vhukBjB');
            cleanInputs();
        }

    }
    /** 
     * @name cleanInputs
     * @description Limpia la información previamente ingresada en los inputs.
     **/
    function cleanInputs() {
        subscriptionEmail.value = '';
        subscriptionName.value = '';
    }
}

/********** Sección: Visitar galería **********/
/** 
 * @name visitGallery
 * @description Se encarga de validar y verificar que la información de suscripción esté correcta y envía el correo y las alertas correspondientes.
 **/

function visitGallery(){
    var selectedGallery = document.getElementById('gallery-option').value;

    switch(selectedGallery){
        case 'classic':
            Swal.fire({
                icon: "success",
                iconColor: '#B9FAB2',
                title: "¡Autos Clásicos!",
                text: "Un momento por favor...",
                showConfirmButton : false,
                timer: 2000,
            }).then(() => {
                window.location.href = "gallery-classics.html";
            });
            return;
        case 'new':
            Swal.fire({
                icon: "success",
                iconColor: '#B9FAB2',
                title: "¡Autos Nuevos!",
                text: "Un momento por favor...",
                showConfirmButton : false,
                timer: 2000,
            }).then(() => {
                window.location.href = "gallery-new.html";
            });
            return;
        case 'used':
            Swal.fire({
                icon: "success",
                iconColor: '#B9FAB2',
                title: "¡Autos usados!",
                text: "Un momento por favor...",
                showConfirmButton : false,
                timer: 2000,
            }).then(() => {
                window.location.href = "gallery-used.html";
            });
            return;
        case 'all':
            Swal.fire({
                icon: "success",
                iconColor: '#B9FAB2',
                title: "¡Galería general!",
                text: "Un momento por favor...",
                showConfirmButton : false,
                timer: 2000,
            }).then(() => {
                window.location.href = "gallery-all.html";
            });
            return;
    }
}

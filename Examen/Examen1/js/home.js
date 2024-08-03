
'use extrict';

window.addEventListener('load', init, false);

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

    function cleanInputs() {
        subscriptionEmail.value = '';
        subscriptionName.value = '';
    }
}
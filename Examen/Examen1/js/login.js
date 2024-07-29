`use strict`

function userLogin () {
    var user = document.getElementById("userID").value;
    var pswd = document.getElementById("userPswd").value;
    // console.log(user);
    // console.log(pswd);
    if (user == "cenfo" && pswd == "123"){
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Credenciales correctos',
          }).then((result) => {
            // Redirige a otra página después de hacer clic en OK en el SweetAlert
            if (result.isConfirmed) {
              window.location.href = 'landing.html';
            }
          });
    }else {
        Swal.fire({
            icon: "error",
            title: "Incorrecto",
            text: "Por favor ingrese credenciales correctos."
          });
    };
};


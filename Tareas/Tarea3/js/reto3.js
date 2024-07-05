function menu(){
    var seleccion = document.getElementById('selectRevista');
    var opcionSeleccionada = seleccion.options[seleccion.selectedIndex].value;
    
    switch(opcionSeleccionada) {
        case 'revista1':
            Swal.fire({
                icon: "success",
                title: "IEEE Software",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.open("https://www.computer.org/csdl/mags/so/", "_blank", "noopener,noreferrer");
            });
            return;
        case 'revista2':
            Swal.fire({
                icon: "success",
                title: "ACM Transactions on Software Engineering and Methodology (TOSEM)",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.open("https://dl.acm.org/journal/tosem", "_blank", "noopener,noreferrer");
            });
            break;
        case 'revista3':
            Swal.fire({
                icon: "success",
                title: "Journal of Systems and Software",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.open("https://www.journals.elsevier.com/journal-of-systems-and-software", "_blank", "noopener,noreferrer");
            });
            return;
        case 'revista4':
            Swal.fire({
                icon: "success",
                title: "Software: Practice and Experience",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.open("https://onlinelibrary.wiley.com/journal/1097024x", "_blank", "noopener,noreferrer");
            });
            return;
        case 'revista5':
            Swal.fire({
                icon: "success",
                title: "Empirical Software Engineering",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.open("https://www.springer.com/journal/10664", "_blank", "noopener,noreferrer");
            });
            return;
        case 'revista6':
            Swal.fire({
                icon: "success",
                title: "IEEE Internet Computing",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.open("https://www.computer.org/csdl/magazine/ic", "_blank", "noopener,noreferrer");
            });
            return;
        case 'revista7':
            Swal.fire({
                icon: "success",
                title: "ACM Transactions on the Web (TWEB)",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.open("https://dl.acm.org/journal/tweb", "_blank", "noopener,noreferrer");
            });
            return;
    }
}

function comprobar() {
    //form1 es el nombre del formulario    
    //los que se llaman c1, c2,c3 son los name del HTML
    if (document.form1.c3.checked == true) {
        if (document.form1.c1.checked == true & document.form1.c2.checked == false) {
            //alert('Falta el requisito #2')
            Swal.fire({
                title: 'Falta el requisito #2',
                icon: 'error',
                iconColor: '#231955',
                text: 'NO puede matricular el curso!',
                imageWidth: 400,
                imageHeight: 200,
            })
        }
        if (document.form1.c2.checked == true & document.form1.c1.checked == false) {
            Swal.fire({
                title: 'Falta el requisito #1',
                icon: 'error',
                iconColor: '#231955',
                text: 'NO puede matricular el curso!',
                imageWidth: 400,
                imageHeight: 200,
            })
        }
        // Valida que esten marcando los 2 checks iniciales llamados c1 y c2 declarados con name
        if (document.form1.c1.checked == true & document.form1.c2.checked == true) {
            Swal.fire({
                title: 'Excelente.',
                icon: 'success',
                iconColor: '#231955',
                text: 'SI puede matricular el curso!',
                imageWidth: 400,
                imageHeight: 200,
            })
            document.getElementById("demo").innerHTML = "<strong>Excelente. Buena suerte </strong>";
            document.getElementById("ima1").style.display = '<img src="logos.png" alt="logo>"';
            document.getElementById("ima1").style.display = 'block';
            document.form1.c3.checked == false;
            document.form1.c2.checked == false;
            document.form1.c1.checked == false;
        }
    }
    document.form1.c3.checked == false;
    document.form1.c2.checked == false;
    document.form1.c1.checked == false;
}
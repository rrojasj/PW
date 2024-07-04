let cont1 = document.getElementById("conte1");
let cont2 = document.getElementById("conte2");
let cont3 = document.getElementById("conte3");
let cont4 = document.getElementById("conte4");
let cont5 = document.getElementById("conte5");

function contenido1() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let dato5 = document.querySelector('input[name="r"][value="dato5"]');
    if (dato1.checked){
        cont1.style.display = "block";
        cont2.style.display = "none";
        cont3.style.display = "none";
        cont4.style.display = "none";
        cont5.style.display = "none";
    }
}

function contenido2() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let dato5 = document.querySelector('input[name="r"][value="dato5"]');
    if (dato2.checked){
        cont1.style.display = "none";
        cont2.style.display = "block";
        cont3.style.display = "none";
        cont4.style.display = "none";
        cont5.style.display = "none";
    }
}

function contenido3() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let dato5 = document.querySelector('input[name="r"][value="dato5"]');
    if (dato3.checked){
        cont1.style.display = "none";
        cont2.style.display = "none";
        cont3.style.display = "block";
        cont4.style.display = "none";
        cont5.style.display = "none";
    }
}

function contenido4() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let dato5 = document.querySelector('input[name="r"][value="dato5"]');
    if (dato4.checked){
        cont1.style.display = "none";
        cont2.style.display = "none";
        cont3.style.display = "none";
        cont4.style.display = "block";
        cont5.style.display = "none";
    }
}

function contenido5() {
    let dato1 = document.querySelector('input[name="r"][value="dato1"]');
    let dato2 = document.querySelector('input[name="r"][value="dato2"]');
    let dato3 = document.querySelector('input[name="r"][value="dato3"]');
    let dato4 = document.querySelector('input[name="r"][value="dato4"]');
    let dato5 = document.querySelector('input[name="r"][value="dato5"]');
    if (dato5.checked){
        cont1.style.display = "none";
        cont2.style.display = "none";
        cont3.style.display = "none";
        cont4.style.display = "none";
        cont5.style.display = "block";
    }
}
document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria (){
    var opciones = document.getElementById('menuOpciones').value;

    switch(opciones) {
        case "carnes":
            document.querySelector('.galeriaCarnes').style.display = "block";
            document.querySelector('.galeriaPizzas').style.display = "none";
            document.querySelector('.galeriaRapida').style.display = "none";
            document.querySelector('.galeriaBebidas').style.display = "none";
            document.querySelector('.galeriaPostres').style.display = "none";
            break;
        case "pizzas":
            document.querySelector('.galeriaCarnes').style.display = "none";
            document.querySelector('.galeriaPizzas').style.display = "block";
            document.querySelector('.galeriaRapida').style.display = "none";
            document.querySelector('.galeriaBebidas').style.display = "none";
            document.querySelector('.galeriaPostres').style.display = "none";
            break;
        case "rapida":
            document.querySelector('.galeriaCarnes').style.display = "none";
            document.querySelector('.galeriaPizzas').style.display = "none";
            document.querySelector('.galeriaRapida').style.display = "block";
            document.querySelector('.galeriaBebidas').style.display = "none";
            document.querySelector('.galeriaPostres').style.display = "none";
            break;
        case "bebidas":
            document.querySelector('.galeriaCarnes').style.display = "none";
            document.querySelector('.galeriaPizzas').style.display = "none";
            document.querySelector('.galeriaRapida').style.display = "none";
            document.querySelector('.galeriaBebidas').style.display = "block";
            document.querySelector('.galeriaPostres').style.display = "none";
            break;
        case "postres":
            document.querySelector('.galeriaCarnes').style.display = "none";
            document.querySelector('.galeriaPizzas').style.display = "none";
            document.querySelector('.galeriaRapida').style.display = "none";
            document.querySelector('.galeriaBebidas').style.display = "none";
            document.querySelector('.galeriaPostres').style.display = "block";
            break;
        default:
            document.querySelector('.galeriaCarnes').style.display = "none";
            document.querySelector('.galeriaPizzas').style.display = "none";
            document.querySelector('.galeriaRapida').style.display = "none";
            document.querySelector('.galeriaBebidas').style.display = "none";
            document.querySelector('.galeriaPostres').style.display = "none";
            break;
    }
}
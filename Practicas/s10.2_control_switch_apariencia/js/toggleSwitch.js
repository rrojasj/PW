// Selecciona el toggle switch
const toggleSwitch = document.getElementById("modoOscuroToggle");

// Selecciona el ícono modo oscuro
const modoIcon = document.getElementById("modoOscuroIcon");

// Agrega un event listener para detectar cambios en el toggle switch
toggleSwitch.addEventListener('change', () =>{
    // Alterna entre las clases de los íconos sol / luna
    modoIcon.classList.toggle('fa-sun');
    modoIcon.classList.toggle('fa-moon');

    // Alterna el modo oscuro en el body
    document.body.classList.toggle("modoOscuroBody")
}); 
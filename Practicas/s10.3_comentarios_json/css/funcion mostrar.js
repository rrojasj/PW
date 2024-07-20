//funcion de error
function mostrarError(error) {
    const mensajeEerror = document.createElement('p');
    mensajeEerror.textContent = error;
    mensajeEerror.classList.add('error');
    //revisar el ID que esta en la hoja de estilo custom.css
    const contenido = document.querySelector('#contenido');
    //borrar contenido.appendChild(mensajeEerror);
    //permite ejecutar un fragmento de código, una vez transcurrido un tiempo determinado. 
    setTimeout(() => {
        mensajeEerror.remove();
    }, 3000);
}
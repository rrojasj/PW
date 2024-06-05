function mensaje1() {
    resultado1.innerHTML = '<span style="color:#1f3495;font-weight:bolder">MONITOR:</span> Es un dispositivo electrónico de salida de la computadora en el que se muestran las imágenes y textos generados por medio de un adaptador gráfico o de video de ésta. El término monitor se refiere normalmente a la pantalla de vídeo, y su función principal y única es la de permitir al usuario interactuar con la computadora. Una computadora típica presenta un monitor con tecnología CRT (tubos de rayos catódicos), la misma que emplean los televisores; sin embargo, hoy en día existe la tecnología TFT (transistor de película fina) que reduce significativamente el volumen de los monitores.';
    //  document.getElementById("resultado1").innerHTML = '<img src="imagenes/1.png" alt="excelencia">';
    resultado2.innerHTML = '';
    resultado3.innerHTML = '';
}


function mensaje2() {
    resultado2.innerHTML = '<span style="color:#1f3495;font-weight:bolder">TECLADO:</span> El teclado es un instrumento externo que es representado por un conjunto de teclas, estas deben encargarse de ingresar información a una computadora o dispositivo por medio de diversos caracteres, entre ellos, letras, números y símbolos. El teclado es la evolución directa de las máquinas de escribir, mismas que se utilizaban bajo un sistema de teclas o botones que actuaban como unas palancas mecánicas o interruptores electrónicos. Estas máquinas enviaban información a las computadoras antiguas, en el teclado, todo es diferente, pues este se conecta a la computadora o, en caso de las laptops, viene integrado a ellas.';
    resultado1.innerHTML = '';
    resultado3.innerHTML = '';
}

function mensaje3() {
    resultado3.innerHTML = '<span style="color:#1f3495;font-weight:bolder"> BUFFERS:</span> El buffer es un espacio temporal de memoria física el cual se usa para almacenar información mientras se envía de un lado a otro. Los buffers se pueden encontrar en todo tipo de dispositivos electrónicos, desde el nivel de circuitos hasta el nivel de la comunicación entre dispositivos como por ejemplo en el funcionamiento de internet. Los buffers son tan comunes por su función, que es paliar la diferencia de velocidad de transmisión o procesamiento entre dos dispositivos o procesos por eso están por todos lados en un ordenador. ';
    resultado1.innerHTML = '';
    resultado2.innerHTML = '';
}



//usando desplegables

$("#r1").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Atención usuario',
        text: 'El monitor es un dispositivo electrónico de salida de la computadora en el que se muestran las imágenes y textos generados por medio de un adaptador gráfico o de video de ésta. El término monitor se refiere normalmente a la pantalla de vídeo, y su función principal y única es la de permitir al usuario interactuar con la computadora. Una computadora típica presenta un monitor con tecnología CRT (tubos de rayos catódicos), la misma que emplean los televisores; sin embargo, hoy en día existe la tecnología TFT (transistor de película fina) que reduce significativamente el volumen de los monitores.',
    });
});

$("#r2").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Atención usuario',
        text: 'El teclado es un instrumento externo que es representado por un conjunto de teclas, estas deben encargarse de ingresar información a una computadora o dispositivo por medio de diversos caracteres, entre ellos, letras, números y símbolos. El teclado es la evolución directa de las máquinas de escribir, mismas que se utilizaban bajo un sistema de teclas o botones que actuaban como unas palancas mecánicas o interruptores electrónicos. Estas máquinas enviaban información a las computadoras antiguas, en el teclado, todo es diferente, pues este se conecta a la computadora o, en caso de las laptops, viene integrado a ellas.',
    });
});

$("#r3").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Atención usuario',
        text: 'El buffer es un espacio temporal de memoria física el cual se usa para almacenar información mientras se envía de un lado a otro. Los buffers se pueden encontrar en todo tipo de dispositivos electrónicos, desde el nivel de circuitos hasta el nivel de la comunicación entre dispositivos como por ejemplo en el funcionamiento de internet. Los buffers son tan comunes por su función, que es paliar la diferencia de velocidad de transmisión o procesamiento entre dos dispositivos o procesos por eso están por todos lados en un ordenador: en discos duros, procesadores, RAM, impresoras… y su tamaño y características pueden afectar al rendimiento del dispositivo.',
    });
});
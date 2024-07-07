window.onload = function(){
    document.getElementById('selectLibro').onchange = function(e) {

        // Guardar el destino o valor de la foto en una variable
        libro = e.target.value;

        // Variable que almacena la foto utilizando la expresión que busca la imagen seleccionada en la carpeta imgs
        var imgLibro = "url('imgs/pw_t3_reto5_" + libro + ".png')";

        // Envía la foto al lugar respectivo - Al "id" llamado "fotoPerro"
        // La variable imgRaza almacenó la imagen elegida por el usuario
        document.getElementById("fotoLibro").style.backgroundImage = imgLibro;
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var selectTema = document.getElementById('selectTema');
    var selectSubtema = document.getElementById('selectSubtema');
    var selectLibro = document.getElementById('selectLibro');

    selectTema.addEventListener('change', function() {
        var value = this.value;
        selectSubtema.innerHTML = '<option value="">Cargando...</optiopn>';

        /** Se simula una petición AJAX - Petición HTTP asíncrona.
         * Esto significa simplemente que mientras la respuesta de una petición está pendiente, otras partes de tu código JavaScript pueden seguir ejecutándose sin esperar a que la petición se complete primero */

        setTimeout(function(){
            var options = [];
            switch(value) {
                case 'Lenguajes de programación':
                    options = ['Seleccione un subtema', 'Java', 'Python', 'C++'];
                    break;
                case 'Ingeniería de Software':
                    options = ['Seleccione un subtema', 'Estructuras de Datos', 'Diseño de Patrones', 'Bases de datos'];
                    break;
                case 'Desarrollo Web':
                    options = ['Seleccione un subtema', 'Bootstrap', 'Javascript', 'HTML & CSS'];
                    break;
                default:
                    options = ["Seleccione un subtema"];
                    selectSubtema.disabled = true;
            }

            // Actualizar selectSubtema con las nuevas opciones
            selectSubtema.innerHTML = "";
            options.forEach(function(option){
                var optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                selectSubtema.appendChild(optionElement);

            });

            // Habilitar selectSubtema
            selectSubtema.disabled = false;
        }, 500);
    });

    selectSubtema.addEventListener('change', function(){
        var value = this.value;
        selectLibro.innerHTML = '<option value="">Cargando...</optiopn>';

        // Simulación de petición AJAX
        setTimeout(function() {
            var options = [];
            switch(value) {
                case 'Java':
                    options = ['Seleccione un libro', 'Java: Cómo Programar', 'Java 2 Curso de Programación', 'Aprende Java con Ejercicios'];
                    break;
                case 'Python':
                    options = ['Seleccione un libro', 'Introducción a la programación con Python 3', 'Python para todos', 'Python Cookbook: Recetas para dominar Python 3'];
                    break;
                case 'C++':
                    options = ['Seleccione un libro', 'C++ Primer', 'Programación en C++', 'Piensa en C++'];
                    break;
                case 'Estructuras de Datos':
                    options = ['Seleccione un libro', 'Estructuras de Datos y Algoritmos en Java', 'Estructuras de Datos y Algoritmos', 'Estructuras de datos: Fundamentación práctica'];
                    break;
                case 'Diseño de Patrones':
                    options = ['Seleccione un libro', 'Patrones de Diseño: Elementos de Software Orientado a Objetos Reutilizable', 'Head First. Patrones de Diseño', 'Patrones de Arquitectura de Aplicaciones Empresariales'];
                    break;
                case 'Bases de Datos':
                    options = ['Seleccione un libro', 'Fundamentos de Sistemas de Bases de Datos', 'Diseño de Bases de Datos', 'Conceptos del sistema de base de datos'];
                    break;
                case 'Bootstrap':
                    options = ['Seleccione un libro', 'Bootstrap 5 Foundations with SASS', 'La guía de Bootstrap 5 que falta', 'Bootstrap 5 Foundations'];
                    break;
                case 'Javascript':
                    options = ['Seleccione un libro', 'JavaScript: La Guía Definitiva', 'JavaScript from Beginner to Professional', 'Eloquent JavaScript: Un moderno libro de JavaScript para principiantes'];
                    break;
                case 'HTML & CSS':
                    options = ['Seleccione un libro', 'HTML y CSS: Diseño y construcción de sitios web', 'Aprende HTML en un fin de semana', 'CSS: La guía definitiva'];
                    break;
                default:
                    options = ["Seleccione un libro"];
                    selectLibro.disabled = true;
            }

            // Actualizar selectLibro con las nuevas opciones

            selectLibro.innerHTML = "";
            options.forEach(function(option) {
                var optionElement = document.createElement('option');
                optionElement.textContent = option;
                optionElement.value = setValor(option);
                selectLibro.appendChild(optionElement);
            });

            // Habilitar selectLibro
            selectLibro.disabled = false;
        }, 500);
    })

});

function setValor(opcion) {
    var valor;

    if(opcion === 'Java: Cómo Programar') {
        valor = 'java1';
    } else if(opcion === 'Java 2 Curso de Programación') {
        valor = 'java2';
    } else if(opcion === 'Aprende Java con Ejercicios') {
        valor = 'java3';
    } else if(opcion === 'Introducción a la programación con Python 3') {
        valor = 'python1';
    } else if(opcion === 'Python para todos') {
        valor = 'python2';
    } else if(opcion === 'Python Cookbook: Recetas para dominar Python 3') {
        valor = 'python3';
    } else if(opcion === 'C++ Primer') {
        valor = 'cpp1';
    } else if(opcion === 'Programación en C++') {
        valor = 'cpp2';
    } else if(opcion === 'Piensa en C++') {
        valor = 'cpp3';
    } else if(opcion === 'Estructuras de Datos y Algoritmos en Java') {
        valor = 'ds1';
    } else if(opcion === 'Estructuras de Datos y Algoritmos') {
        valor = 'ds2';
    } else if(opcion === 'Estructuras de datos: Fundamentación práctica') {
        valor = 'ds3';
    } else if(opcion === 'Patrones de Diseño: Elementos de Software Orientado a Objetos Reutilizable') {
        valor = 'dp1';
    } else if(opcion === 'Head First. Patrones de Diseño') {
        valor = 'dp2';
    } else if(opcion === 'Patrones de Arquitectura de Aplicaciones Empresariales') {
        valor = 'dp3';
    } else if(opcion === 'Fundamentos de Sistemas de Bases de Datos') {
        valor = 'db1';
    } else if(opcion === 'Diseño de Bases de Datos') {
        valor = 'db2';
    } else if(opcion === 'Conceptos del sistema de base de datos') {
        valor = 'db3';
    } else if(opcion === 'Bootstrap 5 Foundations with SASS') {
        valor = 'bootstrap1';
    } else if(opcion === 'La guía de Bootstrap 5 que falta') {
        valor = 'bootstrap2';
    } else if(opcion === 'Bootstrap 5 Foundations') {
        valor = 'bootstrap3';
    } else if(opcion === 'JavaScript: La Guía Definitiva') {
        valor = 'js1';
    } else if(opcion === 'JavaScript from Beginner to Professional') {
        valor = 'js2';
    } else if(opcion === 'Eloquent JavaScript: Un moderno libro de JavaScript para principiantes') {
        valor = 'js3';
    } else if(opcion === 'HTML y CSS: Diseño y construcción de sitios web') {
        valor = 'htmlcss1';
    } else if(opcion === 'Aprende HTML en un fin de semana') {
        valor = 'htmlcss2';
    } else if(opcion === 'CSS: La guía definitiva') {
        valor = 'htmlcss3';
    } else {
        valor = '';
    }

    return valor;
}

function mostrarLibro() {
    var libroSeleccionado = document.getElementById('selectLibro').value;
    console.log(libroSeleccionado);

    var tituloCorrecto = obtenerTituloLibro(libroSeleccionado);
    console.log(tituloCorrecto);

    var tituloLibro = document.getElementById('tituloLibro');

    var descripcion = document.getElementById('descripcionLibro');

    tituloLibro.innerHTML = tituloCorrecto;

    var descripciones = {
        'Java: Cómo Programar': 'Libro clásico que sirve como introducción completa a la programación en Java. Ideal para principiantes, cubre desde los fundamentos básicos del lenguaje hasta técnicas avanzadas de desarrollo de aplicaciones. Con ejemplos claros y proyectos prácticos, los lectores aprenderán a escribir código Java eficiente y escalable.',

        'Java 2 Curso de Programación': 'Curso avanzado que explora temas complejos y aplicaciones prácticas en Java. Diseñado para programadores con experiencia, cubre desde programación orientada a objetos hasta técnicas de optimización de código y manejo de errores avanzado.',

        'Aprende Java con Ejercicios': 'Libro práctico que enseña Java a través de ejercicios y ejemplos aplicados. Ideal para estudiantes y autodidactas, este libro refuerza el aprendizaje con actividades que abarcan desde lo básico hasta conceptos avanzados de programación en Java.',

        'Introducción a la programación con Python 3': 'Guía completa que introduce la programación utilizando Python 3. Desde los conceptos iniciales hasta aplicaciones prácticas como desarrollo web y análisis de datos, este libro es ideal para principiantes y programadores que buscan aprender Python de manera efectiva.',

        'Python para todos': 'Libro accesible que cubre desde lo básico hasta técnicas avanzadas en Python. Diseñado para ser útil tanto para principiantes como para expertos, explora la programación con Python de manera clara y práctica, abordando desde la sintaxis básica hasta temas como programación orientada a objetos y manipulación de datos.',

        'Python Cookbook: Recetas para dominar Python 3': 'Colección de recetas prácticas y soluciones para programadores Python que desean optimizar su código y resolver problemas comunes de manera eficiente.',

        'C++ Primer': 'Libro introductorio exhaustivo sobre el lenguaje de programación C++. Ideal para principiantes y programadores que desean aprender desde los fundamentos hasta técnicas avanzadas de desarrollo en C++.',

        'Programación en C++': 'Guía detallada que cubre todos los aspectos de la programación en C++. Desde los conceptos básicos hasta la optimización de código y el diseño de aplicaciones complejas, este libro es esencial para programadores que desean dominar C++.',

        'Piensa en C++': 'Libro avanzado que explora conceptos profundos de C++ y su aplicación práctica en el desarrollo de software robusto y eficiente.',

        'Estructuras de Datos y Algoritmos en Java': 'Texto esencial que combina la enseñanza de estructuras de datos y algoritmos con ejemplos prácticos en Java. Diseñado para estudiantes y profesionales, proporciona una comprensión profunda y aplicada de cómo implementar y utilizar estructuras de datos eficientes en Java.',

        'Estructuras de Datos y Algoritmos': 'Libro completo que cubre la teoría y la práctica de las estructuras de datos y algoritmos.',
        'Estructuras de datos: Fundamentación práctica': 'En las estructuras de datos dinámicas el tamaño y su forma es variable a lo largo de un programa, es decir, la memoria se reserva a tiempo de corrida del programa; este tipo de estructuras está conformada por nodos, los cuales tienen como mínimo dos campos: uno de información (clientes, pasajeros, cuenta bancaria, entre otros) y otro que contiene la referencia del siguiente nodo; los nodos se crean y destruyen en tiempo de ejecución. Esto hace dimensionar la estructura de datos de una forma precisa permitiendo la asignación de memoria en tiempo de ejecución según se va requiriendo. Con el propósito de lograr lo anterior, esta obra se divide en catorce capítulos, cada uno distribuido de la siguiente manera: relación general de la temática a desarrollar, una introducción al tema central donde se complementa con un mapa mental, el desarrollo de la temática respectiva incluyendo ejemplos, se recomiendan unas lecturas que posibilitan ampliar el tema, unas preguntas de revisión de conceptos y, finalmente, se propone una serie de ejercicios como apoyo complementario y fortalecimiento de los conceptos abordados.',

        'Patrones de Diseño: Elementos de Software Orientado a Objetos Reutilizable': 'El libro introduce un catálogo de 23 patrones de diseño para software orientado a objetos, presentado por cuatro expertos diseñadores. Estos patrones ofrecen soluciones eficientes y claras a problemas comunes de diseño, permitiendo a los desarrolladores crear sistemas más flexibles, elegantes y reutilizables sin necesidad de redescubrir las soluciones por sí mismos. Los autores explican la utilidad de los patrones de diseño en el desarrollo de software, detallando cómo se pueden aplicar, evaluar y catalogar de manera sistemática dentro de sistemas orientados a objetos. Cada patrón incluye ejemplos de código práctico en lenguajes como C++ o Smalltalk, basados en casos reales para ilustrar su implementación y beneficios.',

        'Head First. Patrones de Diseño': 'Libro didáctico que presenta los patrones de diseño de una manera accesible y práctica.',
        'Patrones de Arquitectura de Aplicaciones Empresariales': 'Exploración profunda de los patrones de arquitectura utilizados en aplicaciones empresariales escalables.',

        'Fundamentos de Sistemas de Bases de Datos': 'Texto fundamental que cubre los principios básicos de los sistemas de bases de datos. Proporciona una base sólida en teoría y práctica, ideal para estudiantes y profesionales que desean entender cómo funcionan y se diseñan los sistemas de bases de datos. Desde los conceptos fundamentales hasta aplicaciones prácticas, este libro explora los principios clave como la normalización, la gestión de transacciones y las técnicas de optimización. Es una lectura indispensable para aquellos que buscan desarrollar una comprensión profunda y aplicada de los sistemas de bases de datos.',
    
        'Diseño de Bases de Datos': 'Guía práctica e indispensable que explora métodos efectivos y eficientes para el diseño de bases de datos. Desde la fase inicial de conceptualización hasta la implementación y optimización, este libro cubre todos los aspectos clave del diseño de bases de datos. Los lectores aprenderán a estructurar datos de manera lógica y eficiente, considerando tanto la escalabilidad como el rendimiento. Con ejemplos prácticos y casos de estudio, se demuestra cómo aplicar principios de diseño robustos para crear bases de datos que sean fáciles de mantener y escalables. Esencial para cualquier profesional involucrado en el diseño y la administración de bases de datos en entornos reales.',

        'Conceptos del sistema de base de datos': 'Database System Concepts" de Silberschatz, Korth y Sudarshan, en su séptima edición, es un libro fundamental para la educación en bases de datos. Dirigido a estudiantes de pregrado de últimos años y de primer año de posgrado, el libro introduce conceptos fundamentales de gestión de bases de datos de manera accesible. Se enfoca en la aplicación práctica, siendo ideal para aquellos nuevos en bases de datos. El texto cubre aspectos teóricos esenciales mediante explicaciones intuitivas, centradas en conceptos en lugar de demostraciones formales. Incluye materiales suplementarios adecuados para cursos avanzados, asegurando una cobertura completa de la teoría y práctica de bases de datos en todos los formatos.',

        'Bootstrap 5 Foundations with SASS': 'Bootstrap 5, con un dominio del 72% del mercado, facilita la creación de sitios web responsivos usando HTML5, CSS y JavaScript. Esta guía abarca desde fundamentos hasta personalización avanzada con SASS, un lenguaje CSS robusto. Prescinde de jQuery, enfocándose en un modelo web armonioso. Ideal para desarrolladores y diseñadores, promete sitios web únicos y dinámicos con control preciso sobre el diseño.',

        'La guía de Bootstrap 5 que falta': 'Este libro roporciona a los desarrolladores herramientas para maximizar el popular toolkit de UI frontend, ideal para la creación de sitios web responsivos. Destacando la personalización con Sass, permite crear diseños distintivos que se apartan de la estética típica de Bootstrap. Este recurso práctico capacita a los desarrolladores para utilizar técnicas avanzadas de CSS, Sass y JavaScript y así crear rápidamente sitios web visualmente atractivos y únicos. Los lectores aprenderán a personalizar componentes de Bootstrap 5, optimizar código fuente y explorar temas avanzados, preparándolos para diseñar de forma independiente sitios web modernos y atractivos con las amplias capacidades de Bootstrap 5.',

        'Bootstrap 5 Foundations': 'Recurso indispensable que demuestra cómo utilizar Bootstrap 5 para desarrollar sitios web de manera ágil y eficaz. A través de tutoriales paso a paso y ejemplos prácticos, los lectores aprenderán a aprovechar al máximo las capacidades de Bootstrap 5. Se cubren temas como la creación de diseños flexibles, la gestión de componentes dinámicos y la implementación de efectos visuales modernos. Este libro es ideal para desarrolladores que buscan mejorar su flujo de trabajo y crear aplicaciones web responsivas y visualmente atractivas con Bootstrap 5.',

        'JavaScript: La Guía Definitiva': 'Referencia completa que abarca desde los fundamentos básicos hasta técnicas avanzadas de JavaScript. Este libro es ideal para desarrolladores que desean dominar completamente el lenguaje de programación más utilizado en el mundo. A través de ejemplos claros y explicaciones detalladas, los lectores aprenderán a escribir código JavaScript eficiente y mantener aplicaciones robustas. Se cubren temas como funciones, objetos, manipulación del DOM, así como conceptos avanzados como programación orientada a objetos y patrones de diseño. Esencial tanto para principiantes como para programadores experimentados que desean profundizar en JavaScript.',

        'JavaScript from Beginner to Professional': 'Aprende a escribir JavaScript elegante y utiliza tanto características fundamentales como avanzadas para desarrollar tus propias aplicaciones web. Interactúa con el navegador mediante HTML y JavaScript, añade imágenes dinámicas, formas y texto con HTML5 Canvas, y construye proyectos divertidos como un verificador de contraseñas, una aplicación de pintura, el juego del ahorcado, y muchos otros más, potenciando así tus habilidades en programación web de manera práctica y creativa.',

        'Eloquent JavaScript: Un moderno libro de JavaScript para principiantes': 'Introducción amigable y efectiva a JavaScript, diseñada para principiantes que desean aprender de manera accesible y aplicada. Este libro guía a los lectores a través de conceptos clave de JavaScript, desde lo básico como variables y funciones, hasta técnicas avanzadas como manejo de errores y manipulación del DOM. Con ejercicios prácticos y proyectos interactivos, se fomenta el aprendizaje activo y la comprensión profunda del lenguaje. Ideal para aquellos nuevos en la programación o que desean fortalecer sus bases en JavaScript de manera efectiva.',

        'HTML y CSS: Diseño y construcción de sitios web': 'Recurso completo que enseña cómo utilizar HTML y CSS para diseñar sitios web funcionales y estéticamente atractivos. Desde la estructura básica de páginas web hasta el diseño avanzado de interfaces, este libro cubre todos los aspectos del desarrollo web con HTML y CSS. Los lectores aprenderán a crear layouts responsivos, aplicar estilos efectivos y optimizar el rendimiento de sus sitios web. Con ejemplos prácticos y proyectos guiados, se proporciona una base sólida para desarrollar habilidades en diseño web.',

        'Aprende HTML en un fin de semana': 'Guía rápida y práctica para aprender HTML en poco tiempo, ideal para aquellos que desean iniciar rápidamente en el diseño web. Este libro proporciona una introducción concisa y efectiva a HTML, cubriendo desde los elementos básicos de estructura hasta técnicas avanzadas de diseño y optimización. Con ejemplos claros y ejercicios prácticos, los lectores desarrollarán habilidades prácticas en la creación de páginas web. Esencial para principiantes y autodidactas que buscan aprender HTML de manera rápida y efectiva.',

        'CSS: La guía definitiva': 'Referencia exhaustiva que explora todas las características avanzadas de CSS, esencial para diseñar páginas web modernas con estilo y eficiencia. Desde la creación de estilos básicos hasta técnicas avanzadas como animaciones y layouts responsivos, este libro cubre todos los aspectos de CSS. Los lectores aprenderán a personalizar diseños, mejorar la accesibilidad y optimizar el rendimiento de sus sitios web utilizando las últimas prácticas de CSS. Con ejemplos prácticos y consejos expertos, se proporciona una guía completa para diseñadores y desarrolladores web que buscan perfeccionar sus habilidades en CSS.'
    }

    if (tituloCorrecto === 'java1') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'java2') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'java3') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'python1') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'python2') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'python3') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'cpp1') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'cpp2') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'cpp3') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'ds1') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'ds2') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'ds3') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'pd1') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'pd2') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'pd3') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'bd1') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'bd2') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'bd3') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'bootstrap1') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'bootstrap2') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'bootstrap3') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'js1') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'js2') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'js3') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'htmlcss1') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'htmlcss2') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else if (tituloCorrecto === 'htmlcss3') {
        descripcion.innerHTML = descripciones[tituloCorrecto] || "";
    } else {
        descripcion.innerHTML = "";
    }
}

function obtenerTituloLibro(libroValue) {
    var valor;

    if(libroValue === 'java1') {
        valor = 'Java: Cómo Programar';
    } else if(libroValue === 'java2') {
        valor = 'Java 2 Curso de Programación';
    } else if(libroValue === 'java3') {
        valor = 'Aprende Java con Ejercicios';
    } else if(libroValue === 'python1') {
        valor = 'Introducción a la programación con Python 3';
    } else if(libroValue === 'python2') {
        valor = 'Python para todos';
    } else if(libroValue === 'python3') {
        valor = 'Python Cookbook: Recetas para dominar Python 3';
    } else if(libroValue === 'cpp1') {
        valor = 'C++ Primer';
    } else if(libroValue === 'cpp2') {
        valor = 'Programación en C++';
    } else if(libroValue === 'cpp3') {
        valor = 'Piensa en C++';
    } else if(libroValue === 'ds1') {
        valor = 'Estructuras de Datos y Algoritmos en Java';
    } else if(libroValue === 'ds2') {
        valor = 'Estructuras de Datos y Algoritmos';
    } else if(libroValue === 'ds3') {
        valor = 'Estructuras de datos: Fundamentación práctica';
    } else if(libroValue === 'dp1') {
        valor = 'Patrones de Diseño: Elementos de Software Orientado a Objetos Reutilizable';
    } else if(libroValue === 'dp2') {
        valor = 'Head First. Patrones de Diseño';
    } else if(libroValue === 'dp3') {
        valor = 'Patrones de Arquitectura de Aplicaciones Empresariales';
    } else if(libroValue === 'db1') {
        valor = 'Fundamentos de Sistemas de Bases de Datos';
    } else if(libroValue === 'db2') {
        valor = 'Diseño de Bases de Datos';
    } else if(libroValue === 'db3') {
        valor = 'Conceptos del sistema de base de datos';
    } else if(libroValue === 'bootstrap1') {
        valor = 'Bootstrap 5 Foundations with SASS';
    } else if(libroValue === 'bootstrap2') {
        valor = 'La guía de Bootstrap 5 que falta';
    } else if(libroValue === 'bootstrap3') {
        valor = 'Bootstrap 5 Foundations';
    } else if(libroValue === 'js1') {
        valor = 'JavaScript: La Guía Definitiva';
    } else if(libroValue === 'js2') {
        valor = 'JavaScript from Beginner to Professional';
    } else if(libroValue === 'js3') {
        valor = 'Eloquent JavaScript: Un moderno libro de JavaScript para principiantes';
    } else if(libroValue === 'htmlcss1') {
        valor = 'HTML y CSS: Diseño y construcción de sitios web';
    } else if(libroValue === 'htmlcss2') {
        valor = 'Aprende HTML en un fin de semana';
    } else if(libroValue === 'htmlcss3') {
        valor = 'CSS: La guía definitiva';
    } else {
        valor = '';
    }

    return valor;
}
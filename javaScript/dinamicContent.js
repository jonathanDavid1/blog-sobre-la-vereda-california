document.getElementById('options-toggle').addEventListener('click', function() {
    var option = document.getElementById('options');
    if (option.style.display === 'block') {
        option.style.display = 'none';
    } else {
        option.style.display = 'block';
    }
});

// Función para mostrar la sección seleccionada
function mostrarSeccion(seccion) {
    document.querySelectorAll('.seccion').forEach(function(div) {
        div.style.display = 'none';
    });
    document.getElementById(seccion).style.display = 'block';
}

// Mostrar sección predeterminada
mostrarSeccion('inicio');

// Agregar eventos a los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var seccion = this.getAttribute('href').substring(1);
        mostrarSeccion(seccion);
    });
});
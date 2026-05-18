function mostrarSeccion(nombre) {

    let secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.classList.remove('activa');
    });

    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('activa');
    });

    document.getElementById('seccion-' + nombre).classList.add('activa');
    document.getElementById('tab-' + nombre).classList.add('activa');
}
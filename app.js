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

const flota = [
    { id: 'TESI-01', estado: 'libre', bateria: 98, ubicacion: 'Entrada principal' },
    { id: 'TESI-02', estado: 'en_uso', bateria: 72, ubicacion: 'En transito' },
    { id: 'TESI-03', estado: 'libre', bateria: 85, ubicacion: 'Biblioteca' },
    { id: 'TESI-04', estado: 'mantenimiento', bateria: 20, ubicacion: 'Area Deportiva' },
    { id: 'TESI-05', estado: 'libre', bateria: 100, ubicacion: 'Laboratorio Sistemas' },
];

function mostrarBicicletas() {
    let contenedor = document.getElementById('lista-bicicletas');
    contenedor.innerHTML = '';

    flota.forEach(function(bici) {
    contenedor.innerHTML += `
    <div class="tarjeta-bici">
        <span class="bici-id">${bici.id}</span>
        <span class="bici-ubicacion">${bici.ubicacion}</span>
        <span class="bici-bateria">🔋 ${bici.bateria}%</span>
        <span class="estado-${bici.estado}">${bici.estado}</span>
    </div>
`;    
    });
}

mostrarBicicletas();
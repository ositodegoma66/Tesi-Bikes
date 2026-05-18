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
    { id: 'TESI-01', estado: 'libre', bateria: 98, ubicacion: 'Entrada principal', lat: 19.3145, lng: -98.9025 },
    { id: 'TESI-02', estado: 'en_uso', bateria: 72, ubicacion: 'En transito', lat: 19.3150, lng: -98.9020 },
    { id: 'TESI-03', estado: 'libre', bateria: 85, ubicacion: 'Biblioteca', lat: 19.3148, lng: -98.9015 },
    { id: 'TESI-04', estado: 'mantenimiento', bateria: 20, ubicacion: 'Area Deportiva', lat: 19.3155, lng: -98.9030 },
    { id: 'TESI-05', estado: 'libre', bateria: 100, ubicacion: 'Laboratorio Sistemas', lat: 19.3142, lng: -98.9018 },
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

function iniciarMapa() {
    let mapa = L.map('mapa').setView([19.3148, -98.9023], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(mapa);

    flota.forEach(function(bici) {
        let marcador = L.marker([bici.lat, bici.lng]).addTo(mapa);
        marcador.bindPopup(`
            <b>${bici.id}</b><br>
            Estado: ${bici.estado}<br>
            Batería: ${bici.bateria}%<br>
            Ubicación: ${bici.ubicacion}
        `);
    });
}

mostrarBicicletas();
iniciarMapa();

function verificarQR() {
    let params = new URLSearchParams(window.location.search);
    let idBici = params.get('bici');

    if (idBici) {
        let bici = flota.find(function(b) {
            return b.id === idBici;
        });

        if (bici) {
            mostrarSeccion('qr');
            document.getElementById('info-bici').innerHTML = `
                <h3>${bici.id}</h3>
                <p>📍 ${bici.ubicacion}</p>
                <p>🔋 ${bici.bateria}%</p>
                <p>Estado: ${bici.estado}</p>
                <button id="btn-desbloquear">🔓 Desbloquear</button>
            `;
        }
    }
}

verificarQR();

document.addEventListener('click', function(e) {
    if (e.target.id === 'btn-desbloquear') {
        document.getElementById('info-bici').innerHTML = `
            <h3>✅ Bicicleta Desbloqueada</h3>
            <p>¡Que tengas buen viaje!</p>
            <p>🔒 Recuerda regresar la bicicleta al terminar.</p>
        `;
    }
});
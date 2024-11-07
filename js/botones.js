document.addEventListener("DOMContentLoaded", function () {
    actualizarEstadoHorario(); // Actualiza el estado en el DOM al cargar la página

    // Configuración de los botones de contacto usando clase y data-action
    const contactButtons = document.querySelectorAll(".contact-button");

    contactButtons.forEach(button => {
        const action = button.getAttribute("data-action");

        button.addEventListener("click", function (e) {
            const estaAbierto = obtenerEstadoHorario(); // Verifica el estado en el momento del clic
            if (action === "whatsapp") {
                handleContactButton(e, estaAbierto, 'https://api.whatsapp.com/send/?phone=%2B51954117261&text=Buen+d%C3%ADa%2C+estoy+interesado+en+obtener+m%C3%A1s+informaci%C3%B3n+sobre+XTRATEGO.');
            } else if (action === "consultor-financiero") {
                handleContactButton(e, estaAbierto, 'https://api.whatsapp.com/send/?phone=%2B51954117261&text=Buen+d%C3%ADa%2C+estoy+interesado+en+obtener+consultoria+financiera+de+XTRATEGO.');
            } else if (action === "capacitacion") {
                handleContactButton(e, estaAbierto, 'https://api.whatsapp.com/send/?phone=%2B51954117261&text=Buen+d%C3%ADa%2C+estoy+interesado+en+la+capacitaci%C3%B3n+de+XTRATEGO.');
            } else if (action === "proximamente") {
                e.preventDefault();
                Swal.fire({
                    icon: 'info',
                    title: 'Próximamente',
                    text: 'Esta opción aún no está habilitada. ¡Pronto estará disponible!',
                });
            }
        });
    });

    // Mostrar/Ocultar la lista de horarios
    const listaHorarios = document.getElementById("listaHorarios");
    document.getElementById("toggleButton").addEventListener("click", function () {
        if (listaHorarios.style.display === "none" || !listaHorarios.style.display) {
            listaHorarios.style.display = "block";
            this.innerText = "Ocultar Horarios";
        } else {
            listaHorarios.style.display = "none";
            this.innerText = "Mostrar Horarios";
        }
    });

    mostrarListaHorarios(); // Muestra los horarios en la página
});

// Función general para manejar los botones de contacto con verificación de horario
function handleContactButton(event, estaAbierto, url) {
    if (!estaAbierto) {
        event.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Fuera de horario de atención',
            text: 'Esta opción solo está disponible durante el horario de atención.',
        });
    } else {
        window.open(url, '_blank');
    }
}

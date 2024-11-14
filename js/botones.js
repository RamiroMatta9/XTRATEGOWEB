document.addEventListener("DOMContentLoaded", function () {
    actualizarEstadoHorario(); // Actualiza el estado en el DOM al cargar la página

    // Configuración de los botones de contacto usando clase y data-action
    const contactButtons = document.querySelectorAll(".contact-button");

    contactButtons.forEach(button => {
        const action = button.getAttribute("data-action");

        button.addEventListener("click", function (e) {
            const estaAbierto = obtenerEstadoHorario(); // Verifica el estado en el momento del clic
            if (action === "whatsapp") {
                handleContactButton(e, estaAbierto, 'https://api.whatsapp.com/send/?phone=%2B51967315653&text=Buen+d%C3%ADa%2C+estoy+interesado+en+obtener+m%C3%A1s+informaci%C3%B3n+sobre+XTRATEGO.');
            } else if (action === "consultor-financiero") {
                handleContactButton(e, estaAbierto, 'https://api.whatsapp.com/send/?phone=%2B51967315653&text=Buen+d%C3%ADa%2C+estoy+interesado+en+obtener+consultoria+financiera+de+XTRATEGO.');
            } else if (action === "capacitacion") {
                handleContactButton(e, estaAbierto, 'https://api.whatsapp.com/send/?phone=%2B51967315653&text=Buen+d%C3%ADa%2C+estoy+interesado+en+la+capacitaci%C3%B3n+de+XTRATEGO.');
            }else if (action === "digitalizacion") {
                    handleContactButton(e, estaAbierto, 'https://api.whatsapp.com/send/?phone=%2B51967315653&text=Buen%20d%C3%ADa,%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20digitalizaci%C3%B3n%20y%20automatizaci%C3%B3n%20que%20ofrece%20XTRATEGO.');               
            }else if (action === "gestion-tributaria") {
                    handleContactButton(e, estaAbierto, 'https://api.whatsapp.com/send/?phone=%2B51967315653&text=Buen%20d%C3%ADa,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20gesti%C3%B3n%20tributaria%20y%20fiscal%20que%20ofrece%20XTRATEGO.');                   
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

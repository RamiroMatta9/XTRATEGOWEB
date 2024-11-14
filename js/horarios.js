const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const horarios = [
    "Cerrado", // domingo
    "00:00 a. m. - 11:59 p. m.", // lunes
    "00:00 a. m. - 11:59 p. m.", // martes
    "00:00 a. m. - 11:59 p. m.", // miércoles
    "00:00 a. m. - 11:59 p. m.", // jueves
    "00:00 a. m. - 11:59 p. m.", // viernes
    "Cerrado" // sábado
];

// Devuelve si está en horario de atención sin modificar el DOM
function obtenerEstadoHorario() {
    const hoy = new Date();
    const diaHoy = hoy.getDay();
    const horaPeru = new Date().toLocaleString("en-US", { timeZone: "America/Lima" });
    const horaActualPeru = new Date(horaPeru);
    const horarioHoy = horarios[diaHoy];
    return horarioHoy !== "Cerrado" && verificarHorario(horaActualPeru, horarioHoy);
}

// Actualiza el texto de estado de horario en el DOM
function actualizarEstadoHorario() {
    const hoy = new Date();
    const diaHoy = hoy.getDay();
    const horarioHoy = horarios[diaHoy];
    const estaAbierto = obtenerEstadoHorario();
    document.getElementById("estado").innerText = estaAbierto ? `Abierto (${horarioHoy})` : "Cerrado";
}

// Verifica si la hora actual está dentro del horario de atención especificado
function verificarHorario(horaActual, horario) {
    if (horario === "Cerrado") return false;
    const [horaInicio, horaFin] = horario.split(" - ").map(hora => convertirHora24(hora));
    return horaActual >= horaInicio && horaActual <= horaFin;
}

// Convierte la hora en formato 12h a formato 24h
function convertirHora24(hora12) {
    hora12 = hora12.replace(/\s+/g, '');
    const match = hora12.match(/(\d{1,2}):(\d{2})(a\.?m\.?|p\.?m\.?)/i);
    if (!match) return null;
    const [_, hora, minuto, periodo] = match;
    let horas = parseInt(hora, 10);
    if (periodo.toLowerCase().includes("p") && horas < 12) horas += 12;
    if (periodo.toLowerCase().includes("a") && horas === 12) horas = 0;
    return new Date().setHours(horas, parseInt(minuto, 10), 0, 0);
}

// Genera y muestra la lista de horarios en el DOM
function mostrarListaHorarios() {
    const listaHorarios = document.getElementById("listaHorarios");
    let horariosHTML = "<strong>Horarios:</strong><br>";
    for (let i = 0; i < dias.length; i++) {
        horariosHTML += dias[i].charAt(0).toUpperCase() + dias[i].slice(1) + ": " + horarios[i] + "<br>";
    }
    listaHorarios.innerHTML = horariosHTML;
}

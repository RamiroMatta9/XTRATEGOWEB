// Función para verificar si un elemento está en la vista
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para agregar la clase de animación
function animateElements() {
    const elementsToAnimate = document.querySelectorAll('.imagen-con-overlay, .custom-card');
    elementsToAnimate.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Función para desplazar hasta un elemento
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with ID "${elementId}" not found.`);
    }
}

// Detectar el desplazamiento en la ventana
window.addEventListener('scroll', animateElements);

// Llamar a la función al cargar la página para animar elementos que ya están en vista
window.addEventListener('load', animateElements);

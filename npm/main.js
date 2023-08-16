function copyTextToClipboard(element) {
    const text = element.textContent.trim();

    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    console.log("Text copied:", text);
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector(".scroll-to-top");

    scrollButton.addEventListener("click", function (e) {
        e.preventDefault();
        const header = document.querySelector("header");
        header.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector(".scroll-to-top");
    const indice = document.getElementById("indice");

    // Función para controlar la visibilidad del botón
    function toggleScrollButton() {
        const rect = indice.getBoundingClientRect();
        if (rect.bottom <= 0) {
            scrollButton.style.opacity = 1; // Muestra el botón cuando el índice está fuera de la vista
        } else {
            scrollButton.style.opacity = 0; // Oculta el botón cuando el índice está en la vista
        }
    }

    toggleScrollButton(); // Llamada inicial para determinar si mostrar el botón al cargar la página

    // Agregar evento de desplazamiento para controlar la visibilidad del botón
    window.addEventListener("scroll", toggleScrollButton);

    // Agregar evento de clic para el botón de volver arriba
    scrollButton.addEventListener("click", function (e) {
        e.preventDefault();
        const header = document.getElementById("header");
        header.scrollIntoView({ behavior: "smooth" });
    });
});
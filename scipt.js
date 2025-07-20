// Mostrar y ocultar secciones usando anclas
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            sections.forEach(section => {
                section.style.display = (section.id === targetId) ? "block" : "none";
            });
        });
    });

    // Mostrar solo login al principio
    sections.forEach(section => section.style.display = "none");
    document.getElementById("login").style.display = "block";
});

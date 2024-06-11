document.addEventListener("DOMContentLoaded", () => {
    const showProjectsButton = document.getElementById("showProjects");

    showProjectsButton.addEventListener("click", () => {
        window.location.href = "#projets";
    });
});

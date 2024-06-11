document.addEventListener("DOMContentLoaded", () => {
    const addProjectButton = document.getElementById("addProject");
    const projectsContainer = document.getElementById("projectsContainer");

    addProjectButton.addEventListener("click", () => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const projectTitle = prompt("Titre du projet:");
        const projectDescription = prompt("Description du projet:");
        const projectImage = prompt("Lien de l'image du projet:");
        const projectVideo = prompt("Lien de la vidéo du projet (optionnel):");

        if (projectTitle && projectDescription && projectImage) {
            const titleElement = document.createElement("h3");
            titleElement.textContent = projectTitle;
            projectDiv.appendChild(titleElement);

            const descElement = document.createElement("p");
            descElement.textContent = projectDescription;
            projectDiv.appendChild(descElement);

            const imgElement = document.createElement("img");
            imgElement.src = projectImage;
            projectDiv.appendChild(imgElement);

            if (projectVideo) {
                const videoElement = document.createElement("video");
                videoElement.controls = true;
                const sourceElement = document.createElement("source");
                sourceElement.src = projectVideo;
                sourceElement.type = "video/mp4";
                videoElement.appendChild(sourceElement);
                projectDiv.appendChild(videoElement);
            }

            projectsContainer.appendChild(projectDiv);
        } else {
            alert("Veuillez fournir un titre, une description et une image pour le projet.");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour ajouter un effet hover à l'image de profil
    const profileImage = document.querySelector('.profile img');
    profileImage.addEventListener('mouseover', () => {
        profileImage.style.border = '5px solid yellow';
    });
    profileImage.addEventListener('mouseout', () => {
        profileImage.style.border = 'none';
    });

    // Fonction pour afficher une alerte lorsque le lien "Mes projets" est cliqué
    const projectsLink = document.getElementById('projects-link');
    projectsLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Lien vers les projets cliqué !');
    });
});

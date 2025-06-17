let container = document.getElementById ("container_img");
let btnPrecedent = document.getElementById ("btn_precedent");
let btnSuivant = document.getElementById ("btn_suivant");
let images = document.querySelectorAll (".img_carousel")

// Mémorise quelle image est actuellement affichée dans le carousel
let index = 0; 


// Logique pour passer à l'image suivante
btnSuivant.addEventListener("click", function() {
    images[index].classList.remove("active"); // Retire la classe "active" de l'image actuelle
    index = (index + 1) % images.length; // Passe à l'image suivante. Index + 1 → Tente d'aller à l'image suivante. % images.length → Repars à zéro si on dépasse la dernière image
    images[index].classList.add("active"); // Affiche l'image 1
});

// Logique pour passer à l'image précédente
btnPrecedent.addEventListener("click", function() {
    images[index].classList.remove("active");
    if (index === 0) // Vérifie si l'image visible est la 1er des 4 images
        {index = images.length - 1;} // Si on se trouve sur la 1er image, on passe directement à la dernière
    else {index --;} // Si on est pas sur la 1er image, on utilise index-- pour aller à l'image précédente
    images[index].classList.add("active");
});





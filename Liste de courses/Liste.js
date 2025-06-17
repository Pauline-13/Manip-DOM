let btn = document.getElementById ('btn_ajouter');
let courses = document.getElementById ('entrer_courses');


btn.addEventListener ("click", function () {
    let saisie = courses.value;  // Créer et ajoute l'élément de course à la liste
      if(saisie.trim() !== "") { // Ne permet pas d'ajouter si le champ est vide
    let element = document.createElement("li");
    element.textContent = saisie; 

    let container = document.getElementById("container_liste");
    container.appendChild(element);

    courses.value = ""; // Vide le champ Input (après ajout d'une course)
      }
});


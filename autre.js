// import {
//     locationData,
//     pokemonData,
//     trainerData,
//     enemyData,
//     defaultData,
// } from "./data.js";
// import { names } from "./utilities.js";

// // Fonction pour créer les éléments HTML
// function createHTMLElement(tag, attributes = {}, textContent = "") {
//     const element = document.createElement(tag);
//     Object.assign(element, attributes);
//     element.textContent = textContent;
//     return element;
// }

// // //! Création des variables et des constantes
// const underscoreContainer = document.getElementById("underscore-container");
// let spans = [];
// let correctLetters = [];
// let wrongLetters = [];
// let lifeCount = 6;
// const livesElement = createHTMLElement("div", { id: "lives" }, `Lives: ${lifeCount} / 6`);
// const selectElement = createHTMLElement("select", { id: "category-select" });
// let myWord = "";

// const category = {
//     ChooseCategory: defaultData,
//     location: locationData,
//     enemy: enemyData,
//     trainer: trainerData,
//     pokemon: pokemonData,
// };

// //! 1 - Création de la fonction qui s'occupera de la section title
// function sectionTitle() {
//     const div = createHTMLElement("div", { className: "section-title__content" });
//     const p = createHTMLElement(
//         "p",
//         { className: "section-title__content__text" },
//         "Please, before going further, select a category and let's see if you are a true Pokemon Master. Do not forget, if you lose, you will be punished by Pikachu."
//     );
//     div.appendChild(p);
//     document.getElementById("title-page").appendChild(div);
// }

// // Appel de la fonction pour la section title
// sectionTitle();

// //! 2 - Création de la fonction qui s'occupera de la section category
// function onCategorySelected() {
//     const selectedCategory = selectElement.value;

//     const categoryName = document.getElementById("category-name");

//     if (selectedCategory === "ChooseCategory") {
//         categoryName.innerHTML = "Please select a category";
//     } else {
//         categoryName.innerHTML = "The Chosen Category Is " + selectedCategory;
//     }

//     const selectedData = category[selectedCategory];
//     const selectedNames = names(selectedData);

//     myWord = selectedNames[Math.floor(Math.random() * selectedNames.length)].toLowerCase();
//     generateUnderscore(myWord);
//     correctLetters = [];
//     wrongLetters = [];
//     lifeCount = 6;
//     livesElement.textContent = `Lives: ${lifeCount} / 6`;
// }

// //! 3 - Création de la fonction qui s'occupera de la section underscore
// function generateUnderscore(word) {
//     document.removeEventListener("keydown", keydownEventHandler); // Supprimer l'écouteur d'événement existant
//     underscoreContainer.innerHTML = ""; // Clear previous underscores
//     spans = [];
//     for (let index = 0; index < word.length; index++) {
//         const span = createHTMLElement("span", {
//             textContent: word[index] === " " ? " " : "_",
//             classList: word[index] === " " ? ["space"] : [],
//         });
//         underscoreContainer.appendChild(span);
//         spans.push(span);
//     }

//     document.addEventListener("keydown", keydownEventHandler); // Ajouter l'écouteur d'événement
// }

// //! 4 - Création de la fonction qui s'occupera de la section wrong-letters
// // ... (votre code reste inchangé)

// // Création des options pour le select
// const categoryOptions = [
//     { value: "ChooseCategory", text: "Choose a category" },
//     { value: "location", text: "Location" },
//     { value: "enemy", text: "Enemy" },
//     { value: "trainer", text: "Trainer" },
//     { value: "pokemon", text: "Pokemon" },
// ];

// // Ajout des options au select
// categoryOptions.forEach(({ value, text }) => {
//     const option = createHTMLElement("option", { value }, text);
//     selectElement.appendChild(option);
// });

// // Événement changement de catégorie
// selectElement.addEventListener("change", onCategorySelected);

// // Insertion du select dans la div main-page
// const mainPage = document.querySelector(".main-page");
// mainPage.appendChild(selectElement);

// // Insertion de la div livesElement dans la div score-name
// const scoreName = document.querySelector(".score-name");
// scoreName.insertBefore(livesElement, document.getElementById("underscore-container"));

// // Initialisation de la page avec la catégorie par défaut
// onCategorySelected();

// // Fonction de gestionnaire d'événement pour keydown
// function keydownEventHandler(event) {
//     // ... (votre code reste inchangé)
// }

// -----------------------------

/**

// ... (le code précédent reste inchangé)

// //! Fonctions pour afficher les lettres correctes et incorrectes
const correctLettersList = createHTMLElement("ul", { className: "letters-list correct" });
const wrongLettersList = createHTMLElement("ul", { className: "letters-list wrong" });

function updateCorrectLettersList() {
    correctLettersList.innerHTML = correctLetters.map(letter => `<li>${letter.toUpperCase()}</li>`).join("");
}

function updateWrongLettersList() {
    wrongLettersList.innerHTML = wrongLetters.map(letter => `<li>${letter.toUpperCase()}</li>`).join("");
}

// Fonction pour créer les sections de lettres correctes et incorrectes
function createLettersSection() {
    const lettersSection = createHTMLElement("div", { className: "letters-section" });

    const correctLettersTitle = createHTMLElement("h2", { textContent: "Correct Letters" });
    lettersSection.appendChild(correctLettersTitle);
    lettersSection.appendChild(correctLettersList);

    const wrongLettersTitle = createHTMLElement("h2", { textContent: "Wrong Letters" });
    lettersSection.appendChild(wrongLettersTitle);
    lettersSection.appendChild(wrongLettersList);

    document.getElementById("score-page").appendChild(lettersSection);
}

// Appel de la fonction pour créer les sections de lettres correctes et incorrectes
createLettersSection();

// Fonction pour mettre à jour les lettres correctes et incorrectes à chaque tour
function updateLetters() {
    updateCorrectLettersList();
    updateWrongLettersList();
}

// Fonction de gestionnaire d'événement pour keydown
function keydownEventHandler(event) {
    // ... (le code précédent reste inchangé)

    updateLetters(); // Mettre à jour les lettres correctes et incorrectes à chaque tour
}

// ... (le reste du code reste inchangé) */

/**
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... (le code précédent reste inchangé) -->
</head>

<body>
    <div class="main-page"></div>
    <section id="title-page"></section>
    <div id="category-name"></div>
    <div class="score-name">
        <section id="underscore-container"></section>
    </div>
    <div id="success"></div>
    <div id="score-page"></div> <!-- Ajout de la div pour les lettres correctes et incorrectes -->
    <script type="module" src="/assets/js/script.js"></script>
</body>
</html> */

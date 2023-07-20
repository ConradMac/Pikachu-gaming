import {
    locationData,
    pokemonData,
    trainerData,
    enemyData,
    defaultData,
    alphabet,
} from "./data.js";
import { names } from "./utilities.js";

// //! Création des variables et des constantes
const underscoreContainer = document.getElementById("underscore-container");
let spans = [];
let correctLetters = [];
let wrongLetters = [];
let lifeCount = 6;
const livesElement = document.querySelector("#lives");
const selectElement = document.getElementById("category-select");

const category = {
    ChooseCategory: defaultData,
    location: locationData,
    enemy: enemyData,
    trainer: trainerData,
    pokemon: pokemonData,
};

console.log(locationData.length);

//! 1 - Création de la fonction qui s'occupera de la section title
function sectionTitle() {
    const div = document.createElement("div");
    div.className = "section-title__content";
    let p = document.createElement("p");
    p.className = "section-title__content__text";
    p.textContent =
        "Please, before going further, select a category and let see if you are a true Pokemon Master. Do not forget, if you lose, you would have MURDERED Pikachu.";
    div.appendChild(p);
    document.getElementById("title-page").appendChild(div);
}
console.log(sectionTitle());

//! 2 - Création de la fonction qui s'occupera de la section category
function onCategorySelected() {
    underscoreContainer.innerHTML = "";
    document.getElementById("wrong-letters").innerHTML = "";
    document.getElementById("correct-letters").innerHTML = "";

    const selectedCategory = selectElement.value;
    console.log("Catégorie sélectionnée :", selectedCategory);

    const categoryName = document.getElementById("category-name");

    if (selectedCategory === "ChooseCategory") {
        categoryName.innerHTML = "Please select a category";
    } else {
        categoryName.innerHTML = "The Chosen Category Is " + selectedCategory;
    }

    const selectedData = category[selectedCategory];
    const selectedNames = names(selectedData);
    // let lives = 6;
    console.log(selectedNames);

    const myWord =
        selectedNames[
            Math.floor(Math.random() * selectedNames.length)
        ].toLowerCase();
    console.log(myWord);
    generateUnderscore(myWord);
    correctLetters = [];
    wrongLetters = [];
    // lives = 6;
    livesElement.textContent = `Lives: ${lifeCount} / 6`;
}

//! 3 - Création de la fonction qui s'occupera de la section underscore

const wrongLettersElement = document.querySelector("#wrong-letters");
const letterToDisplay = document.querySelector("#letter-to-display");
const li = document.createElement("li");

// afficher les lettres incorrectes

li.textContent = [wrongLettersElement];

function displayWrongLetters() {
    // wrongLettersElement.innerHTML = wrongLetters.join(" ");
    document.getElementById("wrong-letters").innerHTML = wrongLetters.join(" ");
}

// Créer une fonction pour afficher les lettres correctes

function displayCorrectLetters() {
    document.getElementById("correct-letters").innerHTML =
        correctLetters.join(" ");
}

function generateUnderscore(word) {
    spans = [];
    for (let index = 0; index < word.length; index++) {
        const span = document.createElement("span");
        if (word[index] === " ") {
            span.classList.add("space");
        } else {
            span.textContent = "_";
        }
        underscoreContainer.append(span);
        spans.push(span);
    }

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        console.log(event.key, livesElement);

        if (!alphabet.includes(event.key)) {
            return;
        }
        // event inclu dans array. -> key (const) includes.
        // let currentLives = lifeCount;
        const keyPressed = event.key.toLowerCase();

        for (let index = 0; index < word.length; index++) {
            if (word[index].toLowerCase() === keyPressed) {
                console.log(
                    "======================>>>>>     ",
                    keyPressed,
                    word[index].toLowerCase()
                );
                spans[index].textContent = keyPressed;
            }
        }

        // On reappuie sur une lettre deja validee
        const letterIsCorrect = word.includes(keyPressed);
        if (correctLetters.includes(keyPressed)) {
            losePoints();
            return;
        }
        if (!letterIsCorrect && !wrongLetters.includes(keyPressed)) {
            wrongLetters.push(keyPressed);
            losePoints(); // debugger;
            return;
        }

        if (letterIsCorrect && !correctLetters.includes(keyPressed)) {
            correctLetters.push(keyPressed);

            if (!spans.some((span) => span.textContent === "_")) {
                alert("You wone..... great");
            }
        } else if (
            !wrongLetters.includes(keyPressed) &&
            !correctLetters.includes(keyPressed)
        ) {
            wrongLetters.push(keyPressed);
            losePoints(); // debugger;
            return;
        }
        if (!letterIsCorrect) {
            losePoints();
            return;
        }

        livesElement.textContent = `Lives: ${lifeCount} / 6`;

        displayWrongLetters();
        displayCorrectLetters();
    });
}

function losePoints() {
    lifeCount--;
    livesElement.textContent = `Lives: ${lifeCount} / 6`;
    displayWrongLetters();
    displayCorrectLetters();

    if (lifeCount === 0) {
        alert("Pikachu is angry, dear !!! ");
        // showModal();
    }
}
//!parcours tout mon tableau des clés de l'objet category et créer les options du menu déroulant
Object.keys(category).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    // check freecodecamp pour la reponse.
    option.text = key.charAt(0).toUpperCase() + key.slice(1);
    selectElement.appendChild(option);
});

selectElement.addEventListener("change", onCategorySelected);

// creer une fonction pour afficher les lettres deja utilisées

wrongLetters = [];
correctLetters = [];

// button reset

// Add an event listener to the reset button
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

// Function to reset the game
function resetGame() {
    // Clear the underscore container
    underscoreContainer.innerHTML = "";

    // Clear the letters containers
    document.getElementById("wrong-letters").innerHTML = "";
    document.getElementById("correct-letters").innerHTML = "";

    // Reset the letters arrays
    correctLetters = [];
    wrongLetters = [];

    // clear the lives container check check
    livesElement.textContent = "";
    // Reset the life count
    lifeCount = 6;
    livesElement.textContent = `Lives: ${lifeCount} / 6`;

    // Call the onCategorySelected function to reset the game category
    onCategorySelected();

    // Event listener for the reset button
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetGame);

    // Event listener for category selection
    selectElement.addEventListener("change", onCategorySelected);
}

// TODO : creer un modal des que Pikachu is DeAd.
function showModal() {}

// document.addEventListener("DOMContentLoaded", function () {
//     const pikachu = document.querySelector(".pikachu");
//     const loadingText = document.querySelector(".loading-text");

//     pikachu.style.display = "none";

//     setTimeout(() => {
//         pikachu.style.display = "block";
//         loadingText.textContent = "Pikachu is ready!";
//     }, 3000); // Replace 3000 with the desired loading time in milliseconds
// });

// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Le chargement de la page est terminé, masquez le chargement
    const loading = document.querySelector(".loading");
    loading.style.display = "none";

    // Affichez la page maintenant qu'elle est chargée
    document.body.style.display = "block";
});

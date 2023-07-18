import {
    locationData,
    pokemonData,
    trainerData,
    enemyData,
    defaultData,
} from "./data.js";
import { names } from "./utilities.js";

// //! Création de la du tableau de données des pokemons, trainers, ennemies et locations.
const underscoreContainer = document.getElementById("underscore-container");
let spans = [];

let correctLetters = [];
let wrongLetters = [];
let lifeCount = 6;
const livesElement = document.querySelector("#lives");

console.log(locationData.length);

const selectElement = document.getElementById("category-select");

const category = {
    ChooseCategory: defaultData,
    location: locationData,
    enemy: enemyData,
    trainer: trainerData,
    pokemon: pokemonData,
};

//!parcours tout mon tableau des clés de l'objet category et créer les options du menu déroulant
Object.keys(category).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    // check freecodecamp pour la reponse.
    option.text = key.charAt(0).toUpperCase() + key.slice(1);
    selectElement.appendChild(option);
});

//! Création de la div section
function sectionTitle() {
    const div = document.createElement("div");
    div.className = "section-title__content";
    // div.style.display = "flex";
    // div.style.justifyContent = "center";
    // div.width = "100%";
    let p = document.createElement("p");
    p.className = "section-title__content__text";
    // p.style.color = "royalBlue";
    // p.style.fontSize = "1.5rem";
    // p.style.width = "50%";

    p.textContent =
        "Please, before going further, select a category and let see if you are a true Pokemon Master. Do not forget, if you lose, you will be punished by Pikachu.";
    div.appendChild(p);
    document.getElementById("title-page").appendChild(div);
}
console.log(sectionTitle());

//! To select a category et show the category selected with a sentence. function
function onCategorySelected() {
    const selectedCategory = selectElement.value;
    console.log("Catégorie sélectionnée :", selectedCategory);

    const categoryName = document.getElementById("category-name");

    if (selectedCategory === "Choissisez une catégorie") {
        categoryName.innerHTML = "Please select a category";
    } else if (selectedCategory === "location") {
        categoryName.innerHTML = "The Chosen Category Is Location";
    } else if (selectedCategory === "enemy") {
        categoryName.innerHTML = "The Chosen Category Is Enemy";
    } else if (selectedCategory === "trainer") {
        categoryName.innerHTML = "The Chosen Category Is Trainer";
    } else if (selectedCategory === "pokemon") {
        categoryName.innerHTML = "The Chosen Category Is Pokemon";
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

selectElement.addEventListener("change", onCategorySelected);

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
        console.log(event.key, livesElement);
        // let currentLives = lifeCount;
        const keyPressed = event.key.toLowerCase();

        if (word.includes(keyPressed) && !correctLetters.includes(keyPressed)) {
            correctLetters.push(keyPressed);

            for (let index = 0; index < word.length; index++) {
                if (word[index].toLowerCase() === keyPressed) {
                    spans[index].textContent = keyPressed;
                }
            }

            if (!spans.some((span) => span.textContent === "_")) {
                alert("You wone..... great");
            }
        } else if (!wrongLetters.includes(keyPressed)) {
            wrongLetters.push(keyPressed);
            lifeCount--;

            if (lifeCount === 0) {
                alert("Pikachu is angry, dear !!! ");
            }
        }

        livesElement.textContent = `Lives: ${lifeCount} / 6`;
    });
}

const categoryName = document.getElementById("category-name");

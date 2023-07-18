// document.addEventListener("keydown", (event) => {
//     if (!gameStarted) return;

//     const keyPressed = event.key.toLowerCase();
//     const word = underscoreContainer.innerText.replace(/\s/g, "");

//     if (word.includes(keyPressed) && !correctLetters.includes(keyPressed)) {
//         correctLetters.push(keyPressed);

//         for (let index = 0; index < word.length; index++) {
//             if (word[index].toLowerCase() === keyPressed) {
//                 underscoreContainer.children[index].textContent = keyPressed;
//             }
//         }

//         if (!underscoreContainer.innerText.includes("_")) {
//             alert("You won!");
//             gameStarted = false;
//         }
//     } else if (!wrongLetters.includes(keyPressed)) {
//         wrongLetters.push(keyPressed);
//         const remainingLives = 6 - wrongLetters.length;
//         livesDisplay.textContent = `Lives: ${remainingLives}`;

//         if (remainingLives <= 0) {
//             alert("Pikachu is angry, you lose!");
//             gameStarted = false;
//         }
//     }
// });

// Object.keys(category).forEach((key) => {
//     const option = document.createElement("option");
//     option.value = key;
//     option.text = key.charAt(0).toUpperCase() + key.slice(1);
//     categorySelect.appendChild(option);
// });

// categorySelect.addEventListener("change", onCategorySelected);

"use strict";
window.addEventListener("guessesPopulated", () => {
    console.log(guesses);
    console.log(guesses[0]);
    const currentGuess = guesses[0].formElement;
    console.log(currentGuess);
});

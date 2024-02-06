"use strict";
window.addEventListener("guessesPopulated", () => {
    setZIndex(guesses);
});
function setZIndex(guesses) {
    for (let i = 0; i < guesses.length; i++)
        guesses[i].formElement.classList.add("form-position-" + i.toString());
}
;

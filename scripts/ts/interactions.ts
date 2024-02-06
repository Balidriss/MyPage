
window.addEventListener("guessesPopulated", () => {
    setZIndex(guesses);


}
);

function setZIndex(guesses: Guesses[]) {
    for (let i: number = 0; i < guesses.length; i++)
        guesses[i].formElement.classList.add("form-position-" + i.toString());

};


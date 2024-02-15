"use strict";
window.addEventListener("guessesPopulated", () => {
    setNewIndexOrder(guesses, 0);
});
if (document.querySelector('button-left') != null) {
    const sliderLeft = document.querySelector('button-left');
}
else {
    console.error("couldn't find slider left");
}
if (document.querySelector('button-right') != null) {
    const sliderLeft = document.querySelector('button-right');
}
else {
    console.error("couldn't find slider right");
}
function setNewIndexOrder(guesses, i) {
    let y = 0;
    while (y < guesses.length) {
        console.log('i : ', i, '...  y : ', y);
        if (!(i < guesses.length)) {
            i = 0;
        }
        if (y === 0) {
            guesses[i].formElement.classList.remove("form-position-" + (guesses.length - 1).toString());
        }
        else {
            guesses[i].formElement.classList.remove("form-position-" + (y - 1).toString());
        }
        guesses[i].formElement.classList.add("form-position-" + y.toString());
        i++;
        y++;
    }
    return i;
}
;

"use strict";
class Guess {
    constructor(guess_id, helpMessage) {
        this.guess_id = guess_id;
        this.answer = "";
        this.successMessage = "Bravo.";
        this.helpMessage = helpMessage;
        this.hintMessage = "";
    }
}
const guesses = [];
function guessAttempt(event, form) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('guessAPI.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
        updateGuessSection(parseInt(form.id), data.hint_message, data.success_message, data.answer);
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
function updateGuessSection(guess_id, hintMessage, succesMessage, answer) {
    const guessToUpdate = guesses.find(guessToFind => guessToFind.guess.guess_id === guess_id);
    if (guessToUpdate != undefined) {
        guessToUpdate.guess.hintMessage = hintMessage;
        guessToUpdate.guess.successMessage = succesMessage;
        guessToUpdate.guess.answer = answer;
    }
    const hintMessageElement = document.getElementById("hint-message");
    if (hintMessageElement != null) {
        hintMessageElement.innerHTML = hintMessage;
        //to do success message and answer to put somewhere + transitions 
    }
}
function createGuesses() {
    const guessContainer = document.querySelector('.guess-container');
    if (guessContainer != null) {
        const guessForms = guessContainer.querySelectorAll('form');
        if (guessForms != null) {
            guessForms.forEach((guessForm) => {
                var _a;
                const guessId = parseInt(guessForm.id);
                const imageTitle = (_a = guessForm.querySelector('img')) === null || _a === void 0 ? void 0 : _a.getAttribute('title');
                if (!isNaN(guessId) || guessForm.querySelector('img') != null) {
                    if (imageTitle) {
                        const guess = new Guess(guessId, imageTitle);
                        guesses.push({ guess: guess, formElement: guessForm });
                    }
                }
                else {
                    console.error("couldn't parse int guessId or img was missing in form");
                }
            });
        }
        else {
            console.error("Forms guesses are missing ! reload");
        }
    }
    else {
        console.error("guess container missing ! reload");
    }
}
window.addEventListener("load", () => {
    createGuesses();
    window.dispatchEvent(new Event('guessesPopulated'));
});

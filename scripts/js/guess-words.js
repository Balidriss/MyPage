"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Guess {
    constructor(guess_id, helpMessage) {
        this.guess_id = guess_id;
        this.answer = "";
        this.imgPath = "assets/img/guesses/guess-" + guess_id.toString() + ".png";
        this.successMessage = "Bravo.";
        this.helpMessage = helpMessage;
        this.hintMessage = "";
    }
}
function createGuessForm(data) {
    console.log(data);
    const formGuess = document.createElement("form");
    formGuess.id = "form-guess-" + data.guess_id.toString();
    formGuess.method = "post";
    formGuess.action = "scripts/ts/guessAPI.php";
    const id = document.createElement('input');
    id.type = 'hidden';
    id.name = 'id';
    id.value = data.guess_id.toString();
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'attempt';
    input.placeholder = 'Qui suis je ?';
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Deviner';
    const img = document.createElement('img');
    img.src = data.imgPath.toString();
    formGuess.appendChild(img);
    formGuess.appendChild(submitButton);
    formGuess.appendChild(input);
    formGuess.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const response = yield fetch('scripts/ts/guessAPI.php', {
                method: 'POST',
                body: JSON.stringify({ guess: 'attempt', attempt: input.value, id: data.guess_id.toString() }),
            });
            if (response.ok) {
                const responseAttempt = yield response.json();
                console.log(responseAttempt);
            }
            else {
                console.error('Failed to submit the form');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }));
    return formGuess;
}
const createGuesses = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('scripts/ts/guessAPI.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ guess: 'init' }),
        });
        if (response.ok) {
            const guessesData = yield response.json();
            const helpMessage = document.getElementById('help-message');
            if (helpMessage != null) {
                helpMessage.innerHTML = guessesData[0]['help_message'];
            }
            for (const guessData of guessesData) {
                const guess = new Guess(guessData.guess_id, guessData.help_message);
                const guessContainer = document.querySelector('.guess-container');
                if (guessContainer != null) {
                    const formGuess = createGuessForm(guess);
                    guessContainer.appendChild(formGuess);
                }
                else {
                    console.error("can't find guess container ! reload");
                }
            }
        }
        else {
            console.error('Failed to submit the form');
        }
    }
    catch (error) {
        console.error('Error fetching guesses data:', error);
    }
});
window.onload = () => {
    createGuesses();
};

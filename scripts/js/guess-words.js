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
class GuessResponse {
    constructor(message, isSuccess) {
        this.message = "";
        this.isSuccess = false;
        this.message = message;
        this.isSuccess = isSuccess;
    }
}
class Guess {
    constructor(guess_id, helpMessage) {
        this.guess_id = guess_id;
        this.answer = "";
        this.imgPath = "assets/img/guesses/" + guess_id + "_guess";
        this.successMessage = "Bravo.";
        this.helpMessage = helpMessage;
        this.hintMessage = "";
    }
    guess(attempt) {
        let response;
        if (attempt === this.answer) {
            response = new GuessResponse(this.successMessage, true);
        }
        else {
            response = new GuessResponse(this.hintMessage, true);
        }
        return response;
    }
}
function createGuessForm(data) {
    console.log(data);
    const formGuess = document.createElement("form");
    formGuess.id = "form-guess-" + data.guess_id.toString();
    formGuess.method = "get";
    formGuess.action = "scripts/ts/guessAPI.php";
    console.log(formGuess);
    return formGuess;
}
const createGuesses = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('scripts/ts/guessAPI.php?guess=init', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const guessesData = yield response.json();
        for (const guessData of guessesData) {
            const guess = new Guess(guessData.guess_id, guessData.help_message);
            const guessContainer = document.querySelector('.guess-container');
            if (guessContainer != null) {
                const formGuess = createGuessForm(guessData);
                guessContainer.appendChild(formGuess);
            }
            else {
                console.error("can't find guess container ! reload");
            }
        }
    }
    catch (error) {
        console.error('Error fetching guesses data:', error);
    }
});
window.onload = () => {
    createGuesses();
};

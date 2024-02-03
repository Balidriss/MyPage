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
    constructor(index, answer, helpMessage, hintMessage, successMessage) {
        this.index = index;
        this.answer = answer;
        this.imgPath = "assets/img/guesses/" + index + "_guess";
        this.successMessage = successMessage;
        this.helpMessage = helpMessage;
        this.hintMessage = hintMessage;
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
const fetchGuessesData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('../guessAPI.php');
        const guessesData = yield response.json();
        for (const guessData of guessesData) {
            const guess = new Guess(guessData.guess_id, guessData.answer, guessData.help_message, guessData.hint_message, guessData.success_message);

        }
    }
    catch (error) {
        console.error('Error fetching guesses data:', error);
    }
});

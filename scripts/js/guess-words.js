"use strict";
class GuessResponse {
    constructor(message, isSuccess) {
        this.message = "";
        this.isSuccess = false;
        this.message = message;
        this.isSuccess = isSuccess;
    }
}
class Guess {
    constructor(index, answer, hintMessage, successMessage) {
        this.index = index;
        this.answer = answer;
        this.imgPath = "assets/img/guesses/" + index + "_guess";
        this.successMessage = successMessage;
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
let guessTest;
console.log(guessTest = new Guess(0, "Idriss", "c'est moi", "Rohlalalal mais quel devin..."));
let test = guessTest.guess("Jean");
console.log(test.message);
test = guessTest.guess("Idriss");
console.log(test.message);

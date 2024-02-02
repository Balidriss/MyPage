class GuessResponse {
    message: string = "";
    isSuccess: boolean = false;
    constructor(message: string, isSuccess: boolean) {
        this.message = message;
        this.isSuccess = isSuccess;
    }
}

class Guess {
    index: number;
    answer: string;
    imgPath: string;
    helpMessage: string;
    hintMessage: string;
    successMessage: string;


    constructor(index: number, answer: string, helpMessage: string, hintMessage: string, successMessage: string) {
        this.index = index;
        this.answer = answer;
        this.imgPath = "assets/img/guesses/" + index + "_guess";
        this.successMessage = successMessage;
        this.helpMessage = helpMessage;
        this.hintMessage = hintMessage;

    }


    public guess(attempt: string): GuessResponse {

        let response: GuessResponse;

        if (attempt === this.answer) {
            response = new GuessResponse(this.successMessage, true);
        }
        else {
            response = new GuessResponse(this.hintMessage, true);
        }
        return response;
    }
}

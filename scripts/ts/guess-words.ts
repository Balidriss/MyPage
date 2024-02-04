


class GuessResponse {
    message: string = "";
    isSuccess: boolean = false;
    constructor(message: string, isSuccess: boolean) {
        this.message = message;
        this.isSuccess = isSuccess;
    }
}

class Guess {
    guess_id: number;
    answer: string;
    imgPath: string;
    helpMessage: string;
    hintMessage: string;
    successMessage: string;


    constructor(guess_id: number, helpMessage: string) {
        this.guess_id = guess_id;
        this.answer = "";
        this.imgPath = "assets/img/guesses/" + guess_id + "_guess";
        this.successMessage = "Bravo.";
        this.helpMessage = helpMessage;
        this.hintMessage = "";

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

function createGuessForm(data: Guess): HTMLElement {
    console.log(data);
    const formGuess: HTMLFormElement = document.createElement("form") as HTMLFormElement;
    formGuess.id = "form-guess-" + data.guess_id.toString() as string;
    formGuess.method = "get";
    formGuess.action = "scripts/ts/guessAPI.php";
    console.log(formGuess);
    return formGuess;
}

const createGuesses = async () => {

    try {

        const response = await fetch('scripts/ts/guessAPI.php?guess=init', {
            headers: {
                'Content-Type': 'application/json',
            },
        });


        const guessesData = await response.json();


        for (const guessData of guessesData) {

            const guess = new Guess(guessData.guess_id, guessData.help_message);
            const guessContainer = document.querySelector('.guess-container');
            if (guessContainer != null) {
                const formGuess: HTMLElement = createGuessForm(guessData);
                guessContainer.appendChild(formGuess);
            } else {
                console.error("can't find guess container ! reload")
            }
        }
    }
    catch (error) {
        console.error('Error fetching guesses data:', error);
    }
};
window.onload = () => {
    createGuesses();
};


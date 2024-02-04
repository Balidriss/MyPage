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
}

function createGuessForm(data: Guess): HTMLElement {
    console.log(data);
    const formGuess: HTMLFormElement = document.createElement("form") as HTMLFormElement;
    formGuess.id = "form-guess-" + data.guess_id.toString() as string;
    formGuess.method = "post";
    formGuess.action = "scripts/ts/guessAPI.php";
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'name';
    input.placeholder = 'Qui suis je ?';
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.innerText = 'Deviner';

    console.log(formGuess);
    return formGuess;
}

const createGuesses = async () => {

    try {

        const response = await fetch('scripts/ts/guessAPI.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ guess: 'init' }),
        });


        const guessesData = await response.json();
        const helpMessage: HTMLElement = document.getElementById('help-message') as HTMLElement;

        if (helpMessage != null) {
            helpMessage.innerHTML = guessesData[0]['help_message'];
        }
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


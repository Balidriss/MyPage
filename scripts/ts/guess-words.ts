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
        this.imgPath = "assets/img/guesses/guess-" + guess_id.toString() + ".png" as string;
        this.successMessage = "Bravo.";
        this.helpMessage = helpMessage;
        this.hintMessage = "";

    }
}


interface Guesses {
    guess: Guess;
    formElement: HTMLFormElement;
}

function createGuessForm(guess: Guess): HTMLFormElement {

    const formGuess: HTMLFormElement = document.createElement("form") as HTMLFormElement;
    formGuess.id = "form-guess-" + guess.guess_id.toString() as string;
    formGuess.method = "post";
    formGuess.action = "scripts/ts/guessAPI.php";
    const id = document.createElement('input');
    id.type = 'hidden';
    id.name = 'id';
    id.value = guess.guess_id.toString();
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'attempt';
    input.placeholder = 'Qui suis je ?';
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = '';
    const img = document.createElement('img');
    img.src = guess.imgPath.toString() as string;
    formGuess.appendChild(img);
    formGuess.appendChild(input);
    formGuess.appendChild(submitButton);
    formGuess.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('scripts/ts/guessAPI.php', {
                method: 'POST',
                body: JSON.stringify({ guess: 'attempt', attempt: input.value, id: guess.guess_id.toString() }),
            });
            if (response.ok) {
                const responseAttempt = await response.json();
                guess.hintMessage = responseAttempt['hint_message'];
                guess.successMessage = responseAttempt['success_message'];
                guess.answer = responseAttempt['answer'];


            } else {
                console.error('Failed to submit the form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    return formGuess;
}

const guesses: Guesses[] = [];

const createGuesses = async () => {

    try {

        const response = await fetch('guessAPI.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ guess: 'init' }),
        });

        if (response.ok) {
            const guessesData = await response.json();
            const helpMessage: HTMLElement = document.getElementById('help-message') as HTMLElement;

            if (helpMessage != null) {
                helpMessage.innerHTML = guessesData[0]['help_message'];
            }
            for (const guessData of guessesData) {

                const guess = new Guess(guessData.guess_id, guessData.help_message);

                const guessContainer = document.querySelector('.guess-container');
                if (guessContainer != null) {
                    const formGuess: HTMLFormElement = createGuessForm(guess);
                    guessContainer.appendChild(formGuess);
                    guesses.push({ guess: guess, formElement: formGuess });

                } else {
                    console.error("can't find guess container ! reload")
                }
            }
        } else {
            console.error('Failed to submit the form');
        }
        window.dispatchEvent(new Event('guessesPopulated'));
    }
    catch (error) {
        console.error('Error fetching guesses data:', error);
    }

};

window.addEventListener("load", async () => {
    await createGuesses();

});


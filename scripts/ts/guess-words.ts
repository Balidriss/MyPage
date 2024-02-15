class Guess {
    guess_id: number;
    answer: string;
    helpMessage: string;
    hintMessage: string;
    successMessage: string;

    constructor(guess_id: number, helpMessage: string) {
        this.guess_id = guess_id;
        this.answer = "";
        this.successMessage = "Bravo.";
        this.helpMessage = helpMessage;
        this.hintMessage = "";

    }
}
interface Guesses {
    guess: Guess;
    formElement: HTMLFormElement;
}
const guesses: Guesses[] = [];



function guessAttempt(event: Event, form: HTMLFormElement) {
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
        })
}

function updateGuessSection(guess_id: number, hintMessage: string, succesMessage: string, answer: string) {
    const guessToUpdate = guesses.find(guessToFind => guessToFind.guess.guess_id === guess_id);

    if (guessToUpdate != undefined) {
        guessToUpdate.guess.hintMessage = hintMessage;
        guessToUpdate.guess.successMessage = succesMessage;
        guessToUpdate.guess.answer = answer;
    }
    const hintMessageElement = document.getElementById("hint-message");
    if (hintMessageElement != null) {
        console.log(hintMessage);
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
                const guessId = parseInt(guessForm.id);
                const imageTitle = guessForm.querySelector('img')?.getAttribute('title');
                if (!isNaN(guessId) || guessForm.querySelector('img') != null) {

                    if (imageTitle) {
                        const guess = new Guess(guessId, imageTitle);
                        guesses.push({ guess: guess, formElement: guessForm });
                    }

                } else {
                    console.error("couldn't parse int guessId or img was missing in form");
                }
            });
        } else {
            console.error("Forms guesses are missing ! reload")
        }
    } else {
        console.error("guess container missing ! reload")
    }
}

window.addEventListener("load", () => {
    createGuesses();
    window.dispatchEvent(new Event('guessesPopulated'));
});


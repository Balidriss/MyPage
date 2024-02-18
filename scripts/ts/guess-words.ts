class Guess {
    guess_id: number;
    answer: string;
    helpMessage: string;
    additionalMessage: string;

    constructor(guess_id: number, helpMessage: string) {
        this.guess_id = guess_id;
        this.answer = "";
        this.additionalMessage = "";
        this.helpMessage = helpMessage;
    }
}
interface GuessFormPair {
    guess: Guess;
    formElement: HTMLFormElement;
}
const guesses: GuessFormPair[] = [];

let sliderLeft: HTMLElement;
let sliderRight: HTMLElement;
let additionalMessageElement: HTMLElement;
let helpMessageElement: HTMLElement;
let answerElement: HTMLElement;
let currentIndex = 0;

function guessAttempt(event: Event, form: HTMLFormElement) {
    event.preventDefault();
    let formId: string | null = null;
    const formData = new FormData(form);
    fetch('guessATTEMPT.php', {
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

            if (form.querySelector('input[name="id"]') != null) {
                formId = (form.querySelector('input[name="id"]') as HTMLInputElement).value;
            } else {
                console.error("couldn't find id in form");
            }
            updateUserGuess(parseInt(formId as string), data.additional_message, data.answer);
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })
}

function updateUserGuess(guess_id: number, additionalMessage: string, answer: string) {
    const index = guesses.findIndex(guessToFind => guessToFind.guess.guess_id === guess_id);
    if (index != undefined || !(index !== '-1')) {
        guesses[index].guess.additionalMessage = additionalMessage;
        if (answer != undefined) {
            guesses[index].guess.answer = answer;
        }
    }
    updateSectionGuess(true);
}

async function createGuesses() {
    const guessContainer = document.querySelector('.guess-container');
    if (guessContainer != null) {
        const guessForms = guessContainer.querySelectorAll('form');
        if (guessForms.length > 0) {
            for (const guessForm of guessForms) {
                let formId: string | null = null;
                if (guessForm.querySelector('input[name="id"]')) {
                    formId = (guessForm.querySelector('input[name="id"]') as HTMLInputElement).value;
                } else {
                    console.error("can't find form id.");
                }

                try {
                    if (formId !== null) {

                        const response = await fetch('guessINIT.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: formId })
                        });
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = await response.json();
                        const guess = new Guess(parseInt(formId), data['help_message']);
                        guesses.push({ guess: guess, formElement: guessForm });
                    }
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                }
            }
        } else {
            console.error("Forms guesses are missing ! reload")
        }
    } else {
        console.error("guess container missing ! reload")
    }
}

function slide(isRight: boolean, currentIndex: number): number {
    if (isRight) {
        currentIndex = (currentIndex + 1) % guesses.length;
        setNewIndexOrder(guesses, currentIndex);
    }
    else {
        currentIndex = (currentIndex - 1 + guesses.length) % guesses.length;
        setNewIndexOrder(guesses, currentIndex);
    }
    return currentIndex;
}

function setNewIndexOrder(guesses: GuessFormPair[], currentIndex: number) {
    let y = 0;
    let i = currentIndex % guesses.length;
    while (y < guesses.length) {
        guesses[i].formElement.className = '';
        guesses[i].formElement.classList.add("form-position-" + y.toString());
        if (y === (guesses.length - 1)) {
            guesses[i].formElement.style.transform = `translateX(25rem)`;

        } else if ((y > (guesses.length - 3)) && (guesses.length > 4)) {
            guesses[i].formElement.style.transform = `translateX(${(-10 * y) - 20}rem`;
        } else {
            guesses[i].formElement.style.transform = `translateX(${(-15 * y) - 2}rem)`;
        }
        i = (i + 1) % guesses.length;
        y++;
    }
};
function updateSectionGuess(isAttempt: boolean) {
    if (guesses[currentIndex].formElement.querySelector('.answer') != null) {
        answerElement = guesses[currentIndex].formElement.querySelector('.answer')!;
        if (guesses[currentIndex].guess.answer !== '' || isAttempt) {
            if ((guesses[currentIndex].formElement.querySelector('.attempt-field') != null) && (guesses[currentIndex].guess.answer !== '')) {
                const attemptField = guesses[currentIndex].formElement.querySelector('.attempt-field')!;
                attemptField.remove();
            }
            answerElement.innerHTML = guesses[currentIndex].guess.answer;
        }
        additionalMessageElement.innerHTML = guesses[currentIndex].guess.additionalMessage;
        helpMessageElement.innerHTML = guesses[currentIndex].guess.helpMessage;
    }
}
window.addEventListener("load", async () => {

    await createGuesses();
    setNewIndexOrder(guesses, 0);
    if (document.getElementById("additional-message") != null) {
        additionalMessageElement = document.getElementById("additional-message")!;
    } else {
        console.error("couldn't find hint message element");
    }
    if (document.getElementById("help-message") != null) {
        helpMessageElement = document.getElementById("help-message")!;
    } else {
        console.error("couldn't find help message element");
    }
    if (document.querySelector('.button-left') != null) {
        sliderLeft = document.querySelector('.button-left')!;
    } else {
        console.error("couldn't find slider left");
    }
    if (document.querySelector('.button-right') != null) {
        sliderRight = document.querySelector('.button-right')!;
    } else {
        console.error("couldn't find slider right");
    }

    sliderLeft?.addEventListener('click', () => {

        currentIndex = slide(false, currentIndex);
        updateSectionGuess(false)
    })


    sliderRight?.addEventListener('click', () => {

        currentIndex = slide(true, currentIndex);
        updateSectionGuess(false)
    })

});


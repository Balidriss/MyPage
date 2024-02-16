

window.addEventListener("guessesPopulated", () => {

    setNewIndexOrder(guesses, 0);


}
);
let currentIndex = 0;
window.addEventListener("load", () => {

    if (document.querySelector('.button-left') != null) {
        const sliderLeft = document.querySelector('.button-left');
        sliderLeft?.addEventListener('click', () => {

            currentIndex = slide(false, currentIndex);

        })
    } else {
        console.error("couldn't find slider left");
    }
    if (document.querySelector('.button-right') != null) {
        const sliderRight = document.querySelector('.button-right');
        sliderRight?.addEventListener('click', () => {

            currentIndex = slide(true, currentIndex);
        })
    } else {
        console.error("couldn't find slider right");
    }
});


function slide(isRight: boolean, currentIndex: number): number {

    console.log(currentIndex);
    if (isRight) {
        currentIndex--;
        //if currentindex go beyond 0 that means we have to loop to the end
        if ((currentIndex < 0)) {
            // TODO
            currentIndex = guesses.length - 1;
        }
        setNewIndexOrder(guesses, currentIndex);
    }
    else {
        currentIndex++;

        //if currentindex go beyond the length that means we have to loop to the start
        if (!(currentIndex < guesses.length)) {
            // TODO
            currentIndex = 0;
        }
        setNewIndexOrder(guesses, currentIndex);
    }
    return currentIndex;
}



function setNewIndexOrder(guesses: Guesses[], currentIndex: number) {
    let y = 0;
    let i = currentIndex;
    while (y < guesses.length) {
        console.log('i : ', i, '...  y : ', y);
        console.log('i < guesses.length : ', (i < guesses.length));
        if (!(i < guesses.length)) {

            i = 0;
        }
        guesses[i].formElement.className = '';
        guesses[i].formElement.classList.add("form-position-" + y.toString());

        i++;
        y++;

    }

};


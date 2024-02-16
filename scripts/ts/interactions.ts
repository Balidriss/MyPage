

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
        currentIndex = (currentIndex + 1) % guesses.length;
        setNewIndexOrder(guesses, currentIndex);
    }
    else {
        currentIndex = (currentIndex - 1 + guesses.length) % guesses.length;
        setNewIndexOrder(guesses, currentIndex);
    }
    return currentIndex;
}



function setNewIndexOrder(guesses: Guesses[], currentIndex: number) {
    let y = 0;
    let i = currentIndex % guesses.length;
    while (y < guesses.length) {
        guesses[i].formElement.className = '';
        guesses[i].formElement.classList.add("form-position-" + y.toString());
        if (y === (guesses.length - 1)) {
            guesses[i].formElement.style.transform = `translateX(25rem)`;
        } else if ((y > (guesses.length - 4)) && (guesses.length > 4)) {
            console.log('i : ', i);
            guesses[i].formElement.style.transform = `translateX(${(-12 * y) - 20}rem`;
        } else {
            guesses[i].formElement.style.transform = `translateX(${-12 * y}rem)`;
        }

        i = (i + 1) % guesses.length;
        y++;
    }

};


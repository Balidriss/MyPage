class Quiz {
    //elements
    static additionalMessageElement;
    static helpMessageElement;
    static sliderLeft;
    static sliderRight;
    static quizContainer;
    static quizElements;
    static baseSelector = ".guess-";
    //
    static quiz;
    static numberToShow = 3;
    //
    static gap = 20;
    static positions = [];
    static currentIndex = 0;
    // 
    static swipeThreshold;
    static outPosLeft = 100;
    static outPosRight = -100;
    static frontPos = 95;
    //
    static ratio = 0.5;



    constructor(index) {
        this.index = index;
        this.hidden = false;
        this.element = Quiz.querySelector(Quiz.updateSelectorIndex(index));
        if (!this.element) {
            throw new Error(`quiz element failed to be assign to instance guess #${index} with expected selector : ${baseSelector + index}`)
        }
    }

    static init() {
        Quiz.additionalMessageElement = document.getElementById("additional-message");
        Quiz.helpMessageElement = document.getElementById("help-message");
        Quiz.sliderLeft = document.querySelector('.button-left');
        Quiz.sliderRight = document.querySelector('.button-right');
        Quiz.quizContainer = document.querySelector('.quiz-container');
        Quiz.quizElements = Quiz.quizContainer.querySelectorAll('form');;
        Quiz.populate();
        Quiz.assignSliderEvents();
        Quiz.update();
        if (!Quiz.additionalMessageElement) {
            throw new Error("Couldn't find additional message element");
        }

        if (!Quiz.helpMessageElement) {
            throw new Error("Couldn't find help message element");
        }

        if (!Quiz.sliderLeft) {
            throw new Error("Couldn't find slider left");
        }

        if (!Quiz.sliderRight) {
            throw new Error("Couldn't find slider right");
        }
        if (!Quiz.quizContainer) {
            throw new Error("Couldn't find Quiz container");
        }
        if (!Quiz.quizElements) {
            throw new Error("Couldn't find quiz elements");
        } else if (Quiz.quizElements.length === 0) {
            throw new Error("Failed to add guesses in array quizElements");
        }
        if (Quiz.quiz === undefined) {
            throw new Error("Quiz failed to populate quiz");
        }
    }
    static updateSelectorIndex(i) {
        return Quiz.baseSelector + i;
    }
    static querySelector(selector) {
        return Quiz.quizContainer.querySelector(selector);
    }
    static populate() {
        Quiz.quiz = new Array();
        for (let i = 1; i <= Quiz.quizElements.length; i++) {
            Quiz.quiz.push(Quiz.add(i));
        }
    }
    static assignSliderEvents() {
        Quiz.sliderLeft.addEventListener('click', () => {
            currentIndex = Quiz.slide('left');
        });

        Quiz.sliderRight.addEventListener('click', () => {
            currentIndex = Quiz.slide('right');
        });

        Quiz.quizContainer.addEventListener('touchstart', Quiz.dragStart);
        Quiz.quizContainer.addEventListener('touchend', Quiz.dragEnd);
        Quiz.quizContainer.addEventListener('touchmove', Quiz.dragAction);
        Quiz.quizContainer.addEventListener('transitionend', Quiz.checkIndex);


    }
    static add(index) {
        return new Quiz(index);
    }
    static slide(direction) {
        switch (direction) {
            case 'Right':
                Quiz.quiz.forEach(guess => {
                    guess.move(Quiz.positions[guess.nextIndex()]);
                });
                break;
            case 'Left':
                Quiz.quiz.forEach(guess => {
                    guess.move(Quiz.positions[guess.previewsIndex()]);
                });
                break;
            default:
                Quiz.quiz.forEach(guess, i => {
                    guess.move(Quiz.positions[i]);
                });

        }
    }
    static dragStart(e) {
        e.preventDefault();
    }
    static dragEnd(e) {
        e.preventDefault();
    }
    static dragAction(e) {
        e.preventDefault();
    }
    static posInPx(widthPourcent) {
        return Quiz.quizContainer.offsetWidth * widthPourcent / 100;

    }

    static update() {
        let zIndex = Quiz.quiz.length;
        Quiz.numberToShow = Math.floor(Quiz.quizContainer.offsetWidth / Quiz.quiz[1].element.offsetWidth ?? 1);
        console.log(Quiz.quizContainer.offsetWidth, Quiz.quiz[1].element.offsetWidth, Quiz.numberToShow);
        Quiz.quiz.forEach((guess, index) => {
            guess.show((index <= Quiz.numberToShow) && (index !== 0));
            guess.allowInput(index === 1);
            guess.element.style.transform = `translate(${Quiz.frontPos + (Quiz.gap * index) - Quiz.gap}%)`;
            guess.outLeft((index > Quiz.numberToShow));
            guess.outRight(index === 0);
            guess.element.style.zIndex = zIndex;
            guess.element.style.backgroundColor = `rgb(${(Quiz.numberToShow - index) * 10},${(Quiz.numberToShow - index) * 10},${(Quiz.numberToShow - index) * 10}`;
            zIndex--;
        });
        console.log(Quiz.quiz);
    }
    checkIndex(index) {
        //
    }
    move(length) {
        //apply css 

    }
    //todo: extract and change to css selector
    show(show = true) {
        if (show) {
            this.element.style.opacity = "1";
        } else {
            this.element.style.opacity = "0";
        }
    }
    outLeft(isOut = true) {
        if (isOut) {
            this.element.style.transform = `translate(${Quiz.outPosLeft}%)`;
        }
    }
    outRight(isOut = true) {
        if (isOut) {
            this.element.style.transform = `translate(${Quiz.outPosRight}%)`;
        }
    }

    allowInput(allow = true) {
        if (allow) {
            this.element.style.pointerEvents = "auto";
            this.element.style.userSelect = "auto";
        } else {
            this.element.style.pointerEvents = "none";
            this.element.style.userSelect = "none";
        }
    }

    nextIndex() {
        return (currentIndex + 1 >= Quiz.quiz.length) ? 0 : currentIndex + 1;
    }

    previewsIndex() {
        return (currentIndex - 1 < 0) ? Quiz.quiz.length - 1 : currentIndex - 1;
    }
    async send() {
        //send attempt
    }


}


class CVPart {
    constructor(tab, content) {
        this.tab = tab;
        this.content = content;
        if (!tab) {
            throw new Error(`Element cv tab missing.`);
        } if (!content) {
            throw new Error(`Elements cv content of the tab missing.`);
        }
    }
}
class CV {
    static formations;
    static professions;
    static projects;
    static pairTabContents;

    static init() {
        CV.formations = new CVPart(document.querySelector('.tabs-cv .formations'), document.getElementById('formations'));
        CV.professions = new CVPart(document.querySelector('.tabs-cv .professions'), document.getElementById('professions'));
        CV.projects = new CVPart(document.querySelector('.tabs-cv .projects'), document.getElementById('projects'));
        CV.pairTabContents = [CV.formations, CV.professions, CV.projects];

        CV.pairTabContents.forEach(part => {
            part.tab.addEventListener('click', () => {
                CV.pairTabContents.forEach(part => {
                    CV.display(part, false);
                });
                CV.display(part, true);
            });
        });
    }

    static display(cvTab, show) {
        if (show) {
            cvTab.content.classList.add('show');
            cvTab.tab.classList.add('show');
        }
        else {
            cvTab.content.classList.remove('show');
            cvTab.tab.classList.remove('show');
        }
    }
}

window.addEventListener("load", () => {
    try {
        CV.init();
        Quiz.init();

    }
    catch (error) {
        console.error(error);
    }
});
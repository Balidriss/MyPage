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
    static positions = [];
    static currentIndex = 0;
    // % 
    static swipeThreshold;
    static outPosLeft = -50;
    static outPosRight = 150;
    static inPos = 25;
    static frontPos = 75;
    //
    static ratio = 0.5;



    constructor(index) {
        this.index = index;
        this.hidden = false;
        this.element = Quiz.querySelector(Quiz.updateSelectorIndex(index));
        this.posX = -50;
        this.guessPosY = 0;
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

    static setWaypoints() {
        let arrayOfPos = new Array(Quiz.quiz.length);
        const distanceFirtLast = Math.abs(Quiz.frontPos - Quiz.inPos);
        const gap = distanceFirtLast / Quiz.numberToShow;
        for (let i = 1; i < arrayOfPos.length; i++) {
            arrayOfPos[i] = Quiz.posInPx(Quiz.frontPos - gap - Quiz.frontPos * i);
            if (i > Quiz.numberToShow) {
                arrayOfPos[i] = Quiz.posInPx(Quiz.outPosLeft);
            }
        }
        arrayOfPos[0] = Quiz.posInPx(Quiz.outPosRight);
        return arrayOfPos;
    }
    static posInPx(widthPourcent) {
        return Quiz.quizContainer.offsetWidth * widthPourcent / 100;

    }
    static update() {
        Quiz.positions = Quiz.setWaypoints();
        const startIndex = Quiz.currentIndex;
        Quiz.quiz.forEach((guess, index) => {
            guess.show((index <= Quiz.numberToShow) && (index !== 0));
            guess.allowInput(index === 1);
            guess.posX = Quiz.positions[startIndex + index % Quiz.positions.length];
            //other stylings
        });
        console.log(Quiz.quiz);
    }
    checkIndex(index) {
        //
    }
    move(length) {
        //apply css 

    }
    show(show = true) {
        if (show) {
            this.element.style.display = "block";
        } else {
            this.element.style.display = "none";
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
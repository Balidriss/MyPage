class Quiz {
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
    // % 
    static swipeThreshold;
    static outPos;
    static inPos;

    static ratio = 0.5;



    constructor(index) {
        this.guessIndex = index;
        this.hidden = false;
        this.element = Quiz.querySelector(Quiz.updateSelectorIndex(index));
        this.guessSize = this.guessSize();
        this.guessPosX = this.guessSize.width * index;
        this.guessPosY = 0;
        if (!this.element) {
            throw new Error(`quiz element failed to be assign to instance guess #${index} with expected selector : ${baseSelector + index}`)
        }
        console.log(this.guessPosX);
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
        Quiz.quiz = [];
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
        Quizquiz.forEach(guess => {
            guess.move(Quiz.waypoint[guess.nextIndex()]);
        });
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

        //algo to apply pos where guess go in %
        return [];
    }

    checkIndex(index) {
        return this.guessIndex === index;
    }
    guessSize() {
        return { width: this.element.offsetWidth, height: this.element.offsetHeight };
        //logic to calculate size based of container size
    }
    move(length) {
        //apply css 

    }
    show(shown) {
        //apply class hide

    }
    enable(enabled) {
        //apply class disable user input
    }
    async send() {
        //send attempt
    }
    update() {
        //update what needs to be updated in some conditions that i dont know yet
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
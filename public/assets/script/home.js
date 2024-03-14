class Quiz {
    static additionalMessageElement;
    static helpMessageElement;
    static sliderLeft;
    static sliderRight;
    static quizzContainer;
    static quizzElements;

    static ratio = 0.5;

    constructor(index) {
        this.guessIndex = index;
        this.guessWidth = Quiz.guessWidth();
        this.guessHeight = Quiz.guessWidth() * Quiz.ratio;
        this.guessPosX = this.guessWidth * index;
        this.guessPosY = 0;

    }

    static init() {
        Quiz.additionalMessageElement = document.getElementById("additional-message");
        Quiz.helpMessageElement = document.getElementById("help-message");
        Quiz.sliderLeft = document.querySelector('.button-left');
        Quiz.sliderRight = document.querySelector('.button-right');
        Quiz.quizzContainer = document.querySelector('.quiz-container');
        Quiz.quizzElements = document.querySelectorAll('.quizz');

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
        if (!Quiz.quizzContainer) {
            throw new Error("Couldn't find Quiz container");
        }

        Quiz.assignSliderEvent();
    }


    static assignSliderEvent() {
        Quiz.sliderLeft.addEventListener('click', () => {
            currentIndex = Quiz.slide('left');
        });

        Quiz.sliderRight.addEventListener('click', () => {
            currentIndex = Quiz.slide('right');
        });

        Quiz.quizzContainer.addEventListener('touchstart', Quiz.dragStart);
        Quiz.quizzContainer.addEventListener('touchstart', Quiz.dragEnd);
        Quiz.quizzContainer.addEventListener('touchstart', Quiz.dragAction);
        Quiz.quizzContainer.addEventListener('transitionend', Quiz.checkIndex);


    }


    dragStart(e) {
        e.preventDefault();
    }
    dragEnd(e) {
        e.preventDefault();
    }
    dragEnd(e) {
        e.preventDefault();
    }
    checkIndex() {

    }
    static slide(direction) {

    }
}


class CVPart {
    constructor(tab, content) {
        this.tab = tab;
        this.content = content;
    }
}

class CV {
    static init(container, pairTabContent) {
        pairTabContent.forEach(part => {
            part.tab.addEventListener('click', () => {
                CV.selectCVPart(part);
            });
        });
        if (!container) {
            throw new Error('Element container cv missing.');
        }
        pairTabContent.forEach(part => {
            if (!part.tab || !part.content) {
                throw new Error(`Elements ${part} missing.`);
            }
        });
    }

    static selectCVPart(cvPart) {
        pairTabContent.forEach(part => {
            part.tab.classList.remove('show');
            part.content.classList.remove('show');
        });
        cvPart.content.classList.add('show');
        cvPart.tab.classList.add('show');
    }
}

window.addEventListener("load", () => {
    try {
        const formations = new CVPart(document.querySelector('.tabs-cv .formations'), document.getElementById('formations'));
        const professions = new CVPart(document.querySelector('.tabs-cv .professions'), document.getElementById('professions'));
        const projects = new CVPart(document.querySelector('.tabs-cv .projects'), document.getElementById('projects'));
        CV.init(document.querySelector('.cv-container'), [formations, professions, projects]);
        Quiz.init();
    }
    catch (error) {
        console.error(error);
    }
});
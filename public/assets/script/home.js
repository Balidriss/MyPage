function debounce(func, waitTime) {
    let lastCallTime = 0;

    return function () {
        const currentTime = Date.now();
        if (currentTime - lastCallTime > waitTime) {
            func.apply(this, arguments);
            lastCallTime = currentTime;
        }
    };
}
class Quiz {
    //element
    static hintMessageElement;
    static helpMessageElement;
    static sliderLeft;
    static sliderRight;
    static quizContainer;
    static quizElements;
    //string
    static baseSelector = ".guess-";
    //array
    static quiz;
    //int
    static numberToShow = 3;
    static currentIndex = 0;
    // %
    static gap = 20;
    static swipeThreshold;
    static outPosLeft = 1000;
    static outPosRight = -1000;
    static frontPos = 5;
    //sec
    static delay = 1;




    constructor(index) {
        this.index = index;
        this.hidden = false;
        this.element = Quiz.querySelector(Quiz.updateSelectorIndex(index));
        if (!this.element) {
            throw new Error(`quiz element failed to be assign to instance guess #${index} with expected selector : ${Quiz.baseSelector + index}`)
        }
        this.element.addEventListener("submit", this.send);
        this.answer = null;
        this.hintMessage = '';
        this.successMessage = null;
        this.helpMessage = this.element.querySelector('img').getAttribute("title");
    }

    static init() {
        Quiz.hintMessageElement = document.getElementById("hint-message");
        Quiz.helpMessageElement = document.getElementById("help-message");
        Quiz.sliderLeft = document.querySelector('.button-left');
        Quiz.sliderRight = document.querySelector('.button-right');
        Quiz.quizContainer = document.querySelector('.quiz-container');
        Quiz.quizElements = Quiz.quizContainer.querySelectorAll('form');;
        Quiz.populate();
        Quiz.assignSliderEvents();
        Quiz.update();
        if (!Quiz.hintMessageElement) {
            throw new Error("Couldn't find hint message element");
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
        for (let i = 0; i < Quiz.quizElements.length; i++) {
            Quiz.quiz.push(Quiz.add(i));
        }
    }
    static assignSliderEvents() {
        const debouncedSlide = debounce(Quiz.slide, 500);

        Quiz.sliderLeft.addEventListener('click', () => {

            debouncedSlide('left');
        });
        Quiz.sliderLeft.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                debouncedSlide('left');
            }
        });

        Quiz.sliderRight.addEventListener('click', () => {
            debouncedSlide('right');
        });
        Quiz.sliderRight.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                debouncedSlide('right');
            }
        });

        Quiz.quizContainer.addEventListener('touchstart', Quiz.dragStart);
        Quiz.quizContainer.addEventListener('touchend', Quiz.dragEnd);
        Quiz.quizContainer.addEventListener('touchmove', Quiz.dragAction);
        Quiz.quizContainer.addEventListener('transitionend', Quiz.checkIndex);


    }
    static add(index) {
        return new Quiz(index);
    }
    static slide(direction, length) {
        switch (direction) {
            case 'right':
                Quiz.quiz.forEach(guess => {
                    guess.move(guess.previewsIndex(), length);
                });
                break;
            case 'left':
                Quiz.quiz.forEach(guess => {
                    guess.move(guess.nextIndex(), length);
                });
                break;
            default:
                Quiz.quiz.forEach(guess, i => {
                    guess.move(i);
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
    static applyText($text, $element) {
        if ($text !== null) {
            $element.innerHTML = $text;
        }
    }
    static update() {
        Quiz.quiz.sort((a, b) => a.index - b.index)
        let zIndex = Quiz.quiz.length;
        Quiz.numberToShow = Math.floor(Quiz.quizContainer.offsetWidth / Quiz.quiz[1].element.offsetWidth ?? 1);
        for (let index = 0; index < Quiz.quiz.length; index++) {
            Quiz.quiz[index].show((index <= Quiz.numberToShow) && (index !== 0));
            Quiz.quiz[index].allowInput(index === 1);
            Quiz.quiz[index].element.style.right = Quiz.frontPos + (Quiz.gap * index) - Quiz.gap + "%";
            Quiz.quiz[index].outLeft((index > Quiz.numberToShow));
            Quiz.quiz[index].outRight(index === 0);
            Quiz.quiz[index].element.style.zIndex = zIndex;
            Quiz.quiz[index].element.style.backgroundColor = `rgb(${(Quiz.numberToShow - index) * 10},${(Quiz.numberToShow - index) * 10},${(Quiz.numberToShow - index) * 10}`;
            zIndex--;
        };
        Quiz.applyText(Quiz.quiz[1].hintMessage ?? '', Quiz.hintMessageElement);
        Quiz.applyText(Quiz.quiz[1].helpMessage, Quiz.helpMessageElement);
        Quiz.applyText(Quiz.quiz[1].answer, Quiz.quiz[1].element.querySelector('.answer'));
    }
    checkIndex(index) {
        //
    }
    move(nextIndex, length) {
        this.index = nextIndex;
    }
    //todo: extract and change to css selector
    show(show = true) {
        if (show) {
            this.element.style.display = "flex";
            setTimeout(() => {
                this.element.style.opacity = "1";
            }, 100);
        } else {

            this.element.style.opacity = "0";
            setTimeout(() => {
                this.element.style.display = "none";
            }, 500);
        }
    }
    outLeft(isOut = true) {
        if (isOut) {
            this.element.style.right = Quiz.outPosLeft + "%";
        }
    }
    outRight(isOut = true) {
        if (isOut) {
            this.element.style.right = Quiz.outPosRight + "%";
        }
    }

    allowInput(allow = true) {
        if (allow) {

            this.element.inert = false;
            this.element.style.pointerEvents = "auto";
            this.element.style.userSelect = "auto";
        } else {
            this.element.inert = true;
            this.element.style.pointerEvents = "none";
            this.element.style.userSelect = "none";
        }
    }

    nextIndex() {
        return (this.index + 1 >= Quiz.quiz.length) ? 0 : this.index + 1;
    }

    previewsIndex() {
        return (this.index - 1 < 0) ? Quiz.quiz.length - 1 : this.index - 1;
    }
    send(event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch("/attempt", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    return;
                }
                Quiz.quiz[1].hintMessage = data.hint_message ?? null;
                Quiz.applyText(Quiz.quiz[1].hintMessage, Quiz.hintMessageElement);
                if (data.answer !== undefined && data.answer !== null && data.answer !== '') {
                    Quiz.quiz[1].answer = data.answer ?? null;
                    Quiz.quiz[1].successMessage = data.success_message ?? null;
                    Quiz.applyText(Quiz.quiz[1].answer, this.querySelector('.answer'));
                    this.querySelector('.attempt-field').remove();
                    console.log(Quiz.quiz[1].successMessage);
                    Quiz.applyText(Quiz.quiz[1].successMessage, this.querySelector('.success-message'));

                }

            })
            .catch(error => console.error('Une erreur s\'est produite:', error));


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
    static pairTabContents;

    static init() {
        CV.pairTabContents = [
            new CVPart(document.querySelector('.tabs-cv .formations'), document.getElementById('formations')),
            new CVPart(document.querySelector('.tabs-cv .professions'), document.getElementById('professions')),
            new CVPart(document.querySelector('.tabs-cv .projects'), document.getElementById('projects'))
        ];

        CV.pairTabContents.forEach((part, index) => {
            part.tab.setAttribute('role', 'tab');
            part.tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
            part.tab.setAttribute('aria-controls', part.content.id);
            part.tab.setAttribute('aria-selected', 'false');
            part.content.setAttribute('role', 'tabpanel');
            part.content.setAttribute('aria-labelledby', part.tab.id);

            part.tab.addEventListener('click', () => CV.activateTab(part));
            part.tab.addEventListener('keydown', (event) => CV.handleKeyDown(event, index));
        });


        CV.activateTab(CV.pairTabContents[0]);
    }

    static activateTab(cvPart) {
        CV.pairTabContents.forEach(part => {
            const isSelected = (part === cvPart);
            part.tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
            part.tab.tabIndex = isSelected ? 0 : -1;
            part.content.hidden = !isSelected;
            part.tab.classList.toggle('show', isSelected);
            part.content.classList.toggle('show', isSelected);
        });
    }

    static handleKeyDown(event, index) {
        let newIndex = index;
        switch (event.key) {
            case 'ArrowRight':
                newIndex = (index + 1) % CV.pairTabContents.length;
                break;
            case 'ArrowLeft':
                newIndex = (index - 1 + CV.pairTabContents.length) % CV.pairTabContents.length;
                break;
            case 'Home':
                newIndex = 0;
                break;
            case 'End':
                newIndex = CV.pairTabContents.length - 1;
                break;
            default:
                return;
        }
        event.preventDefault();
        CV.pairTabContents[newIndex].tab.focus();
        CV.activateTab(CV.pairTabContents[newIndex]);
    }
}

window.addEventListener("load", () => {
    try {
        CV.init();
        Quiz.init();
        setInterval(Quiz.update, 100);

    }
    catch (error) {
        console.error(error);
    }
});
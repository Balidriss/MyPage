interface CV {
    container: HTMLDivElement;
    pairTabContent: CVPart[];

}

interface CVPart {
    tab: HTMLDivElement;
    content: HTMLDivElement;
}

let elementsCV: CV;
let formations: CVPart;
let professions: CVPart;
let projects: CVPart;


function initCV() {

    formations = {
        content: document.getElementById('formations') as HTMLDivElement,
        tab: document.querySelector('.tabs-cv .formations') as HTMLDivElement
    };
    professions = {
        content: document.getElementById('professions') as HTMLDivElement,
        tab: document.querySelector('.tabs-cv .professions') as HTMLDivElement
    };
    projects = {
        content: document.getElementById('projects') as HTMLDivElement,
        tab: document.querySelector('.tabs-cv .projects') as HTMLDivElement
    };
    ///
    elementsCV = {
        container: document.querySelector('.cv-container') as HTMLDivElement,
        pairTabContent: [formations, professions, projects] as CVPart[]


    };
    elementsCV.pairTabContent.forEach(part => {

        part.tab.addEventListener('click', () => {
            selectCVPart(part);

        });


    });

    if (!elementsCV.container) {
        throw new Error('Element container cv missing.');
    }

    elementsCV.pairTabContent.forEach(part => {
        if (!part.tab || !part.content) {
            throw new Error(`Elements ${part} missing.`);
        }
    });
}

function selectCVPart(cvPart: CVPart) {
    elementsCV.pairTabContent.forEach(part => {
        part.tab.classList.remove('show');
        part.content.classList.remove('show');
    });
    cvPart.content.classList.add('show');
    cvPart.tab.classList.add('show');
}

window.addEventListener("load", () => {
    try {
        initCV();


    } catch (error) {
        console.error(error);
    }
});

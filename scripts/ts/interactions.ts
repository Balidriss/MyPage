
class CVPart {
    tab: HTMLDivElement;
    content: HTMLDivElement;

    constructor(tab: HTMLDivElement, content: HTMLDivElement) {
        this.tab = tab;
        this.content = content;
    }
}

class CV {
    container: HTMLDivElement;
    pairTabContent: CVPart[];

    constructor(container: HTMLDivElement, pairTabContent: CVPart[]) {
        this.container = container;
        this.pairTabContent = pairTabContent;
    }

    init() {
        this.pairTabContent.forEach(part => {
            part.tab.addEventListener('click', () => {
                this.selectCVPart(part);
            });
        });

        if (!this.container) {
            throw new Error('Element container cv missing.');
        }

        this.pairTabContent.forEach(part => {
            if (!part.tab || !part.content) {
                throw new Error(`Elements ${part} missing.`);
            }
        });
    }

    selectCVPart(cvPart: CVPart) {
        this.pairTabContent.forEach(part => {
            part.tab.classList.remove('show');
            part.content.classList.remove('show');
        });
        cvPart.content.classList.add('show');
        cvPart.tab.classList.add('show');
    }
}

window.addEventListener("load", () => {
    try {
        const formations = new CVPart(
            document.querySelector('.tabs-cv .formations') as HTMLDivElement,
            document.getElementById('formations') as HTMLDivElement
        );
        const professions = new CVPart(
            document.querySelector('.tabs-cv .professions') as HTMLDivElement,
            document.getElementById('professions') as HTMLDivElement
        );
        const projects = new CVPart(
            document.querySelector('.tabs-cv .projects') as HTMLDivElement,
            document.getElementById('projects') as HTMLDivElement
        );

        const elementsCV = new CV(
            document.querySelector('.cv-container') as HTMLDivElement,
            [formations, professions, projects]
        );

        elementsCV.init();
    } catch (error) {
        console.error(error);
    }
});

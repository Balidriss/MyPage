"use strict";
class CVPart {
    constructor(tab, content) {
        this.tab = tab;
        this.content = content;
    }
}
class CV {
    constructor(container, pairTabContent) {
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
    selectCVPart(cvPart) {
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
        const formations = new CVPart(document.querySelector('.tabs-cv .formations'), document.getElementById('formations'));
        const professions = new CVPart(document.querySelector('.tabs-cv .professions'), document.getElementById('professions'));
        const projects = new CVPart(document.querySelector('.tabs-cv .projects'), document.getElementById('projects'));
        const elementsCV = new CV(document.querySelector('.cv-container'), [formations, professions, projects]);
        elementsCV.init();
    }
    catch (error) {
        console.error(error);
    }
});

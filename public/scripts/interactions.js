"use strict";
let elementsCV;
let formations;
let professions;
let projects;
function initCV() {
    formations = {
        content: document.getElementById('formations'),
        tab: document.querySelector('.tabs-cv .formations')
    };
    professions = {
        content: document.getElementById('professions'),
        tab: document.querySelector('.tabs-cv .professions')
    };
    projects = {
        content: document.getElementById('projects'),
        tab: document.querySelector('.tabs-cv .projects')
    };
    elementsCV = {
        container: document.querySelector('.cv-container'),
        pairTabContent: [formations, professions, projects]
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
function selectCVPart(cvPart) {
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
    }
    catch (error) {
        console.error(error);
    }
});

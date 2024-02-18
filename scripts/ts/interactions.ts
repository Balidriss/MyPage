interface CV {
    container: HTMLDivElement;

    tabs: {
        formations: HTMLDivElement;
        professions: HTMLDivElement;
        projects: HTMLDivElement;
    }
}

let elements: CV;

function initCV() {
    elements = {
        container: document.querySelector('.cv-container') as HTMLDivElement,
        tabs: {
            formations: document.querySelector('.tabs-cv .formations') as HTMLDivElement,
            professions: document.querySelector('.tabs-cv .professions') as HTMLDivElement,
            projects: document.querySelector('.tabs-cv .projects') as HTMLDivElement,
        }
    };

    if (!elements.container) {
        throw new Error('Element container cv missing.');
    }

    if (!elements.tabs.formations) {
        throw new Error('Element tab formations missing.');
    }

    if (!elements.tabs.professions) {
        throw new Error('Element tab professions missing.');
    }

    if (!elements.tabs.projects) {
        throw new Error('Element tab projects missing.');
    }
}

window.addEventListener("load", () => {
    try {
        initCV();
        // You can now access elements using `elements.container`, `elements.content`, etc.
    } catch (error) {
        console.error(error);
    }
});

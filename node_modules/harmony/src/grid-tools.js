/**
 * Togglers
 */

const html = document.querySelector('html');

const classShowBlocks = 'show-block-children';
const classShowBaselines = 'show-baselines';
const classShowGrid = 'show-grid';
const classShowColumns = 'show-columns';
const classShowContainers = 'show-containers';

const reset = () => {
    html.classList.toggle(classShowContainers, false);
    html.classList.toggle(classShowColumns, false);
    html.classList.toggle(classShowBlocks, false);
    html.classList.toggle(classShowBaselines, false);
    html.classList.toggle(classShowGrid, false);
}

document.addEventListener('keypress', event => {
    if(document.activeElement != document.body) {
        return;
    }
    (event.key === '1') && html.classList.toggle(classShowGrid);
    (event.key === '2') && html.classList.toggle(classShowContainers);
    (event.key === '3') && html.classList.toggle(classShowColumns);
    (event.key === '4') && html.classList.toggle(classShowBlocks);
    (event.key === '5') && html.classList.toggle(classShowBaselines);
    (event.key === '`') && reset();
});



/**
 * Set up grid overlay
 */

const overlay = document.createElement('div');

overlay.classList.add('grid-overlay');

for(var i = 0; i < 24; i++) {
    let column = document.createElement('div');
    column.classList.add('grid-overlay__column');
    column.appendChild(document.createElement('div'));
    overlay.appendChild(column);
}

document.body.appendChild(overlay);

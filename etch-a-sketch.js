const grid = document.querySelector('#grid-container');
const btnNewGrid = document.querySelector('#btn-new-grid');

//Create 16 x 16 grid
let gridSize = 16;
createGrid(gridSize);

grid.addEventListener('mouseover', (event) => {
    if (event.target.id == 'grid-container') return;
    let rgb = [];
    for (let i = 0; i < 3; i++) rgb[i] = Math.trunc((Math.random() * 156) + 100);
    event.target.style.backgroundColor = `rgb(${rgb.toString()})`;
    btnNewGrid.style.backgroundColor = `rgb(${rgb.toString()})`;
})

btnNewGrid.addEventListener('click', () => {
    gridSize = Number(prompt('Number of squares per side:'))
    if (!gridSize) return;
    Array.from(grid.children).forEach(element => element.remove());
    createGrid(gridSize);
});

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        grid.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'square');
            row.appendChild(div)
        }
    }
}
const grid = document.querySelector('#grid-container');

//Create 16 x 16 grid
let gridSize = 16;
createGrid(gridSize);

grid.addEventListener('mouseover', (event) => {
    if (event.target.id == 'grid-container') return;
    event.target.style.backgroundColor = 'aquamarine';
})

document.querySelector('#btn-new-grid').addEventListener('click', () => {
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
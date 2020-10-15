let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
    Description: This function creates the grid on the board
 */
const createBoard = () => {
    const gameSection = document.getElementById('game-section');
    let innerSection = '';
    arr.forEach((i) => {
        innerSection = innerSection + `<div class="game-section-item">${i}</div>`;
    });
    gameSection.innerHTML = innerSection;
};

/*
    Description: This function sorts the array
 */
const sort = () => {
    arr = arr.sort(function (a, b) { return a - b });
    createBoard();
};

/*
    Description: This function shuffles the array
 */
const shuffle = () => {
    let n = arr.length;
    const tempArr = [];
    while (n) {
        const randomIndex = Math.floor(Math.random() * n);
        tempArr.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
        n--;
    }
    arr = [...tempArr];
    createBoard();
};

window.onload = () => {
    createBoard();

    // Creating Event Listeners for buttons
    document.getElementById('shuffle-btn').addEventListener('click', shuffle);
    document.getElementById('sort-btn').addEventListener('click', sort);
};
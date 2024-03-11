const position = ['top left','top center','top right','center left','center center','center right','bottom left','bottom center',]
let puzzle = [ 0,1,2,3,4,5,6,7,8]


const restart = () => {
    let sequence = [0,1,2,3,4,5,6,7,8];
    puzzle = [];
    for (let i=0;i<9;i++) {
        let current = sequence.splice(Math.random()*sequence.length, 1);
        puzzle.push(current[0]);
    }
}


const shift = (i) => {
    if (puzzle[i-1] == 8) {
        puzzle[i-1] = puzzle[i];
        puzzle[i] = 8;
    } else if (puzzle[i+1] == 8) {
        puzzle[i+1] = puzzle[i];
        puzzle[i] = 8;
    } else if (puzzle[i+3] == 8) {
        puzzle[i+3]=puzzle[i];
        puzzle[i] =8;
    }else if (puzzle[i-3] == 8) {
        puzzle[i-3]=puzzle[i];
        puzzle[i] =8;
    }
    display();
}

const checkWin = () => {
    for (let i=0;i<9;i++) {
        if (puzzle[i]!=i) {
            return false;
        }
    }
    return true;
}

const display = () => {
    let gridDiv = document.querySelector('.puzzle').cloneNode(false);
    for (let i=0;i<9;i++) {
        const cell = document.createElement('div')
        cell.classList.add('.cell');
        if (puzzle[i]!=8) {
            cell.style.backgroundPosition = position[puzzle[i]];
            cell.style.backgroundImage = 'url("https://mikepultz.com/wp-content/uploads/2012/03/cat_600.jpg")';
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', ()=>shift(i));
        }
        gridDiv.appendChild(cell);
    }
    document.querySelector('.puzzle').replaceWith(gridDiv);
    setTimeout(() => {
        if (checkWin()) {
            alert("Congratulations! You solved the puzzle! Click on New Game to continue playing !!");
        }
    }, 10);
}

restart();
display();


document.querySelector('.new-game').addEventListener('click', ()=>{
    restart();
    display();
})
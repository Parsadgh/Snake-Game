const board = document.getElementById('board');
let snake = []
let score = 0
let speed = 130
const idx = (x, y) => y * 20 + x

// create grid
const cells = [];
for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 20; x++) {
        const d = document.createElement('div');
        d.className = 'cell';
        d.dataset.x = x;
        d.dataset.y = y;
        board.appendChild(d);
        cells.push(d);
    }
}

// object
snake = [{
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20),
}]

// place head
cells[idx(snake[0].x, snake[0].y)].classList.add('head')

// apple
let appleX
let appleY
let apple
function spawnApple() {
    // delete
    if (apple) apple.classList.remove('apple')

    // ro head nayofte
    do {
        // random apple
        appleX = Math.floor(Math.random() * 20)
        appleY = Math.floor(Math.random() * 20)
    } while (snake.some(val => val.x == appleX && val.y == val.y))


    // place apple
    apple = cells[idx(appleX, appleY)]
    apple.classList.add('apple')
}
spawnApple()

// first direction (right)
let dirX = -1
let dirY = 0

let nextDirX = dirX
let nextDirY = dirY

// tabe asli ke dare hey ejra mishe
setInterval(() => {
    // bala paein chap rast to khodesh nashe
    if ((nextDirX != -dirX || nextDirY != -dirY)) {
        dirX = nextDirX
        dirY = nextDirY
    }

    // remove kardan class head va dadan snake behesh ta head ro bebarim jolo dobare behesh head bedim

    // current head
    const curHead = snake[0]
    // convert to body
    const curHeadCell = cells[idx(curHead.x, curHead.y)]

    curHeadCell.classList.remove('head');
    curHeadCell.classList.add('snake');

    const newHead = {
        x: (curHead.x + dirX + 20) % 20,
        y: (curHead.y + dirY + 20) % 20
    }

    // barkhord ba badan
    if (snake.some(val => val.x == newHead.x && val.y == newHead.y)) {
        // popup
        const popup = document.getElementById('popup')
        const restart = document.getElementById('restart')
        const box = document.querySelector('.box')

        popup.classList.remove('hide')

        popup.addEventListener('click', () => {
            popup.classList.add('hide')
            location.reload()
        })

        restart.addEventListener('click', () => {
            popup.classList.add('hide')
            location.reload()
        })

        box.addEventListener('click', (e) => {
            e.stopPropagation()
        })

        return
    }

    snake.unshift(newHead)
    cells[idx(newHead.x, newHead.y)].classList.add('head');

    // when snake eat apple
    if (newHead.x == appleX && newHead.y == appleY) {
        // inja dighe nemishe
        spawnApple()
        score++
        console.log(score);

        document.getElementById('bala').innerHTML = 'Score: ' + score
    } else {
        // halat adi hazf mishe poshtesh
        const tail = snake.pop()
        cells[idx(tail.x, tail.y)].classList.remove('snake')
    }

}, speed)


// W A S D
document.addEventListener('keydown', (e) => {
    if (e.key == 'a') { nextDirX = 1; nextDirY = 0; }
    if (e.key == 'd') { nextDirX = -1; nextDirY = 0; }
    if (e.key == 'w') { nextDirX = 0; nextDirY = -1; }
    if (e.key == 's') { nextDirX = 0; nextDirY = 1; }
})

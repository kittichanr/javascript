const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')

function jump() {
    if (dino.classList !== 'jump') {
        dino.classList.add('jump')

        setTimeout(() => {
            dino.classList.remove('jump')
        }, 300);
    }
}

let isAlive = setInterval(() => {
    //get current dino position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    //get current cactus position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game Over!')
    }
}, 10);

document.addEventListener('keydown', event => {
    jump()
})
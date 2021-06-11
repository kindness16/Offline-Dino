const dino = document.querySelector('.dino')
const kaktus = document.querySelector('.kaktus')

document.addEventListener('keydown', function (e) {
    jump()
})

function jump() {
    if (dino.classList != 'jumping') {
        dino.classList.add('jumping')
    }
    setTimeout(function () {
        dino.classList.remove('jumping')
    }, 200)
}

let alive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let kaktusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue('left'))
    if (kaktusLeft < 40 && kaktusLeft > 0 && dinoTop >= 40){
        alert('GAME OVER')
    }
}, 10);
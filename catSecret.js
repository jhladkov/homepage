
let counter = 0

const indicator = document.querySelector('.secret__indicator')
const cats = document.querySelectorAll('.cat')
const wrapper = document.querySelector('.secret__wrapper')

cats.forEach(cat => cat.addEventListener('click', (e) => {
    e.target.style.display = 'none'
    indicator.innerHTML = ++counter
    if (counter === 3) {
        wrapper.style.display = 'block'
        wrapper.style.textAlign = 'center'
        wrapper.innerHTML = 'You did it :0'
        window.open('https://flappy-bulka.vercel.app/')
    }
}))
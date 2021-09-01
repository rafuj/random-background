let body = document.querySelector('body')
let btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    body.style.backgroundColor = bgColor()
})

function bgColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`
}
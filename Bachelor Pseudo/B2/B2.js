const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

function andiNext(){
    claire.classList.add('hidden')
    sharleen.classList.add('hidden')
    andi.classList.toggle('hidden') //toggle is like an on/off switch, will do the opposite when click
}
document.querySelector('#andiNext').addEventListener('click', andiNext)


function claireNext(){
    claire.classList.toggle('hidden')
    sharleen.classList.add('hidden')
    andi.classList.add('hidden')
}
document.querySelector('#claireNext').addEventListener('click', claireNext)

function sharleenNext(){
    claire.classList.add('hidden')
    sharleen.classList.toggle('hidden')
    andi.classList.add('hidden')
}
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)
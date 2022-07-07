//if else practice
let age = Number(document.querySelector('input').value)
    if (age < 16){
        console.log('can not drive')
    }else if(age < 18){
        console.log('can not marry')
    }else if(age < 21){
        console.log('can not drink')
    }else{
        console.log('You are free')
    }
//and then on click of the h1
//take the value from the input from if else result
//place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', checkAge)
const p = document.querySelector('p')
function checkAge(){
    let age = Number(document.querySelector('input').value)
    if (age < 16){
        p.innerText= 'can not drive'
    }else if(age < 18){
        p.innerText= 'can not marry'
    }else if(age < 21){
        p.innerText= 'can not drink'
    }else{
        p.innerText= 'You are free'
    }
}
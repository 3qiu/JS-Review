//convert Celsius to F
//get the initial vaule
document.querySelector('#checktemp').addEventListener('click', cToF) 

//need the value in C
function cToF(){
    let temp= Number(document.querySelector('#tempinput').value)
//convert
    temp = temp * 1.8 + 32
//show the value
    document.querySelector('h2').innerText = temp
}
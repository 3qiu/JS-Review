//VARIABLE
//create a variable and console log the value
let value = 5
console.log(value)

//create a variable, add 10 to it, and alert the value
let num = 4
num = num + 10  // or num += 10
alert(num)

//FUNCTIONS
//that subtracts 4 numbers and alerts the difference
function subFourNum(n1, n2, n3, n4) { 
    difference = n1 - n2 - n3 - n4
    alert("difference should be 4 " + difference)
}
subFourNum(10,2,2,2)

//or 
//function subFourNum(n1, n2, n3, n4) { 
//   alert (n1 - n2 - n3 - n4)


//that divides one number by another and returns the reminder
function divRem(dn1, dn2){
    div = dn1 % dn2
    console.log ("the reminder should be 1 " + div)
}
divRem(5,2)

//or
//function divRem(dn1, dn2){
//    return dn1 % dn2

//CONDITIONAL
//function that adds two numbers and if the sum is greater than 50, alert Jumanji
function sumCompare(sn1, sn2) {
    let sum = sn1 + sn2
    if (sum > 50) {
        alert ("Jumanji")
    }else {

    }
}
sumCompare(50, 60)

//else can be rescaped

//function that nultiplys three number and if the product is divisible by 3, alert ZEBRA
function multidiv(mn1, mn2, mn3) {
    let product = mn1 * mn2 * mn3
    if (product % 3 === 0) {
        alert ("ZEBRA")
    } 
}
multidiv (1, 3 ,3)

//keep in mind that use === instead of =

//LOOPS
//function that takes in a word and a number. console log the word x times where x was the number passed in
function loopX(word, num){
    for (let i = 0; i < num; i++) {
        console.log (word)
    }
}
loopX(" repeat ", 6)

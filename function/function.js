function yell(word, otherWord){
    alert(word)
    alert(otherWord)
}

yell("Hi","bye")

//function that subtracts two numbers and alerts the difference
function subTwoAndAlert(num1,num2) {
    let difference = num1 - num2
    alert("[subTwoAndAlert] the difference is =1" + difference)

}
subTwoAndAlert(3, 2)

//function that divides three numbers and console logs the quotient
function divideThreeAndLog(n1,n2,n3){
    console.log("[divideThreeAndLog=1]" + n1/n2/n3)    
}
divideThreeAndLog(12,3,4)

//another way
function divideThreeAndAlert(n1,n2,n3){
    let quotient = n1/n2/n3
    alert("divideThreeAndAlert=2" + quotient)
}
divideThreeAndAlert(18,3,3) 

//function that multiplys three number and return the product
function multiThreeAndReturn(a, b, c){
    let product = a * b * c
    return product 
    // or can be in one line: return (a * b * c )  
}
let returnedVal= multiThreeAndReturn(2,3,5)
console.log("[multiThreeAndReturn=30]" + returnedVal)

//another way, multiThree will get the direct result, but hardder to check the variable error
//let multiThree = (a,b,c) => a*b*c

//function that takes in three numbers. add the first two numbers and 
//return the remainder of dividing the sum of the first two numbers by the third number
function sumAndDivide(n1,n2,n3){
    return (n1 + n2) % n3
}
console.log("[sumAndDivide=2]" + sumAndDivide(3,4,5)) 

//another way, const means set the function as the constant, not reassignable/change
//const sumAndDivide = (a,b,c)=>(a+b)%c  

//function that takes in 4 numbers. multiply the first two numbers. if the product is
//greater than 100 add the sum of the last two # and console log the value.
//if product is less than 100,subtract the difference of the last two numbers and console log the value
//if product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth #.

function doMath(n1,n2,n3,n4){
    let product = n1 * n2
    if (product > 100){
        console.log(product + n3 + n4)
    }else if(product < 100){
        console.log("[doMath=15]"+ (product - n3 - n4))
    }else{
        alert((n1*n2*n3) % n4)
    }
}
doMath(5,4,3,2)

//create a function that takes in an array of numbers. return a new array containing every even number from the original array
//try not to use mao or filter
function onlyEvensFinder(arr){
    let onlyEvens = []
    arr.forEach ( num => {
        if ( num % 2 === 0){
            onlyEvens.push(num)
        }
        })
        return onlyEvens
}
console.log(onlyEvensFinder([1,2,3,4,5,6]))


//another solution using map, it will return all 6 elements:
function EvensMap(arr){
    return arr.map( number => {
        if( number % 2 === 0){
            return number
        }
        else{
            return "odd"
        }
    }
     )
}
console.log(EvensMap([13,35,33,42,52,66]))



//another way
function EvensFilter(arr){
    return arr.filter( n => n % 2 === 0 )
}
console.log(EvensFilter([6,7,8,9,10]))


//equivalent
function filterFunction(n){
    if( n % 2 === 0){
        return true;
    } else {
        return false;
    }
}
filterFunction([1,2,3,4,5,6])

function EvensFilter2(arr){
    let result = arr.filter(filterFunction);
}
console.log(result)
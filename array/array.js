//create a function that takes in an array. 
//if the first number is less than the last number, alert 'Hi.'
//if the first number is greater than the last number, alert "bye"
//if they are equal, alert "we close in an hour"


//solution:
function compareArray(arr) {   
    if (arr[0] < arr[ arr.length - 1]) {
        alert("Hi.")
    }else if (arr[0] > arr[ arr.length - 1]) {
        alert("Bye.")
    }else {
        alert("we close in an hour.")
    }
}
compareArray([1,2,3,4,5])
compareArray([5,6,7,8,5])



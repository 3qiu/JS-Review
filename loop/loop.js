for  (let i = 1; i < 5; i++) {
	console.log(i)
}
// the result is i= 1 which is initial expression,2,3,4
//i++ means i+=1 or i=i+1
//For all # except 1, need to be i+=2  


//function that has a loop that printes "21" 21 times to the console and then call that function
function sirSavage(){
    for (let i = 1; i <= 21; i++){
        console.log('21')
    }
}
sirSavage()

//make it print "21" 21 times to the dom
function sirSavage1(){ //parameter is blank
    for (let i = 1; i <= 21; i++){
        document.querySelector('#savageSays').innerText += ' 21 '
    }
}
sirSavage1()

//while loop
let count = 0

while(count < 5){
    console. log(count)
    count++
}

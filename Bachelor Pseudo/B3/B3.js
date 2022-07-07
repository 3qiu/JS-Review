const contestants = document.querySelectorAll('.contestant') //will need dot for .contestant to show the class, otherwise querySelectorAll will show everything
console.log("constestants=" + contestants);
//querySelectorAll will return a node list, is like array, will give every thing that class has
Array.from(contestants).forEach(element => element.addEventListener('click', onClick))
//previous two lines will grab everything that had the class of contestant, and giving them all the same event listener
   
function onClick(event){
    console.log("clicked:" + event.target);
    if(event.target.classList.contains('rose')) {  //will not need dot for rose bs the classList shows the class
        document.querySelector('#nikki').classList.toggle('hidden')
    }else {
        alert("Wrong!");
    }
}
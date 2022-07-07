
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' 
fetch(url)
	.then(res => res.json()) //parse response as JSON
	.then(data => {
        console.log(data.drinks[0].strDrinkThumb)
        document.querySelector('img.imgDrink').src = data.drinks[0].strDrinkThumb
})
.catch(err => {
console.log(`error ${err}`)
});

//get a dog pic from the dog.eco api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")
	.then(res => res.json()) //parse response as JSON
	.then(data => {
        console.log(data.message)
        document.querySelector("img.imgDog").src = data.message
})
.catch(err => {
console.log(`error ${err}`)
});

//error: TypeError: Cannot set properties of null (setting 'src')
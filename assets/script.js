const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const droite = document.querySelector(".arrow_right");
const gauche = document.querySelector(".arrow_left");
const nbrSlide = slides.length

let i = 0;

function next() {
	for (let i = 0; slides[i] < slides.length; i++ ) {
		console.log(i)
	}
}



droite.addEventListener("click", next)
gauche.addEventListener("click", next)
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

const imgBanner = document.querySelector(".banner-img") 
const blaBla = document.querySelector('#banner > p')

let count = 0;
	 
	function recup(){
		imgBanner.src = `./assets/images/slideshow/${slides[count].image}`
		blaBla.innerHTML = `${slides[count].tagLine}`
		console.log(blaBla.innerHTML)
	}

	function nvxDot(){
		const dot = document.querySelector(".dots")
		let crea = document.createElement('div')
		dot.appendChild(crea)		
	}
	nvxDot()

	function sndDot(){

		console.log(x)		
	} 
	sndDot()

	

	function next(){ 
	//count = count + number; /*(ou count += number)*/
	if(count < nbrSlide -1){
		count++;	
	} else {
		count = 0;
	}
}

function before(){ 
	if(count === 0 ){
		count = nbrSlide -1;
	} else {
		count--;
	}
}

droite.addEventListener("click", (e) => {
	next(), recup(), sndDot
	console.log(count)
})
gauche.addEventListener("click", (e) => {
	before(), recup()
	console.log(count)
})
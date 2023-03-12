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
	}

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

function nvxDot(){
	const dot = document.querySelector(".dots")
	let crea = document.createElement('div')
	dot.appendChild(crea)
	crea.classList.add("dot")		
}
nvxDot()

function sndDot(){
	Slides.forEach(element => {
		(i === count; i < nbrSlide -1; nvxDot() )
	});
	console.log(i)
}

sndDot()

droite.addEventListener("click", (e) => {
	next(), recup()
})

gauche.addEventListener("click", (e) => {
	before(), recup()
})
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

droite.addEventListener("click", (e) => {
	next(), recup(), add(), removeR()
})

gauche.addEventListener("click", (e) => {
	before(), recup(), add(), removeL()
})
	 
	function recup(){
		imgBanner.src = `./assets/images/slideshow/${slides[count].image}`
		blaBla.innerHTML = `${slides[count].tagLine}`
	}

	function next(){
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

function sndDot(){
	slides.forEach(count => nvxDot())
}
sndDot()

function add(){
	const bullet = document.querySelectorAll(".dot");
	let i = count;	
	bullet[i].classList.add("dot_selected");
}

function removeR(){
	const bullet = document.querySelectorAll(".dot");
	let i = count -1;
	if(count === 0){
		i = bullet.length -1;
	} else {
		i = count -1
	}
	bullet[i].classList.remove("dot_selected");
}

function removeL(){
	const bullet = document.querySelectorAll(".dot");
	let i = count +1;
	if(count === 3){
		i = 0;
	} else {
		i = count +1
	}
	bullet[i].classList.remove("dot_selected");
	console.log(i)
}

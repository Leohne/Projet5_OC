const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const right = document.querySelector(".arrow_right");
const left = document.querySelector(".arrow_left");

const nbrSlide = slides.length

const imgBanner = document.querySelector(".banner-img")
const txtBanner = document.querySelector('#banner > p')

let count = 0;

right.addEventListener("click", (e) => {
	next(), recup(), removeSelected(), add()
})

left.addEventListener("click", (e) => {
	before(), recup(), removeSelected(), add()
})

function recup() {
	imgBanner.src = `./assets/images/slideshow/${slides[count].image}`
	txtBanner.innerHTML = `${slides[count].tagLine}`
}

function next() {
	if (count < nbrSlide - 1) {
		count++;
	} else {
		count = 0;
	}
}

function before() {
	if (count === 0) {
		count = nbrSlide - 1;
	} else {
		count--;
	}
}

function newDot() {
	const dot = document.querySelector(".dots")
	const fragment = document.createDocumentFragment()
	for (let i = 0; i < slides.length; i++) {
		let crea = document.createElement('div')
		fragment.appendChild(crea)
		crea.classList.add("dot")
		if (i == 0) {
			crea.classList.add("dot_selected")
		}
	}
	dot.append(fragment)
}
newDot()

function add() {
	const bullet = document.querySelectorAll(".dot");
	bullet[count].classList.add("dot_selected");
}

function removeSelected() {
	const bullet = document.querySelector(".dot_selected");
	bullet.classList.remove("dot_selected");
}

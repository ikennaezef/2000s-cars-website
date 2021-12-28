const singleContainer = document.querySelector('#single-body .container');
const pageTitle = document.querySelector('#single-title')
const mainGalleryImg = document.querySelector('.main-img');
const smallGalleryImgs = document.querySelector('.small-imgs');
const carName = document.querySelector('.details .car-name');
const about = document.querySelector('.car-about');
const hpSpec = document.querySelector('.specs #hp');
const heightSpec = document.querySelector('.specs #height');
const speedSpec = document.querySelector('.specs #speed');
const $060Spec = document.querySelector('.specs #sixty');



let storedCar = sessionStorage.getItem('waitingCar');
let parsedCar = JSON.parse(storedCar);
let opacity = 0.7;

// Load the stored car object from local storage
loadCar(parsedCar);
function loadCar(car) {
	// Page title
	pageTitle.innerText = car.name; 

	// Gallery sources
	mainGalleryImg.src = `img/${car.images[0]}`;
	car.images.forEach(img=> {
		let smallImg = document.createElement('img');
		smallImg.src = `img/${img}`;
		smallImg.className = 'img-small';
		smallGalleryImgs.appendChild(smallImg);
	});

	const smallImgs = document.querySelectorAll('.img-small');

	// Car Details
	carName.innerText = car.name;
	about.innerText = car.about;
	hpSpec.innerText = car.horsePower;
	heightSpec.innerText = car.height;
	speedSpec.innerText = car.maxSpeed;
	$060Spec.innerText = car.sixty;


	// Image Gallery
	smallImgs[0].style.opacity = opacity;
	smallImgs.forEach(img=> {
		img.addEventListener('click', change);
	})

	function change() {
		smallImgs.forEach(img=> img.style.opacity = 1);

		mainGalleryImg.src = this.src;
		mainGalleryImg.classList.add('faded');
		setTimeout(()=> mainGalleryImg.classList.remove('faded'), 500);

		this.style.opacity = opacity;
	}
}
// HOME PAGE VARIABLES

const car1 = document.getElementById('car-card-1');
const car2 = document.getElementById('car-card-2');
const car3 = document.getElementById('car-card-3');
const car4 = document.getElementById('car-card-4');
const car5 = document.getElementById('car-card-5');
const car6 = document.getElementById('car-card-6');
const car7 = document.getElementById('car-card-7');
const buttons = document.querySelectorAll('.btn');
 

// CAR PROPERTIES

const car1Array = {
	about: 'The emphasis on this Karmann creation is a "dual top" retractable roof. The new canopy system consists of a softop portion attached to a fixed rear glass dome. This setup provides for a more compact folding roof that yields more trunk space.',
	name: '2001 Karmann Trandformer',
	images: ['2001 karmann trandformer.jpg', '2001 karmann trandformercf.jpg', '2001 karmann trandformerf.jpg'],
	horsePower: '150hp',
	height: '120cm',
	maxSpeed: '180mph',
	sixty: '4.1s'
};

const car2Array = {
	about: 'The FXS is a sign that Toyota is itching to make a serious roadster. In the design process, Toyota kept the center of gravity as low as possible with a perfect front to rear weight distribution.',
	name: '2001 Toyota FXS',
	images: ['2001 Toyota fxs-1.jpg', '2001 Toyota fxs-2.jpg', '2001 Toyota fxs-6.jpg'],
	horsePower: '161hp',
	height: '118cm',
	maxSpeed: '182mph',
	sixty: '4s'
};

const car3Array = {
	about: 'Designed to be a small and affordable truck loaded with character, the M80 features a design that stands out compared to pickups of its time. Design elements include a satin-stainless steel look signature crosshair grille and headlamp surrounds, classic round lamps to give that heritage look and bumpers that give the M80 a rugged look.',
	name: '2002 Dodge M80',
	images: ['2002_dodge_m80-1.jpg', '2002_dodge_m80-5.jpg'],
	horsePower: '178hp',
	height: '184cm',
	maxSpeed: '176mph',
	sixty: '4.3s'
};

const car4Array = {
	about: 'As part of the Bentley Series Two Arnage family, the Bentley Arnage T is the result of a three year project to re-engineer the outstandingly successful Arnage saloon from bumper to bumper. In this process not a single significant area of its design has been left untouched.',
	name: '2002 Bentley Arnage T',
	images: ['2002 Bentley Arnage t-1.jpg', '2002 Bentley Arnage t-2.jpg'],
	horsePower: '136hp',
	height: '140cm',
	maxSpeed: '160mph',
	sixty: '4.6s'
};

const car5Array = {
	about: 'Main changes from previous generations of this model include a strong exterior design which was created along with an improved aerodynamic performance by adopting the newly designed projector-type headlights, the front bumper, the rear bumper skirt, door garnish and the rear combination lamps.',
	name: '2002 Honda Dualnote',
	images: ['2002 Honda Dualnote back.jpg', '2002 Honda Dualnote plan.jpg', '2002 Honda Dualnote.jpg'],
	horsePower: '152hp',
	height: '146cm',
	maxSpeed: '173mph',
	sixty: '4.4s'
};

const car6Array = {
	about: 'The long and flat body of the Coupe, with the restrained styling of the rear spoiler which, automatically extends as of 120km/hr, transports the timeless elegance of Volkswagen design to the dynamic sector of the ultimate sports car.',
	name: '2002 Volkswagen W12',
	images: ['2002_Volkswagen w12 front.jpg', '2002_Volkswagen w21 back.jpg'],
	horsePower: '161hp',
	height: '118cm',
	maxSpeed: '182mph',
	sixty: '4s'
};

const car7Array = {
	about: 'Named after the Portuguese navigator Magellan, this concept car has the V8 engine, with a great power output. It has four-wheel drive and pneumatic suspension with active hydraulic shock absorption.',
	name: '2002 VW Magellan',
	images: ['2002_vw_magellan-1.jpg', '2002_vw_magellan-2.jpg', '2002_vw_magellan-3.jpg'],
	horsePower: '164hp',
	height: '175cm',
	maxSpeed: '188mph',
	sixty: '4.3s'
};

// Loading Data for the picked car

function loadSinglePage(car) {
	if (sessionStorage.getItem('waitingCar')) {
		sessionStorage.removeItem('waitingCar');
	}

	let stringifiedCar = JSON.stringify(car);
	sessionStorage.setItem('waitingCar', stringifiedCar);

}

// Event listener for when car link is clicked

buttons.forEach((button, index)=> {
	button.addEventListener('click', ()=> {
		let carNumber = index+1;
		let carToLoad;
		switch(carNumber) {
			case 1:
				carToLoad = car1Array;
				break;
			case 2:
				carToLoad = car2Array;
				break;
			case 3:
				carToLoad = car3Array;
				break;
			case 4:
				carToLoad = car4Array;
				break;
			case 5:
				carToLoad = car5Array;
				break;
			case 6:
				carToLoad = car6Array;
				break;
			case 7:
				carToLoad = car7Array;
				break;
		}

		loadSinglePage(carToLoad);
	});
});





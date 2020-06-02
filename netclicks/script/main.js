const 	leftMenu = document.querySelector('.left-menu'),
		hamburger = document.querySelector('.hamburger'),
		modal = document.querySelector('.modal'),
		tvShowsList = document.querySelector('.tv-shows__list'),
		IMG_path = "https://image.tmdb.org/t/p/w185_and_h278_bestv2",
		API_KEY = '53c5321b5e4e843cdb0be0ae34ff8067';

const DBService = class {
	getData = async (url) => {
		const res = await fetch(url, {
			referrerPolicy: "unsafe-url"
		});
		if (res.ok) {
			return (res.json())
		} else{
			throw new Error(`Не удалось получить данные из ${url}`)
		}
	}
	getTestData = () => {
		return this.getData('test.json')
	}
}


const renderCard = response => {
	tvShowsList.textContent = '';
	response.results.forEach(item => {
		
		const { 
			backdrop_path: backdrop, 
			name: title, 
			poster_path: poster, 
			vote_average: vote
		} = item;

		const posterIMG = poster ? IMG_path + poster : 'img/no-poster.jpg';
		const backdropIMG = backdrop ? IMG_path + backdrop : 'img/no-poster.jpg';
		const voteElem = vote ? `<span class="tv-card__vote">${vote}</span>` : '';

		const card = document.createElement('li');
		card.className = 'tv-shows__item';
		card.innerHTML = `	
			<a href="#" class="tv-card">
	        	${voteElem}
	        	<img class="tv-card__img"
	             src="${posterIMG}"
	             data-backdrop="${backdropIMG}"
	             alt="${title}">
	        	<h4 class="tv-card__head">${title}</h4>
			</a>
		`;
        tvShowsList.append(card);
		
	});
}
new DBService().getTestData().then(renderCard);





hamburger.addEventListener('click', () => {
	leftMenu.classList.toggle('openMenu');
	hamburger.classList.toggle('open');
});
leftMenu.addEventListener('click', event => {
	const target = event.target;
	const dropdown = target.closest('.dropdown');
	if (dropdown) {
		dropdown.classList.toggle('active');
	}
});
document.addEventListener('click', event =>{
	if (!event.target.closest('.left-menu')) {
		leftMenu.classList.remove('openMenu');
		hamburger.classList.remove('open');
	}
});
tvShowsList.addEventListener('click', event => {
	const target = event.target;
	const card = target.closest('.tv-card');
	if (card) {
		document.body.style.overflow = 'hidden';
		modal.classList.remove('hide');
	}
});
modal.addEventListener('click', event => {
	if(event.target.closest('.cross') || event.target.classList.contains('modal')){
		document.body.style.overflow = '';
		modal.classList.add('hide');
	}
});

// смена картинки
const changeImage = event => {
	const card = event.target.closest('.tv-shows__item');
	if (card){
		const img = card.querySelector('img');
		if (img.dataset.backdrop) {
			[img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src];
		}
	}
};
tvShowsList.addEventListener('mouseover', changeImage);
tvShowsList.addEventListener('mouseout', changeImage);


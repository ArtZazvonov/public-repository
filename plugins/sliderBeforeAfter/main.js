function beforeSlider() {
	document.querySelector('.before-slider').addEventListener('mousemove', (event) => {
		let x = event.offsetX;
		document.querySelector('.slide-after').style.width = x + 'px';
	});
	document.querySelector('.before-slider').addEventListener('mouseout', (event) => {
		var width = document.querySelector('.before-slider').offsetWidth;
		let x = event.offsetX;
		if (width/2 < x) {
			document.querySelector('.slide-after').style.width = 100 + '%';
		} else{
			document.querySelector('.slide-after').style.width = 0 + 'px';
		}		
	});
}
beforeSlider();
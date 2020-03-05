function bfslider(){
	let mouseX, mouseY, slideConteainer, sliderHr, w, h;
	var img1 = document.querySelector(".img-comp-img");
	var img2 = document.querySelector(".img-comp-overlay");
	var offset = 10;
	setInterval(function(){offset += 10; if(offset > 1000)offset = 0;img2.style.clipPath = "polygon(0px 0px, 0px 500px, "+offset+"px 500px, "+(offset+250)+"px 0px)";},20);
}
bfslider();

// function initComparisons() {
// 	var slider, img, clicked = 0, w, h;
// 	img = document.querySelector(".img-comp-overlay");
// 	/*получить ширину и высоту элемента img*/
// 	w = img.offsetWidth;
// 	h = img.offsetHeight;
// 	console.log(w);
// 	console.log(h);
// 	/*становите ширину элемента img на 50%:*/
// 	img.style.width = (w / 2) + "px";
// 	/*создаём ползунок*/
// 	slider = document.createElement("DIV");
// 	slider.setAttribute("class", "img-comp-slider");
// 	/*вставить слайдер*/
// 	img.parentElement.insertBefore(slider, img);
// 	/*расположите ползунок посередине:*/
// 	slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
// 	slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
// 	/*выполнение функции при нажатии кнопки мыши:*/
// 	slider.addEventListener("mousedown", slideReady);
// 	/*и еще одна функция, когда кнопка мыши отпущена:*/
// 	window.addEventListener("mouseup", slideFinish);
// 	/*или сенсорный (для сенсорных экранов):*/
// 	slider.addEventListener("touchstart", slideReady);
// 	/*и выпустили (для сенсорных экранов):*/
// 	window.addEventListener("touchstop", slideFinish);
// 	function slideReady(e) {
// 		/*предотвратите любые другие действия, которые могут произойти при перемещении по изображению:*/
// 		e.preventDefault();
// 		/*теперь ползунок нажат и готов к перемещению:*/
// 		clicked = 1;
// 		/*выполнение функции при перемещении ползунка:*/
// 		window.addEventListener("mousemove", slideMove);
// 		window.addEventListener("touchmove", slideMove);
// 	}
// 	function slideFinish() {
// 	  	/*ползунок больше не нажимается:*/
// 		clicked = 0;
// 	}
// 	function slideMove(e) {
// 		var pos;
// 		/*если ползунок больше не нажимается, выйдите из этой функции:*/
// 		if (clicked == 0) return false;
// 		/*получить позицию курсора x:*/
// 		pos = getCursorPos(e)
// 		не допускайте, чтобы ползунок располагался вне изображения.:
// 		if (pos < 0) pos = 0;
// 		if (pos > w) pos = w;
// 		/*выполните функцию, которая изменит размер наложенного изображения в соответствии с курсором:*/
// 		slide(pos);
// 		poligon(pos);
// 	}
// 	function getCursorPos(e) {
// 	  var a, x = 0, y = 0;
// 	  e = e || window.event;
// 	  /*получить x позиции изображения:*/
// 	  a = img.getBoundingClientRect();
// 	  /*вычислите координату курсора x относительно изображения:*/
// 	  x = e.pageX - a.left;
// 	  y = e.pageY - a.top;
// 	  /*рассмотрим любую прокрутку страницы:*/
// 	  x = x - window.pageXOffset;
// 	  y = y - window.pageYOffset;
// 	  console.log(x);
// 	  console.log(y);
// 	  return x;
// 	}
// 	function slide(x) {
// 		/*изменение размера изображения:*/
// 		img.style.width = x + "px";		
// 		/*расположите ползунок:*/
// 		slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
// 	}
// 	function poligon(x){
// 		let container, overlay;
// 		/*Изменение полигона*/
// 		container = document.querySelector(".img-comp-container"); 
// 		overlay = document.querySelector(".img-comp-overlay");
// 		// console.log(w / 2 + x);
// 		// console.log(h / 2 + x);
// 		// console.log(x);
// 		/*Просчитываем точку 1*/
// 		overlay.style.clipPath = 'polygon(0 0, 0 '+ h +'%, '+ x * 2 +'px 100%, 100% 100%, 0 100%)';
// 		// console.log(container.offsetWidth);
// 		// if (x < container.offsetWidth / 2) {
// 		// 	// console.log('Левая сторона' + 'polygon(0 0, 0 '+ x +'%, '+ x +'% 100%, 100% 100%, 0 100%)');
// 		// 	overlay.style.clipPath = 'polygon(0 0, 0 '+ x +'px, '+ x +'px 100%, 100% 100%, 0 100%)';
// 		// }else{
// 		// 	// console.log('Правая сторона' + 'polygon(0 0, '+ x +'% 0, 100% '+ x +'%, 100% 100%, 0 100%)');
// 		// 	overlay.style.clipPath = 'polygon(0 0, '+ x +'px 0, 100% '+ x +'px, 100% 100%, 0 100%)';
// 		// }
// 	}
// }
// initComparisons();
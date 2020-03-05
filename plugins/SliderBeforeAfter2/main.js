function initComparisons() {
  	var x, i; 
  	x = document.getElementsByClassName("img-comp-overlay"); /* найти все элементы с классом" overlay*/
	for (i = 0; i < x.length; i++) {
		/*один раз для каждого элемента "overlay":передайте элемент "overlay" в качестве параметра при выполнении функции сравнения изображений:*/
		compareImages(x[i]);
	}
	function compareImages(img) {
    	var slider, img, clicked = 0, w, h;
	    /*получить ширину и высоту элемента img*/
	    w = img.offsetWidth;
	    h = img.offsetHeight;
	    console.log(w);
	    console.log(h);
	    /*становите ширину элемента img на 50%:*/
	    img.style.width = (w / 2) + "px";
	    /*создаём ползунок*/
	    slider = document.createElement("DIV");
	    slider.setAttribute("class", "img-comp-slider");
	    /*вставить слайдер*/
	    img.parentElement.insertBefore(slider, img);
	    /*расположите ползунок посередине:*/
	    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
	    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
	    /*выполнение функции при нажатии кнопки мыши:*/
	    slider.addEventListener("mousedown", slideReady);
	    /*и еще одна функция, когда кнопка мыши отпущена:*/
	    window.addEventListener("mouseup", slideFinish);
	    /*или сенсорный (для сенсорных экранов):*/
	    slider.addEventListener("touchstart", slideReady);
	    /*и выпустили (для сенсорных экранов):*/
	    window.addEventListener("touchstop", slideFinish);
	    function slideReady(e) {
			/*предотвратите любые другие действия, которые могут произойти при перемещении по изображению:*/
			e.preventDefault();
			/*теперь ползунок нажат и готов к перемещению:*/
			clicked = 1;
			/*выполнение функции при перемещении ползунка:*/
			window.addEventListener("mousemove", slideMove);
			window.addEventListener("touchmove", slideMove);
	    }
	    function slideFinish() {
	      	/*ползунок больше не нажимается:*/
	    	clicked = 0;
	    }
	    function slideMove(e) {
			var pos;
			/*если ползунок больше не нажимается, выйдите из этой функции:*/
			if (clicked == 0) return false;
			/*получить позицию курсора x:*/
			pos = getCursorPos(e)
			/*не допускайте, чтобы ползунок располагался вне изображения.:*/
			if (pos < 0) pos = 0;
			if (pos > w) pos = w;
			/*выполните функцию, которая изменит размер наложенного изображения в соответствии с курсором:*/
			slide(pos);
			poligon(pos);
	    }
	    function getCursorPos(e) {
	      var a, x = 0;
	      e = e || window.event;
	      /*получить x позиции изображения:*/
	      a = img.getBoundingClientRect();
	      /*вычислите координату курсора x относительно изображения:*/
	      x = e.pageX - a.left;
	      /*рассмотрим любую прокрутку страницы:*/
	      x = x - window.pageXOffset;
	      return x;
	    }
		function slide(x) {
			/*изменение размера изображения:*/
			img.style.width = x + "px";		
			/*расположите ползунок:*/
			slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
		}
  	}
}
initComparisons();
window.onload = function() {            
	let i = 0;
	let back = false;
	function renderGradientBackground() {
		document.body.style.backgroundImage = `linear-gradient(to bottom, rgb(0, 0, 0), rgb(${i}, ${i}, ${i}))`; 
		if(i > 255 || i < 0) back = !back
		if(!back) {
			i++;
		} else {
			i--;
		}
		console.log(i)
	}
	setInterval(renderGradientBackground, 50);
}
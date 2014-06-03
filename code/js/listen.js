document.addEventListener('keyup', move);

function move(event){
	//console.log(event.keyCode);
	// is it an arrow key?
	if (event.keyCode >= 37 && event.keyCode <= 40){ 
		var div = document.getElementById('b1');
		var leftpos = div.offsetLeft;
		var toppos = div.offsetTop;
		var step = 5;
		switch (event.keyCode){		
			// 37 left
			case 37:
				pos = leftpos - step;
				div.style.left = pos + 'px';
				div.style.backgroundColor = '#005869';
				break;
				
			// 38 up
			case 38:
				pos = toppos - step;
				div.style.top = pos + 'px';
				div.style.backgroundColor = '#ef45bc';
				break;
				
			// 39 right
			case 39:
				pos = leftpos + step;
				div.style.left = pos + 'px';
				div.style.backgroundColor = '#8DB500';
				break;
				
			// 40 down
			case 40:
				pos = toppos + step;
				div.style.top = pos + 'px';
				div.style.backgroundColor = '#666';
		}	
	}
}
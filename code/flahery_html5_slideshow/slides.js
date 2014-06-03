//slides.js

var slides = $('section').get();
var currentSlide = 0;
$('#slide-total').html(slides.length);
//hide all slides
for (i=0;i<slides.length;i++){
	slides[i].style.display = "none";
	$(slides[i]).hide();
}

function showSlide(slidenum){
	$(slides[currentSlide]).hide();
	$(slides[slidenum]).show();
	$('#slide-number').html(slidenum + 1);
	location.hash = slidenum + 1;
	
}
function nextSlide(){
	if ((currentSlide + 1) < slides.length){
		showSlide(currentSlide + 1);
		currentSlide++;
	}	
}
function prevSlide(){
	if ((currentSlide - 1) >= 0){
		showSlide(currentSlide - 1);
		currentSlide--;
	}	
}
function handle_keys(event) {	
	switch (event.keyCode) {
	    case $.ui.keyCode.SPACE:
	    case $.ui.keyCode.RIGHT:
	      nextSlide();
	      break;
	    case $.ui.keyCode.LEFT:
	      prevSlide();
	      break;
	    default:
	      break;
	}
	return false;
}
$('html').bind('keydown', handle_keys);
//initialize first slide if using hash (anchor)
if (location.hash != ''){
	num = location.hash.substring(1);
	console.log(num);
	currentSlide = num-1;
} 
showSlide(currentSlide);



$('#next-btn').click(nextSlide);
$('#prev-btn').click(prevSlide);


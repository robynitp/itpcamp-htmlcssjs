/*
This script makes some objects, which each hold all the information about a box (<div>) on the screen
It stores width, height, the text content of the box, the CSS class, etc
It also stores some functions that we might want to apply as event listeners to the box
IMPORTANTLY, it also keeps track of *which div* it is.

The function is designed to take in an object with all those particular details and make things happen.

*/
var divObject = {
	x: 100,
	y: 100,
	w: 200,
	h: 200,
	content: "Hello world",
	theme: "dark",
	clickable: true,
	// next two properties hold functions as values
	howToReact: function(){
		// the keyword "this" refers to the object being clicked (or otherwise acted upon)
		this.innerHTML = 'I have a reaction!'; 
		/* NOTE: 
			"this" is regular js here, not jQuery, so we use .innerHTML instead of .html()
		 	However, you could turn it into a jquery object by using: $(this).thenSomejQueryFunction()
		 	For example: $(this).html('I have a reaction!'); 
		 */
	},
	movement: function(){
		console.log('I can bounce!');
	},
	whichDivIsThis: $('#cat') //this property holds a jQuery object
};

function manipulateDiv(myObj){
	/* 
	Because of the way we set up our object, if we want to bring up the jQuery div element,
	we can use myObj.whichDivIsThis
	Remember that the div element is only ONE PART of the whole object we're working with
	*/
	// set the width of the div to the "w" property of the object
	myObj.whichDivIsThis.width(myObj.w);
	//set the height
	myObj.whichDivIsThis.height(myObj.h);

	//set the class of the element to theme -- assume we have a CSS style called "dark", for example
	myObj.whichDivIsThis.addClass(myObj.theme);

	// set the contents of the element to content
	myObj.whichDivIsThis.html(myObj.content);

	// add an event listener and give it "howToReact" as its function
	myObj.whichDivIsThis.click(myObj.howToReact);

};

// send the js object to the function
manipulateDiv(divObject);


// next we can make a new object, using the same format
var anotherDivObject = {
	w: 500,
	h: 400,
	content: "Bark!! I am a dog!",
	theme: "light",
	howToReact: function(){
		this.innerHTML = 'More barking!'; // this is regular js
		$(this).css('marginLeft','100px'); // this is jQuery 
		// no reason you'd need to use both js and jQuery here, I'm just making a point
	},
	whichDivIsThis: $('#dog') 
};
/*
 Notice that this object has fewer properties than the other. 
 That's ok as long as the properties the function is going to use are present
*/

//send a new js object to the function
manipulateDiv(anotherDivObject);




// Enter your JavaScript for the solution here...
//1. An event listener is required for handling input in the filter text control
document.querySelector('[name=filter]').addEventListener('input', function (evt) {
	var tags = document.querySelectorAll('.tags');
	var pics = document.querySelectorAll('.thumb-display');
	var resetLink = document.querySelector('.reset');

	//Loop the tag to check match tags
	for (var i = 0; i < tags.length; i++) {
		if ( tags[i].innerHTML.toLowerCase().indexOf(evt.target.value) < 0 ) {
			pics[i].classList.add('hidden');
		} else {
			pics[i].classList.remove('hidden');
		}	
	}

	//Setup the reset link
	if (evt.target.value != '') {
		resetLink.classList.remove('hidden');
	} else {
		resetLink.classList.add('hidden');
	}
});

//2. An event listener is required for handling clicking on the reset link
document.querySelector('.reset').addEventListener('click', function(evt) {
	var pics = document.querySelectorAll('.thumb-display');
	var filter = document.querySelector('[name=filter]');
	evt.preventDefault();

	//All thumbnails visible
	for (var i = 0; i < pics.length; i++) {
		if (pics[i].classList.contains('hidden')) {
			pics[i].classList.remove('hidden');
		}
	}

	//Filter reset (empty)
	filter.value = "";

	//Reset link hidden
	evt.target.classList.add('hidden');
});
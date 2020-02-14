(() => {
	//variable stack first
	const keys = Array.from(document.querySelectorAll('.key'));
	keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));


	function removePlayingClass(event) {
		event.target.classList.remove('playing');
	}

	function playSound(event) {
		// event is the event object that gets generated when you push any key
		// it contains all kinds of information about hte event = the target, what called it
		// where it happened in the app etc

		const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
		key = document.querySelector(`div[data-key="${event.keyCode}"]`);

	if (!audio) { return }

		audio.currentTime = 0;

		audio.play();

		key.classList.add('playing');
	}


	// listen for the keyboard event, and then do something with it
	window.addEventListener('keydown', playSound);

})();
var KEYS = {
	65: 'C4',
	87: 'C4S',
	83: 'D4',
	69: 'D4S',
	68: 'E4',
	70: 'F4',
	84: 'F4S',
	71: 'G4',
	89: 'G4S',
	72: 'A4',
	85: 'A4S',
	74: 'B4',
	75: 'C5',
	79: 'C5S',
	76: 'D5',
	80: 'D5S',
	186: 'E5',
	222: 'F5'
};

var pressed = {};

var keydown = function (e) {
	var keyCode = e.keyCode;

	if (pressed[keyCode]) {
		return;
	}
	
	if (keyCode in KEYS) {
		KeyActions.pressKey(KEYS[keyCode]);
		pressed[keyCode] = true;
	}
};

var keyup = function (e) {
	var keyCode = e.keyCode;
	
	if (keyCode in KEYS) {
		KeyActions.releaseKey(KEYS[keyCode]);
		pressed[keyCode] = false;
	}
};


document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
KEY = {
	directions: 0xF,
	buttons: 0xF,
	colidx: 0x00,

	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	A: 90,
	B: 88,
	START: 67,
	SELECT: 86,

	isAPressed: false,
	isBPressed: false,
	isStartPressed: false,
	isSelectPressed: false,

	isUpPressed: false,
	isDownPressed: false,
	isLeftPressed: false,
	isRightPressed: false,
	
	oldValue: 0xF,

	reset: function() {
		KEY.directions = 0xF;
		KEY.buttons = 0xF;
		KEY.colidx = 0x00;
		KEY.oldValue = 0xF;
		
		KEY.isAPressed = false;
		KEY.isBPressed = false;
		KEY.isStartPressed = false;
		KEY.isSelectPressed = false;

		KEY.isUpPressed = false;
		KEY.isDownPressed = false;
		KEY.isLeftPressed = false;
		KEY.isRightPressed = false;
	},

	rb: function() {
		switch (KEY.colidx) {
			case 0x00:
				KEY.oldValue = KEY.buttons & KEY.directions;
				return (KEY.colidx | (KEY.buttons & KEY.directions));
				break;
			case 0x10:
				KEY.oldValue = KEY.buttons;
				return (KEY.colidx | KEY.buttons);
				break;
			case 0x20:
				KEY.oldValue = KEY.directions;
				return (KEY.colidx | KEY.directions);
				break;
			case 0x30:
				return KEY.colidx | KEY.oldValue;
				break;
		}
	},

	wb: function(v) {
		KEY.colidx = (v & 0x30);
	},

	keydown: function(e) {
		switch (e.keyCode) {
			case KEY.RIGHT:
				KEY.directions &= 0xE;
				KEY.isRightPressed = true;
				console.log("Key Down RIGHT");
				break;
			case KEY.LEFT:
				KEY.directions &= 0xD;
				KEY.isLeftPressed = true;
				console.log("Key Down LEFT");
				break;
			case KEY.UP:
				KEY.directions &= 0xB;
				KEY.isUpPressed = true;
				console.log("Key Down UP");
				break;
			case KEY.DOWN:
				KEY.directions &= 0x7;
				KEY.isDownPressed = true;
				console.log("Key Down DOWN");
				break;
			case KEY.A:
				KEY.buttons &= 0xE;
				KEY.isAPressed = true;
				console.log("Key Down A");
				break;
			case KEY.B:
				KEY.buttons &= 0xD;
				KEY.isBPressed = true;
				console.log("Key Down B");
				break;
			case KEY.SELECT:
				KEY.buttons &= 0xB;
				KEY.isSelectPressed = true;
				console.log("Key Down SELECT");
				break;
			case KEY.START:
				KEY.buttons &= 0x7;
				KEY.isStartPressed = true;
				console.log("Key Down START");
				break;
			default :
				console.log("Key Down " + e.keyCode);
				break;
		}
	},

	keyup: function(e) {
		switch (e.keyCode) {
			case KEY.RIGHT:
				KEY.directions |= 0x1;
				KEY.isRightPressed = false;
				console.log("Key Up RIGHT");
				break;
			case KEY.LEFT:
				KEY.directions |= 0x2;
				KEY.isLeftPressed = false;
				console.log("Key Up LEFT");
				break;
			case KEY.UP:
				KEY.directions |= 0x4;
				KEY.isUpPressed = false;
				console.log("Key Up UP");
				break;
			case KEY.DOWN:
				KEY.directions |= 0x8;
				KEY.isDownPressed = false;
				console.log("Key Up DOWN");
				break;
			case KEY.A:
				KEY.buttons |= 0x1;
				KEY.isAPressed = false;
				console.log("Key Up A");
				break;
			case KEY.B:
				KEY.buttons |= 0x2;
				KEY.isBPressed = false;
				console.log("Key Up B");
				break;
			case KEY.SELECT:
				KEY.buttons |= 0x4;
				KEY.isSelectPressed = false;
				console.log("Key Up SELECT");
				break;
			case KEY.START:
				KEY.buttons |= 0x8;
				KEY.isStartPressed = false;
				console.log("Key Up START");
				break;
			default :
				console.log("Key Up " + e.keyCode);
				break;
			
		}
	}
};

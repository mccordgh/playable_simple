define(['Class'], function(Class){

  var handler;

	var MouseManager = Class.extend({
		init:function(_handler){
      handler = _handler;
      this.clicked = false;
      this.clickPos = {
        x: 0,
        y: 0,
      };
		},
		tick: function(){
      // x between 400 and 790
      // y between 180 and 270
      // console.log(this.clicked);
      // if (this.clicked) {
      //   this.clicked = false;


      // }

		// 	this.up = keys[87];
		// 	this.upArrow = keys[38];
		// 	this.down = keys[83];
		// 	this.downArrow = keys[40];
		// 	this.left = keys[65];
		// 	this.leftArrow = keys[37];
		// 	this.right = keys[68];
		// 	this.rightArrow = keys[39];
		// 	this.space = keys[32];
		// 	this.f = keys[70];
		// 	this.j = keys[74];
		// 	this.enter = keys[13];

    //   let gamepad = navigator.getGamepads()[0];

    //   if(gamepad){
    //     let joystickX = applyDeadzone(gamepad.axes[0], 0.25);
    //     let joystickY = applyDeadzone(gamepad.axes[1], 0.25);

    //     if (joystickX > 0) {
    //   		//JOYSTICK IS RIGHT
    //   		this.right = true;
    //   		this.left = false;
    //     } else if (joystickX < 0) {
    //     	//JOYSTICK IS LEFT
    //     	this.left = true;
    //     	this.right = false;
    //     } else {
    //     	// JOYSTICK HORIZONTAL AXIS IS NEUTRAL
		// 			this.left = false;
    //     	this.right = false;
    //     }

    //     if (joystickY > 0) {
    //   		//JOYSTICK IS DOWN
    //   		this.down = true;
    //   		this.up = false;
    //     } else if (joystickY < 0) {
    //     	//JOYSTICK IS UP
    //     	this.up = true;
    //     	this.down = false;
    //     } else {
    //     	// JOYSTICK VERTICAL AXIS IS NEUTRAL
    //     	this.up = false;
    //     	this.down = false;
    //     }

    //     if (gamepad.buttons === undefined || gamepad.buttons === []) {
    //     	alert("There is a problem with your controller and the Gamepad API. Please reconnect or reboot and try again!");
    //     }
    //     if(gamepad.buttons[0].value > 0.5 || gamepad.buttons[1].value > 0.5 || gamepad.buttons[9].value > 0.5){
    //       this.enter = true;
    //     } else {
    //     	this.enter = false;
    //     }
    //   }
		}
	});

	window.onclick = function(e){
    // this.clickPos = { x: e.x, y: e.y};

    // if (
    //   this.clickPos.x >= 400
    //   && this.clickPos.x <= 790
    //   && this.clickPos.y >= 180
    //   && this.clickPos.y <= 270
    //   && !handler.getWorld().youWin
    // ) {
      handler.getWorld().getEntityManager().getPlayer().levelUp();
    // }
		// keys[e.keyCode] = true;
	};

	// window.onkeyup = function(e){
	// 	keys[e.keyCode] = false;
	// };

	// function applyDeadzone(number, threshold){
  //  percentage = (Math.abs(number) - threshold) / (1 - threshold);

  //  if(percentage < 0)
  //     percentage = 0;

  //  return percentage * (number > 0 ? 1 : -1);
	// }

return MouseManager;

});
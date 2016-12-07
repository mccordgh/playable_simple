define(['Class', 'Display', 'State', 'MenuState', 'KeyManager', 'Handler', 'GameCamera'], function(Class,Display,State,MenuState, KeyManager, Handler, GameCamera){

	var _this;
	var running = false;
	var title, width, height, g, display, keyManager, handler, gameCamera;
	var gameState, menuState, settingsState;


	var Game = Class.extend({
		init:function(_title, _width, _height){

			_this = this;
			title = _title;
			width = _width;
			height = _height;
		},
		run: function(){
			init();
			var fps = 60;
			var timePerTick = 1000/fps;
			var delta = 0;
			var now;
			var lastTime = Date.now();
			var timer = 0;
			var ticks = 0;
			
			function loop(){
				if(running) {
					now = Date.now();
					delta = now - lastTime;
					timer += delta;
					lastTime = now;
				}
			
				if(timer >= timePerTick){
					dt = timer/1000;
					tick(dt);
					render();
					timer = 0;
				}
				window.requestAnimationFrame(loop);
			}

			loop();
	
		},
		start: function() {
			if(running)return;
			running = true;
			this.run();
		},
		getKeyManager: function() {
			return keyManager;
		},
		getDisplay: function(){
			return display;
		},
		getWidth: function() {
			return width;
		},
		getHeight: function() {
			return height;
		},
		getGameCamera: function() {
			return gameCamera;
		}
	});

	function init() {
		handler = new Handler(_this);
		display = new Display(title, width, height);
		keyManager = new KeyManager();
		g = display.getGraphics();
		gameCamera = new GameCamera(handler, 0, 0);
		// gameState = new GameState(handler);
		// State.setState(gameState);
		menuState = new MenuState(handler);
		State.setState(menuState);
	}
	
	function tick(_dt) {
		keyManager.tick();
			// console.log(keyManager.up);
			// console.log(this.handler.getKeyManager());
		if(State.getState() !== null){
			State.getState().tick(_dt);
		}
	}

	function render(){
		g.clearRect(0,0,width,height);
		if(State.getState() !== null){
				State.getState().render(g);
			}
	}

	return Game;

});
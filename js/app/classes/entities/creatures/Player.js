define(['Creature', 'Assets', 'HealthBar', 'Rectangle', 'Moving', 'Attacking', 'Dying', 'Spawning'],
	function(Creature, Assets, HealthBar, Rectangle, Moving, Attacking, Dying, Spawning){

	var DAMAGE = 50;
	var healthbar_properties = {
		color: "#0c0",
		bgColor: "#a00",
		yOffset: 20,
		nodes: 100,
		split: 0,
		width: 50,
		height: 8,
		fadeTime: 0,
		renderOnFull: "on",
		border: {
			show: true,
			color: "#000",
			width: 2
		}
	};

	var Player = Creature.extend({
		init: function(_handler, _x, _y){
			this._super(_handler, _x, _y, 65, 81);
			this.assets = Assets.getAssets('luka');
			this.level = 1;
			// this.level = 999;
			this.x = _x;
			this.y = _y;
			this.speed = 280;
			// this.speed = 2000;
			this.bounds.x = 0;
			this.bounds.y = 0;
			this.bounds.width = this.width;
			this.bounds.height = this.height;
			this.type = 'player';
			this.states = {
				moving: new Moving(this, _handler),
				attacking: new Attacking(this, _handler),
				dying: new Dying(this, _handler),
				spawning: new Spawning(this, _handler),
			}
			this.state = this.states.spawning;
			this.health = this.level * 50;
			this.damage = this.level * DAMAGE;

			this.healthbar = new HealthBar(_handler, this, healthbar_properties);

			// this.score = 0;
			// this.weapon = Assets.getAssets('sword');
			// this.weapon.bounds = {
				// x: 0,
				// y: 0,
				// width: 0,
				// height: 0
			// };
			// this.portrait = Assets.getAssets('Portraits');
			// this.healthbar = new HealthBar(_handler, this, {
			// 						nodes: 100,
			// 						color: "red",
			// 						bgColor: "green",
			// 						fixed: true,
			// 						fixedX: 125,
			// 						fixedY: 558,
			// 						width: 104,
			// 						height: 12
			// });
			// 	color: "#0c0",			// var healthbar_properties = {

			// 	bgColor: "#a00",
			// 	yOffset: 10,
			// 	nodes: 100,
			// 	split: 0,
			// 	width: 75,
			// 	height: 6,
			// 	fadeTime: 0.98,
			// 	renderOnFull: "on",
			// 	border: {
			// 		show: false,
			// 		color: "#000",
			// 		width: 2
			// 	}
			// };
			// this.healthbar = new HealthBar(_handler, this, healthbar_properties);
		},
		tick: function(_dt){
			if (this.x > 1200) {
				return;
			}
			this.state.tick(_dt);
			this.healthbar.update();
		},
		render: function(_g){
			this.state.render(_g);
			this.healthbar.render(_g);

			_g.drawText({
				border: true,
				borderHeight: 80,
				borderColor: 'black',
				fillColor: 'white',
				text: `Level: ${this.level}`,
				fontSize: 48,
				font: 'serif',
				x: function() {return 160},
				y: function(){return 240}
			});

			_g.fillStyle = 'white';
			_g.fillRect(390, 180, 400, 100);

			_g.drawText({
				border: true,
				borderHeight: 80,
				borderColor: 'black',
				fillColor: 'black',
				text: `Level Up Click Me!`,
				fontSize: 48,
				font: 'serif',
				x: function() {return 400},
				y: function(){return 240}
			});

			// this.drawDebug(_g);
		},
		drawDebug: function(_g) {
			_g.drawText({
				border: true,
				borderHeight: 80,
				borderColor: 'black',
				fillColor: 'red',
				text: `Health: ${this.health}`,
				fontSize: 48,
				font: 'serif',
				x: function() {return 160},
				y: function(){return 340}
			});
			_g.drawText({
				border: true,
				borderHeight: 80,
				borderColor: 'black',
				fillColor: 'red',
				text: `Dmg: ${this.damage}`,
				fontSize: 48,
				font: 'serif',
				x: function() {return 160},
				y: function(){return 380}
			});
		},
		levelUp: function() {
			this.level++;
			this.health = this.level * 50;
			this.damage = this.level * DAMAGE;
			this.healthbar.setProperties(healthbar_properties, this);
		}
	});

	return Player;
});
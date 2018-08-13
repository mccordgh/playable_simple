define(['Creature', 'Assets', 'HealthBar', 'Rectangle', 'BossMoving', 'BossAttacking'],
  function(Creature, Assets, HealthBar, Rectangle, BossMoving, BossAttacking){

	var Boss = Creature.extend({
		init: function(_handler, _x, _y){
			this._super(_handler, _x, _y, 300, 391);
			this.assets = Assets.getAssets("boss");
			this.x = _x;
      this.y = _y;
      this.originalX = _x;
			this.bounds.x = 0;
			this.bounds.y = 0;
			this.bounds.width = this.width;
			this.bounds.height = this.height;
			this.type = 'monster';
			this.health = 80000;
      this.damage = 175;
      this.states = {
        moving: new BossMoving(this, _handler),
        attacking: new BossAttacking(this, _handler),
      };
      this.state = this.states.moving;
      var healthbar_properties = {
				color: "#0c0",
				bgColor: "#a00",
				yOffset: 20,
				nodes: 100,
				split: 0,
				width: 200,
				height: 10,
				fadeTime: 0,
				renderOnFull: "on",
				border: {
					show: true,
					color: "#000",
					width: 2
				}
			};
			this.healthbar = new HealthBar(_handler, this, healthbar_properties);

			// this.targetType = 'castle';
			// this.deathCleanup = true;
			// var healthbar_properties = {
			// 	color: "#0c0",
			// 	bgColor: "#a00",
			// 	yOffset: 10,
			// 	nodes: 100,
			// 	split: 0,
			// 	width: 75,
			// 	height: 6,
			// 	fadeTime: 0.97,
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
      this.state.tick(_dt);
		},
		render: function(_g){
      this.state.render(_g);
      this.healthbar.render(_g);
		},
	});

	return Boss;
});
define(['State'], function(State){

  var deathCount = 0;

	var Dying = State.extend({
		init: function(_player, _handler){
			this._super(_handler);
      this.player = _player;
      this.assets = this.player.assets
		},
		tick: function(_dt){
      if (deathCount === 0) {
        this.player.healthbar.update();
      }

      if (deathCount < 120) {
        deathCount++;
      } else {
        deathCount = 0;
        this.player.y = 400;
        this.player.x = 50;
        this.player.state = this.player.states.spawning;
      }
      // this.player.xMove = this.player.speed * _dt;
      // this.player.move();
		},
		render: function(_g){
			// _g.myDrawImage(this.assets.model, this.player.x, this.player.y, this.assets.width, this.assets.height);

			// ****** DRAW BOUNDING BOX DON'T DELETE!!
			// _g.fillStyle = "red";
			// _g.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
			// ****** DRAW BOUNDING BOX DON'T DELETE!!
		},
	});

	return Dying;
});
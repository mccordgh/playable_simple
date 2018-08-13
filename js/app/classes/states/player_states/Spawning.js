define(['State'], function(State){

	var Spawning = State.extend({
		init: function(_player, _handler){
			this._super(_handler);
      this.player = _player;
      this.assets = this.player.assets
		},
		tick: function(_dt){
      if (this.player.y < 550) {
        this.player.xMove = 0;
        this.player.yMove = (this.player.speed * 2) * _dt;
        this.player.move();
      } else {
        this.player.y = 550;
        this.player.yMove = 0;
        this.player.health = this.player.level * 50;
        this.player.healthbar.update();
        this.player.state = this.player.states.moving;
      }
		},
		render: function(_g){
			_g.myDrawImage(this.assets.model, this.player.x, this.player.y, this.assets.width, this.assets.height);

			// ****** DRAW BOUNDING BOX DON'T DELETE!!
			// _g.fillStyle = "red";
			// _g.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
			// ****** DRAW BOUNDING BOX DON'T DELETE!!
		},
	});

	return Spawning;
});
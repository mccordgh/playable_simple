define(['State'], function(State){

	var Attacking = State.extend({
		init: function(_player, _handler){
			this._super(_handler);
      this.player = _player;
      this.assets = this.player.assets
      this.startX = 0;
      this.attackSpeed = 2 * this.player.speed;
		},
		tick: function(_dt){
      this.player.xMove = (this.player.speed * this.attackSpeed) * _dt;
      this.player.move();

      if ((this.player.x - this.startX) <= -30) {
        this.player.x = this.startX - 30;
        this.attackSpeed = 2;
      } else if (this.player.x >= this.startX) {
        this.player.x = this.startX;
        this.attackSpeed = -1;
      }
		},
		render: function(_g){
			_g.myDrawImage(this.assets.model, this.player.x, this.player.y, this.assets.width, this.assets.height);

			// ****** DRAW BOUNDING BOX DON'T DELETE!!
			// _g.fillStyle = "red";
			// _g.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
			// ****** DRAW BOUNDING BOX DON'T DELETE!!
    },
    setStartX(val) {
      this.startX = val;
    }
	});

	return Attacking;
});
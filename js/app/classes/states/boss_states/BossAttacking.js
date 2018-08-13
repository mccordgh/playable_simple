define(['State'], function(State){

	var BossAttacking = State.extend({
		init: function(_boss, _handler){
			this._super(_handler);
      this.boss = _boss;
      this.assets = this.boss.assets
      this.startX = 0;
      this.attackSpeed = -2 * this.boss.speed;
		},
		tick: function(_dt){
      this.boss.xMove = (this.boss.speed * this.attackSpeed) * _dt;
      this.boss.move();

      if ((this.boss.x - this.startX) <= -30) {
        this.boss.x = this.startX - 30;
        this.attackSpeed = 1;
      } else if (this.boss.x >= this.startX) {
        this.boss.x = this.startX;
        this.attackSpeed = -2;
      }
		},
		render: function(_g){
			_g.myDrawImage(this.assets.model, this.boss.x, this.boss.y, this.assets.width, this.assets.height);

			// ****** DRAW BOUNDING BOX DON'T DELETE!!
			// _g.fillStyle = "red";
			// _g.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
			// ****** DRAW BOUNDING BOX DON'T DELETE!!
    },
    setStartX(val) {
      this.startX = val;
    }
	});

	return BossAttacking;
});
define(['State', 'GameState', 'KeyManager'], function(State, GameState, KeyManager){

	var fontSize;

	var GameOverState = State.extend({
		init:function(_handler){
			this._super(_handler);
			this.endScore = this.handler.getWorld().getEntityManager().getPlayer().score;
		},
		tick: function(_dt){
			this.getInput(_dt);
			this.render();
		},
		render: function(_g){
      if (_g){
		_g.fillStyle = "black";
		_g.fillRect(0, 0, this.handler.getWidth(), this.handler.getHeight());
      	_g.drawText({
      		borderColor: 'white',
      		fillColor: 'black',
      		text: 'Game Over!',
      		fontSize: 56,
      		font: 'serif',
      		x: function() {return _g.centerTextOnX(this.text);},
      		y: function() {return _g.centerTextOnY() - (this.fontSize * 2);},
      	});
      	_g.drawText({
      		borderColor: 'white',
      		fillColor: 'green',
      		text: 'Press F5 to return to Main Menu!',
      		fontSize: 56,
      		font: 'serif',
      		x: function() {return _g.centerTextOnX(this.text);},
      		y: function() {return _g.centerTextOnY();},
      	});
      	_g.drawText({
      		borderColor: 'white',
      		fillColor: 'blue',
      		text: `You acheived a score of ${this.endScore.toLocaleString()}!`,
      		fontSize: 56,
      		font: 'serif',
      		x: function() {return _g.centerTextOnX(this.text);},
      		y: function() {return _g.centerTextOnY() + (this.fontSize * 2);},
      	});
      }
		},
		getInput: function(_dt){
		}
	});


	return GameOverState;

});
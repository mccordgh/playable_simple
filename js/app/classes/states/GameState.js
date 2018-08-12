define(['State', 'World', 'SoundManager', 'PlayableWorld'], function(State, World, SoundManager, PlayableWorld){

	var GameState = State.extend({
		init:function(_handler){
			this._super(_handler);
			// this.world = new World("res/worlds/world1.wrd", _handler);
			this.world = new PlayableWorld("res/worlds/world1.wrd", _handler);
			this.handler = _handler;
			// this.handler.getSoundManager().fadeIn("gameMusic", 3);

		},
		tick: function(_dt){
			this.world.tick(_dt);
		},
		render: function(_g){
			this.world.render(_g);
		},
		getSoundManager(){
			return sm;
		}
	});

	return GameState;

});
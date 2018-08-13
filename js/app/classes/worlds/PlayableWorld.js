define(['Class', 'EntityManager', 'Player', 'SpatialGrid', 'Assets', 'Boss'], function(Class, EntityManager, Player, SpatialGrid, Assets, Boss){
	const CURRENT_PATH = window.location.href;
	var tree,	roundOver = false;
	var spawnX = 50;
	var spawnY = 400;

	var PlayableWorld = Class.extend({
		init:function(_path, _handler){

			// this.tiles = [];
			this.youWin = false;
			this.handler = _handler;
			_handler.setWorld(this);
      this.entityManager = new EntityManager(_handler, new Player(_handler, spawnX, spawnY));
			this.scene = Assets.getAssets('scene');
			this.spawn = Assets.getAssets('spawn');
			// this.loadWorld( CURRENT_PATH + _path);

			// BOSS!
			this.entityManager.addEntity(new Boss(_handler, 720, 300));

			// this.spatialGrid = new SpatialGrid(this.width * Tile.TILE_WIDTH, this.height * Tile.TILE_HEIGHT, 64);

			//CASTLE!
			// this.entityManager.addEntity(new Castle(_handler, Tile.TILE_WIDTH * 47, Tile.TILE_HEIGHT * 42));

			//PORTALS!
				//top left
			// this.entityManager.addEntity(new Portal(_handler, Tile.TILE_WIDTH * 8, Tile.TILE_HEIGHT * 8));
				//top right
			// this.entityManager.addEntity(new Portal(_handler, Tile.TILE_WIDTH * 88, Tile.TILE_HEIGHT * 8));
				//bottom left
			// this.entityManager.addEntity(new Portal(_handler, Tile.TILE_WIDTH * 8, Tile.TILE_HEIGHT * 78));
				//bottom right
			// this.entityManager.addEntity(new Portal(_handler, Tile.TILE_WIDTH * 88, Tile.TILE_HEIGHT * 78));
				//top middle
			// this.entityManager.addEntity(new Portal(_handler, Tile.TILE_WIDTH * 47, Tile.TILE_HEIGHT * 8));
				//bottom middle
			// this.entityManager.addEntity(new Portal(_handler, Tile.TILE_WIDTH * 47, Tile.TILE_HEIGHT * 78));
				//left middle
			// this.entityManager.addEntity(new Portal(_handler, Tile.TILE_WIDTH * 8, Tile.TILE_HEIGHT * 44));
				//right middle
			// this.entityManager.addEntity(new Portal(_handler, Tile.TILE_WIDTH * 88, Tile.TILE_HEIGHT * 44));

			//TOP LEFT TREE TROVE
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 7, Tile.TILE_HEIGHT * 7));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 11, Tile.TILE_HEIGHT * 7));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 15, Tile.TILE_HEIGHT * 7));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 7, Tile.TILE_HEIGHT * 11));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 7, Tile.TILE_HEIGHT * 15));

			//TOP RIGHT TREE TROVE
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 89, Tile.TILE_HEIGHT * 7));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 85, Tile.TILE_HEIGHT * 7));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 81, Tile.TILE_HEIGHT * 7));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 89, Tile.TILE_HEIGHT * 11));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 89, Tile.TILE_HEIGHT * 15));

			//BOTTOM RIGHT TREE TROVE
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 89, Tile.TILE_HEIGHT * 79));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 85, Tile.TILE_HEIGHT * 79));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 81, Tile.TILE_HEIGHT * 79));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 89, Tile.TILE_HEIGHT * 75));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 89, Tile.TILE_HEIGHT * 71));

			//BOTTOM LEFT TREE TROVE
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 7, Tile.TILE_HEIGHT * 71));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 7, Tile.TILE_HEIGHT * 75));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 7, Tile.TILE_HEIGHT * 79));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 11, Tile.TILE_HEIGHT * 79));
			// this.entityManager.addEntity(new Tree(_handler, Tile.TILE_WIDTH * 15, Tile.TILE_HEIGHT * 79));

			//PLAYER SET SPAWN
			// this.entityManager.getPlayer().setX(100);
			// this.entityManager.getPlayer().setY(100);

			//HUD INIT
			// this.hud = new HUD(_handler, this.entityManager.getPlayer());
		},
		// loadWorld: function(_path){
		// 	var file = Utils.loadFileAsString(_path);
		// 	var tokens = file.replace(/\n/g, " ").split(" ");
		// 	this.width = tokens[0];
		// 	this.height = tokens[1];
		// 	this.spawnX = tokens[2] * Tile.TILE_WIDTH;
		// 	this.spawnY = tokens[3] * Tile.TILE_HEIGHT;
		// 	for(y=0; y < this.height; y++){
		// 		for(x=0; x < this.width; x++){
		// 			if(!this.tiles[x])
		// 				this.tiles[x] = [];
		// 			this.tiles[x][y] = parseInt(tokens[(x + (y * this.width)) + 4]);
		// 		}
		// 	}
		// },
		tick: function(_dt){
			this.entityManager.tick(_dt);
		},
		render: function(_g){
        _g.myDrawImage(this.scene.model, 0, 0, this.scene.width, this.scene.height);
        _g.myDrawImage(this.spawn.model, 40, 400, this.spawn.width, this.spawn.height);

				this.entityManager.render(_g);

				if (this.youWin) {
					_g.fillStyle = 'red';
					_g.fillRect(390, 180, 400, 100);

					_g.drawText({
						border: true,
						borderHeight: 80,
						borderColor: 'black',
						fillColor: 'black',
						text: 'YOU WIN!!!!!',
						fontSize: 48,
						font: 'serif',
						x: function() {return 460},
						y: function(){return 240}
					});
				}
			// tree.render(_g);
		},
		// getTile: function(_x, _y){
			// let tmpTile = Tile.tiles[this.tiles[_x][_y]];
			// if (tmpTile)
				// return Tile.tiles[this.tiles[_x][_y]];
		// },
		getWidth: function(){
			return this.width;
		},
		getHeight: function(){
			return this.height;
		},
		getEntityManager(){
			return this.entityManager;
		},
		getSpatialGrid(){
			return this.spatialGrid;
		},
		getRoundOver(){
			return roundOver;
		},
		setRoundOver(_bool){
			roundOver = _bool;
		}

	});

	return PlayableWorld;
});
enchant();
//背景クラス
var Background = enchant.Class.create(enchant.Sprite, {
    initialize: function(){
	//ちょっと大きめの背景を用意する
	enchant.Sprite.call(this,640,320);
	this.x = 0;
	this.y = 0;
	this.image = game.assets['BG.jpg'];
	this.addEventListener('enterframe', function(){
	    //ひたすら背景をスクロール
	    this.x--;
	    //端まで来たら、背景を巻き戻す。この繰り返し
	    if(this.x<=-320)this.x=0;
	});
	game.rootScene.addChild(this);
    }
});
window.onload = function() {
  
	//ゲームオブジェクトの作成
	game = new Game(320,320) ;
	game.preload('Building.png','heri.png','hope.png','hopeswitch.png','bombswitch.png','effect0.png','BG.jpg','bomb.png');
	game.score = 0;
	game.fps = 24; 
	var heri;
	game.onload = function(){
		//物理世界の創造
		physicsWorld = new PhysicsWorld(0, 9.8);
	  
		background = new Background(); 
    
    enemies = [];
		
		var heri = new Sprite(95,117);
		heri.image = game.assets['heri.png'];
		heri.x     = 10;
		heri.y     = 5;
		heri.anim  = [0,1,2];
		heri.frame = 0;
	  game.rootScene.addChild(heri);
		
		var hopeswitch = new Sprite(61,61);
		hopeswitch.image = game.assets['hopeswitch.png'];
		hopeswitch.x     = 179;
		hopeswitch.y     = 20;
		hopeswitch.frame = 0;
	  game.rootScene.addChild(hopeswitch);
		
		var bombswitch = new Sprite(61,61);
		bombswitch.image = game.assets['bombswitch.png'];
		bombswitch.x     = 249;
		bombswitch.y     = 20;
		bombswitch.frame = 0;
	  game.rootScene.addChild(bombswitch);
	  
	  //ボムスイッチがタッチされたとき
	  bombswitch.ontouchstart = function(){
	  	alert("残念ながら爆弾は出ない");
	  };
	  
    var bomb = new PhyCircleSprite(8, DYNAMIC_SPRITE, 1.0, 0.5, 0.2,true);
    bomb.image = game.assets['bomb.png'];
    bomb.frame = 0;
    bomb.position = { x: 160, y: 10 };
    game.rootScene.addChild(bomb);
    
    game.rootScene.onentergrame = function(){
    	
	    world.step(game.fps)
	    
	    };
    };
  game.start();
  
};
	
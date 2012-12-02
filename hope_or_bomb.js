enchant();
window.onload = function() {
	//ゲームオブジェクトの作成
	var game = new Game(320,320) ;
	game.preload('heri.png','hope.png','hopeswitch.png','bomb.png','bombswitch.png','effect0.png','BG.gif');
	game.score = 0;
	game.fps = 16; 
	var heri;
	game.onload = function(){
		
		var heri = new Sprite(95,117);
		heri.image = game.assets['heri.png'];
		heri.x     = 10;
		heri.y     = 5;
		heri.anim  = [0,1,2];
		heri.frame = 0;
	  game.rootScene.addChild(heri);
		//heri._element.style.zIndex = 20;
		
		var hopeswitch = new Sprite(61,61);
		hopeswitch.image = game.assets['hopeswitch.png'];
		hopeswitch.x     = 179;
		hopeswitch.y     = 40;
		hopeswitch.frame = 0;
	  game.rootScene.addChild(hopeswitch);
		//hopeswitch._element.style.zIndex = 20;
		
		var bombswitch = new Sprite(61,61);
		bombswitch.image = game.assets["bombswitch.png"];
		bombswitch.x     = 249;
		bombswitch.y     = 40;
		bombswitch.frame = 0;
	  game.rootScene.addChild(bombswitch);
		//bombswitch._element.style.zIndex = 20;
		
		//背景画像の設定
		var BG = new Sprite(320,320);
		BG.image = game.assets['BG.gif'];
		BG.x     = 0;
    BG.y     = 0;
    BG.frame = 0;
    BG._element.style.zIndex = 30;
    game.rootScene.addChild(BG);
    
    };
  game.start();
  
};
	
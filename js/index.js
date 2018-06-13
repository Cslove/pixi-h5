let Application = PIXI.Application,
	Sprite = PIXI.Sprite,
	Loader = PIXI.loader,
	resources = PIXI.loader.resources;
let app = new Application({forceCanvas:true});
	app.renderer.view.style.position = "absolute";
	app.renderer.view.style.display = "block";
	app.renderer.autoResize = true;
	app.renderer.resize(window.innerWidth, window.innerHeight);
	document.body.appendChild(app.view);

Loader.add('./img/score.png').load(setup);

function setup(){
	let id = PIXI.loader.resources["./img/score.png"].texture;
	
	let sprite = new Sprite(id);
	sprite.x = 300;
	sprite.y=500;
	sprite.width = 200;
	sprite.height = 200;
	app.stage.addChild(sprite)
}
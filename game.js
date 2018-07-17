//var game = new Phaser.Game(500, 375, Phaser.AUTO, 'hamburger-nightmare', { preload: preload, create: create, update: update, render: render });
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'hamburger-nightmare', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image("game", "assets/game.png");

    //menu
    game.load.image("title-top", "assets/title-top.png");
    game.load.image("time", "assets/time.png");
    game.load.image("menu-left", "assets/menu-left.png");
    game.load.image("menu-middle", "assets/menu-middle.png");
    game.load.image("menu-right", "assets/menu-right.png");
    game.load.image("hamburgers-number-left", "assets/hamburgers-number-left.png");

    //buttons
    game.load.image("menu-button", "assets/menu-button.png");
    game.load.image("burger-button-t", "assets/burger-button-t.png");
    game.load.image("cheese-button", "assets/cheese-button.png");
    game.load.image("lettuce-button", "assets/lettuce-button.png");
    game.load.image("tomato-button", "assets/tomato-button.png");
    game.load.image("ham-button", "assets/ham-button.png");
    game.load.image("burger-button-d", "assets/burger-button-d.png");

    //ingredients
    game.load.image("bread-down", "assets/bread-down.png");
    game.load.image("bread-top", "assets/bread-top.png");
    game.load.image("tomato", "assets/tomato.png");
    game.load.image("cheese", "assets/cheese.png");
    game.load.image("lettuce", "assets/lettuce.png");
    game.load.image("meat", "assets/meat.png");

}

var button;

function create() {

    game.scale.pageAlignHorizontally = !0,
    game.scale.pageAlignVertically = !0,

    //game.add.image(0, 0, 'game');
    game.stage.backgroundColor = '#333';

/*
    game.add.image(0, 0, 'title-top');
    game.add.image(328, 0, 'time');

    game.add.image(33, 123, 'menu-left');
    game.add.image(163, 98, 'menu-middle');
    game.add.image(366, 81, 'menu-right');
*/
    game.add.image(21, 81, 'menu-button');
    game.add.button(39, 131, 'burger-button-t', clickBreadUp);
    game.add.button(39, 163, 'cheese-button', clickCheese);
    game.add.button(39, 197, 'lettuce-button', clickLettuce);
    game.add.button(39, 230, 'tomato-button', clickTomato);
    game.add.button(39, 260, 'ham-button', clickHam);
    game.add.button(39, 293, 'burger-button-d', clickBreadDown);

/*
    game.add.image(196, 71, 'hamburgers-number-left');
*/


  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.physics.arcade.gravity.y = 400;

}

function update() {

}

function render() {

}

function clickBreadDown() {
  console.log("fired");

  sprite1 = game.add.sprite(300, 96, 'bread-down');
  game.physics.enable( sprite1, Phaser.Physics.ARCADE);
  sprite1.body.collideWorldBounds = true;

}

function clickBreadUp() {
  console.log("fired");

  sprite2 = game.add.sprite(300, 96, 'bread-top');
  game.physics.enable( sprite2, Phaser.Physics.ARCADE);
  sprite2.body.collideWorldBounds = true;

}

function clickCheese() {
  console.log("fired");
}

function clickLettuce() {
  console.log("fired");
}

function clickTomato() {
  console.log("fired");
}

function clickHam() {
  console.log("fired");
}

var game = new Phaser.Game(500, 375, Phaser.AUTO, 'hamburger-nightmare', { preload: preload, create: create, update: update, render: render });

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
    game.load.image("burger-button", "assets/burger-button.png");
    game.load.image("cheese-button", "assets/cheese-button.png");
    game.load.image("lettuce-button", "assets/lettuce-button.png");
    game.load.image("tomato-button", "assets/tomato-button.png");
    game.load.image("bacon-button", "assets/bacon-button.png");

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

    game.add.image(0, 0, 'title-top');
    game.add.image(328, 0, 'time');

    game.add.image(33, 123, 'menu-left');
    game.add.image(163, 98, 'menu-middle');
    game.add.image(366, 81, 'menu-right');

    game.add.image(21, 81, 'menu-button');
    game.add.image(50, 131, 'burger-button');
    game.add.image(39, 163, 'cheese-button');
    game.add.image(39, 197, 'lettuce-button');
    game.add.image(39, 230, 'tomato-button');
    game.add.image(39, 260, 'bacon-button');

    game.add.image(196, 71, 'hamburgers-number-left');


/*
    music = game.add.audio('thegrinder');
    music.loop = true;
    music.play();
*/

}

function update() {

}

function render() {

}

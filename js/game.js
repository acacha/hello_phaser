window.onload = function() {
  // var game = new Phaser('100','100')
  // var game = new Phaser(800,600,Phaser.AUTO,'#game')

  var states = {
    preload: preload,
    create: create
  }

  var game = new Phaser.Game(800,600,Phaser.AUTO,'', states)

  //init

  //Assets
  function preload() {
    //LoadManager:
    game.load.image('logo','assets/phaser.png')
  }

  function create() {
    // World
    // game.add.sprite(0,0,'logo')
    game.add.sprite(game.world.centerX,game.world.centerY,'logo')
  }
}
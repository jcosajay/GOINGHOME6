var hero;
var hero_sprite;
var platform;
var platform2;
var GRAVITY = 1;
var JUMP = -5;
var gameState;
var bg_title, bg_win, bg_lose, bg_level1, bg_level2, bg_level3, bg_countdown, intro;
var frame;
var powerUp;
var bkgr;
var bkgr2;
var bkgr3;
var bkgrTrack0;
var bkgrTrack1;
var bkgrTrack2;
var bkgrTrack3;


var countDowntimer = 0;
var count1Downtimer = 0;
var count2Downtimer = 0;
var count3Downtimer = 0;

var levelUp;
var gameState = 'startUp';
var intro = 'intro';

var secretdraw = true;

var hero_frames = [

  {'name':'heroLeft_00000', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00001', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00002', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00003', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00004', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00005', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}}
  

  ];
  




function preload() {
  //platform = loadImage("assets/platform3.png");
  intro = loadImage("assets/WELCOME.png");
  bkgr = loadImage("assets/levelOne.png");
  bkgr2 = loadImage("assets/levelTwo.png");
  bkgr3 = loadImage("assets/levelThree.png");
  bkgr0 = loadImage("assets/trance.png");
  home = loadImage("assets/home.png");
  
  levelUp1 = loadImage("assets/levelUp1.png");
  levelUp2 = loadImage("assets/levelUp2.png");
  levelUp3 = loadImage("assets/levelUp3.png");
  
  
  hero_sheet = loadSpriteSheet('assets/spriteSheet.png', hero_frames);
  //frame = loadSpriteSheet('assets/frame_spriteSheet.png', frame);
  
  hero_animation = loadAnimation(hero_sheet);
  //frame_animation = loadAnimation(hero_sheet);
  
  bkgrTrack1 = loadSound("assets/levelOne.mp3");
  bkgrTrack2 = loadSound("assets/levelTwo.mp3");
  bkgrTrack3 = loadSound("assets/level0.mp3");
  bkgrTrack0 = loadSound("assets/trance.wav");
}



function setup() {
  createCanvas(1920, 1080);

  levelUp = new Group();
  hero_sprite = new Group();

  // Create the Player sprite and add it's animations
  hero_sprite = createSprite(100, height / 3);
  hero_sprite.scale = .2
  hero_sprite.addAnimation('hero',hero_animation);
  //hero_sprite.addImage(loadImage("assets/hero3.png"));
  hero_sprite.setCollider('rectangle',-20,0,150,95);
  hero_sprite.friction = 0.9;
  //hero_sprite.debug = true;
  //hero_sprite.friction = 0.8;

  
      platform = createSprite(500, 600, 0, 0);
      platform.scale = 1;
      platform.addImage(loadImage("assets/platform10.png"));
  
      platform2 = createSprite(800, 600, 0, 0);
      platform2.addImage(loadImage("assets/platform2b.png"));
      //platform2.setCollider('rectangle',0,0,600,25);
      //platform2.debug = true;
      
      platform3 = createSprite(800, 600, 0, 0);
      platform3.addImage(loadImage("assets/platform3b.png"));
  
  levelUp = createSprite(1460, 425, 20, 1000);
  levelUp.addImage(loadImage("assets/levelUp.png"));
  //levelUp.debug = false;
  
  
  
  secret = createSprite(900, 975, 100, 30);
  //secret.setCollider('rectangle',0,0,600,25);
  secret.scale = 1;
  secret.addImage(loadImage("assets/secretPlatform1.png"));
  //secret.debug = true;
  


  frame = loadImage("assets/frame.png");

  hero_sprite.depth = 5;
}

function draw() {

  switch (gameState) {
    case 'startUp':
      background(intro);
      break;


    case 'levelOne':
      levelOne();
      break;

    case 'levelTwo':
      levelTwo();
      break;

    case 'levelThree':
      levelThree();
      break;
      
    case 'levelSecret':
      level000();
      break;
      
    case 'win':
      background(home);
      break;




    case 'intro':
      background('255');
      //text('timer to lvl1', width / 2, height / 2);
      //only runs the first time through the coutdown
      if (countDowntimer === 0) {
        countDowntimer = frameCount;
      }
      var flooredCount = floor((frameCount - countDowntimer) / 20);

      //advance to level 2
      if (flooredCount > 3) {
        platform2.remove ();
      }
      break;


    case 'countDown1':
      background(levelUp2);
      //only runs the first time through the coutdown
      if (count1Downtimer === 0) {
        count1Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count1Downtimer) / 20);
      //advance to level 2
      if (flooredCount > 3) {
        gameState = "levelTwo";

        hero_sprite.position.x = 100;
      }
      break;




    case 'countDown2':
      background(levelUp3);
      //only runs the first time through the coutdown
      if (count2Downtimer === 0) {
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer) / 20);
      //advance to level 2
      if (flooredCount > 3) {
        gameState = "levelThree";
        hero_sprite.position.x = 100;
      }
      break;
      
    case 'countDownSecret':
      background(home);
      //only runs the first time through the coutdown
      if (count2Downtimer === 0) {
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer) / 20);
      //advance to level 2
      if (flooredCount > 3) {
        gameState = "levelSecret";
        hero_sprite.position.x = 1000;
      }
      break;

}

}


function keyTyped() {
  if (key === 'x') {
    gameState = 'levelThree';
    bkgrTrack1.setVolume(0.1);
    bkgrTrack1.loop();
  }
  
  if (keyCode  === UP_ARROW)
  {hero_sprite.velocity.y = -200;}
  return false;
  
}


function levelOne(){


  //clear();
  platform2.remove ();
  platform3.remove ();
  background(bkgr);

 // fill(255);
  //textSize(400)
  

  
  //text(hero_sprite.velocity.x,100,100);
  secretdraw = true;
  secret.overlap(hero_sprite,level000);
  if(secretdraw){
    
    /*
      platform2 = createSprite(1500, 575, 0, 0);
      
      platform2.addImage(loadImage("assets/trance4.png"));
      platform2.setCollider('rectangle',0,0,600,25);
      platform2.debug = true;*/
      
        var offset = 15;
    if(secret.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset)==false)
    hero_sprite.velocity.y += GRAVITY;
    
    
    while(secret.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset))
    {
    hero_sprite.position.y--;
    hero_sprite.velocity.y = 0;;
    }
  /*
  //use the standing frame if the character velocity drops below a certain amount
  if(hero_sprite.velocity.x < 0.1 && hero_sprite.velocity.x > -0.1){
    //hero_sprite.changeAnimation('hero');
    //if close to the mouse, don't move
    hero_sprite.velocity.x = 0;
  }
  */
  
  //CAMERA ROLLING, LIGHTS, ACTION.
  /*
  if(hero_sprite.position.x < width){
    camera.position.x  = width - 200;
    
  }else{
  */

  
  
  //hero_sprite.velocity.x = 0;
  

  
  if (keyIsDown(LEFT_ARROW))
    hero_sprite.velocity.x = 0;
    //hero_sprite.scale = .5;
    
    
  if (keyIsDown(RIGHT_ARROW))
    hero_sprite.velocity.x += 1;
    //hero_sprite.scale = .5;
    
  if (keyIsDown(DOWN_ARROW))
    hero_sprite.velocity.x = 0;
    
  if (keyIsDown(UP_ARROW) )
    hero_sprite.velocity.y = -5;

  /////////////////////////////////////////////////////////////////
  
/*
  
    //I can just check a point against a collider
  if(levelUp.overlapPoint(hero_sprite.position.x, hero_sprite.position.y)){
      //hero_sprite.remove();
      gameState = 'countDown1';
      
  }
  */
  
  levelUp.overlap(hero_sprite,level1Clear);

  hero_sprite.overlap(platform, groundTest);
  
  //powerHit.overlap(hero_sprite,powerUp);
  
  var offset = 15;
    if(platform.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset)==false)
    hero_sprite.velocity.y += GRAVITY;
    
    
    while(platform.overlapPixel(hero_sprite.position.x, hero_sprite.position.y+offset))
    {
    hero_sprite.position.y--;
    hero_sprite.velocity.y = 0;;
    }
    
    
    
    //DIE FALLING DOWN
      /*if(hero_sprite.position.x < width){
    camera.position.x  = width - 1000;
    
  }else{*/
    if(hero_sprite.position.y > height){
    stroke(255);
    textSize(225);
    text("DEAD",hero_sprite.position.x - 600, height/2);
    }
    //LET HERO FALL
    camera.position.x = hero_sprite.position.x;
  if(hero_sprite.position.y < height-400){
    camera.position.y = hero_sprite.position.y;
  }
  
   /* 
  if(hero_sprite.position.x < 2000){
    gameState = 'levelOne';
    
  }else{
  gameState = 'countDown1';
  }*/


  //draw the sprite
  drawSprites();
  camera.off();
  image(frame,0,0);
  }
}
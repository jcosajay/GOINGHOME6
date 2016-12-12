function groundTest(hero,platform){
  groundTouch = true;
}

function groundTest(hero,platform2){
  groundTouch = true;
}

function groundTest(hero,platform3){
  groundTouch = true;
}

function level1Clear(hero_sprite,levelUp){
   //remove all the platforms
   //do{platform.remove (); }
   //while(platform !== undefined);
   
   //set the countdownTimer
   //countdownTimer = frameCount;
   
   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   //camera.off();
   
   //clear all the enemies in the group
//do{enemies1[0].remove (); }
//while(enemies1[0] !== undefined);
   //clear the group
//enemies1.clear();
   //change the countdown state
    platform.remove ();
    gameState = "countDown1";
    bkgrTrack1.stop();  
    bkgrTrack2.setVolume(0.1);
    bkgrTrack2.loop();
 
}

function level2Clear(hero_sprite,levelUp){
   //remove all the platforms
   //do{platforms[0].remove (); }
   //while(platforms[0] !== undefined);
   
   //set the countdownTimer
   //countdownTimer = frameCount;
   
   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   //camera.off();
   
   //clear all the enemies in the group
//do{enemies1[0].remove (); }
//while(enemies1[0] !== undefined);
   //clear the group
//enemies1.clear();

//secret.remove();

   //change the countdown state
   gameState = "countDown2";
    bkgrTrack2.stop();  
    bkgrTrack3.setVolume(0.1);
    bkgrTrack3.loop();
 
}

function level3Clear(hero_sprite,levelUp){
   //remove all the platforms
   //do{platforms[0].remove (); }
   //while(platforms[0] !== undefined);
   
   //set the countdownTimer
   //countdownTimer = frameCount;
   
   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   //camera.off();
   
   //clear all the enemies in the group
//do{enemies1[0].remove (); }
//while(enemies1[0] !== undefined);
   //clear the group
//enemies1.clear();
   //change the countdown state
    //bkgrTrack3.stop();
    //bkgrTrack1.setVolume(0.1);
    //bkgrTrack1.loop();
    gameState = "win";
 
}

function level000Clear(hero_sprite,secret){
   //remove all the platforms
   //do{platforms[0].remove (); }
   //while(platforms[0] !== undefined);
   
   //set the countdownTimer
   //countdownTimer = frameCount;
   secret = false;   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   //camera.off();
   
   //clear all the enemies in the group
//do{enemies1[0].remove (); }
//while(enemies1[0] !== undefined);
   //clear the group
//platform.clear();
   //change the countdown state
   gameState = "countDownSecret";
    bkgrTrack1.stop();
    bkgrTrack2.stop();
    bkgrTrack3.stop();
    bkgrTrack0.setVolume(0.1);
    bkgrTrack0.loop();
 
}

//function powerHit(){

//}
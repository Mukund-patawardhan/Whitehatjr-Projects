var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bf4797d5-24d5-44ed-a3c9-ddcdd22961af","a3d18fb3-367e-4edf-8272-1de10a988670","c7d3915f-c9db-4ed1-a5a8-6a55a761bc29","4834a443-5b2f-4492-a169-a485e15b026a","a803a187-15be-4115-acde-a46d565736fa","eb1333b7-e571-40c7-8b5a-a7e8e741a82b","21034466-2528-4d3d-819c-3ab8444d5fb1","77bd20ff-dcaf-4b37-9acf-5dd31d5f1c4d","f3e198c5-4fc3-4b85-a375-41145f1eccf2","b4bfd55a-b250-4a69-bf49-bf19de001b97","a1fb4fab-8a36-4423-aea7-6e302ed81d62","58cc1414-5f6e-4cf2-99b6-61ea9b950dac","467a94a8-581f-49e2-9491-a0db21c87ac1"],"propsByKey":{"bf4797d5-24d5-44ed-a3c9-ddcdd22961af":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":5,"version":"lFIjHl5nHcFfdp0zgsBqVH22Q9IF9jAE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/bf4797d5-24d5-44ed-a3c9-ddcdd22961af.png"},"a3d18fb3-367e-4edf-8272-1de10a988670":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":104,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"eyy6WZoSgMW_efbKpNiTTcLC9RuviD2M","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":200},"rootRelativePath":"assets/a3d18fb3-367e-4edf-8272-1de10a988670.png"},"c7d3915f-c9db-4ed1-a5a8-6a55a761bc29":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":3,"version":"d9oOJN_Vg9mAFUvkvefOBtJw_lc9DXVv","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/c7d3915f-c9db-4ed1-a5a8-6a55a761bc29.png"},"4834a443-5b2f-4492-a169-a485e15b026a":{"name":"enemy4","sourceUrl":null,"frameSize":{"x":104,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"zg9_jvZL7sTSZqoMXSeXlM3mH60zetaw","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":200},"rootRelativePath":"assets/4834a443-5b2f-4492-a169-a485e15b026a.png"},"a803a187-15be-4115-acde-a46d565736fa":{"name":"space","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"X9_6dh4DBnLAK1GfNngzW2vQUdRdBHRt","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/a803a187-15be-4115-acde-a46d565736fa.png"},"eb1333b7-e571-40c7-8b5a-a7e8e741a82b":{"name":"e2bullet","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":1,"version":"6RQc7nAxSEoPqyawMCw8kMmG3mToKppw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/eb1333b7-e571-40c7-8b5a-a7e8e741a82b.png"},"21034466-2528-4d3d-819c-3ab8444d5fb1":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"WZF7R_xL6Sqn55GrMHJAxGFEQCZXnFYf","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/21034466-2528-4d3d-819c-3ab8444d5fb1.png"},"77bd20ff-dcaf-4b37-9acf-5dd31d5f1c4d":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"x6b9h4bLiL0PqcdgnyDKk1Cd6DVY7iof","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/77bd20ff-dcaf-4b37-9acf-5dd31d5f1c4d.png"},"f3e198c5-4fc3-4b85-a375-41145f1eccf2":{"name":"e4bullet","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"HIWm8A4q4V3W.p2DGV6M8S90F868wDlB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/f3e198c5-4fc3-4b85-a375-41145f1eccf2.png"},"b4bfd55a-b250-4a69-bf49-bf19de001b97":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"oFh1JcFYJsfFP0t5yXln7rmJeMQ_82LM","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/b4bfd55a-b250-4a69-bf49-bf19de001b97.png"},"a1fb4fab-8a36-4423-aea7-6e302ed81d62":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"UZgx5DR3dTO88WmYm3tJKuCoTTVN5Yf9","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/a1fb4fab-8a36-4423-aea7-6e302ed81d62.png"},"58cc1414-5f6e-4cf2-99b6-61ea9b950dac":{"name":"player","sourceUrl":"assets/api/v1/animation-library/byKmuyd3J8uw_LqYWhgqtyr0PrisoAlY/category_characters/spike_bot.png","frameSize":{"x":116,"y":157},"frameCount":2,"looping":true,"frameDelay":2,"version":"byKmuyd3J8uw_LqYWhgqtyr0PrisoAlY","loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":157},"rootRelativePath":"assets/api/v1/animation-library/byKmuyd3J8uw_LqYWhgqtyr0PrisoAlY/category_characters/spike_bot.png"},"467a94a8-581f-49e2-9491-a0db21c87ac1":{"name":"spike_top_1","sourceUrl":"assets/api/v1/animation-library/NqgYGnYsb8PBWgNZRJydg1Lss3TbP84y/category_obstacles/spike_top.png","frameSize":{"x":51,"y":87},"frameCount":1,"looping":true,"frameDelay":2,"version":"NqgYGnYsb8PBWgNZRJydg1Lss3TbP84y","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":87},"rootRelativePath":"assets/api/v1/animation-library/NqgYGnYsb8PBWgNZRJydg1Lss3TbP84y/category_obstacles/spike_top.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

                        
// Create a sprite
var space=createSprite(200,200,400,400);
space.setAnimation("space");
// var player = createSprite(190, 375,20,20);
var player = createSprite(200, 360);
player.setAnimation("player");
player.scale=0.5;
space.scale=2;
space.y=space.width/2;
var enemy1=createSprite(200,10,10,10);
enemy1.setAnimation("enemy1");
enemy1.scale=0.5;
enemy1.velocityX=-7;
enemy1.velocityY=2; 

var life=20;

var enemy10group=createGroup();
var enemy10agroup=createGroup();
var enemy10bgroup=createGroup();
var enemy20group=createGroup();
var e20bulletgroup=createGroup();
e20bulletgroup.setVelocityXEach(30);
e20bulletgroup.setVelocityXEach(30);
var e40bulletgroup=createGroup();
e40bulletgroup.setVelocityXEach(30);
e40bulletgroup.setVelocityXEach(30);
var enemy20agroup=createGroup();
var enemy20bgroup=createGroup();
var enemy20cgroup=createGroup();
var enemy40group=createGroup();
var enemy40agroup=createGroup();
var enemy40bgroup=createGroup();
var enemy40cgroup=createGroup();

var gamestate="start"; 
var e2b="0";
var e4b="0";

var pbullet=createSprite(200,560);
pbullet.setAnimation("spike_top_1");
pbullet.scale=0.55;

var e2bullet=createSprite(200,200);
e2bullet.setAnimation("e2bullet");
e2bullet.scale=0.55;
var e4bullet=createSprite(200,200);
e4bullet.setAnimation("e4bullet");
e4bullet.scale=0.55;

var bb1=createSprite(2000,2500,101,10);
bb1.setAnimation("animation_3");
bb1.scale=0.55;
var bb2=createSprite(2000,2500,101,10);
bb2.setAnimation("animation_1");
bb2.scale=0.55;
var bb3=createSprite(2000,2500,101,10);
bb3.setAnimation("animation_2");
bb3.scale=0.55;
var bb4=createSprite(2000,2500,101,10);
bb4.setAnimation("animation_4");
bb4.scale=0.55;

var invisible=createSprite(200,300,400,11);
invisible.visible=false;

var enemy2=createSprite(100,50,10,10);
enemy2.setAnimation("enemy2");
enemy2.scale=0.5;
enemy2.velocityX=3;
enemy2.velocityY=1;
var enemy4=createSprite(300,50,10,10);
enemy4.setAnimation("enemy4");
enemy4.scale=0.5;
enemy4.velocityX=-3;
enemy4.velocityY=1;
var enemy3=createSprite(-2000,100,10,10);
enemy3.setAnimation("enemy3");
enemy3.scale=1;
enemy3.velocityX=-11;

function draw() {
  background("black");
  
  
  pbullet.x=player.x;
  pbullet.visible=true;
   if(pbullet.x===player.x){
   pbullet.visible=false; 
  }
  if(keyDown("space")){
    pbullet.visible=true;
    pbullet.velocityY=-24;
  }
  if (pbullet.y<0){
    pbullet.y=player.y+100;
    pbullet.x=player.x;
    pbullet.velocityY=0;
  }
  if(pbullet.visibile===false){
    pbullet.x=player.x;
    pbullet.y=player.y+100;
  }
  
  e2bullet.visible=true;
   if(e2bullet.x===enemy2.x&&e2bullet.y===enemy2.y){
   e2bullet.visible=false; 
  }
  
    e2bullet.visible=true;
    e2bullet.velocityY=10;
  
  if (e2bullet.y>660){
    e2bullet.y=enemy2.y;
    e2bullet.x=enemy2.x;
  e2bullet.visibile=true;
  e2bullet.velocityY=0;
  }
  bb1.visible=true;
   if(bb1.x===enemy3.x&&bb1.y===enemy3.y){
   bb1.visible=false; 
  }
  
    bb1.visible=true;
    bb1.velocityY=10;
  
  if (bb1.y>960){
  bb1.y=enemy3.y;
  bb1.x=enemy3.x;
  bb1.visibile=true;
  bb1.velocityY=0;
  }
  bb2.visible=true;
   if(bb2.x===enemy3.x&&bb2.y===enemy3.y){
   bb2.visible=false; 
  }
  
    bb2.visible=true;
    bb2.velocityY=13;
    bb2.velocityX=-10;
  
  if (bb2.y<-260){
  bb2.y=enemy3.y;
  bb2.x=enemy3.x;
  bb2.visibile=true;
  bb2.velocityY=0;
  }
  if (bb2.y>500){
  bb2.y=enemy3.y;
  bb2.x=enemy3.x;
  bb2.visibile=true;
  bb2.velocityY=0;
  }
  bb2.visible=true;
   if(bb2.x===enemy3.x&&bb2.y===enemy3.y){
   bb2.visible=false; 
  }
  
    bb3.visible=true;
    bb3.velocityY=13;
    bb3.velocityX=10;
  
  if (bb3.y<-260){
  bb3.y=enemy3.y;
  bb3.x=enemy3.x;
  bb3.visibile=true;
  bb3.velocityY=0;
  }
  if (bb3.y>800){
  bb3.y=enemy3.y;
  bb3.x=enemy3.x;
  bb3.visibile=true;
  bb3.velocityY=0;
  }
 
  e4bullet.visible=true;
   if(e4bullet.x===enemy4.x&&e4bullet.y===enemy4.y){
   e4bullet.visible=false; 
  }
  
    e4bullet.visible=true;
    e4bullet.velocityY=10;
  
  if (e4bullet.y>660){
    e4bullet.y=enemy4.y;
    e4bullet.x=enemy4.x;
  e4bullet.visibile=true;
  e4bullet.velocityY=0;
  }
  if(pbullet.isTouching(enemy2)){
    enemy2.destroy();
    playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
  }
  if(pbullet.isTouching(enemy4)){
    enemy4.visible=false;
    enemy4.x=-100000;
    e4bullet.x=100000;
    enemy4.lifetime=1;
    playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
  }
  if(pbullet.isTouching(enemy1)){
    enemy1.destroy();
    playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
  }
  pbullet.visible=true;
  if(e2bullet.isTouching(player)){
    life=life-1;
    e2bullet.y=2000;
   playSound("assets/category_explosion/retro_game_take_damage_chirp_3.mp3");
  }
  if (enemy1.isTouching(player)){
    life=life-1;
    enemy1.destroy();
    playSound("assets/category_explosion/puzzle_game_break_magic_03.mp3");
  }
  if(e4bullet.isTouching(player)){
    life=life-1;
    e4bullet.y=2000;
    playSound("assets/category_explosion/retro_game_take_damage_chirp_3.mp3");
  }
  space.velocityY=-2;
  if (space.y===0){
    space.y=space.width/2;
  }
  if (bb1.isTouching(player)){
   playSound("assets/category_explosion/vibrant_deep_wet_explosion.mp3");
   life=life-1;
   bb1.y=2000;
  }
  if (bb2.isTouching(player)){
    life=life-1;
    bb2.y=2000;
    playSound("assets/category_explosion/vibrant_deep_wet_explosion.mp3");

  }
  if (bb3.isTouching(player)){
    life=life-1;
    bb3.y=2000;
    playSound("assets/category_explosion/vibrant_deep_wet_explosion.mp3");
  }
  
  if (pbullet.isTouching(enemy3)){
   enemy3.x=500;
   enemy3.velocityX=-11;
   playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
  }

  if (gamestate==="end2"){
    playSound("assets/category_male_voiceover/you_lose_male.mp3");
    enemy20group.destroyEach();
    enemy10group.destroyEach();
    enemy40group.destroyEach();
    gamestate="over";
  }
  
  if (enemy10group.isTouching(pbullet)){
    enemy10group.setLifetimeEach(1);
       playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");

  }
  if (enemy10agroup.isTouching(pbullet)){
    enemy10agroup.setLifetimeEach(1);
       playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");

  }
  if (enemy10bgroup.isTouching(pbullet)){
    enemy10bgroup.setLifetimeEach(1);
       playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");

  }
  if (enemy20cgroup.isTouching(pbullet)){
    enemy20group.setLifetimeEach(1);
       playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
    e20bulletgroup.destroyEach();
  }
  if (enemy20agroup.isTouching(pbullet)){
    enemy20agroup.setLifetimeEach(1);
       playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
    e20bulletgroup.destroyEach();
  }
  if (enemy20bgroup.isTouching(pbullet)){
    enemy20bgroup.setLifetimeEach(1);
       playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
    e20bulletgroup.destroyEach();
  }
  if (enemy40cgroup.isTouching(pbullet)){
    enemy40group.setLifetimeEach(1);
       playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
    e40bulletgroup.destroyEach();
  }
  if (enemy40agroup.isTouching(pbullet)){
    enemy40agroup.setLifetimeEach(1);
       playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
    e40bulletgroup.destroyEach();
  }
  if (enemy40bgroup.isTouching(pbullet)){
    enemy40bgroup.setLifetimeEach(1);
       playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit.mp3");
    e40bulletgroup.destroyEach();
  }
  
  if (World.frameCount%300===0){
    enemy3.x=400;
    enemy3.velocityX=-3;
  }

    console.log(World.frameCount+"_"+enemy3.x);
  createEdgeSprites();
  enemy1.bounceOff(edges);
  enemy2.bounceOff(edges);
  enemy4.bounceOff(edges);
  enemy2.bounceOff(invisible);
  enemy4.bounceOff(invisible);
 enemy10_summon();
enemy10group.bounceOff(edges);

enemy10agroup.bounceOff(edges);

enemy10bgroup.bounceOff(edges);
enemy20_summon();
enemy20group.bounceOff(edges);

enemy20agroup.bounceOff(edges);

enemy20bgroup.bounceOff(edges);
enemy40_summon();
enemy40group.bounceOff(edges);

enemy40agroup.bounceOff(edges);

enemy40bgroup.bounceOff(edges);

e20bullet_summon();

  
    e20bulletgroup.visible=true;
    e20bulletgroup.velocityY=10;
  
  if (e20bulletgroup.y>660){
    e20bulletgroup.y=enemy20group.y;
    e20bulletgroup.x=enemy20group.x;
  e20bulletgroup.visibile=true;
  e20bulletgroup.velocityY=10;
  }
    if(World.frameCount%50===0){
    e20bulletgroup.setVelocityYEach(randomNumber(-150,150));
    e20bulletgroup.setVelocityXEach(randomNumber(-150,150));
    e2b="0";
    e20bulletgroup.depth=200;
    }
    if(e2b==="0"){
    e20bulletgroup.bounceOff(invisible);
    e20bulletgroup.setVisibleEach(false);
  }
    
    if(e2b==="1"){
     if(e20bulletgroup.isTouching(player)){
      life=life-1;
      e20bulletgroup.destroyEach();
      playSound("assets/category_explosion/retro_game_take_damage_chirp_3.mp3");
  }
    }

  if(e20bulletgroup.isTouching(enemy20group)){
    e20bulletgroup.setVisibleEach(true);
    e20bulletgroup.setVelocityXEach(0);
    e20bulletgroup.setVelocityYEach(10);
    e2b="1";
  } 
  e20bulletgroup.bounceOff(rightEdge);
  e20bulletgroup.bounceOff(leftEdge);
  e20bulletgroup.bounceOff(topEdge);
  if(e20bulletgroup.isTouching(bottomEdge)){
    e20bulletgroup.destroyEach();
  }
e40bullet_summon();

  
    e40bulletgroup.visible=true;
    e40bulletgroup.velocityY=10;
  
  if (e40bulletgroup.y>660){
    e40bulletgroup.y=enemy40group.y;
    e40bulletgroup.x=enemy40group.x;
  e40bulletgroup.visibile=true;
  e40bulletgroup.velocityY=10;
  }
    if(World.frameCount%50===0){
    e40bulletgroup.setVelocityYEach(randomNumber(-150,150));
    e40bulletgroup.setVelocityXEach(randomNumber(-150,150));
    e40bulletgroup.depth=-2000;
    e4b="0";
    }
    if(e4b==="0"){
    e40bulletgroup.bounceOff(invisible);
    e40bulletgroup.setVisibleEach(false);
    }
    if(e4b==="1"){
     if(e40bulletgroup.isTouching(player)){
      life=life-1;
      e40bulletgroup.destroyEach();
      playSound("assets/category_explosion/retro_game_take_damage_chirp_3.mp3");
  }
    }

  if(e40bulletgroup.isTouching(enemy40group)){
    e40bulletgroup.setVisibleEach(true);
    e40bulletgroup.setVelocityXEach(0);
    e40bulletgroup.setVelocityYEach(10);
    e4b="1";
  } 
  e40bulletgroup.bounceOff(rightEdge);
  e40bulletgroup.bounceOff(leftEdge);
  e40bulletgroup.bounceOff(topEdge);
  if(e40bulletgroup.isTouching(bottomEdge)){
    e40bulletgroup.destroyEach();
  }

enemy10group.bounceOff(edges);
  // Move the player sprite about the Mouse X direction.
  player.x=World.mouseX;
  drawSprites();
  
  textSize(70);
  textFont("jokerman");
  text("LIFE:-"+life,70,240);
}
function enemy10_summon(){
  if(World.frameCount%70===0){
   var enemy10=createSprite(200,10,10,10);
enemy10.setAnimation("enemy1");
enemy10.scale=0.5;
enemy10.velocityX=-7;
enemy10.velocityY=2;
enemy10group.add(enemy10);
enemy10.bounceOff(edges);
  }
}

function enemy20_summon(){
  if(World.frameCount%100===0){
   var enemy20=createSprite(100,10,10,10);
enemy20.setAnimation("enemy2");
enemy20.scale=0.5;
enemy20.velocityX=3;
enemy20.velocityY=1;
enemy20group.add(enemy20);
enemy20cgroup.add(enemy20);
enemy20.bounceOff(edges);

  }
}
function e20bullet_summon(){
  if (World.frameCount%80===0){
    var e20bullet=createSprite(randomNumber(0,400),randomNumber(0,250),200,200);
    e20bullet.setAnimation("e2bullet");
    e20bullet.scale=0.55;
    e20bullet.bounceOff(edges);
    e20bullet.depth=20000;
  e20bulletgroup.add(e20bullet);
    e20bullet.visible=false;
  }
}

function enemy40_summon(){
  if(World.frameCount%100===0){
   var enemy40=createSprite(300,10,10,10);
enemy40.setAnimation("enemy4");
enemy40.scale=0.5;
enemy40.velocityX=-3;
enemy40.velocityY=1;
enemy40group.add(enemy40);
enemy40cgroup.add(enemy40);
enemy40.bounceOff(edges);

  }
}

function e40bullet_summon(){
  if (World.frameCount%80===0){
    var e40bullet=createSprite(randomNumber(0,400),randomNumber(0,250),200,200);
    e40bullet.setAnimation("e4bullet");
    e40bullet.scale=0.55;
    e40bullet.bounceOff(edges);
    e40bullet.depth=20000;
  e40bulletgroup.add(e40bullet);
    e40bullet.visible=false;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

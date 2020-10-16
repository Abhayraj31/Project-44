var canvas ;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;
var player1,tank1,tank2,tank3,tank4,tank5,tank6;
var bulletGroup,bullet1;
var player_direction;
var bullet_img;
var block_Img;
var blockGroup;
var score=0;
var player1R_img,player1L_img,player1U_img,player1D_img;
var tank_img,Etank_img;
var eagle_img,eagle;
function preload(){
  player1R_img=loadImage('Images/TankR.gif')
  player1L_img=loadImage('Images/TankL.gif')
  player1D_img=loadImage('Images/TankD.gif')
  player1U_img=loadImage('Images/TankU.gif')

  bulletR_img=loadImage('Images/bulletR.gif')
  bulletL_img=loadImage('Images/bulletL.gif')
  bulletU_img=loadImage('Images/bulletU.gif')
  bulletD_img=loadImage('Images/bulletD.gif')

  block_Img=loadImage('Images/Block.gif')
   tank_img=loadImage('Images/HTankD.gif')
   Etank_img=loadImage('Images/HTankD2.gif')
   eagle_img=loadImage('Images/home.jpg')
}

function setup(){
  canvas = createCanvas(600, 600);

  player1=createSprite(200,300,40,40);
  player1.addImage(player1U_img);
  player1.shapeColor= "red" ; 
  blockGroup=new Group();

  tank1=createSprite(50,25,40,40);
tank1.shapeColor="black";
tank1.addImage(tank_img);

tank2=createSprite(100,50,40,40);
tank2.shapeColor="black";
tank2.addImage(Etank_img);
tank3=createSprite(300,50,40,40);
tank3.shapeColor="black";
tank3.addImage(tank_img);
bulletGroup=new Group();

eagle=createSprite(300,580,70,70);
eagle.addImage(eagle_img);
}


function draw(){
  background("blue");
  move(player1);
  
  tank1.setVelocity(random(1,8),random(1,8));
  tank2.setVelocity(random(1,8),random(1,8));
  tank3.setVelocity(random(1,8),random(1,8));
  bullet1=createSprite(50,25,50,50)
  bullet1.x=tank1.x;
  bullet1.y=tank1.y;
  bullet1.velocityY=tank1.velocityY;
bullet1.velocityX=tank1.velocityX;
createBlocks();

blockGroup.displace(player1);
blockGroup.displace(tank1);
blockGroup.displace(tank2);
blockGroup.displace(tank3);

if(bulletGroup.overlap(tank1)){
  tank1.destroy();
  bullet1.destroy();
  tank4=createSprite(200,25,40,40);
  tank4.shapeColor="black"
  tank4.setVelocity(random(1,8),random(1,8));
  tank4.addImage(tank_img);
  blockGroup.displace(tank4);
  if(bulletGroup.overlap(tank4)){
    tank4.destroy();
    score=score+100;
  }
  score=score+100;
}
if(bulletGroup.overlap(tank2)){
  tank2.destroy();
  tank5=createSprite(200,25,40,40);
  tank5.shapeColor="black"
  tank5.setVelocity(random(1,8),random(1,8));
  tank5.addImage(tank_img);
  blockGroup.displace(tank5);
  if(bulletGroup.overlap(tank5)){
    tank5.destroy();
    score=score+100;
  }
  score=score+100
}
if(bulletGroup.overlap(tank3)){
  tank3.destroy();
  tank6=createSprite(200,25,40,40);
  tank6.shapeColor="black"
  tank6.setVelocity(random(1,8),random(1,8));
  tank6.addImage(tank_img);
  blockGroup.displace(tank6);
    if(bulletGroup.overlap(tank6)){
      tank6.destroy();
      score=score+100;
    }
  score=score+100;  
}

text("Score:"+score,500,10);
  
  drawSprites();
  }
function move(player)
{
  if(keyIsDown(LEFT_ARROW))
{
  player.x=player.x-10;
  player.addImage(player1L_img)
player_direction="L"
}
if(keyIsDown(RIGHT_ARROW))
{
  player.x=player.x+10;
  player.addImage(player1R_img);
player_direction="R"
}
if(keyIsDown(DOWN_ARROW))
{
  player.y=player.y+10;
 player.addImage(player1D_img);
 player_direction="D"
}
if(keyIsDown(UP_ARROW))
{
  player.y=player.y-10;
  player.addImage(player1U_img)
  player_direction="U"
}
}


function createBlocks(){
  block1=createSprite(150,250,50,50);
  block1.addImage(block_Img);
  block1.scale=2
  block2=createSprite(150,200,50,50);
  block2.addImage(block_Img);
  block2.scale=2
  block3=createSprite(150,150,50,50); 
  block3.addImage(block_Img);
  block3.scale=2
  block4=createSprite(350,250,50,50);
  block4.addImage(block_Img);
  block4.scale=2
  block5=createSprite(350,200,50,50);
  block5.addImage(block_Img);
  block5.scale=2
  block6=createSprite(350,150,50,50);
  block6.addImage(block_Img);
  block6.scale=2
  block7=createSprite(250,500,50,50);
  block7.addImage(block_Img);
  block7.scale=2
  block8=createSprite(200,500,50,50);
  block8.addImage(block_Img);
  block8.scale=2
  block9=createSprite(300,500,50,50);
  block9.addImage(block_Img);
  block9.scale=2
  block10=createSprite(350,500,50,50);
  block10.addImage(block_Img);
  block10.scale=2
  block11=createSprite(100,350,50,50);
  block11.addImage(block_Img);
  block11.scale=2
  block12=createSprite(400,350,50,50);
  block12.addImage(block_Img);
  block12.scale=2
  block13=createSprite(100,100,40,40);
  block13.addImage(block_Img);
  block13.scale=2
  block14=createSprite(100,60,40,40);
  block14.addImage(block_Img);
  block14.scale=2
  block15=createSprite(400,100,40,40);
  block15.addImage(block_Img);
  block15.scale=2
  block16=createSprite(400,60,40,40);
  block16.addImage(block_Img);
  block16.scale=2
  blockGroup.add(block1);
  blockGroup.add(block2);
  blockGroup.add(block3);
  blockGroup.add(block4);
  blockGroup.add(block5);
  blockGroup.add(block6);
  blockGroup.add(block7);
  blockGroup.add(block8);
  blockGroup.add(block9);
  blockGroup.add(block10);
  blockGroup.add(block11);
  blockGroup.add(block12);
  blockGroup.add(block13);
  blockGroup.add(block14);
  blockGroup.add(block15);
  blockGroup.add(block16);
}

function createBullet()
{
  var bullet=createSprite(200,300,5,5);
  bullet.x=player1.x;
  bullet.y=player1.y;
 
  bulletGroup.add(bullet);
  switch(player_direction){
    case "L":bullet.addImage(bulletL_img);
    bullet.velocityX=-8;
    break
    case "R":bullet.addImage(bulletR_img);
    bullet.velocityX=8;
    break
    case "U":bullet.addImage(bulletU_img);
    bullet.velocityY=-8;
    break
    case "D":bullet.addImage(bulletD_img);
    bullet.velocityY=8;
    break
  }
}


function keyPressed(){
  if(keyCode === 32){
    createBullet();
  }
}

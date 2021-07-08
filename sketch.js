var bullets,wall,thickness;
var speed,weight;

function setup(){
createCanvas(1600,400);
thickness=random(22,83);
bullets=createSprite(50,200,50,10);
wall=createSprite(1200,200,thickness,100);

speed=random(223,321);
weight=random(30,52);

bullets.velocityX=speed;

}

function draw(){
    background("black");

    if(wall.x-bullets.x<(bullets.width+wall.width)/2){
        bullets.velocityX=0;
        var deformation=0.5*weight*speed*speed/22509;
        if(deformation>180){
            bullets.shapeColor="white";

        }
        if(deformation<180 && deformation>100){
            bullets.shapeColor="white";
        }
        if(deformation<100){
            bullets.shapeColor="white";
        }
    }
    if(hasCollided(bullets,wall)){
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

        if(damage>10){
            wall.shapeColor="red";

        }
        if(damage<=10){
            wall.shapeColor="green";
        }
    }
          drawSprites();
}



        function hasCollided(ibullet,iwall){
        bulletsRightEdge=ibullet.x+ibullet.width;
        wallLeftEdge=iwall.x;
        if(bulletsRightEdge>=wallLeftEdge){
            return true;
        }
        else{
            return false;
        }
        }
        
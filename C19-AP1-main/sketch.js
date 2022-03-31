var torre, imagemTorre;
var porta,imagemPorta,portaGrupo;
var grade,imagemGrade,grupoGrade;
var fantasma,imagemFantasma;
var blocoInvisivel, blocoInvisivelGp;
var gameState = "play"

function preload(){
  imagemTorre = loadImage("tower.png");
  imagemPorta = loadImage("door.png");
  imagemGrade = loadImage("climber.png");
  imagemFantasma = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  spookySound.loop();
  torre = createSprite(300,300);
  torre.addImage("tower",imagemTorre);
  torre.velocityY = 1;

}

function draw(){
  background(0);
  
    
    if(torre.y > 400){
      torre.y = 300
    }
   

    
    //climbersGroup.collide(ghost);
   
    
    drawSprites();
  }
  



    
   
  



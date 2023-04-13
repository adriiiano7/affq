var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista
  path=createSprite(200,200) 
//adicione uma imagem para a pista
  path.addImage(pathImg)
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(70,580,20,20)
//adicione uma animação de corrida para ele
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  if (leftBoundary.isTouching(boy)) {
    boy.destroyEach();
    }
    if (rightBoundary.isTouching(boy)) {
      boy.destroyEach();
      }
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();

}

 }

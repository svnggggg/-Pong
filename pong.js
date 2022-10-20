class pelota {
  constructor(pX, pY, tam) {
    this.pX = pX;
    this.pY = pY;
    this.velX = 3;
    this.velY = 2;
    this.tam = tam;
  }

  mostrar() {
    fill(255);
    ellipse(this.pX, this.pY, this.tam);
  }

  rebotarX() {
    this.velX = -this.velX;
  }

  rebotarY() {
    this.velY = -this.velY;
  }

  colisionX(paleta) {
    return this.pX + this.tam > paleta.pX && this.pX < paleta.ancho + paleta.pX + 7;
  }

  colisionY(paleta) {
    return this.pY + this.tam > paleta.pY && this.pY < paleta.alto + paleta.pY;
  }

  colision(paleta) {
    return this.colisionX(paleta) && this.colisionY(paleta);
  }
}

class Paleta {
  constructor(pX, tam) {
    this.pX = pX;
    this.pY = height / 2;
    this.vY = 2;
    this.ancho = tam;
    this.alto = tam * 5;
  }

  show() {
    rect(this.pX, this.pY, this.ancho, this.alto);
  }

  moverArr() {
    this.pY -= 10;
  }

  moverAb() {
    this.pY += 10;
  }
}

let pelota1 = new pelota(300,300,34);
let paleta1;
let paleta2;
let score1 = 0;
let score2 = 0;

function setup() {
  createCanvas(600, 600);
  ellipseMode(CORNER);
  paleta1 = new Paleta(0,18);
  paleta2 = new Paleta(582,18);
}

function draw() {
  background(0);
  fill("#FFFFFF");
  text("Pong",285,35);
  textSize(20);
  pelota1.mostrar();
  
  fill("#FFC107");
  paleta1.show();
  
  fill("#21FF2A");
  paleta2.show();
 
  pelota1.pX -= pelota1.velX;
  pelota1.pY += pelota1.velY;
  
  fill("#FFC107");
  text("Puntos: " + score1, 20, 20);
  
  fill("#21FF2A");
  text("Puntos: " + score2, 500, 20);
  
  // paleta 1
  if (keyIsPressed && key == "q") {
    paleta1.moverArr();
  }
  if (keyIsPressed && key == "a") {
    paleta1.moverAb();
  }

  // paleta 2
  if (keyIsPressed && key == "w") {
    paleta2.moverArr();
  }
  if (keyIsPressed && key == "s") {
    paleta2.moverAb();
  }

  // colision contra paletas
  if (pelota1.colision(paleta1)) {
    pelota1.rebotarY();
    pelota1.rebotarX();
    pelota1.velX = -3;
    pelota1.velY = -3;
  }

  if (pelota1.colision(paleta2)) {
    pelota1.rebotarY();
    pelota1.rebotarX();
    pelota1.velX = 3;
    pelota1.velY = 3;
  }

  // chocar contra techo
  if (pelota1.pY > height -20 || pelota1.pY < 10) {
  pelota1.rebotarY();
  }

  // sumar puntos al score si la bola toca la pared y spawnear pelotita Bv
  if (pelota1.pX > width) {
    score1++;
    pelota1.pX = width / 2;
    pelota1.pY = height / 2;
    pelota1.velX =-3;
    pelota1.velY = 3;
  }
  
  if (pelota1.pX < 0){
    score2++;
    pelota1.pX = width / 2;
    pelota1.pY = height / 2;
    pelota1.velX = 3;
    pelota1.velY = -3;
  }

  //  la paleta no pasa del techo
  if (paleta1.pY < 1){
    paleta1.pY = 2;
  }  
  if (paleta1.pY > height - 85){
    paleta1.pY = height - 90;
  }

  if (paleta2.pY < 1){
    paleta2.pY = 2;
  }
  if (paleta2.pY > height - 85){
    paleta2.pY = height - 90;
  }
}
class Paleta{
    constructor (pX){
      this.pX= pX
      this.pY= height /2
      this.vY= 2
    }

    show(){

      fill(`#9804F9`)
      rect(this.pX,this.pY,20,100)

    }

    moverArr(){
      this.pY = this.pY+2
    }

    moverAb(){

    }
  }

  let paleta1
  let paleta2

  function setup() {
    createCanvas(600,600);
    paleta1 = new Paleta(30)
    paleta2 = new Paleta(290)
  }

  function draw() {
    background(0)
    paleta1.show()
    paleta2.show()
    if(keyIsPressed && key == 's'){
      paleta1.moverArr()
    }

  }
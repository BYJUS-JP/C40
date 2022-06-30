var input;
var playButton;
var titleImg;
var greeting;


class Form {

  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("jugar");
    this.titleImg = createImg("./assets/title.png", "Titulo del juego");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //  MÉTODO setElementsPosition
  setElementsPosition(){
    this.titleImg.position(120, 50);
    this.input.position(width/2 - 110, height/2 - 8);
    this.playButton.position(width/2 - 90, heigth/2 - 20);
    this.greeting.position(width/2 - 300, heigth/2 -100);
  }

  //  MÉTODO setElementsStyle
  setElementsStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //  MÉTODO display
  display(){
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
  
  handleMousePressed(){
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `Hola ${ this.input.value()}
      </br>espera a que otro jugador se una...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.imput.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }
  

}

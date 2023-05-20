class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  saludar() {
    console.log("hola, soy una " + this.name);
  }
}


class Snake extends Animal {
  skill: string
  constructor(name: string) {
    super(name);
    this.skill = "poison";
  }

  mostrarHabilidad() {
    console.log("La habilidad es... " + this.skill);
  }
}

let snake = new Snake("snake");
snake.saludar();
snake.mostrarHabilidad();

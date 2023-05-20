export class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  saludar() {
    console.log("hola, " + this.name);
  }
}
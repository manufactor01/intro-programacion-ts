class Hello {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  saludar() {
    return "saludos " + this.message;
  }
}

let hello = new Hello("Typescript");
console.log(hello.saludar());

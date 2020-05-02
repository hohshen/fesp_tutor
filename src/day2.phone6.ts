import { Phone } from "./common";

export class Iphone6 extends Phone {
  name: string = "iphone6";
  constructor() {
    super();
    console.log(`${this.name} is ${this.status}`)
  }
  public read(owner: string) {
    console.log(`${owner} use ${this.name} to read books`)
  }
  public play(owner: string) {
    console.log(`${owner} use ${this.name} to play games`)
  }
  public broken() {
    this.status = "broken";
    console.log(`${this.name} is broken!!!`)
  }
}
/**
 * Day7 小明的注入管理
 * 隔了幾天後,他發現他有許許多多東西需要做DI,
 * 他再想,是不是有什麼方法可以把這些DI做集中管理呢?
 * 於是他找到了inversify 套件,在container統一做注入
*/

import "reflect-metadata";
import { Container, injectable, inject } from "inversify";

/* Interface */
export interface PlayDevice {
  status: string;
  game(owner: string): any;
  broken(): any;
}

export interface Person {
  name: string;
  play(): void;
}

/* TYPE */
export const TYPES = {
  PLAYDEVICE: Symbol.for("PLAYDEVICE"),
  PERSON: Symbol.for("PERSON")
}

/* Entities */
@injectable()
export class Iphone11 implements PlayDevice {
  name: string = "iphone11";
  status: string = "working";
  constructor() {
    console.log(`${this.name} is ${this.status}`)
  }
  public game(owner: string) {
    console.log(`${owner} use ${this.name} to play games`)
  }
  public broken() {
    this.status = "broken";
    console.log(`${this.name} is broken!!!`)
  }
}

@injectable()
export class Switch implements PlayDevice {
  name = "switch";
  status = "working";
  constructor() {
    console.log(this.name + " is " + this.status)
  }
  public game(owner: string) {
    console.log(`${owner} use ${this.name} to play games`)
  }
  public broken() {
    this.status = "broken";
    console.log(`${this.name} is broken!!!`)
  }
}

@injectable()
export class Ming implements Person {
  @inject(TYPES.PLAYDEVICE) private playDevice: PlayDevice;
  name = "Ming";
  private age: number = 18;
  public play() {
    this.playDevice.game(this.name);
  }
}

/* Container */
function IocContainer() {
  const myContainer = new Container();
  // myContainer.bind<PlayDevice>(TYPES.PLAYDEVICE).to(Iphone11);
  myContainer.bind<PlayDevice>(TYPES.PLAYDEVICE).to(Switch);
  myContainer.bind<Person>(TYPES.PERSON).to(Ming);
  return myContainer;
};

/* Main */
function main() {
  const ming = IocContainer().get<Person>(TYPES.PERSON);
  ming.play();
}
main();

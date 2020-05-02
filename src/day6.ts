/**
 * Day6 小明的核心需求 
 * 但他仔細想想,他一天只有24小時,
 * 如果手機壞掉的話,我就玩switch,沒必要還一直讓手機和switch都注入到他身上
 * 
 * 他又開始思考了
 * 當初是不是對於手機的執念太深的,
 * 他應該要以更為抽象的概念去對待手機與switch (DIP)
 * 所以他項工程師講出了他那抽象的不得了的需求,
 * 說他的心中,應該是那最核心的價值,那迷失已久的價值,開始燃燒小明心中的小宇宙！
 * 
 * 這樣就完成了他心中最底層的理想,
 * 隨時隨地都可以更換他的玩樂工具!
 * 過程中還順便換了新玩具
 * 根本快樂似神仙阿！
*/


import { Phone, Person } from "./common";

interface PlayDevice {
  status: string;
  read(owner: string): any;
  play(owner: string): any;
  broken(): any;
}
class Iphone11 extends Phone implements PlayDevice {
  name = "iphone11";
  status = "working";
  constructor() {
    super();
    console.log(this.name + " is " + this.status)
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
class switchX implements PlayDevice {
  name = "switchX";
  status = "working";
  constructor() {
    console.log(this.name + " is " + this.status)
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

class Ming extends Person {
  name = "Ming";
  private age: number = 18;
  private readonly playDevice: PlayDevice;
  constructor(playDevice: PlayDevice) {
    super();
    this.playDevice = playDevice;
  }
  public read() {
    this.playDevice.read(this.name);
  }
  public play() {
    this.playDevice.play(this.name);
  }
}
namespace Day6 {
  let playDevice: PlayDevice;
  let ming: Ming;
  playDevice = new Iphone11();
  playDevice.broken();
  if (playDevice.status === 'broken') {
    playDevice = new switchX();
  }
  ming = new Ming(playDevice);
  ming.play();
}



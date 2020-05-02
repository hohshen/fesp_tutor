
export class NintendoSwitch {
  name = "switch"
  status = "working";
  constructor() {
    console.log(this.name + " is " + this.status)
  }
  public read(owner: string) {
    console.log(owner + "use " + this.name + " to read books")
  }
  public play(owner: string) {
    console.log(owner + " use " + this.name + " to play games")
  }
  public broken() { this.status = "broken"; console.log("broken!!!") }
}
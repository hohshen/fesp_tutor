/**
 * Day5 小明買了switch
 * 經過了昨晚的改造,
 * 小明深深的感受到(IOC依賴反轉)的重要,
 * 他所依賴的手機直接注入到他身上,
 * 不需要關心自己拿什麼手機,就可以直接使用了
 * 
 * 不過...
 * 經過幾年後,switch出來的！
 * 小明漸漸把所以時間都花在switch,他幾乎替代了手機的所有內容
 * 所以小明也是小心翼翼的把ioc做好
 * 並把自己留個switch著空間給予上帝注入進來
*/

import { Person, Phone } from './common';
import { Iphone11 } from './day3.phone11';
import { Iphone6 } from './day2.phone6';
import { NintendoSwitch } from './day5.switch';

namespace Day5 {
  class Ming extends Person {
    name = "Ming";
    private age: number = 18;
    private readonly phone: Phone;
    private readonly nintendoSwitch: NintendoSwitch;
    constructor(phone: Phone, nintendoSwitch: NintendoSwitch) {
      super();
      this.phone = phone;
      this.nintendoSwitch = nintendoSwitch;
    }

    public readSwitch() {
      this.nintendoSwitch.read(this.name);
    }
    public playSwitch() {
      this.nintendoSwitch.play(this.name);
    }
    public read() {
      this.phone.read(this.name);
    }
    public play() {
      this.phone.play(this.name);
    }
  }

  let ming: Ming;
  let phone: Phone;
  let nintendoSwitch: NintendoSwitch;
  phone = new Iphone11();
  phone.broken();
  nintendoSwitch = new NintendoSwitch();
  if (phone.status === 'broken') {
    phone = new Iphone6();
  }
  ming = new Ming(phone, nintendoSwitch);
  ming.play();
  ming.playSwitch();
}

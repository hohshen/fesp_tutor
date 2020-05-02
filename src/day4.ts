/**
 * Day4 小明的反思
 * 經過了那一天後,小明好不容易才適應i11的形狀
 * 小明開始思考,假設有一天又要換手機呢？
 * 小明的內部又需要重新改造去適應其他手機的形狀呢？
 * 這樣搞下去,小明遲早有一天會被弄到壞掉.
 * 
 * 一邊喃喃自語間,他發現原來是自己太過於依賴手機了,
 * 他不想在被手機控制,要學會做自己
 * 於是他決定把控制權交給上帝來管理！(IOC控制反轉)
 * 讓上帝（programer）為他注入他的手機(DI依賴注入)
*/

import { Person, Phone } from './common';
import { Iphone11 } from './day3.phone11';
import { Iphone6 } from './day2.phone6';

namespace Day4 {
  class Ming extends Person {
    name = "Ming";
    private age: number = 18;
    private readonly phone: Phone
    constructor(phone: Phone) {
      //在這裡注入了手機
      super();
      this.phone = phone;
    }
    public read() {
      this.phone.read(this.name);
    }
    public play() {
      this.phone.play(this.name);
    }
  }

  let phone: Phone = new Iphone11();
  phone.broken();
  if (phone.status === 'broken') {
    phone = new Iphone6();
    console.log("use iphone6")
  }
  const ming: Ming = new Ming(phone);
  ming.play();
}

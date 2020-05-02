/**
 * Day3 小明換手機
 * 有了手機,小明就覺得他是世界上最快樂的人,
 * 自己根本不需要女朋友,有手機在就可以滿足了
 * 但...好景不長,
 * 他安裝了會變慢的i6更新包
 * 所有的東西都變了樣,他只好狠下心來買下了i11
 * 並且忍痛改造自己,讓自己再度變成i11的形狀
*/

import { Person } from './common';
import { Iphone11 } from './day3.phone11';

namespace Day3 {
  class Ming extends Person {
    name = "Ming";
    private age: number = 18;
    public read() {//不管做什事情都要嵌入iphone11
      const phone = new Iphone11()
      phone.read(this.name);
    }
    public play() {
      const phone = new Iphone11()
      phone.play(this.name);
    }
    //以下有100個事情...
  }

  console.log("day3...")
  const ming = new Ming()
  ming.play();
}
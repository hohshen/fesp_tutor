/**
 * Day2 小明買手機
 * 但小明作為一個人類,無法靠自己上網看書、玩遊戲,
 * 所以他就必須買一台手機來達成他的目的
 * 小明非常喜歡自己的手機,每天都牢牢控制在心裡,
 * 所以小明的身體就有了手機的形狀了
*/
import { Person } from './common';
import { Iphone6 } from './day2.phone6';

namespace Day2 {
  class Ming extends Person {
    name = "Ming";
    private age: number = 18;
    public read() {//不管做什事情都要嵌入iphone6
      const phone = new Iphone6()
      phone.read(this.name);
    }
    public play() {
      const phone = new Iphone6()
      phone.play(this.name);
    }
    //以下有100個事情...
  }

  console.log("day2...")
  const ming = new Ming()
  ming.play();
}

/**
 * Day1 小明介紹
 * 小明是一個愛看書、愛打遊戲,和做一些OOXX事情的人的人
*/
import { Person } from './common';
namespace Day1 {
  class Ming extends Person {
    name = "Ming";
    private age: number = 18;
    //還沒被實踐
    public read() { console.log("empty") }
    public play() { console.log("empty") }
    //以下有100個事情...
  }

  const ming = new Ming()
  ming.play();
}

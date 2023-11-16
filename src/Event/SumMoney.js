import { chirstmas } from './Christmas.js';
import { whenweek } from './Whenweek.js';
import { special } from './Special.js';
import { whenday } from './Whenday.js';
import { champagne } from './Champagne.js';
// 기능7. 이벤트 중복하기(금액)
export function summoney(errordate, sum, menu) {
  let money =
    chirstmas(errordate, sum) +
    whenday(menu, errordate, sum) +
    whenweek(menu, errordate, sum) +
    special(errordate, sum) +
    champagne(sum) * 25000;
  return money;
}

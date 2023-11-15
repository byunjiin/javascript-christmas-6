import { menudata } from '../Exception/MenuError.js';
// 출력-할인 전 총주문 금액
export function beforetotal(stringmenu, numbermenu) {
  let sum = 0;
  for (let i = 0; i < stringmenu.length; i++) {
    if (menudata[0][stringmenu[i]] !== undefined) {
      sum += menudata[0][stringmenu[i]] * numbermenu[i];
    }
    if (menudata[1][stringmenu[i]] !== undefined) {
      sum += menudata[1][stringmenu[i]] * numbermenu[i];
    }
    if (menudata[2][stringmenu[i]] !== undefined) {
      sum += menudata[2][stringmenu[i]] * numbermenu[i];
    }
    if (menudata[3][stringmenu[i]] !== undefined) {
      sum += menudata[3][stringmenu[i]] * numbermenu[i];
    }
  }
  return sum;
}

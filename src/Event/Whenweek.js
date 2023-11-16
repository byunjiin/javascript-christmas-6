import { week } from '../Data/DateData.js';
import { menudata } from '../Exception/MenuError.js';

// 기능4. 주말 이벤트
export function whenweek(menu, errordate, sum) {
  // prettier-ignore
  const conditionM = menu.filter((mainelement) => Object.keys(menudata[1]).includes(mainelement));
  let count = 0;
  if (week.includes(+errordate) && conditionM.length > 0 && sum > 10000) {
    for (let i = 0; i < conditionM.length; i++) {
      count += menu[menu.indexOf(conditionM[i]) + 1];
    }
    return count * 2023;
  }
  return false;
}

import { day } from '../Data/DateData.js';
import { menudata } from '../Exception/MenuError.js';

// 기능4. 평일 이벤트
export function whenday(menu, errordate, sum) {
  // prettier-ignore
  const conditionD = menu.filter((dessertelement) => Object.keys(menudata[2]).includes(dessertelement));
  let count = 0;
  if (day.includes(+errordate) && conditionD.length > 0 && sum > 10000) {
    for (let i = 0; i < conditionD.length; i++) {
      count += menu[menu.indexOf(conditionD[i]) + 1];
    }
    return count * 2023;
  }
  return false;
}

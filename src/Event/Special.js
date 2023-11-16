import { star } from '../Data/DateData.js';
// 기능5. 특별일 이벤트
export function special(errordate, sum) {
  if (star.includes(+errordate) && sum > 10000) {
    return 1000;
  }
  return false;
}

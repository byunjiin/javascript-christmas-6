// 기능3. 크리스마스 디데이 이벤트
export function chirstmas(errordate, sum) {
  if (+errordate >= 1 && +errordate <= 25 && sum > 10000) {
    return 1000 + (+errordate - 1) * 100;
  }
  return false;
}

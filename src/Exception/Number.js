// 기능2. 예외처리-갯수 : 정수형이며 1~20사이 숫자
export function number(menu) {
  let temp = 0;
  let result = false; // 기본 false를 반환(오류가 아님)
  // prettier-ignore
  for (let i = 1; i < menu.length; i += 2) { // 홀수 요소만 비교
    temp += +menu[i];
    if (isNaN(menu[i]) || !(menu[i] >= 1)) { // 정수형이며 1이상(오류여야하니 반대상황으로 조건)
      result = true; // 오류인 경우 true를 반환
    }
  }
  // prettier-ignore
  if (!(temp <= 20)) {// 요소의 합이 20이상(오류여야하니 반대상황으로 조건)
    result = true; // 오류인 경우 true를 반환
  }
  return result;
}

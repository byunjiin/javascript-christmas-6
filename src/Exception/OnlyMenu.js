// 기능2. 예외처리-메뉴판 : 메뉴판에 있는 메뉴만 입력
export function onlymenu(menu, menudata) {
  let result = false; // 기본 false를 반환(오류가 아님)
  // prettier-ignore
  for (let i = 0; i < menu.length; i += 2) { // 짝수 요소만 비교
    if (!menudata.some(menudataelement=>Object.keys(menudataelement).includes(menu[i]))) {
      result = true; // 오류인 경우 true를 반환
    }
  }
  return result;
}

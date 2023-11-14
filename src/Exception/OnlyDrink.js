// 기능2. 예외처리-음료 메뉴 : 음료만 주문시 주문 불가
export function onlydrink(menu, menudata) {
  let result = false;
  // prettier-ignore
  if (menu.length/2 === (menu.filter(drinkelement => Object.keys(menudata[3]).includes(drinkelement))).length) {
    result = true;
  }
  return result;
}

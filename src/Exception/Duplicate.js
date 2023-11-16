// 기능2. 예외처리-중복메뉴 : 메뉴가 중복되게 입력되지 않아야함
export function duplicate(menu) {
  let result = false;
  for (let i = 0; i < menu.length; i += 2) {
    if (menu.filter((j) => menu[i] === j).length > 1) {
      result = true;
    }
  }
  return result;
}

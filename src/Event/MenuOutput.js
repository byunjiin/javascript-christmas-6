// 출력-주문 메뉴
export function menuoutput(menu) {
  let stringmenu = menu.filter((i) => isNaN(i));
  let numbermenu = menu.filter((i) => !isNaN(i));
  return [stringmenu, numbermenu];
}

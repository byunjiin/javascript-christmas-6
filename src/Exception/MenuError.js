import InputView from '../InputView.js';
// 기능2. 주문할 메뉴와 갯수 받아오기(에러)
export function menuerror() {
  const menu = InputView.readMenu();
  if(){
    throw('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  }
}
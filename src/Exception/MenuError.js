import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import { appetizer, drink, dssert, mainMenu } from '../Data/MenuData.js';
import { number } from './Number.js';
import { onlymenu } from './OnlyMenu.js';
import { onlydrink } from './OnlyDrink.js';
// 기능2. 주문할 메뉴와 갯수 받아오기(에러)
export async function menuerror() {
  const menudata = [appetizer, mainMenu, dssert, drink];
  const menu = await InputView.readMenu();
  const found =
    number(menu) || onlymenu(menu, menudata) || onlydrink(menu, menudata);
  if (found) {
    try {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    } catch (error) {
      OutputView.printError(error);
      return menuerror();
    }
  }
}

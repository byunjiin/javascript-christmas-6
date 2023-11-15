import { Console } from '@woowacourse/mission-utils';
import { dateoutput } from './Event/DateOutput.js';
import { menuoutput } from './Event/MenuOutput.js';
import { beforetotal } from './Event/BeforeTotal.js';
import { champagne } from './Event/Champagne.js';
import { sumlist } from './Event/SumList.js';
import { summoney } from './Event/SumMoney.js';
import { aftertotal } from './Event/AfterTotal.js';
import { badge } from './Event/Badge.js';
import { dateerror } from './Exception/DateError.js';
const OutputView = {
  printStart() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
  printDate(errordate) {
    // prettier-ignore
    Console.print(`12월 ${errordate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },
  printMenu(menu, stringmenu, numbermenu) {
    Console.print('<주문 메뉴>');
    for (let i = 0; i < menu.length / 2; i++) {
      Console.print(`${stringmenu[i]} ${numbermenu[i]}개`);
    }
    Console.print('');
  },
  printBeforeTotal() {
    Console.print('<할인 전 총주문 금액>\n');
  },
  printChampagne() {
    Console.print('<증정 메뉴>\n');
  },
  printSumList() {
    Console.print('<혜택 내역>\n');
  },
  printSumMoney() {
    Console.print('<총혜택 금액>\n');
  },
  printAfterTotal() {
    Console.print('<할인 후 예상 결제 금액>\n');
  },
  printBadge() {
    Console.print('<12월 이벤트 배지>\n');
  },
  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;

import { Console } from '@woowacourse/mission-utils';
import { champagne } from './Event/Champagne.js';
import { summoney } from './Event/SumMoney.js';
import { aftertotal } from './Event/AfterTotal.js';
import { badge } from './Event/Badge.js';
import { dateerror } from './Exception/DateError.js';
import { chirstmas } from './Event/Christmas.js';
import { whenweek } from './Event/Whenweek.js';
import { special } from './Event/Special.js';
import { whenday } from './Event/Whenday.js';

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
  printBeforeTotal(sum) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${sum.toLocaleString()}원\n`);
  },
  printChampagne(sum) {
    Console.print('<증정 메뉴>');
    if (champagne(sum)) {
      return Console.print('샴페인 1개\n');
    }
    return Console.print('없음\n');
  },
  // prettier-ignore
  printSumList(errordate, sum, menu) {
    Console.print('<혜택 내역>');
    if (chirstmas(errordate, sum)) {
      Console.print(`크리스마스 디데이 할인: -${chirstmas(errordate, sum).toLocaleString()}원`);
    }
    this.printWhen(menu, errordate ,sum)
    if(special(errordate, sum)){
      Console.print(`특별 할인: -${special(errordate, sum).toLocaleString()}원`);
    }
    if(champagne(sum)){
      Console.print(`증정 이벤트: -25,000원`);
    }
    if(!(chirstmas(errordate, sum) || whenday(menu, errordate, sum) || whenweek(menu, errordate, sum) || special(errordate, sum) || champagne(sum))){
      Console.print(`없음`);
    }
    Console.print('');
  },
  printWhen(menu, errordate, sum) {
    if (whenday(menu, errordate, sum)) {
      Console.print(
        `평일 할인: -${whenday(menu, errordate, sum).toLocaleString()}원`,
      );
    }
    if (whenweek(menu, errordate, sum)) {
      Console.print(
        `주말 할인: -${whenweek(menu, errordate, sum).toLocaleString()}원`,
      );
    }
  },
  printSumMoney() {
    Console.print('<총혜택 금액>');
  },
  printAfterTotal() {
    Console.print('<할인 후 예상 결제 금액>');
  },
  printBadge() {
    Console.print('<12월 이벤트 배지>');
  },
  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;

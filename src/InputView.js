import { Console } from '@woowacourse/mission-utils';

const InputView = {
  // prettier-ignore
  async readDate() {
    const input = await Console.readLineAsync('12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n');
    return input;
  },
  // prettier-ignore
  async readMenu() {
    const input = await Console.readLineAsync('주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n');
    let newinput = input.split( /[,-]/g); // 배열로 나눠짐(정규표현식사용)
    return newinput.map(v => v.trim()); // 문자열로 만들어서 빈칸 없애기
  },
};

export default InputView;

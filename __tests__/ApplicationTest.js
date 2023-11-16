import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';
import { chirstmas } from '../src/Event/Christmas.js';
import { whenday } from '../src/Event/Whenday.js';
import { whenweek } from '../src/Event/Whenweek.js';
import { special } from '../src/Event/Special.js';
import { champagne } from '../src/Event/Champagne.js';
import { badge } from '../src/Event/Badge.js';
import { beforetotal } from '../src/Event/BeforeTotal.js';
import { summoney } from '../src/Event/SumMoney.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();

  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(received).toContain(log);
  });
};

describe('기능 테스트', () => {
  test('모든 타이틀 출력', async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(['3', '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1']);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = [
      '<주문 메뉴>',
      '<할인 전 총주문 금액>',
      '<증정 메뉴>',
      '<혜택 내역>',
      '<총혜택 금액>',
      '<할인 후 예상 결제 금액>',
      '<12월 이벤트 배지>',
    ];

    expectLogContains(getOutput(logSpy), expected);
  });

  test('혜택 내역 타이틀과 없음 출력', async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(['26', '타파스-1,제로콜라-1']);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = ['<혜택 내역>' + LINE_SEPARATOR + '없음'];

    expectLogContains(getOutput(logSpy), expected);
  });
});

describe('예외 테스트', () => {
  test('날짜 예외 테스트', async () => {
    // given
    const INVALID_DATE_MESSAGE =
      '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';
    const INPUTS_TO_END = ['1', '해산물파스타-2'];
    const logSpy = getLogSpy();
    mockQuestions(['a', ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(INVALID_DATE_MESSAGE),
    );
  });

  test('주문 예외 테스트', async () => {
    // given
    const INVALID_ORDER_MESSAGE =
      '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';
    const INPUTS_TO_END = ['해산물파스타-2'];
    const logSpy = getLogSpy();
    mockQuestions(['3', '제로콜라-a', ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(INVALID_ORDER_MESSAGE),
    );
  });
});

describe('이벤트 테스트', () => {
  test('크리스마스 디데이 이벤트 테스트', async () => {
    // given
    const errordate = '8';
    const sum = 15000;
    const expectresult = 1700;

    // when
    const result = chirstmas(errordate, sum);

    // then
    expect(result).toEqual(expectresult);
  });
  test('평일 이벤트 테스트', async () => {
    // given
    const menu = ['초코케이크', '1'];
    const errordate = 4;
    const sum = 15000;
    const expectedresult = 2023;
    // when
    const result = whenday(menu, errordate, sum);
    // then
    expect(result).toEqual(expectedresult);
  });

  test('주말 이벤트 테스트', async () => {
    // given
    const menu = ['크리스마스파스타', '1'];
    const errordate = 1;
    const sum = 15000;
    const expectedresult = 2023;
    // when
    const result = whenweek(menu, errordate, sum);
    // then
    expect(result).toEqual(expectedresult);
  });
  test('특별 할인 이벤트 테스트', async () => {
    // given
    const errordate = 3;
    const sum = 15000;
    const expectedresult = 1000;
    // when
    const result = special(errordate, sum);
    // then
    expect(result).toEqual(expectedresult);
  });
  test('샴페인 증정 이벤트 테스트', async () => {
    // given
    const sum = 150000;
    const expectedresult = true;
    // when
    const result = champagne(sum);
    // then
    expect(result).toEqual(expectedresult);
  });
  test.each([
    [15000, '트리'],
    [20000, '산타'],
  ])('배지 이벤트 테스트', (sum, expectedresult) => {
    // when
    const result = badge(sum);
    // then
    expect(result).toEqual(expectedresult);
  });
});

describe('금액 테스트', () => {
  test('총금액 테스트', async () => {
    // given
    const stringmenu = ['초코케이크', '타파스'];
    const numbermenu = ['3', '9'];
    const expectedresult = 15000 * 3 + 5500 * 9;
    // when
    const result = beforetotal(stringmenu, numbermenu);
    // then
    expect(result).toEqual(expectedresult);
  });
  test('할인 금액 테스트', async () => {
    // given
    const errordate = 4;
    const sum = 150000;
    const menu = ['초코케이크', '1', '크리스마스파스타', '1'];
    const expectedresult = 2023 + 25000 + 1300;
    // when
    const result = summoney(errordate, sum, menu);
    // then
    expect(result).toEqual(expectedresult);
  });
});

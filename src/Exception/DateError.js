import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
// 기능1. 날짜 받아오기(예외)
export async function dateerror() {
  const date = await InputView.readDate();
  try {
    if (isNaN(date) || !(+date >= 1 && +date <= 31)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
    return date.trim(); // 빈칸 없애기
  } catch (error) {
    OutputView.printError(error); // ui로직 분리를 위해 메서드를 호출해서 사용
    return dateerror(); // 재귀, return으로 무한반복탈출
  }
}

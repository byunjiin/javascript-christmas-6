export function badge(money) {
  if (money < 5000) {
    return '없음';
  }
  if (money < 10000) {
    return '별';
  }
  if (money < 20000) {
    return '트리';
  }
  if (money >= 20000) {
    return '산타';
  }
}

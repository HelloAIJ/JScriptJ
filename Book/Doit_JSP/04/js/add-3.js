// 120P
function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  // document.write(`두 수의 합: ${sum}`); // 함수 내 실행문
  return sum;
  // 반환 값
  // 함수 밖에서 calcSum(n)을 콜링했을때 넘겨주는 값은 sum이다.
  // return 다음줄에 나오는 실행문은 무시된다. 
  // 실행을 시키고 싶은 실행문이 있을때는 리턴전에 기입
  console.log(`${calcSum()}`);
}
let num = parseInt(prompt("몇까지 더할까요?"));
// 파라미터용 변수 설정
document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);
// 함수콜링하여 반환받은 값 표출

/** return으로 내보내는 변수, 밖에서 쓸수 있나요? ㄴㄴ
 *  return이란 함수 블록 스코프에서 반환(뱉어주는)해주는 값(변수 또는 수식)인데,
 *  그 변수나 수식이 직접 나가는것으로 착각 할 수 있다. 함수를 콜링했을때 그 값이 나오니까.
 *  함수를 불렀을때 까보면 그 안에 그 값이 있다는 것 일 뿐이다.
 *  예고) 수준이 올라가면 꺼낼 수 있다. 지금은 함수로 불러라.
 */
// console.log(`${sum}`); // Uncaught ReferenceError: sum is not defined
//156P
function getGCD(n, m) {
  // 내가 입력한 두 수에서 공통된 약수를 찾고, 그 중 가장 큰 약수를 찾겠다
  let max = n > m ? n : m;
  // 파라미터 두개를 비교해서 큰 수를 max변수에 할당
  let GCD = 0;

  for (let i = 1; i <= max; i++) {
    // 최대숫자까지 반복함
    if (n % i === 0 && m % i === 0) {
      // i가 양쪽 파라미터를 나누어서 똑떨어지는 조건 = 약수
      // &&앤드조건을 통해 최대 공약수 찾아 
      GCD = i;   // 할당
      // 약수의 할당은 계속 반복이 되며, 최대 숫자까지 돌고난 마지막으로 할당한 약수가 최대공약수가 됨
    }
  }
  return GCD;
}
// console.log(`308과 20의 최대공약수 : ${getGCD(308, 20)}`);
// console.log(`45과 38의 최대공약수 : ${getGCD(45, 38)}`);

let p1 = prompt('최대공약수를 구할 첫번째 숫자 입력');
let p2 = prompt('최대공약수를 구할 두번째 숫자 입력');
console.log(`${p1}과 ${p2}의 최대공약수 : ${getGCD(p1, p2)}`);
document.write(`<p style ="text-align:left; font-size:18px; color:blue;">
# 최대공약수 : Greatest Common Divisor (GCD)<br>
// 내가 입력한 두 수에서 공통된 약수에서 가장 큰 수를 찾기 위해,<br>
// 파라미터 두개를 비교해서 큰 수를 max변수에 할당한다.<br>
function getGCD(n, m) {<br>
let max = n > m ? n : m;<br>
// GCD 선언하고<br>
let GCD = 0;<br>
// i를 최대숫자까지 반복하면서, And 조건을 통해<br>
// i가 양쪽 파라미터를 나누어 똑떨어지는 가장 큰 수를 찾도록 한다.<br>
// 할당을 반복, 최대까지 돌아 마지막으로 할당한 수가 최대공약수}<br>
for (let i = 1; i <= max; i++) {<br>
if (n % i === 0 && m % i === 0) {<br>
// GCD에 이 값을 할당하고. <br>
GCD = i;}}<br>
// return GCD로 함수 콜링 시 GCD 값 리턴하도록 한다.<br>
return GCD;}<br></p>
<P style="font-size:16px;">
이를 console.log(\`\${p1}과 \${p2}의 최대공약수 : \${getGCD(p1, p2)}\`);로 콜링하면</p>
<P>콘솔에 p1 값과 p2 값의 최대공약수 X가 출력된다.</p>`);
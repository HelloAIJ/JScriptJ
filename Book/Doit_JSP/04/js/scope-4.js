// 128P
// 전역변수 자유롭게 사용하는 법3
// 전역변수 선언하고 함수 안에서 재할당 하고 밖에서 부르는 형식으로 해도 되지만, 아예 처음부터 함수안에서 예약어를 뗀 상태로 선언하면 전역변수로 인식된다.
function greeting() {
  hi = "hello";
  // 전역 변수로 인식  
}
greeting();
document.write(`function greeting() {<br>
  hi = "hello";<br>
  // 전역 변수로 인식<br>  
}<br>
greeting();<br>
document.write(hi);<br>
// 밖에서 찍어보라고 시키면 hi가 선언된것이 인정됨<br><br> ▶  
`);
document.write(hi);
// 밖에서 찍어보라고 시키면 hi가 선언된것이 인정됨
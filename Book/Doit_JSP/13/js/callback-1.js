// function order(coffee, callback) {
//   console.log(`${coffee} 주문 접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);    
// }
// function display(result) {
//   console.log(`${result} 준비 완료 🥤 `);
// }

// order("아메리카노", display); 


function 주문(커피, 다음함수) {
  console.log(`${커피} 주문 접수`); // 주문() 콜링할 때 커피로 들어온 문자열 찍음
  setTimeout(() => { 다음함수(커피); }, 3000); //딜레이걺 
}
function 외치기(주문) {
  console.log(`${주문} 준비 완료 🥤 `);// 외치기() 콜링할 때 주문으로 들어온 문자열 찍음
}
// 1.함수를 각각 만든다
// 2.순서를 지정하면서 콜백 자리를 만든다
// 3.콜백자리를 만든 함수에 다른함수를 파라미터로 넣어서 콜링한다.
주문('초코푸라푸치노', 외치기);
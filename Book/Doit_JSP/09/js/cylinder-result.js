class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }
  volume() {
    let radius = this.diameter / 2; // 반지름 계산하기
    return (Math.PI * radius * radius * this.height).toFixed(2); // 부피 계산해서 반환
  }
  // 함수나 constructor에서 인수를 땡겨써야한다면 그 파라미터를 쓰는게 아니라 키를 써야하고, 이 객체의 키라는 개념으로 'this.해당키'라 적어줘야 해당인수를 반환받아 계산에 사용한다.
  // 객체의 값이 궁금하면 키를 물어봐야 값을 반환해주기 때문이다.
}

// let cylinder = new Cylinder(8, 10);      // 인스턴스 생성
// console.log(`원기둥의 부피는 ${cylinder.volume()}입니다.`);     // 결괏값 표시

const button = document.querySelector("button"); // [계산하기] 버튼
const result = document.querySelector("#result"); // 결괏값 표시 영역

button.addEventListener("click", function (e) {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value; // 지름값
  const height = document.querySelector("#cyl-height").value; // 높잇값

  if (diameter === "" || height === "") {
    result.innerText = `지름값과 높잇값을 입력하세요.`;
  } else {
    let cylinder = new Cylinder(parseInt(diameter), parseInt(height)); // 인스턴스 생성
    result.innerText = `원기둥의 부피는 ${cylinder.volume()}입니다.`; // 부피 계산해서 result 영역에 표시
  }
});

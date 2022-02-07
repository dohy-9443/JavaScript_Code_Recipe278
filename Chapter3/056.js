// 조건을 만족하는 배열 요소 가져오기
// 유저 정보가 담기 배열에서 ID를 기준으로 정보를 가져오고 싶을 때

// 배열.find(콜백함수)  /  콜백 함수 조건에 맞는 첫 요소
// 배열.findIndex(테스트 함수)  /  콜백 함수 조건에 맞는 첫 요소의 인덱스

// ([요소], [인덱스], [기존배열]) => 진리값  /  요소를 확인하고 진리값을 반환

// find()는 배열에서 조건을 만족하는 첫 요소를 가져온다.

const arr1 = ['곰', '사자', '여우', '원숭이'];

// 배열에서 '사자'를 가져옴
const targetUser = arr1.find(el => el === '사자');

// 아래와 같이 표기 가능
// const targetUser = arr1.find(el => {
//   return el === '사자'
// });

console.log(targetUser);


// findIndex()는 배열에서 조건을 만족하는 첫 번째 요소의 인덱스를 반환
const myArray = ['사자', '곰', '여우', '양']

// 배열에서 곰을 가져옴
const targetIndex = myArray.findIndex(function(el) {
  return el === '곰'
})

console.log(targetIndex)
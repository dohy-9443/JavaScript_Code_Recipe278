// 배열 요소 다루기 
// 배열의 각 요소 데이터를 처리하고 싶을 때
// 배열의 루프 처리 중 요소의 인덱스가 필요할 때

// for(let i = 0; i < 배열길이; i++) {}  /  for...of 루프 처리

const array = ['딸기', '귤', '사과'];

// 배열의 길이 가져오기
const arrayLength = array.length;

// 배열의 요소 데이터 처리
for (let i = 0; i < arrayLength; i++) {
  // 인덱스 i의 요소 출력
  console.log(array[i]);
}
// 배열 요소 다루기
// 배열 요소의 데이터를 처리하고 싶을 때

// 배열.forEach(콜백함수) / 배열의 요소 데이터 콜백 함수로 실행

// (요소, 인덱스, 기본배열) => {} / 요소, 인덱스, 기존 배열을 사용해 처리

// 여러 데이터를 다루는 배열은 루프 처리, 반복 처리 등 각 요소를 일괄적으로
// 처리하는 경우가 많다. forEach()는 주어진 콜백함수를 사용해 배열의 요소를
// 순서대로 처리한다. 콜백 함수는 해당 요소 데이터, 인덱스, 기존 배열 정보를
// 가져온다. 콜백 함수에서 인덱스와 기존 배열 정보는 생략할 수 있다.

const arr1 = ['딸기', '귤', '사과'];

arr1.forEach((value, index) => {
  // 인덱스와 값을 순서대로 출력
  console.log(index, value);
})

// forEach()는 for , for...of의 루프와 달리 map(), filter() 등의 반환값을 그대로
// 루프 처리할 수 있는 것이 특징이다.
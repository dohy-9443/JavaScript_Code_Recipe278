// 배열 요소 정렬 방법 지정하기

// 배열.sort([비교함수]) / 배열을 비교 함수로 정렬하기 / 반환 : 배열
// 비교함수는 생략가능

// sort() 는 비교 함수로 배열을 정렬한다. 비교 함수는 두 인수의 크리를 비교하여 정렬
// 순서를 결정 . 두 인수 (a, b)를 가지는 비교 함수의 반환값에 따라 결과는

// * (비교함수) 반환값 < 0 => a, b의 순서대로 정렬
// * (비교함수) 반환값 = 0 => 정렬 순서 변화 없음
// * (비교함수) 반환값 > 0 => b, a의 순서대로 정렬

const array = [1,2,3,3,4,5]

array.sort(function(a,b) {
  // a가 b보다 작으면 a, b의 순서로 정렬
  if (a < b) return 1;

  // a와 b가 같으면 정렬 순서 변화 없음
  if (a === b) return 0;

  // a가 b보다 크면 b , a의 순서로 정렬
  if (a > b) return -1;
})

console.log(array)
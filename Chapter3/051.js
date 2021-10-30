// 배열 요소 삭제하기
// 배열의 요소를 삭제하고 싶을 때

// 배열.shift()  /  배열 첫 위치의 요소를 삭제  /  삭제된 요소
// 배열.pop()  /  배열 마지막 위치의 요소를 작제  /  삭제된 요소

// shift()와 pop()은 초기화 이후 배열의 요소를 삭제할 때 사용한다.
// 각각 배열의 첫 요소와 마지막 요소를 삭제하며, 반환값은 삭제된 요소이다.

const arr1 = ['사과', '귤', '바나나']; // 원래 배열
const shiftedValue = arr1.shift(); // 첫 위치의 요소 삭제
console.log(shiftedValue); // 결과 : '사과' (삭제된 요소) 
console.log(arr1); // 결과 : ['귤', '바나나']

const arr2 = ['사과', '귤', '바나나']; // 원래 배열
const popedValue = arr2.pop(); // 마지막 위치의 요소 삭제
console.log(popedValue); // 결과 : '바나나' (삭제된 요소)
console.log(arr2) // 결과 : ['사과', '귤']

// 삭제 가능한 요소가 없다면 pop(), shift()의 반환값은 undefined이며, 에러는 발생하지 않는다.

const arr3 = [];
const popValue = arr3.pop();
console.log(popValue);

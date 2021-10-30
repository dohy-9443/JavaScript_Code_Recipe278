// 배열 요소 검색하기
// 배열 데이터의 특정 요소를 확인하고 싶을 때

// 배열.indexOf(검색데이터, [시작위치])  /  요소의 인덱스 위치 검색하기
// 배열.lastIndexOf(검색데이터, [시작위치])  /  끝에서부터 요소 위치 검색하기
// 배열.includes(검색데이터, [시작위치])  /  요소의 포함 여부 확인하기

// 배열 내 요소 데이터의 검색이 가능.
// indexOf()는 배열 내에서 검색 데이터가 처음 발견되는 위치(인덱스)를 반환
// lastIndexOf()는 마지막 위치(인덱스)를 반환
// 인덱스는 0부터 시작한다. 예를 들어 첫 번째 요소의 인덱스는 0이며,
// 다섯 번쨰 인덱스의 경우 인덱스 값은 4를 가진다.

const arr1 = ['사과', '바나나', '귤'];
const arr2 = [0, 2, 4, 6, 4, 2, 0];

console.log(arr1.indexOf('바나나'));
console.log(arr2.indexOf(4));
console.log(arr2.lastIndexOf(4));

// includes()는 배열 내 요소의 포함 여부를 확인
console.log(arr1.includes('바나나'));
console.log(arr2.includes(3));
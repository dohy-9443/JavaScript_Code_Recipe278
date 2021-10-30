// 배열 정의하기
// 배열을 정의하고 싶을 때
// 배열 데이터의 값을 가져오고 싶을 때

// [] 배열 정의
// 배열[인덱스]  배열 요소 데이터의 값 가져오기

const arr1 = []; // 빈 배열
const arr2 = [0, 2, 8]; // '0', '2', '8' 이 들어 있는 데이터 타입
const arr3 = ['곰', '여우']; // '곰', '여우'가 들어 있는 데이터 타입
const arr4 = [1, '곰', false]; // '1', '곰', 'false'가 들어 있는 데이터 타입
console.log(arr4);

// 배열 내 다른 배열을 저장하거나 객체를 저장
const arr5 = [[1, 1, 1], [2, 2, 2]];

// 두 개의 객체가 들어 있는 데이터 타입
const arr6 = [{id: 1, name: '곰'}, {id: 2, name: '곰'}];
console.log(arr6[1].id)

const arr7 = ['곰', '여우'];
console.log(arr7[0]);

// 배열의 데이터는 순서대로 0,1,2...의 인덱스를 가지며, 배열명[인덱스]로 데이털르 지정하여 사용할 수 있다.

// new Array()를 사용한 배열의 초기화
// 배열의 정의는 [] 이외에도 new Array()를 사용할 수 있다.

const array7 = new Array('곰', '여우');
// '곰', '여우'가 들어 있는 데이터 타입
console.log(array7[0]);
console.log(array7[1]);

const array8 = new Array(10); // 10개의 데이터를 넣을 수 있는 배열
array8[0] = '곰';
console.log(array8);
console.log(array8.length); 
// 현재는 []를 사용해 배열을 정의하는 편
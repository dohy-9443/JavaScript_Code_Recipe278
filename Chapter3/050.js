// 배열 요소 추가하기
// 배열에 요소를 추가하고 싶을 때
// 요소를 배열의 처음 혹은 마지막 부분에 추가하고 싶을 때

// 배열.unshift(요소1, 요소2, ...)  /  배열 첫 위치에 요소를 추가  /  숫자(요소 전체 개수)
// 배열.push(요소1, 요소2, ...)  /  배열 마지막 위치에 요소를 추가  /  숫자(요소 전체 개수)

// unshift() 와 push() 는 초기화 이후 배열에 요소를 추가로 삽입할 때 사용. 반환값은 추가된
// 요소를 포함한 배열 전체 요소의 개수이며, 수의 제한은 없다.

const arr1 = ['사과', '귤'];
const arr1Copy = arr1;
const arr1CopySpread = [...arr1];

console.log(`맨처음 배열(arr1): ${arr1}`);
console.log(`맨처음 배열(arr1Copy): ${arr1Copy}`);
console.log(`맨처음 배열(arr1CopySpread): ${arr1CopySpread}`);

arr1.unshift('바나나');
arr1Copy.push('딸기');

arr1CopySpread.unshift('포도');
arr1CopySpread.push('수박');

console.log(`--------------------------------------------------`)

console.log(`원래 배열(arr1): ${arr1}`);
console.log(`...연산자 없이 복사한 배열(arr1Copy): ${arr1Copy}`);
console.log(`...연산자로 복사한 배열(arr1CopySpread): ${arr1CopySpread}`)

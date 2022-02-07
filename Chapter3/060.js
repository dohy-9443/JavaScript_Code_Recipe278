// 배열 요소 알파벳순 정렬하기

// 대소문자 구분 없이 알페벳순으로 정렬하고 싶을 때

// 문자열1.localeCompare(문자열2) / 문자열1과 문자열2 비교

// 배열 sort()에서 문자열의 순서 비교는 localeCompare()를 사용. 문자 코드는
// 대소문자의 분류가 따로 되어 있기 때문에 유니코드 등을 사용하면 의도한 대로
// 정렬할 수 없다. 예를 들어, 문자 코드를 사용한 정렬은 대문자로 시작하는
// Orange가 소문자인 apple보다 앞으로 온다. localeCompare()은 대소문자 구분
// 없이 정렬할 수 있다.

// 비교 함수 없이 정렬
const array = ['grape', 'Orange', 'apple']
array.sort()

console.log(array)

// 비교 함수에 localeCompare를 사용
const array2 = ['grape', 'Orange', 'apple']
array2.sort(function(a,b) { a.localeCompare(b) })

console.log(array2)
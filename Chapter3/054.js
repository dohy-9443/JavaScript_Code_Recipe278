// 배열 요소 결합하여 문자열 만들기
// 배열 내 요소의 문자 데이터를 결합하고 싶을 때

// 배열.join(['결합문자열'])  /  배열 요소를 결합해 문자열 만들기

// join()은 배열의 요소를 결합해 문자열로 출력한다.
// 결합하는 요소 사이에 결합 문자열 지정이 가능하며,
// 생략하면 기본값인 콤마(,)가 삽입된다.

const arr1 = [2, 4, 10];
console.log(arr1.join()); // 결과: "2,4,10"(문자열)

const arr2 = ['a', 'b', 'c'];
console.log(arr2.join('')); // 결과: 'a,b,c' (문자열);
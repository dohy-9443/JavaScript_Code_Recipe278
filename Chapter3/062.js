// 조건을 만족하는 배열 요소 추출하여 새 배열 만들기

// * 유저 정보 배열에서 18세 이상인 유저의 정보만을 가져와 배열을 생성하고 싶을 때

// 배열.filter(콜백함수) / 콜백 함수 조건을 만족하는 데이터의 배열 생성 / 반환 : 배열

// filter()는 콜백 함수 조건에 만족하는 요소들을 새로운 배열로 생성.
// [10, 20, 30, 40] 배열에서 30 이상의 수를 가져와 배열을 생성하는 샘플을 확인

const newArray = [10,20,30,40].filter((item) => item >= 30)

console.log(newArray)

// 콜백 함수는 요소가 30 이상인지를 확인한다. 30 이상이면 true를 반환하고 새로운 배열의
// 요소가 된다. 콜백 함수를 다음과 같이 사용할 수도 있다.

const array2 = [10,20,30,40].filter((item) => item >= 30)

const array3 = [10,20,30,40].filter(function(item) { return item >= 30 })

console.log(array2)

console.log(array3)
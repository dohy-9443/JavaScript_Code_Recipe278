// 배열 요소 부분 변환하기
// 배열 내 요소를 다른 요소로 변환하고 싶을 때

// 배열.splice(위치, 추출개수, 요소1, 요소2, ...)  /  지정 위치 요소 추출, 요소 추가

// splice()는 지정한 위치의 요소를 추출하고 새로운 요소를 추가한다. 
// 위치를 지정하여 요소를 추가하고 싶을 떄 유용하다.

const arr3 = ['사과', '귤'];
arr3.splice(1, 0, '바나나'); // 인덱스 1의 위치에서 0개의 요소를 삭제하고, '바나나'를 추가
console.log(arr3);

const arr4 = ['사과', '귤'];
arr4.splice(1, 1, '바나나', '딸기'); // 인덱스 1의 위치에서 1개의 요소를 삭제하고
// '바나나'와 '딸기'를 추가
console.log(arr4);
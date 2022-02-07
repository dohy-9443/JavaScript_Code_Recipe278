// 배열 요소 추출하여 새 배열 만들기

// * 요소를 추출하여 새로운 배열을 만들고 싶을 때
// * 배열 요소 전체에 대한 처리 작업을 하고 싶을 때
// * ID와 이름을 가지는 객체 배열에서 ID만 가지는 배열을 새로 만들고 싶을 때

// 배열.map(콜백함수) / 콜백 함수로 새로운 배열 생성 / 반환 : 배열

// map()은 배열에서 요소를 추출하여 새로운 배열을 생성. 
// 또한, 배열 요소를 하나씩 처리하기 때문에 배열의 루프 처리 작업에도 활용
// 각 요소는 인수로 전달된 콜백 함수에 의해 처리된다.
// map()은 forEach()와 비슷하지만 반환값이 존재

const idList = [4, 10, 20]

const userIdList = idList.map((item) => `userId_${item}`)

console.log(userIdList)

// 콜백 함수는 요 데이터 이외에도 인덱스와 기존 배열을 인수로 받을 수 있음
const idArr = [3, 8, 12]

const idArrList = idArr.map((item, index) => `userId_${index+1}_${item}`)

console.log(idArrList)


const apiResponseData = [
  {id: 10, name: '곰'},
  {id: 21, name: '사자'},
  {id: 31, name: '여우'}
]

const idApi = apiResponseData.map((item) => item.id)

// 이렇게도 작성 가능

// const idApi = apiResponseData.map((item) => {
//   return item.id
// })

// const idApi = apiResponseData.map((item) => {
//   const {id} = item

//   return id
// })

console.log(idApi)
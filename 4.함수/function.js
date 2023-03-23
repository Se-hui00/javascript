// 함수

{ // 1.함수 선언문
  function sum(v1, v2) {
    return v1 + v2;
  }
    //함수 호출 > 함수 실행
  const result = sum(10, 20);
  console.log("result = " + result);
  console.log(`result = ${result}`); //역따옴표. 문자열 표현 < 권장
}
{ // 2.함수 표현식
  const sum = function(v1, v2) {
    return v1 + v2;
  }
    // 함수 호출 > 함수 실행
  const result = sum(10, 20);
  console.log("result = " + result);
  console.log(`result = ${result}`);
}
{ // 3.화살표 함수
  // case1)
  const sum = (v1, v2) => {
    return v1 + v2;
  }
  // case2)
  const sum2 = (v1, v2) => v1 + v2;
    // 함수 호출 > 함수 실행
  const result = sum1(10, 20);
  const result2 = sum2(10, 20);
  console.log("result = " + result);
  console.log(`result2 = ${result2}`);
}
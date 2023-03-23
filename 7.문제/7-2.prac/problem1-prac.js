// 양의 정수 두 개를 입력받아 두 정수 사이의 합을 반환하는 함수
//1.선언문 2.표현식 3.화살표

//1.선언문
{
  function f(v1, v2) {
    let sum = 0;
    if(v1 < 1 || v2 < 1) {
      throw new Error(`양의 정수가 아닙니다.`);
    } else if(v1 <= v2) {
        for(let i = v1; i <= v2; i++) {
          sum += i;
        }
    } else {
        for(let i = v2; i <= v1; i++) {
          sum += i;
        }
    }
    return sum;
  }
  try {
    const result = f(1, 10);
    console.log(`result = ${result}`);
  } catch(e) {
      console.error(e.message);
  } finally {
      console.log(`함수 선언문 끝`);
  }
}

//2.함수 표현식
{
  const f = function(v1, v2) {
    let sum = 0;
    if(v1 < 1 || v2 < 1) {
      throw new Error(`양의 정수가 아닙니다.`);
    } else if(v1 <= v2) {
        for(let i = v1; i <= v2; i++) {
          sum += i;
        }
    } else {
        for(let i = v2; i <= v1; i++) {
          sum += i;
        }
    }
    return sum;
  }
  try {
    const result = f(1, 9);
    console.log(`result = ${result}`);
  } catch(e) {
      console.error(e.message);
  } finally {
      console.log(`함수 표현식 끝`);
  }
}

//3.화살표 함수
{
  const f = (v1, v2) => {
    let sum = 0;
    if(v1 < 1 || v2 < 1) {
      throw new Error(`양의 정수가 아닙니다.`);
    } else if(v1 <= v2) {
        for(let i = v1; i <= v2; i++) {
          sum += i;
        }
    } else {
        for(let i = v2; i <= v1; i++) {
          sum += i;
        }
    }
    return sum;
  }
  try {
    const result = f(2, 10);
    console.log(`result = ${result}`);
  } catch(e) {
      console.error(e.message);
  } finally {
      console.log(`화살표 함수 끝`);
  }
}
//문제1) 1~10까지의 합을 구하시오.
{console.log(`문제1) 1~10까지의 합`)}
//1) for문
{
  let sum = 0;
  for(let i = 1; i <= 10; i++) {
    sum += i; //sum = sum + i;
  }
  // console.log('for문에서의 합 = ' + sum);
  console.log(`1) for문에서의 합 : ${sum}`);
}

//2) while문
{
  let sum = 0;
  let i = 1;      //초기화
  while(i <= 10) {//조건식
    sum += i;
    i++;          //증감식
  }
  console.log(`2) while문에서의 합 : ${sum}`);
}

//3) do~while문
{
  let sum = 0;
  let i = 1;      //초기화
  do {
    sum += i;
    i++;          //증감식
  }
  while(i <= 10); //조건식
  console.log(`3) doWhile문에서의 합 : ${sum}`);
}


//문제2) 1~10까지의 짝수의 합을 구하시오. (단, for~of문 사용)
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;
  for(let ele of arr) {
    if(ele % 2 == 0) {
     sum += ele;
    }
    // console.log(ele);
  }
  console.log(`문제2) 1~10까지의 짝수의 합 : ${sum}`);
}
// {
//   let sum = 0;
//   for(let i = 0; i <= 10; i++) {
//     if(i % 2 == 0) {
//       sum += i;
//     }
//   }
//   console.log(`문제2) 1~10까지의 짝수의 합 : ${sum}`);
// }


//문제3) 1~10까지의 값을 배열에 저장하고 홀수의 합과 짝수의 합을 구하시오. (단, for~of문 사용)
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sumOfEven = 0;
  let sumOfOdd = 0;
  for(let ele of arr) {
    if(ele % 2 == 0) {
      sumOfEven += ele;
    }
    else {
      sumOfOdd += ele;
    }
  }
  console.log(`문제3-1) 1~10까지의 짝수의 합 : ${sumOfEven}`);
  console.log(`문제3-2) 1~10까지의 홀수의 합 : ${sumOfOdd}`);
}
// {
//   const arr = new Array();
//   let i = 0;
//   while(i < 10) {
//     arr.push(i + 1);
//     i++;
//   }
//   let sum = 0;
//   for(let ele of arr) {
//     if(ele % 2 != 0) {
//       sum += ele;
//     }
//   }
//   // let sum = 0;
//   // for(let j = 1; j <= arr.length; j++) {
//   //   if(j % 2 != 0) {
//   //     sum += j;
//   //   }
//   // }
//   console.log(`문제3) 1~10까지의 홀수의 합 : ${sum}`);
// }


//문제4) 두 개의 양의 정수값을 매개값으로 입력받아 두 정수 사이의 합을 반환하는 함수를 구현하시오.
{console.log(`문제4) 두 정수값을 입력받아 사이의 합을 반환하기`)}
//1) 함수 정의문
{
  function f(v1, v2) {
    if(v1 < 1 || v2 < 1) {
      //예외가 발생하면 함수를 즉시 종료하고 호출한 곳으로 예외 객체를 전달한다.
      throw new Error('양의 정수가 아닙니다.');
    }
    let sum = 0;
    for(let v = v1; v <= v2; v++) {
      sum += v;
    }
    return sum;
  }
  try {
    let result = f(2, 11);
    console.log(`result = ${result}`);
  } catch(e) {
    console.error(e.message);
  } finally {
    console.log('예외 발생 유무와 상관없이 실행되는 절');
  }
}
// {
//   function f(v1, v2) {
//     let sum = 0;
//     if(v1 <= v2) {
//       for(let i = v1; i <= v2; i++) {
//         sum += v1;
//       }
//     }
//     else {
//       for(let i = v2; i <= v1; i++) {
//         sum += v2;
//       }
//     }
//     return sum;
//   }
//   let result = f(3, 14);
//   console.log(`1) 함수 정의문에서의 result : ${result}`);
// }

//2) 함수 표현식
{
  const f = function(v1, v2) {
    if(v1 < 1 || v2 < 1) {
      //예외가 발생하면 함수를 즉시 종료하고 호출한 곳으로 예외 객체를 전달한다.
      throw new Error('양의 정수가 아닙니다.');
    }
    let sum = 0;
    for(let v = v1; v <= v2; v++) {
      sum += v;
    }
    return sum;
  }
  try {
    const f2 = f;
    let result = f2(2, 11);
    console.log(`result = ${result}`);
  } catch(e) {
    console.error(e.message);
  } finally {
    console.log('예외 발생 유무와 상관없이 실행되는 절');
  }
}
// {
//   const sum = function(v1, v2) {
//     let answer = 0;
//     if(v1 <= v2) {
//       for(let i = v1; i <= v2; i++) {
//         answer += v1;
//       }
//     }
//     else {
//       for(let i = v2; i <= v1; i++) {
//         answer += v2;
//       }
//     }
//     return answer;
//   }
//   let result = sum(3, 14);
//   console.log(`2) 함수 표현식에서의 result : ${result}`);
// }

//3) 화살표 함수
{
  const f = (v1, v2) => {
    if(v1 < 1 || v2 < 1) {
      //예외가 발생하면 함수를 즉시 종료하고 호출한 곳으로 예외 객체를 전달한다.
      throw new Error('양의 정수가 아닙니다.');
    }
    let sum = 0;
    for(let v = v1; v <= v2; v++) {
      sum += v;
    }
    return sum;
  }
  try {
    let result = f(2, 11);
    console.log(`result = ${result}`);
  } catch(e) {
    console.error(e.message);
  } finally {
    console.log('예외 발생 유무와 상관없이 실행되는 절');
  }
}
// {
//   const sum = (v1, v2) => 
//   {let answer = 0;
//     if(v1 <= v2) {
//       for(let i = v1; i <= v2; i++) {
//       answer += v1;
//       }
//     }
//     else {
//       for(let i = v2; i <= v1; i++) {
//         answer += v2;
//       }
//     }
//     return answer;
//   }
//   let result = sum(3, 14);
//   console.log(`3) 화살표 함수에서의 result : ${result}`);
// }
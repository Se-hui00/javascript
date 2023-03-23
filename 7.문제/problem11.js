{ //문제) 배열을 입력받아 배열 요소에 수식을 적용하여 배열을 반환하는 고차함수를 구현하시오.
  { //함수 선언문
    function f(arr, g) {    //입력값 : 배열
      const tempArr = []; //반환값 : 배열이기에 빈 배열 생성

      for(let i = 0; i < arr.length; i++) {
        let j = g(arr[i]); //연산 수행
        tempArr.push(j);    //반환값에 연산 수행 결과값을 push
      }
      return tempArr;
    }

    const values = [1,2,3];
    function subF2(x) {
      return x * 2;
    }
    function subF3(x) {
      return x * 3;
    }
    let result = f(values, subF2); //f:순회역할 subF:수식전달
    console.log(result); //[2,4,6]

    result = f(values, subF3); //f:순회역할 subF:수식전달
    console.log(result); //[3,6,9]
  }

  { //화살표 함수
    function f(arr, f) {    //입력값 : 배열
      const result = []; //반환값 : 배열이기에 빈 배열 생성

      for(let i = 0; i < arr.length; i++) {
        let j = f(arr[i]); //연산 수행
        result.push(j);    //반환값에 연산 수행 결과값을 push
      }
      return result;
    }

    const values = [1,2,3];
    const subF2 = x => x * 2;
    const subF3 = x => x * 3;

    let result = f(values, subF2); //f:순회역할 subF:수식전달
    console.log(result); //[2,4,6]
    result = f(values, subF3); //f:순회역할 subF:수식전달
    console.log(result); //[3,6,9]

    result = f([1,2,3], x => x * 2);
    console.log(result);
    result = f([1,2,3], x => x * 3);
    console.log(result);
  }
}

{ //임의의 인자 x를 받아 n배수 반환
  { //함수 선언문
    function multiply(n) {
      return function(x) {
        return x * n;
      }
    }
    
    console.log('-------------');

    let result = f([1,2,3], multiply(2));
    console.log(result);
    result = f([1,2,3], multiply(3));
    console.log(result);
    result = f([1,2,3], multiply(4));
    console.log(result);
  }
  { //화살표 함수
    const multiply = n => x => x * n;
    
    let result = f([1,2,3], multiply(2));
    console.log(result);
    result = f([1,2,3], multiply(3));
    console.log(result);
    result = f([1,2,3], multiply(4));
    console.log(result);
  }
}
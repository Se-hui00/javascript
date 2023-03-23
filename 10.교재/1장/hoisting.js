//**평가 -> 실행


//1.변수 호이스팅
{
  // 1)let
  //1-1
  {
    // console.log('x = ' + x); //x is not defined. -> x의 존재를 모름
  }
  {
    // console.log('x = ' + x); //초기화 전 x에 접근 불가 -> 평가시 x의 존재 인지 = hoisting
    // let x = 10;
  
    //**호이스팅 : 코드 평가시 전역변수, 전역함수를 상위로 끌어올리는 동작
  }

  //1-2
  {
    // let x; // == let x = undefined. **초기값이 없으면 undefined로 초기화함
    // console.log('x = ' + x); //x = undifined
  }
  {
    // console.log('x = ' + x); //초기화 전 x에 접근 불가
    // let x; //**호이스팅 되지만 초기화하지는 않음
  }


  // 2)var
  {
    var x;
    console.log('x = ' + x); //x = undefined
  }
  {
    console.log('x = ' + x); //x = undefined
    var x; //호이스팅되고 undefined로 초기화함
  }
}

//2.함수 호이스팅
{
  // 1)함수 선언문
  {
    // function add(v1, v2) {
    //   return v1 + v2;
    // }
    // console.log('함수선언문 add(10, 20) = ' + add(10, 20));
  }
  {
    console.log('함수선언문 add(10, 20) = ' + add(10, 20));

    function add(v1, v2) {
      return v1 + v2;
    }
      //오류 없이 실행됨
  }

  // 2)함수 표현식
  {
    // console.log('함수표현식 add(10, 20) = ' + add(10, 20)); //초기화되지 않음

    // const add = function (v1, v2) {
    //   return v1 + v2;
    // }
  }

  {
    // console.log('함수표현식 add2(10, 20) = ' + add2(10, 20)); //초기화 되지 않음
  }
  {
    // console.log('함수표현식 add3(10, 20) = ' + add3(10, 20)); //초기화되지 않음

    // const add3 = function (v1, v2) {
    //   return v1 + v2;
    // }
  }

  // 3)화살표 함수
  {
    console.log('화살표함수 add4(10, 20) = ' + add4(10, 20)); //초기화되지 않음

    const add4 = (v1, v2) => {
      return v1 + v2;
    }
  }
}
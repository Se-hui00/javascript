{
  //1.함수 선언문
  {
    function add(v1, v2) {
      return v1 +v2;
    }
  }

  //2.함수 표현식
  {
    const add = function(v1, v2) {
      return v1 + v2;
    }
  }

  //3.화살표 함수
    //화살표 함수 바디의 실행문이 1개면 중괄호 생략 가능
    //return문만 있는 실행문은 return 생략 가능
  {
    const add = (v1, v2) => v1 + v2;
  
    const add2 = add;           //메소드 참조 : add2에 add의 주소값 할당
    console.log(add2(10, 20));  //메소드 호출 : add2 호출시 add 호출됨
  }
}


{
  //이름과 나이를 메개값으로 받아 이름과 나이를 프로퍼티로 갖는 객체 리터럴을 반환하는 함수를 정의하시오.
  
  // case1)함수 선언문
  { //1)점 접근법
    function f(name, age) { 
      const result = {}; //빈 객체 생성
      result.name = name;
      result.age = age;
      return result;
    }
    const result = f('홍길동', 10); //호출
    console.log(result);
  }
  { //2)대괄호 접근법
    function f2(name, age) { 
      const result = {}; //빈 객체 생성
      result['name'] = name;
      result['age'] = age;
      return result;
    }
    const result = f2('홍길동', 10); //호출
    console.log(result);
  }

    //3)간단하게 표현
  {
    function f3(name, age) { 
      const result = {name: name, age: age};
      return result;
    }
    function f4(name, age) { 
      const result = {name, age}; //변수이름->프로퍼티 키, 변수값->프로퍼티 값
      return result;
    }
    function f5(name, age) { 
      return {name, age};
    }
    let result = f3('홍길동', 10); //호출
    console.log(result);
    result = f4('홍길동', 10); //호출
    console.log(result);
    result = f5('홍길동', 10); //호출
    console.log(result);
  }

  // case2)함수 표현식
  {
    const f = function(name, age) {
      return {name, age};
    }
    const result = f('홍길동', 10);
    console.log(result);
  }
  
  // case3)화살표 함수
    //this -> 의미없음
  {
    let f = (name, age) => {
      return {name, age};
    }
    result = f('홍길동', 10);
    console.log(result);
  }
  {
    // let f = (name, age) => {name, age}; //undefined
    //반환값이 객체 리터럴인 경우 소괄호로 한 번 감싸준다.
    // (함수 바디문법과 혼동을 피하기 위함)
    let f = (name, age) => ({name, age});

    result = f('홍길동', 10);
    console.log(result);
  }
}
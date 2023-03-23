//symbol : 자바스크립트의 기본 타입 중 하나. ES6에서 추가됨
//  >용도 : 객체의 중복되지 않는 프로퍼티 키를 생성하기 위함
//  >symbol값 생성 방법 : 1.Symbol()함수를 사용
//                       2.Symbol.for('key') : 전역 심볼레지스트리에서 관리됨
{
  const s1 = Symbol();
  const s2 = Symbol();

  console.log(s1 == s2);
}
{
  const s1 = Symbol("name");   //소괄호()내부의 값은 디스크립션
  const s2 = Symbol("age");

  const s3 = Symbol("name");

  console.log(s1 == s2);
  console.log(s2 == s3);

  console.log(s1.description); //name
  console.log(s2.description); //age
}
{
  const obj = {
    [Symbol("name")]: '홍길동',
    [Symbol("age")]: 30
  }
  console.log(obj);
  console.log(obj[Symbol()]);
  console.log(obj);
  obj[Symbol()] = 'A'; //요소 추가
  console.log(obj);
  console.log(obj['Symbol("name")']);

  console.log('--------------');
  for(let prop in obj) {
    console.log(prop);
  }

  console.log(Object.keys(obj));
  console.log(Object.getOwnPropertySymbols(obj));

  for(let prop of Object.getOwnPropertySymbols(obj)) {
    console.log(obj[prop]);
  }
}

{ 
  { //일반 심볼
    const name1 = Symbol('name');
    const name2 = Symbol('name');

    console.log(name1 == name2); //false
  }
  { //전역 심볼
    const name1 = Symbol.for('name');
    const name2 = Symbol.for('name');

    console.log(name1 == name2); //true

    //전역 심볼 값으로 키를 찾는 방법
    console.log(Symbol.keyFor(name1)); //name
    console.log(Symbol.keyFor(name2)); //name
  }
  { //상수값 정의
    { //case1)
      const Direction = {
        UP : 1,
        DOWN : 2,
        LEFT : 3,
        RIGHT : 4
      }
      const x = Direction.UP; //1
        //const x = 1;과 같다.
    }
    { //case2)
      const Direction = {
        UP : Symbol('UP'),
        DOWN : Symbol('DOWN'),
        LEFT : Symbol('LEFT'),
        RIGHT : Symbol('RIGHT')
      }
      const x = Direction.UP; //?
        //특정된 값으로 대체할 수 없다 -> 일괄된 코드 작성 가능
    }
  }
}
//구조분해 : 배열, 객체의 요소를 변수에 개별 할당할 수 있는 문법
{
  //1. 배열
  
  { //1)일반적인 방법 
    const arr = [1,2,3,4,5];
  
      //1,2번째 요소를 변수에 담으려면
    const x = arr[0];
    const y = arr[1];
    console.log(x, y);
  }
  
  { //2)배열 구조분해 : 인덱스 순서에 따라 변수에 개별 할당
    { // case1) 
      const arr = [1,2,3,4,5];
      const [x,y] = arr;
      console.log(x, y);
    }
    { // case2) 
      const arr = [1,2,3,4,5];
      const [x,y,z,...k] = arr;
      console.log(x, y, z, k);
      console.log(k[0], k[1]);
    }
  }

  //2.객체

  { //1)일반적인 방법 : 객체 프로퍼티 값을 개별 변수에 저장
    const person = {name:'홍길동', age:30, blood:'A'};
    
    const name = person.name;
    const age = person.age;
    const blood = person['blood'];

    console.log(name, age, blood);
  }

  { //2)객체 구조분해 : 객체 프로퍼티 값을 개별 변수에 저장하는 문법
    {
      const person = {name:'홍길동', age:30, blood:'A'};
    
      const {name, age, blood} = person; //객체 프로퍼티가 일치하는 프로퍼티를 찾아 프로퍼티 값을 할당함
      console.log(name, age, blood);
    }
    { //2-1)변수 이름을 다른 걸로 쓰고 싶다
      // ->객체 리터럴 프로퍼티 키와 다른 이름의 변수를 사용하는 예
        const person = {name:'홍길동', age:30, blood:'A'};
        
        const {name:a, age:b, blood:c} = person;
        console.log(a, b, c);
    }

    { //2-2)리터럴 프로퍼티 키에 없는 값을 추가하고 싶은 경우
      // ->일치하는 프로퍼티 키가 없는 경우 기본값을 설정할 수 있다.
      {//case1)
        const person = {name:'홍길동', age:30, blood:'A'};
    
      const {name, age, blood, national = '미국'} = person;
      console.log(name, age, blood, national);
      }
      {//case2)
        const person = {name:'홍길동', age:30, blood:'A'};
      
        const {name:a, age:b, blood:c, national:d = '미국'} = person;
        console.log(a, b, c, d);
      }
    }
  }
}
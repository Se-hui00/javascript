//Object.keys() : 객체의 프로퍼티 키만을 추출하여 배열로 반환
//Object.values() : 객체의 프로퍼티 값만을 추출하여 배열로 반환 
//Object.entries() : 객체의 프로퍼티 키, 프로퍼티 값 한 쌍을 요소로 갖는 배열을 반환

const people = [{
	name: 'Alberto',
	age: 27
},{
	name: 'Caroline',
	age: 27
},{
	name: 'Josh',
	age: 31
}];


const student = {name:'홍길동', age:20, blood:'A'};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));


//값을 출력하려면
console.log(student['name'], student['age'], student['blood']);
//  ->프로퍼티 값이 많으면? 일일이 나열해야 함.
{//  -->간편하게 나타내기
  {//  case1)
    const propertiyKeys = Object.keys(student);
    for(let ele of propertiyKeys) {
      console.log(ele);
    }
  }
  {//  case2)
    for(let ele of Object.entries(student)) {
      console.log(ele[0], ele[1]);
    }
  }
}


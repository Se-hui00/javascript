{
  // const x = 10;
  // x = 20; //재할당
  // console.log('x = ' + x); //const는 재할당 불가
}

{
  const person = {
    name:'홍길동',
    age:30
  }
  console.log(person);

  person['name'] = '홍길순';
  console.log(person);
    //'홍길순'으로 변경됨
    //객체를 참조하고 있을 때 객체의 프로퍼티를 수정하는 건 재할당이 아님.
    //참조하는 번지수는 동일하므로
  
  // person = { //재할당 -> const는 재할당 불가
  //   name:'홍길남',
  //   age:40
  // }
}
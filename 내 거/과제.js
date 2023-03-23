//map, filter, reduce, forEach, sort, find

{
  const people = [{
    name:'홍길동',
    age:10,
    gender:'남',
    blood:'A'
  },
  {
    name:'홍길서',
    age:14,
    gender:'여',
    blood:'B'
  },
  {
    name:'홍길남',
    age:25,
    gender:'남',
    blood:'AB'
  },
  {
    name:'홍길북',
    age:40,
    gender:'여',
    blood:'O'
  }]


  //1.map
  //이름만을 추출하여 배열로 반환하시오.
  const mapArr = people.map(ele => (ele['name']));
  console.log(mapArr);

  //2.filter
  //성별이 남자인 요소만을 추출하여 배열로 반환하시오.
  const filterArr = people.filter(ele => {  
    if(ele['gender'] == '남') {
      return ele['name'];
    }
  });
  console.log(filterArr);

  // const exampleArr = ['선생님', '경찰관', '의사', '소방관', '프리랜서', '변호사', '백수'];
  // const filterArr2 = exampleArr.filter({(value:string) });
  // console.log(filterArr2);

  //3.reduce
  //각 요소의 나이의 총 합을 구하시오.


  //4.forEach


  //5.sort
  //각 요소의 이름별로 오름차순 정렬하여 배열로 반환하시오.
  // const exampleArr = ['홍길동', '홍길서', '홍길남', '홍길북'];
  // const sortArr2 = exampleArr.sort();
  // console.log(sortArr2);

  // const sortArr = people.sort(function(a, b) {
  //   if(a < b) return 1;
  //   else if(a > b) return -1;
  //   else if(a == b) return 0;
  // });
  // console.log(sortArr);
  
  

  //6.find
}
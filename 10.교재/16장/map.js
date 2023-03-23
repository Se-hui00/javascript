//* Map vs 객체 리터럴{}
//  1. map은 이터러블 객체
//  2. map은 객체를 키로 가질 수 있다.
//  3. map의 유틸리티 메소드를 사용할 수 있다.


{
  //생성
  //  case1)
  const map = new Map();
  //  case2)
  const map2 = new Map([['student','학생'],['teacher','교사'],['chair','의자']]);
                        //2차원 배열로 삽입
  console.log(map2);
  //  case3)
  const dic = ([['student','학생'],['teacher','교사'],['chair','의자']]);
  const map3 = new Map(dic);
  console.log(map3);
  
  //요소 추가
  map.set('student','학생'); //key, value
  map.set('teacher','교사');
  map.set('chair','의자');
  console.log(map);
  map.set('teacher','교사'); //key 중복 불가
  console.log(map);

  //요소 수
  console.log(map.size);

  //요소 조회 by key
  const value = map.get('student');
  console.log(value);

  //요소 삭제
  map.delete('chair'); //삭제할 key값 입력
  console.log(map);

  //전체요소 삭제
  map.clear();
  console.log(map);

  //요소 존재 유무 체크 by key
  const isExist = map3.has('student');
  console.log(isExist);

  //요소 조회
  //  1)keys
  console.log(map3.keys());
  //  2)values
  console.log(map3.values());
  for(let value of map3.values()) {
    console.log(value);
  }
  //  3)entries
  console.log(map3.entries());
  for(let entry of map3.entries()) {
    console.log(entry);
    console.log(entry[0], entry[1]);
  }
  //  4)forEach
  map3.forEach((v,k,m) => {console.log(v,k,m)});
}
//Array.prototype.reduce() 사용
//문제1) 배열요소를 모두 합산하는 코드를 구현하시오. Array.prototype.reduce() 사용
{
  { //함수 선언문
    const arr = Array.of(1,2,3,4,5);

    function f(acc, curr, currIdx, arr) {
      console.log(acc, curr, currIdx, arr);
      
      //return이 정의되지 않았을 경우 : return undefined;와 같다
      //  1회 : acc=0,         curr=1, currIdx=0, arr=[1,2,3,4,5]
      //  2회 : acc=undefined, curr=2, currIdx=1, arr=[1,2,3,4,5]
      
      return acc + curr;
    }
    const result = arr.reduce(f, 0);
    console.log(result);
  }
  { //화살표 함수
    const arr = Array.of(1,2,3,4,5);

    const f = (acc, curr) => acc + curr;
    
    const result = arr.reduce(f, 0);
    console.log(result);
  }
}

//문제2) 배열의 모든 요소 중 최대값을 구하시오.
{
  {
    const arr = Array.of(3,2,5,4,1);

    const result = arr.reduce((acc, curr) => {
      
      //1회 : acc=0, curr=3
      //2회 : acc=3, curr=2
      //3회 : acc=3, curr=5
      //4회 : acc=5, curr=4
      //5회 : acc=5, curr=1
      //최종 : 5
      return acc > curr ? acc : curr;
    
    }, 0);

    console.log(result); //5 출력
  }

  { //정리
    const arr = Array.of(3,2,5,4,1);

    const max = arr.reduce((acc, curr) => acc > curr ? acc : curr);
    const min = arr.reduce((acc, curr) => acc < curr ? acc : curr);
    console.log(max, min); //5, 1 출력
  }
}

//문제3) 배열의 중복을 제거하시오.
{
  { //case1) includes
    const arr = [1,2,1,3,5,4,5,3,4,4];
 
    const result = arr.reduce((acc, curr) => {

      //1회 : acc=[],      curr=1
      //2회 : acc=[1],     curr=2
      //3회 : acc=[1,2],   curr=1
      //4회 : acc=[1,2],   curr=3
      //5회 : acc=[1,2,3], curr=5
      
      // acc배열 요소에 curr값이 없으면 acc에 추가

      if(!(acc.includes(curr))) acc.push(curr);
      return acc;

    }, []); //배열을 담아야하기에 빈 배열을 initialVal로 줌
    console.log(result); //[1,2,3,4,5]
  }
  { //case2) indexOf
    const arr = [1,2,1,3,5,4,5,3,4,4];
 
    const result = arr.reduce((acc, curr) => {

      if(acc.indexOf(curr) == -1) acc.push(curr);
      return acc;

    }, []);
    console.log(result); //[1,2,3,4,5]
  }
}


//Symbol.iterator
{
  {
    const arr = [1,2,3];
  
    const ele = arr[Symbol.iterator]();
    console.log(ele.next());
    console.log(ele.next());
    console.log(ele.next());
    console.log(ele.next());

    //Symbol 함수 내부에서 일어나는 일
    for(let ele of arr) {
      console.log(ele);
    }
  }
  {
    const arr = [1,2,3];

    const iter = arr[Symbol.iterator]();
    console.log(iter.next());
    console.log(iter.next());
    // console.log(ele.next());
    // console.log(ele.next());

    for(let ele of iter) {
      console.log(ele);
    }
  }
}

{
  const str = '울산KH정보교육원';

  const iter = str[Symbol.iterator]();
  iter.next();
  iter.next();
  for(let ele of iter) { //K(index[2])부터 순회시작
    console.log(ele);
  }
}

{
  const myObj = {};

  myObj[Symbol.iterator] = function() {
    const data = ['울','산','K','H'];
    let i = 0;
    return {
      next() {
        return {
          value  : data[i++], done: i == data.length+1 ? true : false
        }  
      }
    }
  }
  
  const iter = myObj[Symbol.iterator]();
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());

  for(let ele of myObj) {
    console.log(ele);
  }

  console.log(...myObj);

  const copy = [...myObj];
  console.log(copy);
  const copy2 = [...myObj,...myObj];
  console.log(copy2);
}
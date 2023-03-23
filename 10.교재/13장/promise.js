{ //promise의 기본 형태
  // const p = new Promise((s, f) => { //success, failure
  //   //1.비동기 처리
  //   //2.비동기 처리 결과
  //   if(성공) {
  //     s(성공값);
  //     } else {
  //       f(실패값);
  //     }
  // }); 
}

{ //ex)
  { //case1)실패한 경우
    // const p = new Promise((s, f) => {
    //   //1.비동기 처리
    //   //2.비동기 처리 결과
    //   //  소요시간 5초...
    //   const flag = false;
    //   if(flag) {
    //     s('success');
    //     } else {
    //       f(new Error('failure'));
    //     }
    // });

    // console.log(1);

    // p.then(res => 'a')  // == (res => {return('a')})
    //  .then(res => console.log(res))
    //  .catch(err => console.error(err.message));

    //  console.log(2);
    //  console.log(3);
    //  console.log(4);
  }
  { //case2)성공한 경우
    const p = new Promise((s, f) => {
      //1.비동기 처리
      //2.비동기 처리 결과
      //  소요시간 5초...
      const flag = true;
      if(flag) {
        s('success');
        } else {
          f(new Error('failure'));
        }
    });

    console.log(1);

    p.then(res => 'a')  // == (res => {return('a')})
     .then(res => `${res}_b`)
     .then(res => {console.log(res); return `${res}_c`})
     .then(res => {console.log(res); throw Error('오류발생')})
     .catch(err => console.error(err.message));

     console.log(2);
     console.log(3);
     console.log(4);
  }
}


{ //async, await

  async function f() {  //async : 비동기 처리를 동기 처리처럼 수행한다.
    const p = new Promise((s, f) => {
      //1.비동기 처리
      //2.비동기 처리 결과
      //  소요시간 5초...
      const flag = true;
      if(flag) {
        s('success');
        } else {
          f(new Error('failure'));
        }
    });

    console.log(1);

    const result = await p; //프로미스 객체가 이행될 때까지 기다림
    console.log(result);

    console.log(2);
    console.log(3);
    console.log(4);
  }

  console.log('before');
  f();
  console.log('after');
}
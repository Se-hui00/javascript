{ //동기 처리(synchronous)
  //  >호출되는 순서가 중요
  function a() {
    console.log('1');                 //1
    b(); //b가 끝날 때까지 a는 중지됨   //2
    console.log('2');                 //3
  }

  function b() {
    for(let i = 0; i < 10000000000; i++) {};
    console.log('b호출됨!');
  }

  a();
}

{ //비동기 처리(asynchronous)
  //  비동기 처리에 대한 상태를 가지고 있는 것 : promise
  function a() {
    console.log('1');
    setTimeout(b, 5*1000);  //(5초 후 b수행):b가 시작되어도 a는 계속 실행됨
    console.log('2');
  }

  function b() {
    console.log('b호출됨!');
  }

  a();
}
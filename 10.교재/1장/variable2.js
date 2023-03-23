{
  var x = 10;
  var x = 20; //재정의 가능
  console.log('x = ' + x);
}

{
  var y = 10;
  function f() {
    var z = 20; //함수 레벨에서 사용하고 끝
  }
  console.log('y = ' + y); //y = 10;
}

{
  var y = 10;
  {
    var y = 20;
  }
  console.log('y = ' + y); //y = 20;
}

{
  var y = 10;
  for(var y = 1; y < 3; y++) {
    var y = 20;
  }
  console.log('y = ' + y); //y = 21;
}

{
  {
    var y = 10;
    for(var i = 1; i < 3; i++) {
      var y = 20;
    }
    console.log('y = ' + y); //y = 20;
  }
}
// var, let, const

// 전역변수 : 제일 외곽에서 선언된 변수 (함수, class 외부에서 선언된 변수)
// 지역변수 : 블럭 내에 선언된 변수

let a = 10; //전역변수

//1)
function f() {
  var b = 10; //지역변수-함수 레벨로 사용
};
//2)
for (var i = 0; i < 10; i++) {
  var leak3 = "I am available outside of the loop"; //지역변수-함수가 아닌 경우 외부에서 접근 가능
}
console.log(leak);
//3)
function g() {
  for (var i = 0; i < 10; i++) {
    let leak = "I am available outside of the loop"; //지역변수-함수인 경우 외부에서 접근 불가
    var leak2 = "I am available outside of the loop";
  }
  console.log('g() 내부에서 접근 ' + leak); //접근 가능
  // console.log('g() 내부에서 접근 ' + leak2);

}
g();
// console.log('g() 외부에서 접근' + leak); //접근 불가

// I am available outside of the loop

// function myFunc(){
//   var functionScoped = "I am available inside this function";
//   console.log(functionScoped);
// }
// myFunc();
// // I am available inside this function
// console.log(functionScoped);
// // ReferenceError: functionScoped is not defined


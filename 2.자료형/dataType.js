// 자료형
{
  // 1.숫자
  let x = 10;
  let y = 3.14;
  console.log(typeof(x));
  
  // 2.문자
  let name = '홍'; // char(x), string
  let region = "울산";
  console.log(typeof(name));
  console.log(typeof(region));
  
  // 3.논리
  let flag1 = true;
  let flag2 = false;
  console.log(typeof(flag1));
  console.log(typeof(flag2));
    // 3-1)truthy : 참인 것처럼 여겨지는 값. true값을 가짐.
    if (true) {console.log('참')}
    if ({}) {console.log('참')}
    if ([]) {console.log('참')}
    if (42) {console.log('참')}
    if ("0") {console.log('참')}
    if ("false") {console.log('참')}
    if (new Date()) {console.log('참')}
    if (-42) {console.log('참')}
    if (12n) {console.log('참')}
    if (3.14) {console.log('참')}
    if (-3.14) {console.log('참')}
    if (Infinity) {console.log('참')}
    if (-Infinity) {console.log('참')}
    // 3-2)falsy : 거짓인 것처럼 여겨지는 값. false값을 가짐.
    if (false) {console.log('거짓')}
    if (null) {console.log('거짓')}
    if (undefined) {console.log('거짓')}
    if (0) {console.log('거짓')}
    if (-0) {console.log('거짓')}
    if (0n) {console.log('거짓')}
    if (NaN) {console.log('거짓')}
    if ("") {console.log('거짓')}


  // 4.null, undefined
  let hobby1 = null; //참조타입에서 쓰임
  let hobby2 = undefined;
  console.log(typeof(hobby1));
  console.log(typeof(hobby2));
  console.log(typeof(aaa)); //선언되지 않은 타입 출력시 > undefined
  // console.log(aaa); //에러
  console.log(hobby1);
  console.log(hobby2);
}
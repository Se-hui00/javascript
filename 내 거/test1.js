const regExp = /[0-9]/g;
const str = '11';

console.log(regExp.test(str)); //첫 번째 자리: true
console.log(regExp.test(str)); //두 번째 자리: true
console.log(regExp.test(str)); //세 번째 자리: false

//문제1) 은행 계좌 객체를 설계하고 입금, 출금, 조회 기능을 구현하시오. (단, 생성자 함수 사용할 것)
// 속성 : 잔액
// 행위 : 입금, 출금, 잔액 조회



//문제2) 은행 계좌 객체를 설계하고 입금, 출금, 조회 기능을 구현하시오. (단, class 문법 사용할 것)
// 속성 : 잔액
// 행위 : 입금, 출금, 잔액 조회
{
  function inquiry() {
    return this.balance;
  }
  function deposit(money) {
    this.balance += money;
  }
}


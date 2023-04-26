$(document).ready(function () {
  //1. 입출력 메소드
  /* 개발자도구 - F12, CTRL+SHIFT+i, 검사 > Console
        console.log(); <-- 디버깅 할 때 주로사용
        document.write();
   
        alert();
    */
  /*
   console.log("jquery 실행");
   alert("잘못된 경로로 접근했습니다.");
   document.write("body에 내용을 출력합니다.","<br>");
   document.write("또 다른 내용을 출력합니다.");
   */
  /* 2. 자료형
  2-1) 숫자(number) : 정수, 부동소순
  2-2) 문자열(string)
  2-3) 논리(boolean) : true, false
  2-4) 배열(array)
  2-5) 객체(object)
  2-6) 함수(function)
  2-7) 널(null)
  2-8) 언디파인드(undefined)
  2-9) 클래스(class) : 최근 추가(ES6)
  2-10) 심볼(symbol) : 최근 추가(ES6)
  */

  /* 3. 변수 선언 키워드
  3-1) var : 오래된, 변수 선언/할당, 재할당 가능 -->가급적 사용X
  3-2) let : 최근, 변수 선언/할당, 재할당 가능 --> 계속 사용
  3-3) const : 상수 선언시 할당(=초기화), 재할당 불가능
  ※let, const를 엄격하게 사용하는 ES6 문법은 보통 "use strict";와 함께 사용
  */

  var n1 = 100; // 숫자형 변수
  var n2 = "문자열"; // 문자열형 변수
  var n1 = 50; // 재선언, 재할당 (var의 문제점)
  //   let n1:number = 50; // 타입스크립트 변수선언 자료형 검사 --> 불일치하면 오류
  var arr = [10, "a", "대한민국"];
  console.log(arr[0]);
  arr[1] = "B";
  var obj = { name: "홍길동", gender: "남성", job: "학생" }; //오브젝트(객체)
  obj.birth = new Date("2000-04-25"); // 정보 추가(생일)
  console.log(obj.name, obj.gender, obj.birth); // 객체 특정 키(key) == > 값(value)
  var func1 = function (msg) {
    return `${msg} 100`;
  }; // 함수 표현식
  func1("hello");
  function func2(x) {
    return Math.pow(x, 2);
  } // 함수 선언식
  var result = func2(5);
  console.log("결과는 " + result + "입니다.");
  var a; // 자브스크립트는 변수값을 초기화 하지 않아서 undefined상태
  console.log("a : " + a, typeof a);
  var b = null; // 변수생성, 값은 없는 상태
  console.log("b : " + b, typeof b);

  console.log(n1, typeof n1);

  let age = 100;
  age = 50;
  console.log("age : " + age);
  const ratio = 1.5; // 선언시 할당(=초기화)
  //   ratio = 1; // 에러발생 (상수)

  // 클래스 선언식
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  // 클래스는 선언 후 인스턴스화 해서 사용

  let myRect = new Rectangle(100, 100);
  console.log(myRect.name);

  let mySymbol = new Symbol();

  /* 4. 자바스크립트 예약어
  네이밍 : $, _, 영문, 숫자 조합해서 사용    vs       var var = "변수" .. [에러]
  */
})

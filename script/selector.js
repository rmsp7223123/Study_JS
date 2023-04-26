$(function () {
  // jQuery : write less, do more
  // 1 . DOM 요소에 접근
  // document 객체
  // javascript DOM 선택 메소드[old]
  /*
        console.log(document.getElementById("displayBtn"));
        console.dir(document.getElementById("displayBtn"));
        let btn = document.getElementById("displayBtn");
        var imgNo = 1; // 전역변수
        btn.addEventListener("click", function(){
            const displayArea = document.getElementById("displayArea");
            console.log(displayArea);
            console.dir(displayArea);
            console.log(displayArea.innerHTML);
            imgNo ++;
            displayArea.innerHTML = "<img src=\"https://picsum.photos/id/"+imgNo+"/300/300\" alt=\"picsum\">";
        });
  */
  // document.getElementsByClassName();
  // document.getElementsByTagName();
  // new / trend ==> jQuery 때문에 비슷하게
  /*
    const btn = document.querySelector("#displayBtn");
    btn.addEventListener("click", function () {
        const displayArea = document.querySelector("#displayArea");
        //1. HTML DOM 조작
        // displayArea.innerHTML = "<img src = 'images/bg.jpg' alt='bg image'>";

        // 2. CSSOM(CSS DOM) 조작
        displayArea.style.backgroundImage = "url('images/bg.jpg')";
        displayArea.style.backgroundSize = "cover";
        displayArea.style.backgroundRepeat = "no-repeat";
        displayArea.style.backgroundPosition = "center";
    });
  */
  // document.querySelectorAll();

  // $("ul li:nth-child(1)"); // tag, class, id, css selector, ... : 다 가능
  // $("tag");
  var btn = $("#displayBtn");
  var display = $("#displayArea");

  // 클릭 이벤트 메소드 = 클릭하면 할 일을 수행
  btn.click(function () {
    // html(tag) : html 조작 메소드
    // display.html("<img src = 'images/bg.jpg' alt='bg image'>");

    // css("property", "value") : css 조작 메소드

    // display.css("backgroundImage","url('images/bg.jpg')");
    // display.css("backgroundSize","cover");
    // display.css("backgroundPosition","center");
    // display.css("backgroundRepeat","no-repeat");

    // css("property", "value") : css 조작 메소드
    
    display.css({
      backgroundImage: "url('images/bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    });
  });
  // $(".class");


  //팝업- 닫기버튼 구현
  $("#closePop").click(closePopup);

});

function closePopup() {
  console.log("팝업닫기");
};

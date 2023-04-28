// 전역 변수 : 어디서든 접근할 수 있게 (scope)
var totalImg = $(".imgs > div").length; // 총 이미지 갯수
var isPlaying = true; // 자동재생 여부
var pageNum = 1; // 시작 페이지 번호
var intervalID; // 자동 플레이 (return 타입 : number)

$(function () {
  initialize(); // 초기 설정, 자동재생 기능 호출
  buttons(); // 각 버튼 및 페이지 기능 호출
});
function init() {
  updatePageNum(1);
  startAutoPlay();
}
function nextScene() {
  // 함수(function)의 선언식
  // .top 요소 다음 오는 형제요소가 있다면,
  var currentSlide = $(".img.top");
  var firstSlide = $(".img").first(); // .imgs 하위 .img 5개중 첫번째 요소를 (필터링) 선택
  if (currentSlide.length) {
    var nextNum = pageNum + 1; // 다음 번호 = 현재 페이지 번호 + 1
    if (nextNum > totalImg) nextNum = pageNum = 1; // 다음 번호값을 체크 ==> 전체번호와 비교해서 크거나 같으면 초기화
    console.log("pageNum : " + pageNum, "nextNum : " + nextNum);
    var nextSlide = currentSlide.next(); // (다음)형제 요소 선택자
    if (nextSlide.length) {
      currentSlide.removeClass("top"); // .top 제거
      nextSlide.addClass("top"); // .top 추가
      updatePageNum(nextNum);
    } else {
      firstSlide.addClass("top");
      currentSlide.removeClass("top"); // .top 제거
      pageNum = 1;
    }
  } else {
    firstSlide.addClass("top");
  }
  pageNum++;
}
function updatePageNum(newNum) {
  $(".pages").text(newNum + " / " + totalImg);
}
function initialize() {
  updatePageNum(1); // 페이지가 로드되면, 페이지 번호를 업데이트!
  startAutoPlay(); // 시작하자마자 자동실행!
}
function stopAutoPlay() {
  clearInterval(intervalID);
}
function startAutoPlay() {
  intervalID = setInterval(nextScene, 4000); // 4000ms 마다 nextScene() 호출!
}
function buttons() {
  // 1.navigate-next 버튼에 접근
  //$("#prevBtn").on("click", prevScene); // 이전 씬
  $("#nextBtn").on("click", nextScene); // 다음 씬
  $("#pause").on("click", function () {
    if (isPlaying) {
      console.log("재생중, 클릭시 일시정지로 변경!");
      $("#pause span").text("play_arrow");
      isPlaying = false;
      // 재생중 상태는 클릭하면 일정 시간마다 nextScene() 호출을 멈춤
      stopAutoPlay();
    } else {
      // 멈춰있는 자동재생을 다시 일정 시간마다 nextScene() 호출하게
      console.log("일시정지중, 클릭시 재생으로 변경!");
      $("#pause span").text("pause");
      isPlaying = true;
      startAutoPlay();
    }
  });
}

const movieContainer = document.querySelector("#movieContainer");
movieContainer.setAttribute("style", "display :none");

const button = document.querySelector(".search-btn");
button.addEventListener("click", function () {
  if (document.querySelector("input").value) {
    movieContainer.setAttribute("style", "display : flex");
    let searchItem = document.querySelector(".search");
    searchItem.setAttribute("style", "height :400px;");
  } else {
    alert("검색어를 두글자 이상 입력하세요!");
  }
});

const sky = document.querySelector(".sky");

// 브라우저 창 크기에 따른 별 생성
window.onresize = () => {
  makeStars();
};

const makeStars = () => {
  // 브라우저 가장 큰 크기
  const maxSize = Math.max(window.innerWidth, window.innerHeight);

  // 랜덤한 X 위치 값
  const getRandomX = () => Math.random() * maxSize;

  // 랜덤한 Y 위치 값
  const getRandomY = () => Math.random() * maxSize;

  // 랜덤한 크기 (circle는 반지름이 크기)
  const randomRadius = () => Math.random() * 0.7 + 0.6;

  // 임의의 값
  const _size = Math.floor(maxSize / 2);

  const htmlDummy = new Array(_size)
    .fill()
    .map((_, i) => {
      return `<circle class='star'
  cx=${getRandomX()}
  cy=${getRandomY()}
  r=${randomRadius()}
  className="star" />`;
    })
    .join("");

  sky.innerHTML = htmlDummy;
};

window.onload = () => {
  makeStars();
};

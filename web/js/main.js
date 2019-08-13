function clickTest() {
  target = document.getElementById("unko");
  if (target.className == null || target.className == "") {
    target.className = "active";
  } else {
    target.className = "";
  }
}

// topボタン。id名とTOPに到達するまでの時間を指定(500ms)
scrollTop('js-totop', 500);

// ---------------------------------------------- //
// function : トップに戻る
// argument : ID名、TOPに到達するまでの時間(500ms)
// ---------------------------------------------- //
function scrollTop(elem, duration) {
  let target = document.getElementById(elem);
  target.addEventListener('click', function () {
    //現在のスクロール量を取得
    let currentY = window.pageYOffset;
    // 一回スクロールする量です。時間に対して距離が短い場合は10pxずつスクロールさせます.距離が長い場合は100pxずつスクロールさせます。
    let step = duration / currentY > 1 ? 10 : 100;
    let timeStep = duration / currentY * step;
    let intervalID = setInterval(_scrollUp, timeStep);

    function _scrollUp() {
      currentY = window.pageYOffset;
      if (currentY === 0) {
        clearInterval(intervalID);
      } else {
        scrollBy(0, -step);
      }
    }
  });
}

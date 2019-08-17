// ---------------------------------------------- //
// function : トップに戻る.ID名にイベントリスナーを追加し、クリックでイベント発火.
// argument :
// return :
// ---------------------------------------------- //
scrollTop();
function scrollTop() {
  let target = document.getElementById('js-totop'); //ID名指定
  let duration = 500; // TOPに到達するまでの時間(ms)
  target.addEventListener('click', function () {
    //現在のスクロール量を取得
    let currentY = window.pageYOffset;
    // 一回スクロールする量。時間に対して距離が短い場合は10pxずつスクロールさせる.距離が長い場合は100pxずつスクロールさせる。
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

// ---------------------------------------------- //
// function : 今日の日付をyyyy年mm月dd日 X曜日形式で取得
// argument :
// return : 日付情報（yyyy年mm月dd日 X曜日形式）
// ---------------------------------------------- //
function getToday() {
  let today = new Date();
  let yobi = new Array("日", "月", "火", "水", "木", "金", "土");
  let week = today.getDay();
  today = today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 " + yobi[week] + "曜日";
  return today;
}

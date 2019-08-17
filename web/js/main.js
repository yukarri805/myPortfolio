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



function load() {
  let data = store.get("otherBudgets");
  console.log(data);
  document.getElementById("country_out").innerHTML = data.country;
  document.getElementById("visa_out").innerHTML = data.visa;
  document.getElementById("study_weeks_out").innerHTML = data.study_weeks;
  document.getElementById("stay_weeks_out").innerHTML = data.stay_weeks;
}

function save() {
  let country_data = document.getElementById("country").value;
  let visa_data = document.getElementById("visa").value;
  let study_weeks_data = document.getElementById("study_weeks").value;
  let stay_weeks_data = document.getElementById("stay_weeks").value;

  var key = "otherBudgets";
  var data = { country: country_data, visa: visa_data, study_weeks: study_weeks_data, stay_weeks: stay_weeks_data };
  saveStrore(key, data);
}


/**************************************************
function : localStorageにデータを保存(store.jsを利用)
argument :
return :
**************************************************/
function saveStrore(key, value) {
  store.set(key, value)
}

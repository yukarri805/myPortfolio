// ---------------------------------------------- //
// function : 今日の日付をyyyy年mm月dd日 X曜日形式で取得
// argument :
// return : 日付情報（yyyy年mm月dd日 X曜日形式）
// ---------------------------------------------- //
function getToday() {
  let now = new Date();
  let yobi = new Array("日", "月", "火", "水", "木", "金", "土");
  let week = now.getDay();
  now = now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日 " + yobi[week] + "曜日";
  return now;
}

var today = new Vue({
  el: '#today',
  data: {
    message: getToday()
  }
})

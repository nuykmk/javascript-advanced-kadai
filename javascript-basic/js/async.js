// 同期処理を実行する
console.log("処理1");
console.log("処理2");
console.log("処理3");

// setTimeout関数で非同期処理を作成する
// setTimeout(() => {
//   処理;
// }, 待ち時間);

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
  console.log("処理4（非同期処理）");
}, 2000);

// 同期処理を実行する
console.log("処理5");
console.log("処理6");

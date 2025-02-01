// class クラス名 {
//   クラスの特徴;
// }
// クラスを定義する
// class Product {
//   クラスの特徴
// }

// インスタンス化する
// const shampoo = new Product();

// クラスを定義する
// class Product {
// インスタンス化すると同時に処理を実行（初期化）する
//   constructor() {
//     console.log("敏感肌にも優しい100%天然由来のシャンプーです。");
//   }
// }
// インスタンス化する
// const shampoo = new Product();

// コンストラクタでプロパティを持たせる（引数なしバージョン）
// クラスを定義する
// class Product {
// コンストラクタを使ってインスタンス化するときに初期化する
// constructor() {
// インスタンス（オブジェクト）にプロパティを持たせる
//     this.name = "シャンプー";
//     this.pirce = 500;
//     this.category = "生活雑貨";
//   }
// }
// インスタンス化する
// const shampoo = new Product();
// インスタンス（オブジェクト）の値を出力する
// console.log(shampoo);

// コンストラクタでプロパティを持たせる（引数ありバージョン）
// クラスを定義する
class Product {
  // コンストラクタを使ってインスタンス化するときに初期化する
  constructor(name, price, category) {
    // インスタンス（オブジェクト）にプロパティを持たせる
    this.name = name;
    this.price = price;
    this.category = category;
  }
  // メソッドを定義する
  describe() {
    console.log("この商品は" + this.name + "です。");
  }
}
// インスタンス化する
const shampoo = new Product("シャンプー", 500, "生活雑貨");
const coffee = new Product("コーヒー", 1500, "飲料");
// インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);

// メソッドを呼び出す（実行する）
shampoo.describe();

// メソッドとは;
// class Product {
//   constructor() {
//     初期化の内容;
//   }

//   // メソッドを定義する
//   メソッド名() {
//     一連の処理;
//   }
// }

// 通常のオブジェクトにメソッドを定義する
const user = {
  name: "侍太郎",
  age: 36,
  gender: "男性",
  greet: () => {
    console.log("よろしくお願いします！");
  },
};
// メソッドを呼び出す（実行する）
user.greet();

// // クラスの定義
// class クラス名 {
//   // コンストラクタの定義
//   constructor() {
//     初期化の内容
//   }

//   // メソッドの定義
//   メソッド名() {
//     一連の処理
//   }
// }

// // インスタンス化
// const 定数名 = new クラス名();

// // メソッドの呼び出し
// 定数名.メソッド名();

// // メソッドの定義（通常のオブジェクト）
// const 定数名 = {
//   キー名（メソッド名） : () => {
//     一連の処理
//   }
// }

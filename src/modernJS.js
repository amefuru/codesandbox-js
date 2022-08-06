// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// // 再代入可能 再代入不可能
// // let var1 = "aaa";
// // console.log(var1);

// // var1 = "bbb";
// // console.log(var1);

// // let var1 = "bbb";
// // console.log(var1);

// // 再代入不可能 再代入不可能
// // const var2 = "aaa";
// // console.log(var2);

// // var2 = "bbb"
// // console.log(var2);

// // const var2 = "bbb";
// // console.log(var2);

// // アロー関数
// // const funcadd = (a, b) => a + b;
// // console.log(funcadd(1, 1));

// // const petsname = {
// //   dog: "サンダー",
// //   cat1: "ゆず",
// //   cat2: "わさび"
// // };

// // const { dog, cat1, cat2 } = petsname;
// // const message = `ペットの名前は${dog}、${cat1}、${cat2}です`;
// // console.log(message);

// // deforuto value

// // const sayHello = (name = "ゲスト") => console.log(`Hello, ${name}!`);
// // sayHello("amefuru");
// // sayHello();

// // スプレッド構文

// // 配列の展開
// // const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// // const sumFunc = (n1, n2) => console.log(n1 + n2);
// // sumFunc(...arr1);

// // 圧縮
// // const arr2 = [1, 2, 3, 4, 5];
// // const [n1, n2, ...arr3] = arr2;
// // console.log(n1);
// // console.log(n2);
// // console.log(arr3);

// // 配列のコピーや結合

// // const arr4 = [10, 20];
// // const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// // イコールで設定すると、参照が被ってしまうため、元の配列が影響をうけるので非推奨

// // mapやfilterを使う配列の処理

// const nameArr = ["田中", "佐藤", "伊藤"];
// const nameArr2 = nameArr.map((name, index) => {
//   return `${index + 1}は${name}さん`;
// });
// // console.log(nameArr2);

// const numArr = [1, 2, 3, 4, 5];
// const numArr2 = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// // console.log(numArr2);

// const nameArr3 = nameArr.map((name) => {
//   if (name === "田中") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// // console.log(nameArr3);

// // 三項演算子

// // const var1 = 1 > 0 ? true : false;
// // console.log(var1);

// const checkSum = (n1, n2) => {
//   return n1 + n2 > 100 ? "Over100" : "under100";
// };
// console.log(checkSum(10, 10));
// console.log(checkSum(100, 10));

// // 論理演算子

// // || の左側がfalse時右側を返す

// // const num = null; // false
// const num = 100;
// const fee = num || "金額未設定";
// console.log(fee);

// // && の左側がtrueの時右側を返す
// // const num2 = null;
// const num2 = 1;
// const fee2 = num2 && "設定";
// console.log(fee2);

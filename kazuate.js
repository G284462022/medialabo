let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let btn = document.getElementById("btn");
btn.addEventListener("click", hantei);

let kaisuHTML = document.querySelector("span#kaisu");
let yosoHTML = document.querySelector("span#answer");

// 入力回数（予想回数）
let kaisu = 0;

let result = document.querySelector("p#result");
let flag = false;


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso1 = document.querySelector("input[name=yoso]");
  let yoso = Number(yoso1.value);
  
  // 課題3-1: 正解判定する
  kaisu = kaisu + 1;
  kaisuHTML.textContent = kaisu;
  yosoHTML.textContent = yoso;
  if(kaisu >= 4 || flag){
    result.textContent = ("答えは" + kotae + "でした. すでにゲームは終わっています");
  }else if(yoso === kotae){
    result.textContent = ("正解です. おめでとう!");
    flag = true;
  }else{
    if(kaisu === 3){
      result.textContent = ("まちがい. 残念でした答えは" + kotae + "です.");
    }else{
        if(yoso < kotae){
            result.textContent = ("まちがい．答えはもっと大きいですよ");
        }else{
          result.textContent = ("まちがい．答えはもっと小さいですよ")
        }
    }
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let yoso;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let bu = document.querySelector("button#zikko");
bu.addEventListener("click", hantei);


// ボタンを押した後の処理をする関数 hantei() の定義

function hantei(){
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="botan"]');
  let sei = i.value;
  yoso = Number(sei);
  kaisu = kaisu + 1;
  let a = document.querySelector('span#kaisu');
  a.textContent = kaisu;
  let aa = document.querySelector('spend#kkk');
  aa.textContent = "回目の予想: ";
  let b = document.querySelector('span#answer');
  b.textContent = yoso;
  let c = document.querySelector('p#result');

  console.log(kaisu + "回目の予想: " + yoso );

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let hit = document.querySelector("p#hitokoto");
  hit.textContent = "【判定結果】";
  let seigo = {
    seikai: "正解です．おめでとう!",
    tiisai: "まちがい．答えはもっと大きいですよ",
    ookii: "まちがい．答えはもっと小さいですよ",
    sanmisu: "まちがい．答えは" + kotae + "でした．",
  };
  
  let kaisuugoe = {
    ooi: "答えは " + kotae + "でした．すでにゲームは終わっています",
  };
  if (kaisu < 3){
    if (kotae === yoso){
        c.textContent = seigo.seikai;
    }else if (kotae > yoso){
      c.textContent = seigo.tiisai;
    }else {
      c.textContent = seigo.ookii;
    }
  }else if(kaisu === 3){
    if (kotae === yoso){
      c.textContent = seigo.seikai;
    }else{
      c.textContent = seigo.sanmisu;
    }
  }else{
    c.textContent = kaisuugoe.ooi;
  }
}
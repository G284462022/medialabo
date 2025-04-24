let btn = document.querySelector("button#henkou");
btn.addEventListener("click", changeDom);

function changeDom(){
    let i = document.querySelector('img#bluemoon');    // 要素の検索
    i.setAttribute('src', 'bluemoon.jpg'); 

    let a = document.createElement('a');        // 新規要素 a を作成
    a.textContent = '拓殖大学HP';                 // 要素 a のテキスト設定
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp'); // 属性 href の設定
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    l = document.querySelector('li#mochi');      // 削除したい要素を検索
    l.remove();

    u = document.querySelector('ul#kassen');      // ul 要素を検索
    u.remove();

    u = document.createElement('ul');      // ul 要素を作成

    l = document.createElement('li');      // 赤のli要素を作成して，
    l.textContent = '赤';                  // ul要素の中に追加
    u.insertAdjacentElement('beforeend', l);     

    l = document.createElement('li');      // 緑のli要素を作成して，
    l.textContent = '緑';                  // ul要素の中に追加
    u.insertAdjacentElement('beforeend', l);     

    l = document.createElement('li');      // 青のli要素を作成して，
    l.textContent = '青';                  // ul要素の中に追加
    u.insertAdjacentElement('beforeend', l);

    p = document.querySelector('p#primary');     // p#primary 要素の
    p.insertAdjacentElement('afterend', u);  
}
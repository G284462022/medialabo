//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let a = document.querySelector("h2#ex42");
let x = document.createElement("p");
x.textContent = "写真表を都市の緯度経度のページです";
x.style.textEmphasis = "sesame green";
a.insertAdjacentElement("afterend",x);

// 練習4-3 写真表作成プログラム
let b = document.querySelector("div#phototable");
let photo = document.createElement("a");
photo = document.createElement("p");
let img = document.createAttribute("img");
img = document.createElement("img");
img.setAttribute("src", "taro.png");
photo.insertAdjacentElement("beforeend",img);
b.insertAdjacentElement("beforeend",photo);
let photo2 = document.createElement("p");
let photo3 = document.createElement("p");
let img2 = document.createElement("img");
let img3 = document.createElement("img");
img2.setAttribute("src","jiro.png");
img3.setAttribute("src","hanako.png");
photo2.insertAdjacentElement("beforeend",img2);
photo3.insertAdjacentElement("beforeend",img3);
b.insertAdjacentElement("beforeend",photo2); 
b.insertAdjacentElement("beforeend",photo3);

// 練習4-4 箇条書き削除プログラム
let g = document.querySelectorAll("ul#location > li"); 
for(let n of g){n.remove();}

// 練習4-5 箇条書き追加プログラム
let t = document.querySelector("ul#location");

for(let n of data){
	let l = document.createElement("li");
	t.insertAdjacentElement("beforeend",l);
	l.textContent = n.name + " ... 緯度: " + n.lat + ",経度: " + n.lng;
}
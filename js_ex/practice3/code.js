//labelの取得
let label = document.getElementById("text-result");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

//値を文字列で定数にしておく
const BASE_TEXT = "値："

//計算結果を格納する変数
let count = 0;

//値を表示するメソッド
function change(){
    label.innerHTML = BASE_TEXT + count;
}

//値を計算するメソッド
function calculate(setValue){
    count = count + setValue;
}

//リセットボタンを押した時
button1.addEventListener("click",()=>{
    count = 0;
    change();
})

button2.addEventListener("click",()=>{
    calculate(1);
    change();
})
button3.addEventListener("click",()=>{
    calculate(-1);
    change();
})

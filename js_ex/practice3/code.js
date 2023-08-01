//labelの取得
let label = document.getElementById("text-result");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

//ボタンをクリックすると初期値が変更する
let count = 0
button1.addEventListener("click",()=>{
    label.innerHTML = count;
});


button1.addEventListener("click",()=>{
    label.innerHTML = count++;
});
button1.addEventListener("click",()=>{
    label.innerHTML = count--;
});

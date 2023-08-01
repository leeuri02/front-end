$(function(){

//<ol>の要素を取得
let list = $("#list");
//新しい<a>要素を追加
let newLink = $("<a>");
//aタグの中に内容を追加
newLink.html("developer.mozilla.org");
//リストの末尾に追加
list.append(newLink);

//新しいliを作ってaタグを入れる
let newItem = $("<li>");
list.append(newItem);
newItem.append(newLink);

let newLink2 =$("<p>");
newLink2.html("And more...");
list.after(newLink2);

//要素を丸ごと削除
//list.remove();

//様相の中を空にするempty
list.empty();

//クリックイベントjs onclick
$("#button1").click(()=>{
    console.log("Hello");
})
//クリックイベント　addEventListener 複数一緒に実行される
$("#button1").on("click",()=>{
    console.log("Goodbye");    
})
$("#button1").on("click",()=>{
    console.log("Nice to meet you");    
})

});
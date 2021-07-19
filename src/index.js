import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");
  li.className = "todo-item";

  // divタグ生成
  const div = document.createElement("div");
  div.className = "todo-item-wrap";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "todo-text";
  // pタグの中にinputTextの値を出力
  p.innerText = inputText;

  // liタグの中に各子要素を設定
  li.appendChild(div);
  div.appendChild(p);

  // 未完了リストに追加、ただし、inputに入力されている場合のみ
  inputText !== ""
    ? document.getElementById("incomplete-list").appendChild(li)
    : alert("TODOを入力してください");
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

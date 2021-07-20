import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除（完了・削除ボタン両方で使用）
const deleteFromeIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const addIncompleteList = (text) => {
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
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 完了ボタンを押した時のイベント
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの祖先タグ（li）を未完了リストから削除
    deleteFromeIncompleteList(completeButton.closest("li"));

    // 完了リストに追加する要素
    const addtarget = completeButton.closest("li");

    // TODO内容テキストを取得
    //const text = completeButton.previousElementSibling.innerText;
    const text = addtarget.querySelector("p").innerText;

    // div以下を初期化
    addtarget.firstChild.textContent = null;

    // pタグ生成
    const p = document.createElement("p");
    p.className = "todo-text";
    p.innerText = text;

    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻すボタンを押した時のイベント
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（li）を完了リストから削除する
      const deleteTarget = backButton.closest("li");
      document.getElementById("complete-list").removeChild(deleteTarget);

      // TODO内容テキストを取得
      const text = deleteTarget.querySelector("p").innerText;
      addIncompleteList(text);
    });

    // li > div の子要素にテキストとボタンを追加する
    addtarget.querySelector("div").appendChild(p);
    addtarget.querySelector("div").appendChild(backButton);

    // 完了リストにTODOを追加する
    document.getElementById("complete-list").appendChild(addtarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンを押した時のイベント
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの祖先タグ（li）を未完了リストから削除
    deleteFromeIncompleteList(deleteButton.closest("li"));
  });

  // liタグの中に各子要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加、ただし、inputに入力されている場合のみ
  text !== ""
    ? document.getElementById("incomplete-list").appendChild(li)
    : alert("TODOを入力してください");
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

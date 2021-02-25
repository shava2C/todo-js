import "./styles.css";

document.getElementById("addbtn").addEventListener("click", () => onClickAdd());

// テキストボックスを取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("addtxt").value;
  document.getElementById("addtxt").value = "";

  // div
  const div = document.createElement("div");
  div.className = "list-row";

  // li
  const li = document.createElement("li");
  li.innerText = inputText;

  // buttonタグ
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 完了ボタンを押した親要素を取得して、完了TODOに入れる。そのあと削除する
    deleteFromIncompleatList(completeButton.parentNode);

    //完了リストに追加する
    const addTarget = completeButton.parentNode;

    // Todo内容Textを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    // ボタンタグ
    // buttonタグ
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("compleat-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素を未完了リストから削除
    deleteFromIncompleatList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を格納
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incompleat-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleatList = (target) => {
  document.getElementById("incompleat-list").removeChild(target);
};

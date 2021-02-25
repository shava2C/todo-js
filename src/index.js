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
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incompleat-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を格納
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incompleat-list").appendChild(div);
};

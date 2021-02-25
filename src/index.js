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

  // divタグの子要素に各要素を格納
  div.appendChild(li);

  document.getElementById("incompleat-list").appendChild(div);
};

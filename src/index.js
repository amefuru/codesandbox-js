import "./styles.css";

const onClickAdd = () => {
  // 入力テキストの取得
  const inputText = document.getElementById("add-text").value;

  // リスト要素の作成
  const li = document.createElement("li");
  li.innerText = inputText;

  // リスト要素の追加
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  buttonComplete.addEventListener("click", () => {
    // console.log("完了");
    const deleteTarget = buttonComplete.parentNode;
    deleteFromIncompleteList(deleteTarget);
    const addTarget = buttonComplete.parentNode;
    const todoText = addTarget.innerText.replace("完了削除", "");
    addTarget.textContent = null;
    console.log(addTarget);

    const li = document.createElement("li");
    li.innerText = todoText;
    const buttonReturn = document.createElement("button");
    buttonReturn.innerText = "戻す";
    li.appendChild(buttonReturn);

    //　リスト追加
    document.getElementById("complete-list").appendChild(li);

    // document.getElementById("complete-list").appendChild(addTarget);
  });
  li.appendChild(buttonComplete);

  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";
  buttonDelete.addEventListener("click", () => {
    // console.log("削除");
    // li要素の削除機能
    const deleteTarget = buttonDelete.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  li.appendChild(buttonDelete);

  //　リスト追加
  document.getElementById("incomplete-list").appendChild(li);

  // alert(inputText);
  document.getElementById("add-text").value = "";
};

// 未完了リストから削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

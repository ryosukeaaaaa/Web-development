// 画面遷移
// 画面遷移をオンオフで管理。シングルページアプリケーション（SPA）と呼ばれる。
function goToTodo() {
  document.getElementById("home").style.display = "none";
  document.getElementById("todo").style.display = "block";
}

function goHome() {
  document.getElementById("todo").style.display = "none";
  document.getElementById("home").style.display = "block";
}

// ToDo追加
function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // 削除機能（クリックで削除）
  li.onclick = () => li.remove();

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}
